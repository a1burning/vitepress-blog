import { fileURLToPath } from 'url';
import { dirname, resolve, join, relative, basename, parse, extname } from 'path';
import { statSync, readdirSync, readFileSync, existsSync } from 'fs';
import yaml from 'js-yaml';

type SidebarItem = {
    text?: string
    link?: string
    items?: SidebarItem[]
    collapsed?: boolean
}

// 构建目标路径
const currentDir = dirname(fileURLToPath(import.meta.url));
const rootPath = resolve(currentDir, '../../src');

// 获取导航路径列表
function getNavPathList(dir, arr: string[] = []) {
    const dirEntries = readdirSync(dir, { withFileTypes: true });
    for (const entry of dirEntries) {
        const fullPath = join(dir, entry.name);
        if (entry.isDirectory()) {
            getNavPathList(fullPath, arr);  // 递归子目录
        } else if (entry.isFile() && extname(entry.name) === '.md') {
            arr.push(getFormattedPath(fullPath));
        }
    }
    return arr;
}

// 获取 Markdown 文件列表
function getMarkdownFiles(dir) {
    return readdirSync(dir)
        .filter(file => statSync(resolve(dir, file)).isFile() && file.endsWith('.md'))
        .map(file => resolve(dir, file));
}

// 格式化路径
function getFormattedPath(absolutePath) {
    const relativePath = relative(rootPath, absolutePath);
    const { dir, name } = parse(relativePath);

    // 如果文件名是 index，则返回目录路径，否则返回去掉 .md 后缀的路径
    return name === 'index' ? `/${dir && dir + '/'}` : `/${join(dir, name)}`;
}

// 解析 YAML 部分
function yamlName(fileContent) {
    const yamlMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
    if (yamlMatch) {
        const yamlContent = yamlMatch[1];
        const parsedYaml = yaml.load(yamlContent);
        const title = parsedYaml.title || 'No title found';
        return title;
    }
    return 'No title found';
}

// 构建路径
function buildPath(absolutePath) {
    // 如果路由存在说明是目录，取当前路径，如果不存在说明是md文件，取父路径
    const dirPath = existsSync(absolutePath) ? absolutePath : join(absolutePath, '../')
    const currentDirName = basename(dirPath);

    const output: SidebarItem[] = [{
        text: currentDirName,
        items: [] as SidebarItem[]
    }];

    getMarkdownFiles(dirPath).forEach((markdown) => {
        // 同步读取文件内容
        const fileContent = readFileSync(markdown, 'utf-8');

        const title = yamlName(fileContent);
        const relativePath = getFormattedPath(markdown);
        output[0].items && output[0].items.push({
            text: title,
            link: relativePath
        })
    })
    return output;
}

function deepDir(targetDir, output: SidebarItem[] = [], deep = 1) {
    // 找到对应目录
    const dirEntries = readdirSync(targetDir, { withFileTypes: true });
    // 排序，文件在前面
    dirEntries.sort((a, b) => {
        if (a.isFile() && b.isDirectory()) return -1;
        if (a.isDirectory() && b.isFile()) return 1;
        return 0;
    });
    for (const entry of dirEntries) {
        const curPath = join(targetDir, entry.name);
        if (entry.isDirectory()) {
            const item = {
                text: entry.name,
                collapsed: deep === 1 ? false : true,
                items: [] as SidebarItem[]
            };
            deepDir(curPath, item.items, deep+1);
            output.push(item);
        } else {
            const fileContent = readFileSync(curPath, 'utf-8');
            const title = yamlName(fileContent);
            output.push({
                text: title,
                link: getFormattedPath(curPath)
            });
        }
    }
    return output;
}

function deepOther(findPath) {
    const output: SidebarItem[] = [{
        text: 'example',
        items: [] as SidebarItem[]
    }]
    const targetDir = join(rootPath, findPath);
    return deepDir(targetDir, output[0].items);
}

// 是否需要特殊处理目录
function isInWhiteList(link) {
    const whiteList = [
        '/basic/Other/example',
        '/basic/Other/subjects',
        '/basic/JavaScript/ES6-ES10',
        '/advance/performance',
        '/more/tools'
    ];
    const path = whiteList.find(path => link.startsWith(path));
    return path || '';
}

function selectLink(list, obj = {}) {
    list.forEach((link) => {
        if (link === '/') return;
        const findPath = isInWhiteList(link);
        if (findPath) {
            obj[link] = deepOther(findPath);
        } else {
            const absolutePath = join(rootPath, link);
            obj[link] = buildPath(absolutePath);
        }
    })
    return obj;
}

const navList = getNavPathList(rootPath)
const sidebar = selectLink(navList);

export {
    sidebar,
}

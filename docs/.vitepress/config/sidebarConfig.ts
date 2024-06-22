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
        // 解析 YAML 部分
        const yamlMatch = fileContent.match(/^---\n([\s\S]*?)\n---/);
        if (yamlMatch) {
            const yamlContent = yamlMatch[1];
            const parsedYaml = yaml.load(yamlContent);
            const title = parsedYaml.title || 'No title found';
            const relativePath = getFormattedPath(markdown);
            output[0].items && output[0].items.push({
                text: title,
                link: relativePath
            })
        }
    })
    return output;
}

function selectLink(list, obj = {}) {
    list.forEach((link) => {
        if (link === '/') return;
        const absolutePath = join(rootPath, link);
        obj[link] = buildPath(absolutePath);
    })
    return obj;
}

const navList = getNavPathList(rootPath)
const sidebar = selectLink(navList);

export {
    sidebar,
}

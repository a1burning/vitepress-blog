export default [
    { text: 'Home', link: '/', icon: 'reco-home' },
    {
        text: '前端基础', items:[
            {
                text: 'HTML', items: [
                    {text: 'Canvas', link: '/basic/HTML/Canvas/01' },
                ]
            },
            {
                text: 'JavaScript', items: [
                    {text: 'JS', link: '/basic/JavaScript/javascript/' },
                    {text: 'ES6-ES10', link: '/basic/JavaScript/ES6-ES10/' },
                    {text: 'TypeScript', link: '/basic/JavaScript/typescript/01' },
                ]
            },
            {
                text: 'CSS', items: [
                    { text: 'css', link: '/basic/CSS/css/' },
                    { text: 'less', link: '/basic/CSS/less/01' },
                ]
            },
            {
                text: '其他', items: [
                    { text: '专题', link: '/basic/Other/subjects/CSS专题/01' },
                    { text: '实践', link: '/basic/Other/example/CSS实例/01' },
                ]
            }
        ]
    },
    {
        text: '前端进阶', items:[
            {
                text: '函数式编程', link: '/advance/Functor/01'
            },
            {
                text: '性能优化', link: '/advance/performance/GC/01'
            },
            {
                text: '前端工程化', items: [
                    { text: '工程化', link: '/advance/program/01' },
                    { text: '脚手架', link: '/advance/program/Scaffold/01' },
                    { text: '自动化构建', link: '/advance/program/BuildAutomation/01' },
                    { text: '模块化', link: '/advance/program/Modules/01' },
                    { text: '测试', link: '/advance/program/test/01' }
                ]
            },
            {
                text: '源码', items:[
                    {text: 'Promise', link: '/advance/sourceCode/promise/'},
                    {text: 'Webpack', link: '/advance/sourceCode/webpack/01'},
                    {text: 'Snabbdom', link: '/frame/Vue/virtual-dom/03'},
                    {text: 'Vue', link: '/frame/Vue/vue-source-code/01'},
                    {text: 'vue-observe', link: '/frame/Vue/vue-observe/02'},
                    {text: 'vue-router', link: '/frame/Vue/vue-router/04'},
                    {text: 'vuex', link: '/frame/Vue/vuex/03vuex'},
                ]
            },
        ]
    },
    {
        text: '框架', items:[
            { text: 'Vue', items: [
                { text: 'Vue2', link: '/frame/Vue/'},
                { text: 'Vue3', link: '/frame/Vue3/01vue3'},
                { text: 'SSR', link: '/frame/SSR/'},
            ]}
        ]
    },
    {
        text: '题库', items: [
            { text: '算法题库', items: [
                { text: '算法基础', link: '/algorithm/learn/01'},
                { text: 'LeetCode', link: '/algorithm/leetCode/0002'},
                { text: '剑指Offer', link: '/algorithm/codingInterviews/06'},
            ]},
            { text: '前端题库', items: [
                {text: 'Bigfrontend', link: '/algorithm/bigfrontend/001'},
            ]},
        ]
    },
    {
        text: '更多', items:[
            { text: 'Git', link: '/more/Git/GitCommand/01'},
            { text: 'AST', link: '/more/AST/01'},
            { text: '部署', link: '/more/deployment/'},
            { text: 'Docker', link: '/more/Docker/01'},
            { text: '计算机网络', link: '/more/Network/'},
            { text: 'Tools', link: '/more/tools/node/nodemon'},
        ]
    },
    // { text: '标签分类', link: '/tag/', icon: 'reco-category' },
    // { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
    { text: 'Blog/Repository', items: [
        {
            text: '技术博客', items: [
                { text: '掘金', link: 'https://juejin.cn/user/2735240659352702' },
                { text: 'segmentfault', link: 'https://segmentfault.com/u/wanpidexuehuqiqi' },
                { text: '简书', link: 'https://www.jianshu.com/u/633ee08c3769' },
                { text: '知乎', link: 'https://www.zhihu.com/people/wan-pi-de-xue-hu-yi-zhi' },
                { text: 'SCDN', link: 'https://blog.csdn.net/weixin_40664145?spm=1010.2135.3001.5343' },
            ]
        },
        {
            text: 'Code Repository', items: [
                { text: 'Github', link: 'https://github.com/a1burning' },
                { text: 'Gitee', link: 'https://gitee.com/burningQiQi' }
            ]
        }
    ]}
]

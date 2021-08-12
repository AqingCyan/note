export default {
    srcDir: 'src',
    theme: 'blog',
    plugins: ['blog'],
    title: 'Cyan的博客',
    root: '/note/',
    description: '欢迎来到我的博客，这里搜集了我的技术文章和生活感悟，欢迎一起交流成长。',
    github: 'https://github.com/AqingCyan',
    nav: [
        {
            text: '首页',
            link: '/',
            icon: 'czs-home-l'
        },
        {
            text: '分类',
            link: '/note/categories/',
            icon: 'czs-category-l'
        },
        {
            text: '标签',
            link: '/note/tags/',
            icon: 'czs-tag-l'
        },
        {
            text: '关于',
            link: '/note/about/',
            icon: 'czs-about-l'
        },
        {
            text: '归档',
            link: '/note/archives/',
            icon: 'czs-box-l'
        },
    ],
    blog: {
        root: '/posts/',
        social: {
            github: 'AqingCyan',
            email: 'xuekaiqi@creatshare.com',
        }
    }
};

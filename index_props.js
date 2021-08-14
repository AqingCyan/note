import projectConfig from '/note/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "index.html",
    'title': undefined,
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/note/index.js", type: "module" })),
    'contentTitle': undefined,
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: ''
        } }),
    'toc': null,
    'author': "AqingCyan",
    'contributors': [
        "AqingCyan"
    ],
    'date': "2021-08-12T03:12:55.000Z",
    'updated': null,
    'excerpt': "",
    'cover': undefined,
    'blog': {
        "isPost": false,
        "posts": [
            {
                "pagePath": "posts/20210814new-webcall-sdk.md",
                "title": "我为业务封装了一个外呼SDK",
                "link": "posts/20210814new-webcall-sdk.html",
                "date": "2021-08-13T18:26:54.000Z",
                "updated": "2021-08-14T10:14:53.000Z",
                "author": "AqingCyan",
                "contributors": [
                    "AqingCyan"
                ],
                "excerpt": "在公司的业务中有一些场景有用到外呼通话的，目前采用的是第三方外呼SDK + 私有化外呼服务 + 服务端研发的外呼中心的模式， 初版外呼就这么颤颤巍巍的跑过了挺长时间。但随着一些配合业务的更新迭代，遇到了不得不解决的问题。...",
                "cover": "../assets/old-webcall.png"
            }
        ],
        "categories": [],
        "tags": []
    }
};

import projectConfig from '/note/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "tags/README.md",
    'layoutPath': "tags/_layout.tsx",
    'outputPath': "tags/index.html",
    'title': "标签",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>标签</h1>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/note/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6807\u7B7E"),
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
                "pagePath": "posts/start.md",
                "title": "Hello",
                "link": "posts/start.html",
                "date": "2021-08-12T03:12:55.000Z",
                "updated": null,
                "author": "AqingCyan",
                "contributors": [
                    "AqingCyan"
                ],
                "excerpt": ""
            }
        ],
        "categories": [],
        "tags": []
    }
};

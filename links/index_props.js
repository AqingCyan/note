import projectConfig from '/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "links/README.md",
    'layoutPath': "_layout.tsx",
    'outputPath': "links/index.html",
    'title': "友情链接",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>友情链接</h1>\n<ul>\n<li><a href="https://blog.xcatliu.com/">xcatliu</a></li>\n</ul>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u53CB\u60C5\u94FE\u63A5"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<ul>\n<li><a href="https://blog.xcatliu.com/">xcatliu</a></li>\n</ul>'
        } }),
    'toc': null,
    'author': "AqingCyan",
    'contributors': [
        "AqingCyan"
    ],
    'date': "2021-08-12T03:12:55.000Z",
    'updated': null,
    'excerpt': " - xcatliu",
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

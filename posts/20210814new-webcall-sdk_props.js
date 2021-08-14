import projectConfig from '/note/pagic.config.js';
export default {
    config: { "root": "/", ...projectConfig, branch: 'main' },
    'pagePath': "posts/20210814new-webcall-sdk.md",
    'layoutPath': "posts/_layout.tsx",
    'outputPath': "posts/20210814new-webcall-sdk.html",
    'title': "我为业务封装了一个外呼SDK",
    'content': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<h1>我为业务封装了一个外呼SDK</h1>\n<p>在公司的业务中有一些场景有用到外呼通话的，目前采用的是<strong>第三方外呼SDK + 私有化外呼服务 + 服务端研发的外呼中心</strong>的模式，\n初版外呼就这么颤颤巍巍的跑过了挺长时间。但随着一些配合业务的更新迭代，遇到了不得不解决的问题。</p>\n<h2 id="%E6%97%A7%E7%9A%84%E5%A4%96%E5%91%BC%E7%BB%93%E6%9E%84">旧的外呼结构<a class="anchor" href="#%E6%97%A7%E7%9A%84%E5%A4%96%E5%91%BC%E7%BB%93%E6%9E%84">§</a></h2>\n<p>先解释一下👆上面提到的模式中不同模块负责的是什么事情：</p>\n<p>浏览器本身想要实现打电话的功能就需要封装WebRTC和一个通话服务联通，然后通过通话服务和运营商的联通，实现该能力。我们很难自己去实现这样的架构，\n这其中涉及到了通话资源，运营商服务，前端的语音能力，通话的信令同步等很多难点。因此我们选择直接采买第三方通话服务商来帮助业务拥有打电话的能力。</p>\n<ul>\n<li><span style="color: #00cc00">第三方外呼SDK：即就是前端实现麦克风录音，联通外呼服务的能力的代码包。</span></li>\n<li><span style="color: #00cc00">私有化外呼服务：为了数据的安全性，提供与运营商通话能力的外呼服务被部署在了我们内部机器上。</span></li>\n<li><span style="color: #00cc00">外呼中心：这是我们自己根据通话策略研发的一个资源分配服务，用来分配不同的坐席和号码资源，根据业务场景做一些特定的业务控制。</span></li>\n<li><span style="color: #00cc00">坐席：登录外呼的实际账号，可以理解成一个坐席对应一个可以打电话的位置，位置是固定的，具体数量取决于财力，买多少有多少。</span></li>\n</ul>\n<p>👨‍👩‍👦 那么这几者的关系可以简述为一个完整的外呼流程：</p>\n<ul>\n<li>外呼动作开始，外呼中心分配一个坐席给用户。</li>\n<li>用户登录该坐席到私有化的外呼服务中，指定被服务对象进行外呼，传入被服务对象的号码给外呼中心。</li>\n<li>外呼中心分配主叫号码与策略给当前坐席（此时被分配的主叫号码就被锁住，不会再分配给别的坐席）。</li>\n<li>进行呼叫动作，挂断后，解锁主叫号码。</li>\n</ul>\n<p><img src="../assets/old-webcall.png" alt="旧外呼流程"></p>\n<blockquote>\n<p>图中提到的主叫号码其实一开始没有起到决定作用，一开始我们所用方案都采用的认证号与固话，无需特别指定主叫号码，直接调用SDK外呼方法，呼通后，用户的手机会显示企业名称或是北京上海的座机号码。</p>\n</blockquote>\n<h2 id="%E5%90%8E%E6%9D%A5%E7%9A%84%E8%BF%AD%E4%BB%A3">后来的迭代<a class="anchor" href="#%E5%90%8E%E6%9D%A5%E7%9A%84%E8%BF%AD%E4%BB%A3">§</a></h2>\n<p>刚刚提到的一个概念：号码资源。其实外呼中心分配的资源不仅有坐席号，还有号码。</p>\n<p>号码资源：拨通电话后，被叫号码显示的号码，不同的外呼号码的接通概率是不一样的，当然成本也不一致。而这里的成本指的是外呼的限制，国家对外呼业务的管控十分严格，\n不同主叫号码与被叫号码可拨打的次数都会被严格把控，在一个很低的次数。因此我们将主叫与被叫整理为号码资源，严格把控，以保证外呼系统稳定不违规。</p>\n<h3 id="%E8%BF%AD%E4%BB%A3%E7%9A%84%E7%9B%AE%E7%9A%84">迭代的目的<a class="anchor" href="#%E8%BF%AD%E4%BB%A3%E7%9A%84%E7%9B%AE%E7%9A%84">§</a></h3>\n<p>在很多接通场景下，外呼被接听的概率很低，主要有以下几方面的原因：</p>\n<ul>\n<li>固话会被标记成骚扰电话。</li>\n<li>认证号在某些地区会被运营商拦截，或是不显示认证内容，也会被误认为骚扰电话。</li>\n<li>用户明确告知不需要提供服务，但可能还会被其他员工外呼打扰。</li>\n<li>外呼服务商提供的服务出现问题。</li>\n</ul>\n<h3 id="%E9%80%A0%E6%88%90%E7%9A%84%E9%97%AE%E9%A2%98">造成的问题<a class="anchor" href="#%E9%80%A0%E6%88%90%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h3>'
        } }),
    'head': null,
    'script': React.createElement(React.Fragment, null,
        React.createElement("script", { src: "https://cdn.pagic.org/react@16.13.1/umd/react.production.min.js" }),
        React.createElement("script", { src: "https://cdn.pagic.org/react-dom@16.13.1/umd/react-dom.production.min.js" }),
        React.createElement("script", { src: "/note/index.js", type: "module" })),
    'contentTitle': React.createElement("h1", { key: "0" }, "\u6211\u4E3A\u4E1A\u52A1\u5C01\u88C5\u4E86\u4E00\u4E2A\u5916\u547CSDK"),
    'contentBody': React.createElement("article", { dangerouslySetInnerHTML: {
            __html: '<p>在公司的业务中有一些场景有用到外呼通话的，目前采用的是<strong>第三方外呼SDK + 私有化外呼服务 + 服务端研发的外呼中心</strong>的模式，\n初版外呼就这么颤颤巍巍的跑过了挺长时间。但随着一些配合业务的更新迭代，遇到了不得不解决的问题。</p>\n<h2 id="%E6%97%A7%E7%9A%84%E5%A4%96%E5%91%BC%E7%BB%93%E6%9E%84">旧的外呼结构<a class="anchor" href="#%E6%97%A7%E7%9A%84%E5%A4%96%E5%91%BC%E7%BB%93%E6%9E%84">§</a></h2>\n<p>先解释一下👆上面提到的模式中不同模块负责的是什么事情：</p>\n<p>浏览器本身想要实现打电话的功能就需要封装WebRTC和一个通话服务联通，然后通过通话服务和运营商的联通，实现该能力。我们很难自己去实现这样的架构，\n这其中涉及到了通话资源，运营商服务，前端的语音能力，通话的信令同步等很多难点。因此我们选择直接采买第三方通话服务商来帮助业务拥有打电话的能力。</p>\n<ul>\n<li><span style="color: #00cc00">第三方外呼SDK：即就是前端实现麦克风录音，联通外呼服务的能力的代码包。</span></li>\n<li><span style="color: #00cc00">私有化外呼服务：为了数据的安全性，提供与运营商通话能力的外呼服务被部署在了我们内部机器上。</span></li>\n<li><span style="color: #00cc00">外呼中心：这是我们自己根据通话策略研发的一个资源分配服务，用来分配不同的坐席和号码资源，根据业务场景做一些特定的业务控制。</span></li>\n<li><span style="color: #00cc00">坐席：登录外呼的实际账号，可以理解成一个坐席对应一个可以打电话的位置，位置是固定的，具体数量取决于财力，买多少有多少。</span></li>\n</ul>\n<p>👨‍👩‍👦 那么这几者的关系可以简述为一个完整的外呼流程：</p>\n<ul>\n<li>外呼动作开始，外呼中心分配一个坐席给用户。</li>\n<li>用户登录该坐席到私有化的外呼服务中，指定被服务对象进行外呼，传入被服务对象的号码给外呼中心。</li>\n<li>外呼中心分配主叫号码与策略给当前坐席（此时被分配的主叫号码就被锁住，不会再分配给别的坐席）。</li>\n<li>进行呼叫动作，挂断后，解锁主叫号码。</li>\n</ul>\n<p><img src="../assets/old-webcall.png" alt="旧外呼流程"></p>\n<blockquote>\n<p>图中提到的主叫号码其实一开始没有起到决定作用，一开始我们所用方案都采用的认证号与固话，无需特别指定主叫号码，直接调用SDK外呼方法，呼通后，用户的手机会显示企业名称或是北京上海的座机号码。</p>\n</blockquote>\n<h2 id="%E5%90%8E%E6%9D%A5%E7%9A%84%E8%BF%AD%E4%BB%A3">后来的迭代<a class="anchor" href="#%E5%90%8E%E6%9D%A5%E7%9A%84%E8%BF%AD%E4%BB%A3">§</a></h2>\n<p>刚刚提到的一个概念：号码资源。其实外呼中心分配的资源不仅有坐席号，还有号码。</p>\n<p>号码资源：拨通电话后，被叫号码显示的号码，不同的外呼号码的接通概率是不一样的，当然成本也不一致。而这里的成本指的是外呼的限制，国家对外呼业务的管控十分严格，\n不同主叫号码与被叫号码可拨打的次数都会被严格把控，在一个很低的次数。因此我们将主叫与被叫整理为号码资源，严格把控，以保证外呼系统稳定不违规。</p>\n<h3 id="%E8%BF%AD%E4%BB%A3%E7%9A%84%E7%9B%AE%E7%9A%84">迭代的目的<a class="anchor" href="#%E8%BF%AD%E4%BB%A3%E7%9A%84%E7%9B%AE%E7%9A%84">§</a></h3>\n<p>在很多接通场景下，外呼被接听的概率很低，主要有以下几方面的原因：</p>\n<ul>\n<li>固话会被标记成骚扰电话。</li>\n<li>认证号在某些地区会被运营商拦截，或是不显示认证内容，也会被误认为骚扰电话。</li>\n<li>用户明确告知不需要提供服务，但可能还会被其他员工外呼打扰。</li>\n<li>外呼服务商提供的服务出现问题。</li>\n</ul>\n<h3 id="%E9%80%A0%E6%88%90%E7%9A%84%E9%97%AE%E9%A2%98">造成的问题<a class="anchor" href="#%E9%80%A0%E6%88%90%E7%9A%84%E9%97%AE%E9%A2%98">§</a></h3>'
        } }),
    'toc': React.createElement("nav", { key: "0", className: "toc" },
        React.createElement("ol", null,
            React.createElement("li", null,
                React.createElement("a", { href: "#%E6%97%A7%E7%9A%84%E5%A4%96%E5%91%BC%E7%BB%93%E6%9E%84" }, "\u65E7\u7684\u5916\u547C\u7ED3\u6784")),
            React.createElement("li", null,
                React.createElement("a", { href: "#%E5%90%8E%E6%9D%A5%E7%9A%84%E8%BF%AD%E4%BB%A3" }, "\u540E\u6765\u7684\u8FED\u4EE3"),
                React.createElement("ol", null,
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E8%BF%AD%E4%BB%A3%E7%9A%84%E7%9B%AE%E7%9A%84" }, "\u8FED\u4EE3\u7684\u76EE\u7684")),
                    React.createElement("li", null,
                        React.createElement("a", { href: "#%E9%80%A0%E6%88%90%E7%9A%84%E9%97%AE%E9%A2%98" }, "\u9020\u6210\u7684\u95EE\u9898")))))),
    'author': "AqingCyan",
    'contributors': [
        "AqingCyan"
    ],
    'date': "2021-08-13T18:26:54.000Z",
    'updated': "2021-08-14T10:14:53.000Z",
    'excerpt': "在公司的业务中有一些场景有用到外呼通话的，目前采用的是第三方外呼SDK + 私有化外呼服务 + 服务端研发的外呼中心的模式， 初版外呼就这么颤颤巍巍的跑过了挺长时间。但随着一些配合业务的更新迭代，遇到了不得不解决的问题。...",
    'cover': "../assets/old-webcall.png",
    'blog': {
        "isPost": true,
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

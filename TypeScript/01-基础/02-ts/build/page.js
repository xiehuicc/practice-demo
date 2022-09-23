"use strict";
var Component;
(function (Component) {
    class Header {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Header';
            document.body.appendChild(elem);
        }
    }
    Component.Header = Header;
    class Content {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Content';
            document.body.appendChild(elem);
        }
    }
    Component.Content = Content;
    class Footer {
        constructor() {
            const elem = document.createElement('div');
            elem.innerText = 'This is Footer';
            document.body.appendChild(elem);
        }
    }
    Component.Footer = Footer;
})(Component || (Component = {}));
/// <reference path="components.ts"/>
// Component需要在index.html中引入，或者在tsconfig.json文件修改outFile配置
var Home;
(function (Home) {
    class Page {
        constructor() {
            this.user = {
                name: "codewhy",
            };
            new Component.Header();
            new Component.Content();
            new Component.Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));

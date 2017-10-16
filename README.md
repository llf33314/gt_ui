# gt_pc_ui

多粉pc样式

## 开发环境搭建
首先你需要 Node.js 4+ 和 NPM 3+
```shell
git clone http://git.duofee.com/GT-Dev/gt_pc_ui
npm run dev

# open http://localhost:8085
```

如果国内用户觉得安装慢可以使用 [yarn](https://github.com/yarnpkg/yarn) 搭配 taobao registry
```shell
npm i yarn --save-dev (没用过yarn的不要全局安装，因为有bug君)
yarn config set registry https://registry.npm.taobao.org
yarn
npm run dev
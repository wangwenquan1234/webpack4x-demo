# 学习笔记

## 大背景

### webpack诞生

作者(一个搞java的)喜欢一个代码风格的编辑器（google web toolkit），而市面上并没有JavaScript类似的产品，而当他给现有的工具pull requset的时候，也没有人理他，于是他就自己搞了一个，这就是webpack的前身

Instagram团队维护中

### 为什么需要构建

**前端开发分工化**

- 早期：前端处理静态页面，和静态页面的动画，然后发给后端，后端用自己的服务器脚本语言（php、jsp）根据前端的静态页面来套动态的数据
- 现在：整个view层都是前端来负责，所以需要自己的框架，自己的路由等

**框架的变化**

- js库的时代：主要解决的是浏览器兼容或者完善js奇葩的api
- mvc:刚刚开始流行模块化
- mvvm: ng vue react

**社区的变化**
npm install 更方便管理依赖库

### 为什么是webpack

- vue、ng、react都在使用webpack，不被时代淘汰就必须使用webpack
- 天生支持代码分割
- 天生支持模块化

## 学习准备

### 模块化开发
webpack的语法采用commonjs规范

### webpack简介

**官网**

- webpack.js.org
- webpack.docschina.org （中文网）

**版本更迭**
1x - 2014.2.20
2x - 2017.1.18
3x - 2017.6.19
4x - 2018.3

*[2x之后，向社区承诺会向前兼容，在升级后，不用再修改配置文件]*

### 4x的变化
- webpack不再支持node v4，这是因为新的webpack和附属插件使用了es6的语法。
- 开始采取约定优于配置的思路，webpack@4.x里把很多选项都设置了默认值，比如入口就是./src，输出目录就是./di都可以没有webpack.config.js这个配置文件也能一样打包。
- 拆分了旧版本里的webpack，分成了用来处理逻辑的webpack和提供可执行命令的webpack-cli。
- 添加了mode选项，用来区分编译的环境，提供了development、production和none三个选项，理论上这个选项是强制指定的。
- 配置上的变动，类似删除了commonChunksPlugin，用optimization来代替这种。还有loader的用法也和1.15.0不一样了，但这个升级是在之前版本里就有的，不是webpack@4.x带来的。
- 性能优化

## webpack 概念
- 入口
- 出口
- loader
- plugins
- mode
- devServer





## coffee App 

## 项目介绍

  开发一个类似欧蕾克和瑞幸咖啡的app，通过实战中入门 react-native.

## 开发要点记录

- init
```
 // create
 react-native init coffeeWeb

 // react navication
 yarn add react-navigation react-native-gesture-handler
 react-native link react-native-gesture-handler
```

- run

```
    react-native run-android
```
- mobx  启动装饰器支持(typescript/babel)

```
  npm install --save-dev babel-preset-mobx
  {
    "presets": ["mobx"]
  }
```
- debug

 1. 设置环境变量 ELECTRON_MIRROR="https://npm.taobao.org/mirrors/electron/"
 2. npm install -g react-devtools
 3. 启动第三方应用  react-devtools


## roadmap

1. 基本的页面布局
2. 数据先用mock
3. 补充后台数据
4. 打包

## 遇到的问题，metro server 打不开？？？

## 参考项目

```
    surmon.me.native 项目
```
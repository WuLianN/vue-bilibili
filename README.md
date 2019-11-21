# vue-bilibili

![](https://github.com/WuLianN/vue-bilibili/blob/master/src/assets/display.gif)




![](https://github.com/WuLianN/vue-bilibili/blob/master/src/assets/preview.gif)







注：api的来源 https://github.com/lybenson/bilibili-vue

``` 
使用 bilibili-api 练习、开发vue项目，仅此而已。 
```

在src中引用网络图片无法显示，这因为在引用链接时, 浏览器对地址发起请求加上了refre这个请求头,</br> 
而有些服务器能根据refre反盗所以引用失败返回403。

``` 
<meta name="referrer" content="no-referrer">
```

## Project setup

``` 
npm install
```

### Compiles and hot-reloads for development

``` 
npm run serve
```

## 开启Node服务

```
切换目录
cd bilibili-api

安装依赖
npm run install

运行程序
npm run dev
```
## vue2-component-npm

#### 1、安装依赖
```
npm install
```

#### 2、运行项目
```
npm run serve
```

#### 3、要发布的组件
我们已经在 `src/package` 目录下放了两个组件 `orange-input` `orange-button`

#### 4、使用Vue插件模式
这一步是封装组件中的重点，用到了Vue提供的一个公开方法：install。这个方法会在你使用`Vue.use(plugin)`时被调用，这样使得我们的插件注册到了全局，在子组件的任何地方都可以使用。

在package目录下新建index.js文件，代码如下：
```
import OInput from "../package/orange-input/index.vue" // 引入封装好的组件
import OButton from "../package/orange-button/index.vue" // 引入封装好的组件
const coms = [OInput, OButton] // 将来如果有其它组件,都可以写到这个数组里

// 批量组件注册
const install = function (Vue) {
  coms.forEach((com) => {
    Vue.component(com.name, com)
  })
}

export default install // 这个方法以后再使用的时候可以被use调用
```
上传代码主要的一项工作就是将我们封装好的组件注册为全局组件，用到了Vue.component()方法，当使用Vue.use()时，我们的install方法便会执行。

#### 5、组件打包
我们的组件封建基本就完成了，当然组件封装成什么样得看自己得业务需求了，接下来我们就需要将组件进行打包了。

修改我们项目得package.json文件，配置打包命令：
```
"lib": "vue-cli-service build --target lib ./src/package/index.js --name orange-ui --dest orange-ui-plus"
```
打包命令解释：

- --target lib 关键字 指定打包的目录
- --name 打包后的文件名字
- --dest 打包后的文件夹的名称

然后执行打包命令：
```
npm run lib
```
打包执行完成后我们项目目录下就会多出一个orange-ui文件夹，存放的是打包后的文件。

#### 6、发布到npm
##### 6.1 初始化package.json
想要发布到npm仓库，我们还得在orange-ui文件夹下初始化一个package.json文件。进入orange-ui目录，执行命令：
```
npm init -y
```
由于这里我们只是测试，所以我不需要更改package.json文件，如果是生产的话，最好加上版本描述和版本号等等，其中name字段便是我们上传到npm仓库后的名称。
##### 6.2 发布到npm仓库
（1）注册账号
想要发布到npm仓库，就必须要有一个账号，先去 [npm官网](https://www.npmjs.com/) 注册一个账号，注意记住用户名、密码和邮箱，发布的时候可能会用到。

（2）设置npm源
有些小伙伴可能本地的npm镜像源采用的是淘宝镜像源或者其它的，如果想要发布npm包，我们得吧我们得npm源切换为官方得源，命令如下：
```
npm config set registry=https://registry.npmjs.org
```
（3）添加npm用户
进入orange-ui目录，添加npm用户，执行命令：
```
npm adduser
```
这里会让你填写用户名等等，如果之前设置过即可跳过此步。
（4）发布npm
在orange-ui目录下执行命令：
```
npm publish
```
如果发布失败可能是名字重复了，改了名字即可，发布成功后，我们即可到npm光网上查看自己发布得npm包：

#### 7、从npm安装使用
直接执行安装命令：
```
npm install orange-ui-plus
```
然后在main.js引用注册，代码如下：
```
import OrangeUi from "orange-ui-plus";
import "../node_modules/orange-ui-plus/orange-ui.css";
Vue.use(OrangeUi);
```
这里单独引用了css，就和element-ui一样需要单独引入样式文件。

修改App.vue文件，直接使用组件 `orange-input` `orange-button`

到这里我们的组件就封装好了，并且可以直接从npm仓库下载使用。

#### 总结
总体说来Vue组件封装发布到npm仓库整体难度不大，主要是理解Vue的install方法以及打包相关知识，其实最重要的还是如何封装一个适用范围广，扩展性高的公用组件。

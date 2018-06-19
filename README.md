## 1.环境搭建（window）
   安装最新的node.js[下载node](https://nodejs.org/zh-cn/download/)<br>
   添加node到环境变量（网上教程很多不在赘述）
   安装完成控制台输入node --version输出版本号则安装完毕
   <br>
   安装mongodb，官网下载自行安装
   <br>
## 2.启动项目
  ```
  git clone +git@github.com:zhaokgithub/vue-blog.git //克隆项目
  ```
  #### vue端：
  <br>
  进入项目根目录安装依赖（即存在package.json文件的目录）
  <br>
  
  ```
  npm install//依赖安装
  ```
  ```
  npm run dev //启动项目
  ```
   #### server端：
   <br>
   进入项目根目录安装依赖（即存在package.json文件的目录）
   
   ```
  npm install//依赖安装
  ```
    启动项目
  ```
  npm start //启动项目
  ```
   #### 报错（未连接mongodb错误）
    启动数据库,(进入mongodb安装目录bin)
   ```
    mongod --dbpath=f:data//启动mongodb f:data文档存放路径
   ```
   
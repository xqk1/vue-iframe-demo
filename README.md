### 实现思路
#### 将路由拆分
```javascript
const routes = [
  {
    path: "/",
    name: "index",
    component: Index
  },
  {
    path: "/f1",
    name: "f1",
    component: F1
  },
  {
    path: "/f2",
    name: "f2",
    component: F2
  },
  {
    path: "*",
  }
];
```
拆分出普通的路由和其他嵌入iframe路由

#### 普通路由
利用keep-alive 包裹router-view

#### 嵌入有iframe的路由
- 通过利用vue的动态组件，控制数组，动态挂载iframeWrapper组件。
- 利用数组中存在的路径，动态控制组件的显示隐藏，实现iframe的缓存
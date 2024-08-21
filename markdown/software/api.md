# API 说明文档

[[toc]]


## 商品管理


### 商品列表

获取商品列表:
```js
GET    /api/web/product/list
```

获取商品详情:
```js
GET    /api/web/product/detail
```

搜索商品:
```js
GET    /api/web/product/search
```

### 商品分类

获取商品分类:
```js
GET    /api/web/product/category
```

### 商品属性

获取商品属性:
```js
GET    /api/web/product/attribute
```

### 商品品牌

获取商品品牌:
```js
GET    /api/web/product/brand
```

### 商品评论

获取商品评论:
```js
GET    /api/web/product/comment
```

创建商品评论:
```js
POST   /api/web/product/comment
```

修改商品评论:
```js
PUT    /api/web/product/comment
```

删除商品评论:
```js
DELETE /api/web/product/comment
```







## 客户管理


### 用户管理理


注册新用户
```js
POST   /api/web/auth/signup
```
登录
```js
POST   /api/web/auth/signin
```

验证码

```js
POST   /api/web/auth/captcha
```


### 用户信息管理

获取用户信息
```js
POST   /api/web/myself/info 
```

修改用户信息
```js
POST   /api/web/myself/update
```


### 订单管理

获取订单列表:
```js
POST   /api/web/myself/order
```

创建订单列表:
```js
POST   /api/web/myself/order
```


### 地址管理

获取地址:
```js
GET    /api/web/myself/address
```
创建新地址:
```js
POST   /api/web/myself/address
```




## 公共接口


### 管理分类和标签

获取分类和标签:
```js
GET    /api/web/common/tags
GET    /api/web/common/category
```


### 国家和区域

获取国家
```js
GET     /api/web/common/constry
```
获取城市 
```js
GET     /api/web/common/city
```




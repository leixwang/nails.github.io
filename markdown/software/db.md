# 数据库设计

[[toc]]


## 商品数据库


### 商品信息

```sql
CREATE TABLE product (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(64)  NOT NULL COMMENT '商品ID',
	title VARCHAR(255) NOT NULL COMMENT '商品名称',
	desction text COMMENT '商品描述',
	seo_keywords VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'SEO关键词',
	seo_description VARCHAR(255) NOT NULL DEFAULT '' COMMENT 'SEO描述',
	price DECIMAL(12,2) UNSIGNED NOT NULL default 0.00 COMMENT '商品价格',
	price_off decimal(3,0) UNSIGNED NOT NULL DEFAULT 100 COMMENT '商品折扣',
	main_img VARCHAR(255) NOT NULL COMMENT '商品图片',
	stock INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品库存',
	sales INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品销量',
	status tinyint UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品状态 0:未上架, 1: 上架',
	is_delete tinyint unsigned NOT NULL DEFAULT 0 COMMENT '商品删除状态 0:未删除, 1: 已下架',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	KEY idx_product_id (product_id),
	KEY idx_status (status),
	KEY idx_is_delete (is_delete),
	KEY idx_title (title)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT '商品信息表';

```




### 商品分类

#### 商品分类信息表

```sql
CREATE TABLE category_info (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '分类ID',
	tag_id bigint UNSIGNED NOT NULL COMMENT '商品标签ID',
	product_id varchar(64) NOT NULL  COMMENT '商品ID',
	title VARCHAR(255) NULL DEFAULT NULL COMMENT '商品标签名称',
	value VARCHAR(128) NULL DEFAULT NULL  COMMENT '商品标签值',
	level tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '分类级别',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_category (id),
	KEY idx_product_id (product_id),
	KEY idx_level (level)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT '商品信息表';

```


### 商品图片

```sql
CREATE TABLE productimg_info (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(64)  NOT NULL COMMENT '商品ID',
	imgurl VARCHAR(255) NOT NULL COMMENT '商品图片地址',
	sort_id int UNSIGNED NOT NULL DEFAULT 0 COMMENT '图片排序序号, 0表示主图, 1..n表示其他图片',
	type tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '图片类型 1:商品展示图, 2:商品详情图, 3: 商品轮播图, 9: 其他图片',
	status tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '商品状态 0:删除, 1: 上架',
	name VARCHAR(64) NOT NULL DEFAULT '' COMMENT '图片名称',
	tag VARCHAR(32) NOT NULL DEFAULT '' COMMENT '图片标签',
	uuid VARCHAR(64) NOT NULL DEFAULT '' COMMENT '图片UUID',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	KEY idx_product_id (product_id),
	key idx_sort_id (sort_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT '商品图片信息表';
```



### 商品标签

#### 商品标签信息表

```sql
CREATE TABLE tag_info (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '商品标签ID',
	tag_id bigint UNSIGNED NOT NULL COMMENT '商品标签ID',
	product_id varchar(64)  NOT NULL COMMENT '商品ID',
	title VARCHAR(255) NULL DEFAULT NULL COMMENT '商品标签名称',
	value VARCHAR(128) NULL DEFAULT NULL COMMENT '商品标签值',
	level tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '商品标签级别, 级别越高, 优先级越高, 1-9',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_tag_id (id),
	KEY idx_product_id (product_id)
)ENGINE=innodb COMMENT '商品标签信息表';

```

### 商品各种类型总表
```sql
CREATE TABLE tags (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '商品标签ID',
	type tinyint UNSIGNED NOT NULL COMMENT '商品标签类型, 0:分类标签, 1:表示商品标签, 2:表示商品sku类型',
	parent_id bigint UNSIGNED NOT NULL default 0 COMMENT '父级标签ID',
	title VARCHAR(255) NOT NULL COMMENT '商品标签名称',
	title_en VARCHAR(255) NULL DEFAULT NULL  COMMENT '商品标签名称EN',
	value VARCHAR(128) NULL DEFAULT NULL COMMENT '商品标签值',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',	
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_tag_id  (id),
	KEY idx_tag_id (id),
	key idx_tag_parent_id (parent_id),
	key idx_tag_type (type)
)ENGINE=innodb DEFAULT CHARSET=utf8mb4 COMMENT '商品标签表';

```

### 商品详情页面

#### 商品详情页面信息表
```sql
CREATE TABLE product_detail (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(64)  NOT NULL COMMENT '商品ID',
	content text NOT NULL COMMENT '商品详情内容',
	lang VARCHAR(16) NOT NULL COMMENT '语言',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	KEY idx_product_id (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT '商品详情页面信息表';
```

### 商品SKU


```sql
CREATE TABLE product_sku (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(64)  NOT NULL default '' COMMENT '商品ID',
	parent_id bigint UNSIGNED NOT NULL default 0  COMMENT '父级SKUID',
	tag_id bigint UNSIGNED NOT NULL COMMENT '商品SKU标签ID',
	title VARCHAR(255) NOT NULL COMMENT '商品名称',
	stock int UNSIGNED NOT NULL default 0 COMMENT '商品库存',
	price decimal(10,2) UNSIGNED NOT NULL default 0 COMMENT '商品价格',
	price_off decimal(3,0) UNSIGNED NOT NULL DEFAULT 100 COMMENT '商品折扣',
	main_img VARCHAR(255) NOT NULL default '' COMMENT '商品主图',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id)
)ENGINE=innodb DEFAULT CHARSET=utf8mb4 COMMENT '商品SKU信息表';

```

## 商品评论

```sql
CREATE TABLE product_comment (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(64)  NOT NULL COMMENT '商品ID',
	user_id bigint UNSIGNED NOT NULL COMMENT '用户ID',
	username VARCHAR(50) NOT NULL COMMENT '用户名',
	content text NOT NULL COMMENT '评论内容',
	is_img tinyint UNSIGNED NOT NULL DEFAULT 0 COMMENT '是否图片评论',
	img_url VARCHAR(255) NOT NULL default '' COMMENT '图片地址',
	star int UNSIGNED NOT NULL DEFAULT 5 COMMENT '评论星级',
	shop_content text NOT NULL COMMENT '商家回复内容',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	KEY idx_product_id (product_id),
	KEY idx_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT '商品评论信息表';
```



## 商品评分

```sql
CREATE TABLE product_reviews (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(64)  NOT NULL COMMENT '商品ID',
	star1 int UNSIGNED NOT NULL DEFAULT 0 COMMENT '1星级得分总和',
	star2 int UNSIGNED NOT NULL DEFAULT 0 COMMENT '2星级得分总和',
	star3 int UNSIGNED NOT NULL DEFAULT 0 COMMENT '3星级得分总和',
	star4 int UNSIGNED NOT NULL DEFAULT 0 COMMENT '4星级得分总和',
	star5 int UNSIGNED NOT NULL DEFAULT 0 COMMENT '5星级得分总和',
	total int UNSIGNED NOT NULL DEFAULT 0 COMMENT '总得分',
	reviews int UNSIGNED NOT NULL DEFAULT 0 COMMENT '评论总数',
	average decimal(2,2) UNSIGNED NOT NULL DEFAULT 0.0 COMMENT '平均分',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	KEY idx_product_id (product_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT '商品评论信息表';
```


## 订单数据库



```sql
CREATE TABLE product_order (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(16)  NOT NULL COMMENT '商品ID',
	name VARCHAR(250) NOT NULL COMMENT '商品名称',
	price DECIMAL(12,2) UNSIGNED NOT NULL default 0.00 COMMENT '商品价格',
	off decimal(3,2) UNSIGNED NOT NULL DEFAULT 1.00 COMMENT '商品折扣',
	desc text COMMENT '商品描述',
	img VARCHAR(250) NOT NULL default '' COMMENT '商品图片',
	stock INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品库存',
	sales INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品销量',
	category_id bigint UNSIGNED NULL COMMENT '商品分类ID',
	status tinyint UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品状态 0:未上架, 1: 上架',
	delete tingint unsigned NOT NULL DEFAULT 0 COMMENT '商品删除状态 0:未删除, 1: 已删除',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id, product_id)
) ENGINE=innodb COMMENT '订单信息表';

```


## 会员数据库


### 会员信息

```sql
CREATE TABLE client_info (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	uuid VARCHAR(16) NOT NULL UNIQUE,
	username VARCHAR(50) NOT NULL UNIQUE,
  	password VARCHAR(255) NOT NULL,
  	email VARCHAR(100) NOT NULL UNIQUE,
  	phone VARCHAR(20),
  	header_img varchar(128) COMMENT '头像',
  	permission varchar(16) NOT NULL DEFAULT 'client' COMMENT '会员权限, client',
  	level int UNSIGNED NOT NULL DEFAULT 0 COMMENT '会员等级',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	index index_id(id)
	index idex_uuid (uuid),
) ENGINE=innodb COMMENT '会员信息表';

```


### 地址信息

```sql
CREATE TABLE client_address (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	uuid VARCHAR(16) NOT NULL,
	first_name VARCHAR(20) NOT NULL, 
	last_name  VARCHAR(20) NOT NULL,
	street1 VARCHAR(128) NOT NULL,
	street2 VARCHAR(128),
	ctiy VARCHAR(50) NOT NULL,
	province  VARCHAR(50) NOT NULL,
	zip_code  VARCHAR(10) NOT NULL,
	country_code VARCHAR(2) NOT NULL,
	is_default BOOLEAN DEFAULT FALSE,
	mark VARCHAR(50),
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY client_address (id),
	INDEX index_uuid(uuid),
	index index_id(id)
) ENGINE=innodb COMMENT '会员地址表';

```





## 商品供应商


```sql
CREATE TABLE product_supplier (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	supplier_name VARCHAR(255) NOT NULL COMMENT '供应商名称',
	supplier_phone VARCHAR(255) NOT NULL COMMENT '供应商电话',
	supplier_address VARCHAR(255) NOT NULL COMMENT '供应商地址',
	supplier_address VARCHAR(255) NOT NULL COMMENT '供应商地址',
	supplier_address VARCHAR(255) NOT NULL COMMENT '供应商地址',
	supplier_desc text COMMENT '供应商描述',
	supplier_img VARCHAR(250) NOT NULL COMMENT '供应商图片',
	supplier_status tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '供应商状态',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id)
) ENGINE=innodb COMMENT '供应商信息表';

```


#### JWT-blacklists

```sql
CREATE TABLE web_jwtblacklists (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	jwt text NULL,
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY web_jwtblacklists (id),
	index index_id(id)
)ENGINE=innodb COMMENT 'jwt-blacklists';
```



#### 权限管理 数据库


客户的权限号是: client

```sql
INSERT INTO casbin_rule (ptype, v0, v1, v2)
VALUES ('p', 'client', "/api/web/myself/info", "POST");
VALUES ('p', 'client', "/api/web/myself/update", "POST");
VALUES ('p', 'client', "/api/web/myself/order", "POST");
VALUES ('p', 'client', "/api/web/myself/order", "GET");
VALUES ('p', 'client', "/api/web/myself/address", "POST");
VALUES ('p', 'client', "/api/web/myself/address", "GET");
```


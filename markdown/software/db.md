# 数据库设计

[[toc]]


## 商品数据库


### 商品信息

```sql
CREATE TABLE product (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(16)  NOT NULL COMMENT '商品ID',
	product_name VARCHAR(255) NOT NULL COMMENT '商品名称',
	product_price DECIMAL(12,2) UNSIGNED NOT NULL default 0.00 COMMENT '商品价格',
	product_off decimal(3,2) UNSIGNED NOT NULL DEFAULT 1.00 COMMENT '商品折扣',
	product_desc text COMMENT '商品描述',
	product_img VARCHAR(255) NOT NULL COMMENT '商品图片',
	product_stock INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品库存',
	product_sales INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品销量',
	product_category_id bigint UNSIGNED NOT NULL COMMENT '商品分类ID',
	product_status tinyint UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品状态 0:未上架, 1: 上架',
	product_delete tinyint unsigned NOT NULL DEFAULT 0 COMMENT '商品删除状态 0:未删除, 1: 已删除',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	KEY idex_product_id (product_id),
	KEY idx_product_status (product_status),
	KEY idx_product_name (product_name)
) ENGINE=InnoDB AUTO_INCREMENT=652 DEFAULT CHARSET=utf8mb4 COMMENT '商品信息表';

```




### 商品分类


```sql
CREATE TABLE product_category (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '分类ID',
	category_name VARCHAR(255) NOT NULL COMMENT '分类名称',
	category_parent_id bigint UNSIGNED NOT NULL default 0 COMMENT '父级分类ID',
	category_level tinyint UNSIGNED NOT NULL COMMENT '分类级别',
	category_sort tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '分类排序',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product_category (id)
)ENGINE=innodb COMMENT '商品分类表';

```



### 商品详情


```sql
CREATE TABLE product_detail (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id bigint UNSIGNED NOT NULL COMMENT '商品ID',
	product_category_id bigint UNSIGNED NOT NULL COMMENT '商品分类ID',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id, product_id)
)ENGINE=innodb COMMENT '商品详情信息表';

```


### 商品图片

```sql
CREATE TABLE product_img (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(16)  NOT NULL COMMENT '商品ID',
	product_imgurl VARCHAR(255) NOT NULL COMMENT '商品图片地址',
	product_mainurl VARCHAR(255) NOT NULL COMMENT '商品主图地址',
	product_order int UNSIGNED NOT NULL DEFAULT 0 COMMENT '图片排序',
	product_type tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '图片类型 1:商品展示图, 2:商品详情图, 3: 商品轮播图, 9: 其他图片',
	product_status tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '商品状态 0:删除, 1: 上架',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id),
	KEY idex_product_id (product_id),
	KEY idx_product_status (product_status),
	KEY idx_product_main_img (product_main_img),
	KEY idx_product_other_img (product_other_img),
	key idx_product_order (product_order),
) ENGINE=InnoDB AUTO_INCREMENT=652 DEFAULT CHARSET=utf8mb4 COMMENT '商品图片';
```


### 商品SKU


```sql
CREATE TABLE product_sku (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_name VARCHAR(255) NOT NULL COMMENT '商品名称',
	product_price DECIMAL(12,2) UNSIGNED NOT NULL COMMENT '商品价格',
	product_off decimal(3,2) UNSIGNED NOT NULL DEFAULT 1.00 COMMENT '商品折扣',
	product_status tinyint UNSIGNED NOT NULL DEFAULT 1 COMMENT '商品状态',
	product_desc text COMMENT '商品描述',
	product_img VARCHAR(250) NOT NULL COMMENT '商品图片',
	product_stock INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品库存',
	product_sales INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品销量',
	product_category_id bigint UNSIGNED NOT NULL COMMENT '商品分类ID',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id)
)ENGINE=innodb COMMENT 'SKU信息表';

```

### 商品供应商


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
)ENGINE=innodb COMMENT '供应商信息表';

```



## 订单数据库



```sql
CREATE TABLE product_order (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	product_id varchar(16)  NOT NULL COMMENT '商品ID',
	product_name VARCHAR(250) NOT NULL COMMENT '商品名称',
	product_price DECIMAL(12,2) UNSIGNED NOT NULL default 0.00 COMMENT '商品价格',
	product_off decimal(3,2) UNSIGNED NOT NULL DEFAULT 1.00 COMMENT '商品折扣',
	product_desc text COMMENT '商品描述',
	product_img VARCHAR(250) NOT NULL default '' COMMENT '商品图片',
	product_stock INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品库存',
	product_sales INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品销量',
	product_category_id bigint UNSIGNED NULL COMMENT '商品分类ID',
	product_status tinyint UNSIGNED NOT NULL DEFAULT 0 COMMENT '商品状态 0:未上架, 1: 上架',
	product_delete tingint unsigned NOT NULL DEFAULT 0 COMMENT '商品删除状态 0:未删除, 1: 已删除',
	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id, product_id)
)ENGINE=innodb COMMENT '订单信息表';

```


## 会员数据库


### 会员信息

```sql
CREATE TABLE user_info (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',

	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id)
)ENGINE=innodb COMMENT '会员信息表';

```


### 地址信息

```sql
CREATE TABLE user_address (
	id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
	user_id bigint UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'USERID',

	created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
	updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '修改时间',
	deleted_at TIMESTAMP NULL DEFAULT NULL COMMENT '删除时间',
	PRIMARY KEY pk_product (id, user_id)
)ENGINE=innodb COMMENT '会员地址表';

```





CREATE TABLE banner (
    id INTEGER PRIMARY KEY,
    name VARCHAR(64) COMMIT '名称',
    url VARCHAR(64) COMMIT '跳转路径',
    img VARCHAR(255) COMMIT '图片',
)

CREATE TABLE company(
    id,
    商号,
    成立日期,
    资金,
    代表者,
    所有地,
    TEL,
    FAX
    MAIL
    取引银行
    主要经营品目,
    主要生产厂家,
    地图经度,
    地图纬度,
    logo,
    co.ltd,
)

CREATE TABLE news(
    id,
    title COMMIT '标题',
    digest COMMIT '摘要',
    content COMMIT '内容HTML',
    url COMMIT '封面图',
    create_time COMMIT '创建时间'
)

CREATE TABLE contact(
    咨询产品,
    会社名,
    担当者,
    フリガナ 氏名,
    住所,
    电话番号,
    メールアドレス 邮箱地址,
    お問合せ内容 咨询内容
)

CREATE TABLE provider(
    id,
    五十音搜索,
    name,
    url,
    logo,
)
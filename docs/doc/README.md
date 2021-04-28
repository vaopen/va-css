# 文档

<style src="../.vuepress/styles/doc.css"></style>
## dialog content
> 设置dialog 内容区域 container
`.va-container`
```html
<div class="va-flex">
  <div class="bg-blue va-container">content padding</div>
</div>
```
<div class="va-flex">
  <div class="bg-blue va-container">弹窗内容padding</div>
</div>


## Grid & Layout
- `va-col` 默认flex:1  `va-col-1~24` 设置容器宽度
- `flex-wrap` 设置多行
```html
<div class="va-flex va-flex-column va-flex-wrap">
  <div class="va-col-1 bg-red">1</div>
  <div class="va-col-3 bg-blue">3</div>
  <div class="va-col-10 bg-grey">10</div>
  <div class="va-col-5 bg-green">5</div>
  <div class="va-col-5 bg-yellow">5</div>
</div>
```
<div>横向排列: </div>
<div class="va-flex">
  <div class="va-col-1 bg-red">1</div>
  <div class="va-col-3 bg-blue">3</div>
  <div class="va-col-10 bg-grey">10</div>
  <div class="va-col-5 bg-green">5</div>
  <div class="va-col-5 bg-yellow">5</div>
</div>
<br />
<div>均分: </div>
<div class="va-flex">
  <div class="va-col bg-red">平均</div>
  <div class="va-col bg-blue">平均</div>
  <div class="va-col bg-grey">平均</div>
</div>
<br />
<div>纵行排列</div>
<div class="va-flex va-flex-wrap">
  <div class="va-col-1 bg-red">1</div>
  <div class="va-col-24 bg-blue">3</div>
  <div class="va-col-10 bg-grey">10</div>
  <div class="va-col-5 bg-green">5</div>
  <div class="va-col-5 bg-yellow">5</div>
</div>

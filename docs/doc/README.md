# 文档

<style src="../.vuepress/styles/doc.css"></style>

## background
**设置背景颜色**
`.bg-`
- 参数: white / black / grey / green / blue / yellow / red

<div class="va-flex">
  <div class="bg-white">white</div>
  <div class="bg-black">black</div>
  <div class="bg-grey">grey</div>
  <div class="bg-green">green</div>
  <div class="bg-blue">blue</div>
  <div class="bg-yellow">yellow</div>
  <div class="bg-red">red</div>
</div>

## dialog content
> 设置dialog 内容区域 container
`.va-container`

<div class="va-flex">
  <div class="bg-blue va-container">弹窗内容宽度</div>
</div>


## Grid & Layout
- `va-col` 默认flex:1  `va-col-1~24` 设置容器宽度
- `flex-wrap` 设置多行

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
  <div class="va-col bg-red">1</div>
  <div class="va-col bg-blue">3</div>
  <div class="va-col bg-grey">10</div>
  <div class="va-col bg-green">5</div>
  <div class="va-col bg-yellow">5</div>
</div>
<br />
<div>纵行排列</div>
<div class="va-flex va-flex-column flex-wrap">
  <div class="va-col-1 bg-red">1</div>
  <div class="va-col-3 bg-blue">3</div>
  <div class="va-col-10 bg-grey">10</div>
  <div class="va-col-5 bg-green">5</div>
  <div class="va-col-5 bg-yellow">5</div>
</div>

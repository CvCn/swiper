# 完美滚动轮播图

![jQuery v-3.2.1](https://img.shields.io/badge/jQuery.js-v3.2.1-green.svg)

## 查看效果
- http://www.moxiaowei.com/swiper/

## Description

**完美滚动轮播图**
- 默认100宽度
- 默认高度为图片高度
- 如果每个图片高度不一样，默认使用最大值，高度较小的会有一个灰色背景，竖向居中，并不会拉伸图片

## 使用

### 1. 查看示例
``` bash
    git clone https://github.com/CvCn/swiper.git
```
查看index.html示例

### 2. 使用

#### 1. 引用依赖
``` bash
    <script src="/js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="sw.js" type="text/javascript"></script>
    <link rel="stylesheet" href="sw.css">
```
*Tips* 
- 此项目依赖jQuery，没有直接提供，请自行引用

#### 2. 在html里按照如下结构使用
``` bash
<div class="swp">
    <div class="swiper">
        <div class="swiper-main">
            <span><img src="img/img (1).jpg" alt=""></span>
            <span><img src="img/img (2).jpg" alt=""></span>
            <span><img src="img/img (3).jpg" alt=""></span>
            <span><img src="img/img (4).jpg" alt=""></span>
        </div>
    </div>
    <div class="swiper-point">
        <span class="point point-b" data-key="1"></span>
        <span class="point" data-key="2"></span>
        <span class="point" data-key="3"></span>
        <span class="point" data-key="4"></span>
    </div>
    <div class="swiper-arrow">
        <span class="pro">&lt;</span>
        <span class="next">&gt;</span>
    </div>
</div>
```
将`class="swiper-main"`元素中的图片换成自己需要的
#### 配置 sw.js
```bash
var option = {
        speed: 618, //动画速度 ms
        interval: 6180 //自动播放间隔 ms
    }
```
*Tips*
- 如果需要点击轮播图打开新地址，可以将`class="swiper-main"`元素中的`<span>`元素换成`<a>`
*示例*
```bash
 <a src="" target="_blank"><img src="img/img (1).jpg" alt=""></a>
```
- 其中`class="swiper-point"`元素中的为底部指示符，\
`class="swiper-arrow"`元素中的为左右切换按钮， \
不喜欢可以自己更换

## 打赏
<img width="400px" height="400px" alt="赞赏码" src="http://www.moxiaowei.com/swiper/img/ds.jpg"/>
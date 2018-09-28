# 完美滚动轮播图

依赖Jquery

## 查看效果
- http://www.moxiaowei.com/swiper/

## Description

**完美实现轮播**,欢迎PR

## 使用

1. 查看示例
``` bash
    git clone https://github.com/CvCn/swiper.git
```
查看index.html示例

2. 自定义使用

引用
``` bash
    <script src="/js/jquery-3.2.1.min.js" type="text/javascript"></script>
    <script src="sw.js" type="text/javascript"></script>
    <link rel="stylesheet" href="sw.css">
```

在html里按照如下结构使用
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
将`class="swiper-main"`元素中的图片换成自己需要的，
### 配置
```bash
var option = {
        speed: 618, //动画速度 ms
        interval: 6180 //自动播放间隔 ms
    }
```
*Tips*
- 如果需要点击轮播图点击打开，可以将`class="swiper-main"`元素中的`<span>`元素换成`<a>`\
- 其中`class="swiper-point"`元素中的为底部指示符，\
`class="swiper-arrow"`元素中的为左右切换按钮， \
不喜欢可以自己更换

## 打赏
<img width="400px" height="400px" alt="赞赏码" src="http://www.moxiaowei.com/swiper/img/ds.jpg"/>
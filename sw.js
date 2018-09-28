$(window).on('load', function() {


    var option = {
        speed: 618, //动画速度 ms
        interval: 6180 //自动播放间隔 ms
    }
    var $swiper = $('.swiper');

    var $ul = $('.swiper-main');

    var $swiperImg = $('.swiper-main>*>img');

    $ul.append($($('.swiper-main>*')[0]).clone(true))

    //设置样式
    function sty() {

        // $swiper.css({
        //     padding: 0,
        //     margin: 0,
        //     overflow: 'hidden',
        //     position: 'relative',

        // })

        // $('.swiper-main>span').css({
        //     padding: 0,
        //     margin: 0,
        //     float: 'left',
        // })
        $swiperImg = $('.swiper-main>*>img');
        // $swiperImg.css({
        //     padding: 0,
        //     margin: 0,
        //     verticalAlign: 'top',
        //     width: '300px',
        //     height: '100%'
        // })

        $ul.css({
            listStyle: 'none',
            padding: 0,
            margin: 0,
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100' * $swiperImg.length + '%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#f0f0f0'
        })

        var isP = 0;

        $swiperImg.map(function(index, item) {
            var $item = $(item)
            var pw = $item[0].width / $item[0].height;
            if (window.innerWidth / pw > isP) {
                isP = window.innerWidth / pw;
            }
            $item.css({
                width: window.innerWidth,
                height: window.innerWidth / pw
            })

            $swiper.css({
                width: window.innerWidth,
                height: isP
            })
        })

        $('.swiper-arrow').css({
            marginTop: -isP / 13 * 8
        })
    }


    //指示符
    $point = $('.point');

    sty();

    //轮播动画
    function animate(key, cb) {

        var p = $($swiperImg[0]).width();
        $ul.stop(true, true);
        $ul.animate({
            left: -p * key
        }, option.speed, function() {
            //切换指示符
            $point.map(function(index, item) {

                if (index == key) {
                    $(item).addClass('point-b')
                } else {
                    $(item).removeClass('point-b')
                }
                if (key == $swiperImg.length - 1) {
                    $($point[0]).addClass('point-b')
                }
            })
            if (cb) cb()
        })


    }

    //全局下标参数
    var aKey = 0;

    //自动播放
    function autoPlay(key) {
        clearInterval($ul.timer);
        $ul.timer = window.setInterval(function() {
            animate(key, function() {
                if (key > $swiperImg.length - 1) {
                    key = 1;
                    $ul.stop(true, true);
                    $ul.css({
                        left: 0
                    })
                }
            })
            key++;
            aKey = key;
        }, option.interval)
    };

    autoPlay(aKey + 1);

    //自适应
    window.onresize = function() {
        sty();
    }

    //鼠标悬停暂停播放
    $('.swp').hover(function() {
        clearInterval($ul.timer);
    }, function() {
        if (aKey > $swiperImg.length - 1) {
            aKey = 1;
        }
        autoPlay(aKey);
    })

    //指示符点击切换
    $point.click(function(ev) {
        clearInterval($ul.timer);
        aKey = ev.currentTarget.dataset.key - 1
        animate(aKey)
    })

    //向前
    $('.pro').click(function() {
        clearInterval($ul.timer);
        var p = $($swiperImg[0]).width();
        aKey--
        //如果当前为第一个，点击后定位到最后一个（最后一个图片为克隆的第一个图片）
        if (aKey < 0) {
            aKey = $swiperImg.length - 1
            $ul.stop(true, true); //删除当前动画队列
            $ul.css({
                left: -p * aKey
            })
            aKey--
        }

        //再执行动画
        animate(aKey)
    })

    //向后
    $('.next').click(function() {
        clearInterval($ul.timer);
        aKey++
        if (aKey > $swiperImg.length - 1) {
            aKey = 1
            $ul.stop(true, true);
            $ul.css({
                left: 0
            })
        }
        animate(aKey)

    })
})
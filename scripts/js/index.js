
$("#nav-mi-wrap li").hover(function () {

    $(this).children("ul").slideDown().css({
        zIndex:200,
    });
},function () {
    $(this).children("ul").hide();

})
//搜索框
$("#formControl").mousemove(function () {
    $(this).css({
        border:"1px solid orange",

    })
    $(".btn").css({
        border:"1px solid orange",
    })
})
$("#formControl").mouseout(function () {
    $(this).css({
        border:"1px solid lightgray"
    })
    $(".btn").css({
        border:"1px solid lightgray",
    })
})
$("#btn-hover").mousemove(function () {
    $(this).css({
        background:"orange"
    })
})
$("#btn-hover").mouseout(function () {
    $(this).css({
        background:"white"
    })
})
//轮播图
$("#myCarousel").mousemove(function () {
    $(".carousel-control").css({
        display:"block",
    })
})
$("#myCarousel").mouseout(function () {
    $(".carousel-control").css({
        display:"none",

    })
})


$(".list-left li").hover(function () {
    $(this).children("ul").show();
    $(this).children("a").css({
        background:"orange",
        textDecoration: "none   "
    })

},function () {
    $(this).children("ul").hide();
    $(this).children("a").css({
        background:"black"
    })
})

//搭配

$(".peijian-wrap li").hover(function () {
    //获取  .peijian-wrap li 的搜索引擎
    var index=$(this).index();
      $(".con").eq(index).addClass("show").siblings().removeClass("show")
        })
$(function(){
    $(".peijian-wrap-ul>li").hover(function(e) {
        $("*").removeClass('selected');    // 先删除所有元素的selected样式
        $(e.target).addClass('selected');  // 然后为被点击元素添加selected样式
    });
})


//视频
// 当点击图片的时候按钮变色
    // 获取图片,当鼠标放到img上时，触发事件
    // $(".video>figure>img").hover(function(){
    //     // var index=$(this).index();
    //   $(".video>figure>section").css({
    //       backgroundColor:"orange"
    //   })
    // })



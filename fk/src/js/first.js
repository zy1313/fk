$(()=>{
    // 导航栏滑动
    $(".firstList >li:not(:eq(0))").hover(function(){
        // $(this).css("border-bottom", "red 2px solid")
   
        //   .siblings().css("border-bottom","");
       
        // $(this).children("a").addClass("move").siblings().removeClass("move");;
     $(this).children(".secondList").stop().slideToggle(1000);
        
    })

    $(".firstList >li:lt(2)").mouseenter(function(){
     $(this).css("border-bottom", "#b71d21 4px solid")

    })
    $(".firstList >li:lt(2)").mouseleave(function(){
        $(this).css("border-bottom", "")
   
       })


    $(".firstList >li").children("a").mouseenter(function(){
    $(this).css("color","#b71d21")
    })
    $(".firstList >li").children("a").mouseleave(function(){
        $(this).css("color","");
        })
  

        // 秒杀倒计时
        var target = new Date(2019, 11, 30, 18, 00);
        setInterval(function () {
            var date = new Date();
            var offset = Math.round((target.getTime() - date.getTime()) / 1000);
            var h = tool(Math.floor(offset / 60 / 60 % 24));
            var m = tool(Math.floor(offset / 60 % 60));
            var s = tool(Math.floor(offset % 60))
            res = `秒杀进行中，距结束还有：<em>${h}</em><em>${m}</em><em>${s}</em>`
        $("#seckill_2017_timecounting").html(res)
        }, 1000);
        function tool(num) {
            return ("0000" + num).slice(-2);
        }
})


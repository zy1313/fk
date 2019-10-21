  $(()=>{
/* 集成图像验证码 */
let captcha1 = new CaptchaMini({
    fontSize: 30,
    length: 6,
    content: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    lineNum: 3,
    dotNum: 20
});
let imgCode;
captcha1.draw(document.querySelector('#captcha'), r => {
    console.log("验证码 = " + r);
    imgCode = r;
});
/* 给手机号码发送短信： */
/* 思路：给按钮添加点击事件，当点击按钮的时候，检查手机号码是否正确，如果手机号码正确，那么就短信，如果不正确那 */
let randomNumber;
function getRandom(min, max) {
    return parseInt(Math.random() * (max - min + 1)) + min
}

$(".text4").click(function () {
    // $("#phoneID").trigger("keyup");
    // let flag = $(".phone").hasClass("form-group-error");
    // /* 如果flag的值是flase,那么我们就调用第三方平台发请求 发短信 */
    // if (flag) return;
    randomNumber = getRandom(1000, 9999);
    $.ajax({
        type: 'post',
        url: 'http://route.showapi.com/28-1',
        dataType: 'json',
        data: {
            "showapi_appid": '91032', //这里需要改成自己的appid
            "showapi_sign": 'd57b19c8d2d44aef94aee464768a38d8', //这里需要改成自己的应用的密钥secret
            "mobile":  $(".text2").val(),
            "content": `{"name":"文顶顶","code":${randomNumber},"minute":"3","comName":"脑子进水集团"}`,
            "tNum": "T150606060601",
        },
        success: (result) => console.log(result)
    });
});


// $(".text1").focus(function(){
//     $("span").eq(1).css("display","block")  
// })
// 获得焦点
// 验证码判断
$(".text1").blur(function () {
    if ($(this).val().trim().length == 0) {
        $("#picture").text("请输入图片验证码").addClass("two")
    } else {
        $("#picture").text("").removeClass("two")
    }
})

// 手机号
$(".text2").focus(function () {
    $("#phone").addClass("block");
})
// 手机验证码
$(".text3").eq(0).focus(function () {
    $("#test").addClass("block")
})
// 密码
$(".text3").eq(1).focus(function () {
    $("#pasword").addClass("block")
})
// 密码确认
$(".text3").eq(2).focus(function () {
    $("#passwordTwo").addClass("block")
})


// 失去焦点
// 手机号验证
$(".text2").blur(function () {
    if (/^1[3-9]\d{9}$/.test($(this).val().trim())) {
        $("#phone").addClass("hidden");
        $("#phone").text("").removeClass("two")
    } else {
        $("#phone").text("请输入有效的手机号").addClass("two")
        $("#phone").addClass("hidden")
    }
})
// 手机验证码

$(".text3").eq(0).blur(function () {
    $("#test").removeClass("block")
})
// 密码验证
$(".text3").eq(1).blur(function () {
    let val=$(this).val().trim();
    if(/^[0-9a-zA-Z]{6,16}$/.test(val)) {
     //    判断密码强弱
    let hasNum   = false;
    let hasCharA = false;     /*小写*/
    let hasCharB = false;     /*大写*/
    for (var i = 0,len = val.length;i<len;i++)
    {
      var codeIndex = val.charCodeAt(i);
      if (codeIndex >= 48 && codeIndex <= 57)
      {
        /*是数字*/
        hasNum = true;
        continue;
      }

      if (codeIndex >= 65 && codeIndex <= 90)
      {
        /*是大写字母*/
        hasCharB = true;
        continue;
      }

      if (codeIndex >= 97 && codeIndex <= 122)
      {
        /*是小写字母*/
        hasCharA = true;
        continue;
      }
    }

    if (hasNum && hasCharA && hasCharB)
    {
      /*密码强度：强*/
      $(".pwd-level-text").text("强");
      $(".pwd-level").eq(2).css("background","green")

    }else if (hasNum && hasCharA || hasNum && hasCharB || hasCharA && hasCharB)
    {
      /*密码强度：中*/
      $(".pwd-level-text").text("中");
      $(".pwd-level").eq(1).css("background","orange")
    }else
    {
      /*密码强度：弱*/
      $(".pwd-level-text").text("弱");
      $(".pwd-level").eq(0).css("background","red")   
    }
        $(".level").css("display","block");
        $("#pasword").text("").addClass("hidden");
    } else if($(this).val().trim().length < 6 && $(this).val().trim().length!=0){
    $("#pasword").text("密码必须大于六位数，请重新输入").addClass("two");
}else{
    $("#pasword").text("").addClass("hidden");
}

})
// 密码确认
$(".text3").eq(2).blur(function () {
    if($(this).val().trim() == $(".text3").eq(1).val().trim()){
       $("#passwordTwo").removeClass("block") 
    }else{
        $("#passwordTwo").text("两次密码不一致，请重新输入").addClass("two");
    }
    

})

//  检查表单是否正确
$("#tiaoK").click(function(){
    if ($("#tiaoK").is(":checked")) {
    $(".anniu").css("background","#c62024")
    // return false
}else{
    $(".anniu").css("background","gray")
}
})

 /* 注册按钮的处理： */
    /* 思路：检查表单验证通过 && 图像验证码 && 手机短信验证码 && 是否勾选协议  把页面数据作为参数提交给服务器： */
    $(".anniu").click(function() {


        $(".text1").trigger("blur");
        $(".text2").trigger("focus");
        $(".text3").eq(0).trigger("focus");
        $(".text3").eq(1).trigger("focus");
        $(".text3").eq(2).trigger("focus");

        $(".text2").trigger("blur");
        $(".text3").eq(0).trigger("blur");
        $(".text3").eq(1).trigger("blur");
        $(".text3").eq(2).trigger("blur");


        // if ($(".form-group-error").length != 0) return;
        if ($(".text1").val() != imgCode) {
            alert("图形验证码不正确!");
            return;
        }
        // if ($(".text3").eq(0).val() != randomNumber) {
        //     alert("手机验证码不正确!");
        //     return;
        // }
       

        /* 发请求给服务器  注册： */
             /* 发请求给服务器  注册： */
             $.ajax({
                type: "post",
                url: "../server/register.php",
                data:`phone=${$(".text2").val()}&password=${$(".text3").eq(1).val()}`,
                //  
                dataType: "json",
                success: function(response) {
                    /* 注册成功： */
                    console.log(response, response.status);
    
                    if (response.status == "ok") {
                        console.log("++++");
    
                        /* 跳转到首页 */
                        window.location.href = "http://127.0.0.1/PHP/fk/src/html/first.html";
                    } else {
                        /* 注册失败： */
                        alert(response.msg);
                    }
                }
            });
            return false
    })
})
  
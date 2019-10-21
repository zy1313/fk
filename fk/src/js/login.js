$(()=>{
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
// 登录切换
$("#tags").children().click(function(){
    $(this).addClass("on").siblings().removeClass("on");
    // console.log($(".user_infor"));
    $(".user_infor").eq($(this).index()).css("display","block").siblings().css("display","none")

})

// 普通登录判断
    $("#vanclLogin").click(function(){
        if($("#vanclUserName").val().trim().length==0 && $("#vanclPassword").val().trim().length==0){
            $("#vanclUserNameError").css("visibility","visible")
        }else if($("#vanclUserName").val().trim().length!=0 && $("#vanclPassword").val().trim().length==0){
            $("#vanclPasswordError").css("visibility","visible");
            $("#vanclUserNameError").removeClass("visibility","visible")
        }else if($("#vanclUserName").val().trim().length==0 && $("#vanclPassword").val().trim().length!=0){
            $("#vanclPasswordError").removeClass("visibility","visible");
             $("#vanclUserNameError").css("visibility","visible")
        }
        else{
            $("#vanclUserNameError").removeClass("visibility","visible")
            $("#vanclPasswordError").removeClass("visibility","visible");
        }
        return false
    })
 
 
    // 登录按钮  
    $("#login").click(function() {        
        let usernameVal = $("#vanclUserName").val();
        let passwordVal = $("#vanclPassword").val();            
        $.ajax({
            type: "post",
            url: "../server/login.php",
            data: `username=${usernameVal}&password=${passwordVal}`,
            dataType: "json",
            success: function(response) {
                /* 登录成功 */
                if (response.status == "success") {
                    /* 跳转到首页 */
                    window.location.href = "http://127.0.0.1/PHP/fk/src/html/first.html";
                } else {
                    /* 注册失败： */
                    alert(response.msg);
                }

                /* 登录失败 */
            }
        });
        return false;

    })

    
})
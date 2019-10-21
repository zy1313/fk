$(()=>{
         
    $(".top").load("commonhead.html")
    new Promise(function(resolve, reject) {
        $.ajax({
            type: "get",
            url: "../server/list1.php",
            data: "data",
            dataType: "json",
            success: function (data) {
              renderUI(data)
              // console.log(data);
              resolve();
            }
        }); 
       
     
    }).then(function() {
        $(".contimg").mouseenter(function(){
            $(this).children().children().css("border","1px solid #a00000")
            $(this).siblings(".big").css("display","block")
        })
        $(".contimg").mouseleave(function(){
            $(this).children().children().css("border","")
            $(this).siblings(".big").css("display","none")
        })
    })  
    function renderUI(data) {
        console.log(data);
    
        let html = data.map((ele) => {
            return `
            <li>
            <div class="contimg"><a href="http://127.0.0.1/PHP/fk/src/html/detail.html"><img src=${ele.src} alt=""></a>
            <div class="teshui">198</div>
            <div class="newview"></div>
              </div>
            <p>
            <a href="" class="track" >${ele.title}
            </a>
             </p>
             <div class="Mpricediv0124">
                <span class="Sprice">售价￥<strong>${ele.price.substr(3)}</strong>
                </span>
            </div>
            <div class="big">
            <img src=${ele.src} alt="">
            <p>${ele.title}</p>
            <div class="number">产品编号<p>6373511</p></div>
                     <div class="Mpricediv0124">
                            <span class="Sprice">售价￥ <strong>${ele.price.substr(3)}</strong>
                                <div>好评100%</div>
                            </span>
                    </div>
        </div>
        </li>
            `
        }).join("");
        $(".contentul").html(html);
    }
    // 吸顶效果
     var fixHeight=$(".all").offset().top 
    $(window).scroll(function() { 
        if($(window).scrollTop()>=fixHeight){ 
             $(".all").css("display","none"); 
             $("#allfixed").css("display","block"); 
         }
         else{
             $(".all").css("display","block"); 
             $("#allfixed").css("display","none");
         }
          });
    

$(".footer").load("commonfooter.html") 
})
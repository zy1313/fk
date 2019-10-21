 $(()=>{
   $.ajax({
    type: "get",
    url: "../server/first.php",
    dataType: "json",
    success: function (data) {
       let fast=new Fast(data);
       fast.init(); 

    }

}); 

    // 数据渲染1
 class Fast{
    constructor(data){
    this.data=data;
    }
    init(){
        this.rend();
    }
    rend(){
        this.odiv=document.createElement("div");
        this.odiv.className="contentList";
        let html=this.data.map((ele)=>{
            return `<li>
            <a href="">
            <img src=${ele.src}></a>
            <div class="newproductname">
                <span>${ele.title}</span>
                </div>
            <div class="newprice">
                <span class="span1">${ele.priceA}</span>
                <span class="span2">${ele.priceB}</span>
                <span class="span3">充值后
                    <em>${ele.priceC}</em>
                    元</span>
            </div>
        </li>    `
        }).join("");
      let Html=`<div class="contentList"><ul>${html}</ul></div>`
      $(Html).insertAfter(".title");
        
    }
}


$.ajax({
    type: "get",
    url: "../server/firsttow.php",
    data: "data",
    dataType: "json",
    success: function (data) {
        let activity=new Activity(data);
        activity.init();
    }
});
// 数据渲染2
class Activity{
    constructor(data){
        this.data=data;
    }
    init(){
        this.rend();
    }
    rend(){
        this.odiv=document.createElement("div");
        this.odiv.className="newTxu";
        let html=this.data.map((ele)=>{
            return `
                 <li><a href=""><img src=${ele.src}></a>
                    
                </li>  `
        }).join("");
      let Html=`<div class="newTxu"><ul>${html}</ul></div>`
      $(Html).insertAfter(".newimg");
    //   $(".newRecom").append($(".newTxu"));
    }
}
// 数据渲染3
$.ajax({
    type: "get",
    url: "../server/firstthree.php",
    data: "data",
    dataType: "json",
    success: function (data) {
        let clothes=new Clothes(data);
        clothes.init();
    }
});

class Clothes{
    constructor(data){
        this.data=data;
    }
    init(){
        this.rend();
    }
    rend(){
        this.odiv=document.createElement("div");
        this.odiv.className="halfpicture";
        let html=this.data.map((ele)=>{
            return `
                 <li><a href=""> <img src=${ele.src}></a>
                   
                </li>  `
        }).join("");
      let Html=`<div class="halfpicture"><ul>${html}</ul></div>`
      $(Html).insertAfter(".halfimg");
    //   $(".newRecom").append($(".newTxu"));
    }
}
 })
 
 
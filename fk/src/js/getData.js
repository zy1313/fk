var oLis = $(".general").children(".item-wrap");
var data = [];
oLis.each(function(index) {
    let o = {};
    o.good_id = index + 1;
    o.src = this.getElementsByTagName("img")[0].src;
    o.title = this.getElementsByTagName("img")[0].alt;
    o.price = this.getElementsByClassName("def-price")[0].innerText.substr(1) * 1;
    o.disCount = this.getElementsByClassName("info-evaluate")[0] ? this.getElementsByClassName("info-evaluate")[0].innerText : 1000;
    o.shopName = this.getElementsByClassName("store-name")[0] ? this.getElementsByClassName("store-name")[0].innerText : "çš®çš®è™¾";
    data.push(o);
});



// var oLis = $("#seckill_2017_container").children().children();
// var data = [];
// oLis.each(function(index) {
//     let o = {};
//     o.good_id = index + 1;
//     o.src = this.getElementsByTagName("img")[0].src;
//     o.title = this.getElementsByClassName("new-miaosha-productname")[0].innerText;
//     o.priceA = this.getElementsByClassName("new-miaosha-oldprice")[0].innerText;
//     o.priceB = this.getElementsByClassName("new-miaosha-saleprice")[0].innerText;
//     o.priceC = this.getElementsByClassName("new-miaosha-afterdeposit")[0].children[0].innerText;
//     data.push(o);
// });

var oLis = $(".scListArea")
var data = [];
oLis.each(function(index) {
    let o = {};
    o.good_id = index + 1;
    o.src = this.getElementsByTagName("img")[0].src;
    o.title=this.getElementsByClassName("track")[0].title;
    o.priceA=this.getElementsByClassName("teshui")[0].innerText;
    o.priceB=this.getElementsByClassName("Sprice")[0].innerText;
    data.push(o);
});





var main_warp = $(".main_warp").eq(2);
var mains = main_warp.children(".main");
var data = [];
for (var i = 1; i < mains.length; i++) {
    var current = mains[i].children[0].children;
    var dataArr = [];
    for (var j = 0; j < current.length; j++) {
        var item = current[j];
        var o = {};
        o.src = item.querySelector("img").src;
        o.title = item.querySelector("a").title;
        o.price = item.querySelector(".p_price").innerText;
        dataArr.push(o);
    }
    data.push(dataArr);
}




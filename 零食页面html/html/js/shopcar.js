var all = document.getElementById("all");
var box = document.getElementsByName("box");
var gdid = document.getElementsByName("gdid");
var price = document.getElementsByName("price");
var number = document.getElementsByName("number");
var totalMoney = document.getElementById("totalMoney");
var myArray = new Array(); var mynumber = new Array();     //记录购买的商品gdid与数目
var myprice = new Array();
//全选
function checkall() {

    var money = 0;
    if (all.checked) {
        for (var i = 0; i < box.length; i++) {
            box[i].checked = true;
            number[i].setAttribute("disabled", "disabled");
            var total = (parseFloat(price[i].innerText) * parseInt(number[i].value));
            money = money + total
            totalMoney.innerText = money;
            myArray[i] = gdid[i].innerText;      //全选状态记录购买的商品gdid与数目
            mynumber[i] = number[i].value;
            myprice[i] = price[i].innerText;

        }
       
    }
    else {
        for (var i = 0; i < box.length; i++) {
            box[i].checked = false;
            number[i].removeAttribute("disabled");
        }
        totalMoney.innerText = "0";
    }
}
//付款
function fukuan() {
    if (totalMoney.innerText == "0") {
        alert("无法付款");

    } else
        window.location.href = "shopcar.aspx?arr=" + myArray + "&number=" + mynumber + "&price=" + myprice;
}
//处理多选
for (var i = 0; i < box.length; i++) {
    box[i].index = i; number[i].index = i;
    var money = 0;
    box[i].onclick = function () {

        if (this.checked == true) {
            var s = parseFloat(price[this.index].innerText) * parseInt(number[this.index].value);

            money = money + s;
            totalMoney.innerText = money.toFixed(2);   //保留小数点后两位数

            number[this.index].setAttribute("disabled", "disabled");  //输入框禁用
            myArray[this.index] = gdid[this.index].innerText;        //多选状态记录购买的商品gdid与数目
            mynumber[this.index] = number[this.index].value;
            myprice[this.index] = price[this.index].innerText;
            console.log(myArray);
            console.log(mynumber);

        } else {
            var s = parseFloat(price[this.index].innerText) * parseInt(number[this.index].value);

            money = parseFloat(totalMoney.innerText) - s;

            totalMoney.innerText = money.toFixed(2);
            number[this.index].removeAttribute("disabled"); //输入框启用


        }
    }



}
    
   

   
  

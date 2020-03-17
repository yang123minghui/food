var m=true;
function change() {
    var money=document.getElementById("moneyicon");
    var total_money=document.getElementById("total_money");
    var a_001=document.getElementById("a_001");
    if (m)
    {
        money.setAttribute("class", "glyphicon glyphicon-eye-open");
        total_money.style.display="block";
        a_001.style.display="none";
        m=false;
    }
    else {
        money.setAttribute("class", "glyphicon glyphicon-eye-close");
        total_money.style.display="none";
        a_001.style.display="block";
        m=true;
    }


}
// $c=$('.str').text();
// var str=document.getElementsByTagName("str");
// // str.innerText=str.innerText.substring(0,3)+".";
// console.log($c);

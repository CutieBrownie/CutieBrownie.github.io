var penguin1 = 0;
var penguin2 = 0;
var penguin3 = 0;
var total = 0;

function buyPenguin1(){
    var totalPenguin1 = document.getElementById("penguin1");
    var choice = confirm("Woould you like to purchase the product?");
    var totalOfOrder = document.getElementById("total");
    if (choice) {
        var amount = parseInt(prompt("How many items would you like to purchase?"));

        if(isNaN(amount)){
            amount = 0;
        }
        total = parseInt(total);
        penguin1 = parseInt(penguin1);
        alert(amount+" in your cart.");
        total +=amount;
        penguin1 += amount;
        totalPenguin1.innerHTML="Total of penguin1: "+penguin1;
        totalOfOrder.innerHTML = "Total order: "+total;
    }
    }

function buyPenguin2(){
    var choice = confirm("Woould you like to purchase the product?");
    var totalPenguin2 = document.getElementById("penguin2");
    var totalOfOrder = document.getElementById("total");
    if (choice) {
        var amount = parseInt(prompt("How many items would you like to purchase?"));
        if(isNaN(amount)){
            amount = 0;
        }
        amount = parseInt(amount);
        total = parseInt(total);
        penguin2 = parseInt(penguin2);
        alert(amount+" in your cart.");
        total +=amount;
        penguin2 += amount;
        totalPenguin2.innerHTML="Total of penguin2: "+penguin2;
        totalOfOrder.innerHTML = "Total order: "+total;
    }    
}

function buyPenguin3(){
    var choice = confirm("Woould you like to purchase the product?");
    var totalOfOrder = document.getElementById("total");
    var totalPenguin3 = document.getElementById("penguin3");
    if (choice) {
        var amount = parseInt(prompt("How many items would you like to purchase?"));
        if(isNaN(amount)){
            amount = 0;
        }
        amount = parseInt(amount);
        total = parseInt(total);
        penguin2 = parseInt(penguin2);
        alert(amount+" in your cart.");
        total +=amount;
        penguin3 += amount;
        totalPenguin3.innerHTML="Total of penguin3: "+penguin3;
        totalOfOrder.innerHTML = "Total order: "+total;
    }
    }
function infoPen1(){
    document.getElementById("detail").innerHTML="sitting white-grey penguin";
}
function original(){
    document.getElementById("detail").innerHTML="See more details";
}
function infoPen2(){
    document.getElementById("detail2").innerHTML="lying penguin";
}
function original2(){
    document.getElementById("detail2").innerHTML="See more details";
}
function infoPen3(){
    document.getElementById("detail3").innerHTML="red legs penguin";
}
function original3(){
    document.getElementById("detail3").innerHTML="See more details";
}

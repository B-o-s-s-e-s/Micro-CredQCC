// click button and change the words
function myfunction(){
  document.getElementById("demo").innerHTML = "Click on Reset";
}
//Reset Button
function textReset(){
  document.getElementById("demo").innerHTML = "Click on Submit";
}


//calcultor
function Add() {
  document.getElementById("one").innerHTML=document.getElementById("BOX").value * document.getElementById("BOX2").value;
}
  
  function Subtract () {
  document.getElementById("one").innerHTML=document.getElementById("BOX").value / document.getElementById("BOX2").value;
}
  
  function Time () {
  document.getElementById("one").innerHTML=+document.getElementById("BOX").value + +document.getElementById("BOX2").value;
}
  
  function Division() {
  document.getElementById("one").innerHTML=document.getElementById("BOX").value - document.getElementById("BOX2").value;
}

//Introduce Ourself
var myself = {
  name: "",
  college: "",
  major: "",
  goal: "",
}

function introduceOurself(){
  myself.name =  prompt("What is your name?");
  myself.college = prompt("What college are you?");
  myself.major = prompt("What is your major?");
  myself.goal = prompt("What is your goal?");

  document.getElementById("showHere").innerHTML = ("My name is " + myself.name +" . " +
                                                  " I am in " +  myself.college +
                                                   " and study " + myself.major + " . " + 
                                                   " I want to become " + myself.goal + " . "
                                                  );
    
  }

  //Grocery List
  var item = ["Pasta", "Rice", "Eggs", "Chicken", "Cheese"];
  var itemPrices = [10, 50, 5, 30, 8];

  var cart = [];
  var cartPrices = [];
  var sum = 0;
  var ninja = {
      name: "",
      phone: "",
      address: "",
      cardNumber: "",
  }

  function totalPrice(){
    var sum = 0;
    for(var i = 0; i < itemPrices.length; i++){
      sum += itemPrices[i];
    }
  }

  // Ask input user input for checkout
  function addToCart(n){
    if(n == 10){
      var itemAmount = document.getElementById("pastaInput").value;
      // var itemPrice = document.getElementById("pastaPrice").values;
      var totalItemPrice = itemAmount * itemPrices[0];
      cart.push("Push");
      console.log(totalItemPrice);
      document.getElementById("pasta").innerHTML = ("$" + totalItemPrice);
      cartPrices.push(totalItemPrice);
      sum += totalItemPrice;
    }
    else if(n == 50){
      var itemAmount = document.getElementById("riceInput").value;
      // var itemPrice = document.getElementById("pastaPrice").values;
      var totalItemPrice = itemAmount * itemPrices[1];
      cart.push("Push");
      console.log(totalItemPrice);
      document.getElementById("rice").innerHTML = ("$" + totalItemPrice);
      cartPrices.push(totalItemPrice);
      sum += totalItemPrice;
    }
    else if(n == 5){
      var itemAmount = document.getElementById("eggsInput").value;
      // var itemPrice = document.getElementById("pastaPrice").values;
      var totalItemPrice = itemAmount * itemPrices[2];
      cart.push("Push");
      console.log(totalItemPrice);
      document.getElementById("eggs").innerHTML = ("$" + totalItemPrice);
      cartPrices.push(totalItemPrice);
      sum += totalItemPrice;
    }
    else if(n == 30){
      var itemAmount = document.getElementById("chickenInput").value;
      // var itemPrice = document.getElementById("pastaPrice").values;
      var totalItemPrice = itemAmount * itemPrices[3];
      cart.push("Push");
      console.log(totalItemPrice);
      document.getElementById("chicken").innerHTML = ("$" + totalItemPrice);
      cartPrices.push(totalItemPrice);
      sum += totalItemPrice;
    }
    else{
      var itemAmount = document.getElementById("cheeseInput").value;
      // var itemPrice = document.getElementById("pastaPrice").values;
      var totalItemPrice = itemAmount * itemPrices[4];
      cart.push("Push");
      console.log(totalItemPrice);
      document.getElementById("cheese").innerHTML = ("$" + totalItemPrice);
      cartPrices.push(totalItemPrice);
      sum += totalItemPrice;
    }
    
  }
  function checkOut(){
    // inside prompt put HTML
    // inside prompt put a form
    ninja.name =  prompt("Name: ");
    ninja.phone = prompt("Phone: ");
    ninja.address = prompt("Address: ");
    ninja.cardNumber = prompt("Card Number: ");
    document.getElementById("ninjaDesc").innerHTML = ("Name:" +name + "Phone:" +phone + "address" +address);
  }

  function remove( name, price ){
    var index = findIndex(price)
    if (index == null){
      return alert("Cannot Remove");
    }
    cart.remove(index);
    cartPrices.remove(index);
  }

  function findIndex( price){
    var index = 0; 
    for(var i = 0; i < cart.length; i++){
      if (cart[i] == price){
        return index;
      }
    }
    return null;
  }

  function display(){
    window.alert("The total is " + sum);
  }


// Mile Tracker (Have Javascript, not html&css)

//Color button

var index = 0;
var myList = ["red", "orange", "yellow" ,  "blue", "green", "blue" , "indiogo", "vilote"];

function up(){
    if(index >= 0) {
        // document.getElementById('roygbiv').innerHTML = myList[index];
        index--;
        updateScreen();
    }
}
function down(){
    if(index <= myList.length-1){
        index++;
        updateScreen();
    }
}
function updateScreen(){
    document.getElementById('roygbiv').innerHTML = myList[index];
}


// JQ

$(document).ready(function(){
  $(".leftBtn").click(function(){
  $("#roygbiv").hide///90;
});
});

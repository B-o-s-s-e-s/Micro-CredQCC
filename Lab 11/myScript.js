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
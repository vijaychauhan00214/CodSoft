let currentdisplay = "";
document.querySelector("#display").value = currentdisplay;

function c() {
  currentdisplay = "";
  document.querySelector("#display").value = currentdisplay;
}

function one() {
  currentdisplay = currentdisplay + "1";
  document.querySelector("#display").value = currentdisplay;
}
function two() {
  currentdisplay = currentdisplay + "2";
  document.querySelector("#display").value = currentdisplay;
}
function add() {
  currentdisplay = currentdisplay + "+";
  document.querySelector("#display").value = currentdisplay;
}
function three() {
  currentdisplay = currentdisplay + "3";
  document.querySelector("#display").value = currentdisplay;
}
function four() {
  currentdisplay = currentdisplay + "4";
  document.querySelector("#display").value = currentdisplay;
}
function sub() {
  currentdisplay = currentdisplay + "-";
  document.querySelector("#display").value = currentdisplay;
}
function five() {
  currentdisplay = currentdisplay + "5";
  document.querySelector("#display").value = currentdisplay;
}
function six() {
  currentdisplay = currentdisplay + "6";
  document.querySelector("#display").value = currentdisplay;
}
function multi() {
  currentdisplay = currentdisplay + "*";
  document.querySelector("#display").value = currentdisplay;
}
function seven() {
  currentdisplay = currentdisplay + "7";
  document.querySelector("#display").value = currentdisplay;
}
function eight() {
  currentdisplay = currentdisplay + "8";
  document.querySelector("#display").value = currentdisplay;
}
function divide() {
  currentdisplay = currentdisplay + "/";
  document.querySelector("#display").value = currentdisplay;
}
function nine() {
  currentdisplay = currentdisplay + "9";
  document.querySelector("#display").value = currentdisplay;
}
function zero() {
  currentdisplay = currentdisplay + "0";
  document.querySelector("#display").value = currentdisplay;
}
function fstop() {
  currentdisplay = currentdisplay + ".";
  document.querySelector("#display").value = currentdisplay;
}

function ans() {
  currentdisplay = eval(currentdisplay);
  document.querySelector("#display").value = currentdisplay;
}

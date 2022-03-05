function end()
{
var checkBox = document.getElementsByClassName("duck-4").style.left = "-50%";
if (checkBox == true){
alert("you win");
}
else {
    alert("you lose");

}
}
setTimeout( function() { end(); }, 1000);
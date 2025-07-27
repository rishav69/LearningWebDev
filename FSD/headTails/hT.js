function flip() {
    var a = Math.floor(Math.random() * 2) + 1;
    document.getElementById('ht').innerHTML = (a === 1) ? "HEADS" : "TAILS";
}
function reset(){
    document.getElementById('ht').innerHTML='';
}
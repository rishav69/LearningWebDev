function rev(){
    let n=document.getElementsById("str").value;
    let r='';
    for(let i=n.length-1;i>=0;i--){
        r += n[i];
    }
    document.getElementById("display").innerHTML=r;
}
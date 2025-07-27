const a=Math.floor(Math.random()*(100-1))+1;

function gn(){
    const n = Number(document.getElementById("num").value);
    if (a>n){
        document.getElementById("display").innerHTML=`${n} is less than the number generated...!!!`
    }

    else if(a<n){
        document.getElementById("display").innerHTML=`${n} is greater than the number generated...!!!`
    }

    else {
        document.getElementById("display").innerHTML=`you got the number...!!!`
    }
}
function add(x1, x2){
    return x1+x2;
}
function sub(x1,x2){
    return x1-x2;
}
function mul(x1,x2){
    return x1*x2;
}
function div(x1,x2){
    if(x2==0){
        console.log("No se puede dividir");

    }else if(x1==0){
        console.log("El resultado es cero");
    }else{
        return x1/x2;
    }

}
console.log(div(0,3));
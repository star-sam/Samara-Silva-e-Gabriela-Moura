let numeros=[]
for (let i=0; i<5; i++){
    numeros[i]=prompt("Digite um número");
}
numeros.sort(function (a,b){
    return a-b;
})
alert("O menor número é "+numeros[0])
alert("O maior número é "+numeros[numeros.length-1])

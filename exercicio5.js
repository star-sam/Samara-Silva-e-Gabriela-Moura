var numeros=[]
var c=0;
var soma=0
do{
    numeros.push(parseInt(prompt("Digite um número ou 0 para parar")));
    c++;
}while(numeros[c-1]!=0)
for(let i=0;i<numeros.length;i++){
    soma+=numeros[i];
}
alert("A soma de todos os números é de "+soma)

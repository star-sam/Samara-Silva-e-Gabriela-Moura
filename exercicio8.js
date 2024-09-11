function encontrarMedia(vetor){
    let soma=0;
    for(let i=0; i<vetor.length; i++){
        soma+=vetor[i];
    }
    let media=soma/vetor.length;
    return media
}
function criarVetor(qtditens){
    let vetor=[];
    for(let i=0;i<qtditens; i++){
        vetor[i]= parseInt(prompt("Digite o valor"+(i+1)))
    }
    return vetor
}
let quantidade=parseInt(prompt("Digite a quantidade de valores"))
const array = criarVetor(quantidade)
alert(encontrarMedia(array))
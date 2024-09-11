function contarOcorrencias(palavras, palavraProcurada){
    let contagem = 0;
    for (let i = 0; i < palavras.legth; i++) {
        if (palavras[i]===palavraProcurada) {
            contagem++;
        }
    }

    return contagem;
}
function contarPalavras(){
    const palavras = ["maçã", "banana", "laranja", "goiaba", "manga", "pera"];
    const palavraProcurada = prompt("Digite a palavra que deseja contar:");
    if (!palavraProcurada){
        alert("Você deve inserir uma palavra.");
        return;
    }
const contagem = contarOcorrencias(palavras, palavraProcurada);
alert(`A palavra "${palavraProcurada}"aparece ${contagem} vez(es) no vetor`);


}
contarPalavras();
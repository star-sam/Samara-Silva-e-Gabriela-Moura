//function exercicio() {
    //const vetor = [12, 9, 437, 534, 29, 4, 57]
    //const numero = parseInt(prompt("Digite um número"));
    //let novo = vetor.filter(function (num) { return num > numero })
    //alert(novo)
//}
function filtrarnumerosmaiores(vetor,valorespecifico){
	let novovetor = Array();
	for (let i=0; i<vetor.length; i++){
		if (vetor[i]>valorespecifico){
			novovetor.push(vetor[i]);
		}
	}
	return novovetor;
}
let numeros = [1,2,3,4,5,6,7,8,9,10];
let valorespecifico = parseInt(prompt("Digite o número que você deseja comparar de 1 a 9"));
let resultado = filtrarnumerosmaiores(numeros,valorespecifico);
alert("O novo vetor com números maiores que"+valorespecifico+": "+resultado);
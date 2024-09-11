var idade
= parseInt(prompt(" Digite sua idade "))
if(idade<0){
	alert("A idade deve ser maior que 0")
}
else if(idade<=12){
	alert("Você é uma criança.")
}
else if(idade<=18){
	alert("Você é um adolescente.")
}
else if (idade<=64){
	alert("Você é um adulto.")
}
else if (idade<=120){
	alert("Você é um idoso.")
}
else{
	alert(" Você está morto!")
}
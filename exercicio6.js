var numero=0;
  while(numero!=5){
	  numero = parseInt(prompt("Digite um número de 1 a 10"));
	  if(numero>10){
		  alert("número inválido");
	  }else if(numero!== 5){
		  alert(" Você errou o numero, tente novamente.");
	  }
  }
  alert("Parabens");
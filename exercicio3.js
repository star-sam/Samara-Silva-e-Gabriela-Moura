var numero=
parseInt (prompt("Digite um número de 1 a 7 para obter um dia da semana correspondente:"))
var diadasemana;
switch(numero){
	case 1:
	diadasemana="Domingo";
	break
	case 2:
	diadasemana="Segunda-feira";
	break
	case 3:
	diadasemana="Terça-feira";
	break
	case 4:
	diadasemana="Quarta-feira";
	break
	case 5:
	diadasemana="Quinta-feira";
	break
	case 6:
	diadasemana="Sexta-feira";
	break
	case 7:
	diadasemana="Sábado";
	break
	default:
	diadasemana="Dígito inválido."
break
}
alert(diadasemana)
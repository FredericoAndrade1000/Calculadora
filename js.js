var inputAction = "";
var display = document.getElementById('display').value;

//SAIDA PARA DISPLAY
function output(){
	var display = document.getElementById('display').value;
	if (display == "0"){display = "";}
	
	//LIMPAR TODOS OS CARACTERES
	if (inputAction == "limpar"){
		display = "0"
		inputAction = "";
	}
	
	//LIMPAR UM CARACTERE
	if (inputAction == "limparCaractere"){
		display = display.slice(0, -1);
		inputAction = "";
		}
	
	//IGUALAR
	if (inputAction == "igualar"){
		inputAction = "";
		try{
			display = eval(display);
			document.getElementById("display").style.borderColor = "gray";
			document.getElementById("display").style.borderWidth = "1px";
		}
		catch(e){
			document.getElementById("display").style.borderColor = "red";
			document.getElementById("display").style.borderWidth = "1px";
		}
		
	}
	//INVERTE VALOR
	if (inputAction == "inverter"){
		display = display * -1;
		inputAction = "";
	}
	
	//ADICIONAR VALOR PARA DISPLAY
	var iA = inputAction;
	var dlen = display.length;
	if (iA == "+" || iA == "-" || iA == "*" || iA == "/" || iA == ".") {
		if (display.substr(-1) == "+" || display.substr(-1) == "-" || display.substr(-1) == "*" || display.substr(-1) == "/" || display.substr(-1) == "."){
			inputAction = "";
		}
		if (dlen < 2 && display == "0"){
			inputAction = "";
		}
	}
	
	display = display + inputAction;
	
	if (display.length <= 10 && display.length < 14){
	document.getElementById("display").style.fontSize = "50px";
	}
	if (display.length > 10 && display.length < 14){
		document.getElementById("display").style.fontSize = "35px";
	}
	if (display.length > 15 && display.length < 43){
	document.getElementById("display").style.fontSize = "25px";
	}
	if (display.length > 43){
		document.getElementById("display").style.fontSize = "15px";
	}
	
	if (display == ""){display = "0";}
	if (display == "/" || display == "+" || display == "*"  || display == "*"){display = "0";}
	
	//ESCREVER
	document.getElementById('display').value = display;
}

//FUNÇÕES DOS BOTÕES 
function b1(){
	inputAction = "1";
	output();
}
function b2(){
	inputAction = "2";
	output();
}
function b3(){
	inputAction = "3";
	output();
}
function b4(){
	inputAction = "4";
	output();
}
function b5(){
	inputAction = "5";
	output();
}
function b6(){
	inputAction = "6";
	output();
}
function b7(){
	inputAction = "7";
	output();
}
function b8(){
	inputAction = "8";
	output();
}
function b9(){
	inputAction = "9";
	output();
}
function b0(){
	inputAction = "0";
	output();
}
function somar(){
	inputAction = "+";
	output();
}
function subtrair(){
	inputAction = "-";
	output();
}
function dividir(){
	inputAction = "/";
	output();
}
function multiplicar(){
	inputAction = "*";
	output();
}
function igualar(){
	inputAction = "igualar";
	output();
}
function posFloat(){
	console
	inputAction = ".";
	output();
}
function limpar(){
	inputAction = "limpar";
	output();
}
function limparCaractere(){
	inputAction = "limparCaractere";
	output();
}
function inverter(){
	inputAction = "inverter";
	output();
}
function percent(){
	inputAction = "*(n/100)";
	output();
}

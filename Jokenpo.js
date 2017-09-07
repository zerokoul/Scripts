var player = "";
var cpu = "CPU";
var escolhaPlayer;
var escolhaCpu;
var valorCpu;
var placarCpu = 0;
var placarPlayer = 0;

player = prompt("Qual seu nome?");
//alert("Ok vamos começar!");
function imgPedra(){
	document.getElementById("imgPlayer").src = "https://imagizer.imageshack.us/v2/192x216q90/922/6pZZVM.png";
}
function imgPapel(){
	document.getElementById("imgPlayer").src = "https://imagizer.imageshack.us/v2/212x220q90/923/RmInWG.png";
}
function imgTesoura(){
	document.getElementById("imgPlayer").src = "https://imagizer.imageshack.us/v2/155x219q90/922/cTgyN5.png";
}

function escolherPedra(){
		escolhaPlayer = "pedra";
		imgPedra();
		console.log(player + " escolheu: " + escolhaPlayer);
		}
function escolherPapel(){
		escolhaPlayer = "papel";
		imgPapel();
		console.log(player + " escolheu: " + escolhaPlayer);;
		}		
function escolherTesoura(){
		escolhaPlayer = "tesoura";
		imgTesoura();
		console.log(player + " escolheu: " + escolhaPlayer);
		}
function ganhador(name){
	if (name == "cpu") {
		placarCpu += 1;
		document.getElementById("inpCpu").value = placarCpu;
		setTimeout("alert(cpu + ' ganhou!')", 1000);
	}
		else {
			placarPlayer += 1;
		document.getElementById("inpPlayer").value = placarPlayer;
		setTimeout("alert(player + ' ganhou!')", 1000);
		}
}
function reiniciar(){
	document.getElementById("imgPlayer").src = "https://imagizer.imageshack.us/v2/212x220q90/922/xUokpS.png";
	document.getElementById("imgCpu").src = "https://imagizer.imageshack.us/v2/212x220q90/922/xUokpS.png";
	escolhaCpu = null;
	escolhaPlayer = null;
}
		 // Escolha da CPU
		function cpuEscolhe(){
			valorCpu = Math.random(0, 1);
			if (valorCpu <= 0.3){
				escolhaCpu = "pedra";
				document.getElementById("imgCpu").src = "https://imagizer.imageshack.us/v2/192x216q90/922/6pZZVM.png";
			}	
			else if(valorCpu > 0.3 && valorCpu <= 0.6){
				escolhaCpu = "papel";
				document.getElementById("imgCpu").src = "https://imagizer.imageshack.us/v2/212x220q90/923/RmInWG.png";
			}	
			else {
				escolhaCpu = "tesoura";
				document.getElementById("imgCpu").src = "https://imagizer.imageshack.us/v2/155x219q90/922/cTgyN5.png";
			}
			console.log(cpu + " escolheu: " + escolhaCpu);
		}

// Verifica quem ganhou
function jogar(){
	if(escolhaPlayer != null){
		cpuEscolhe();
	}
	if (escolhaPlayer != null && escolhaCpu != null){
		switch (escolhaPlayer){
	// Se o player jogar Pedra
	case "pedra":
	if (escolhaCpu == "papel") {
		ganhador('cpu');
	}
	else if (escolhaCpu == "tesoura") {
	ganhador('player');
		}
	else 
		alert("Empate!");
	break;
	
	// Se o player jogar Papel
	case "papel":
	if (escolhaCpu == "pedra"){ 
		ganhador('player');
		}
	else if (escolhaCpu == "tesoura") {
		ganhador('cpu');
	}
	else 
		alert("Empate!");
	break;
	
	// Se o player jogar Tesoura
	case "tesoura":
	if (escolhaCpu == "pedra"){
		ganhador('cpu');
	}
	else if (escolhaCpu == "papel"){
		ganhador('player');
	}
	else 
		alert("Empate!");
	break;
	
	default:
	alert("Escolha do " + player + " invalida");
	break;
	}
}
	else {
		alert("Um dos jogadores não escolheu!");
	}
}
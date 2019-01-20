let cuttingArea = document.querySelector('#cuttingArea');
let scoreKeeper = document.querySelector('#scoreKeeper');
let lifeKeeper = document.querySelector('#lifeKeeper');
let finalScore = document.querySelector('#finalScore');
let playerRank = document.querySelector('#playerRank');
let body = document.querySelector('body');
let trueFinalScore = null;

scoreKeeper.innerText = 0;
lifeKeeper.innerText = 6;

initializeFruitScopeContainer();

//as

//-------------------------------------------------------------
							//Fruits
//-------------------------------------------------------------
function initializeFruitScopeContainer(){

setInterval(spawnApple,1400);

function spawnApple(){

	let apple = document.createElement('div');
	apple.classList.add('appleClass');
	body.append(apple);

	apple.addEventListener("mouseleave",killApple)

	function killApple(){
			let appleSndfx = document.createElement('audio');
			appleSndfx.autoplay = true;
			appleSndfx.Muted = true;
			appleSndfx.setAttribute("src","media/sounds/medium.wav");
			body.append(appleSndfx);




			apple.classList.add('killedApple');
			setTimeout(function(){
      		apple.remove();
    		}, 600)
			scoreKeeper.innerText = parseFloat(scoreKeeper.innerText) + 1;
			scoreKeeper.innerText.toString();
			finalScore.innerText = scoreKeeper.innerText;
			clearInterval(fruitInterval);

	}





	let positionY = 0;
	let positionX = Math.floor(Math.random() * 90);
	let positionWild = Math.floor(Math.random() * 90);

	let fruitInterval = setInterval(fruitMove,20)






	function fruitMove(){
			positionX++;
			positionY++;
			apple.style.top = positionY + "vh";
			apple.style.left = positionX + "vw";


			if(apple.style.top == '120vh'){

			let failSound = document.createElement('audio');
			failSound.autoplay = true;
			failSound.Muted = true;
			failSound.setAttribute("src","media/sounds/robloxdeath.mp3");
			body.append(failSound);


			apple.remove();
			clearInterval(fruitInterval);
			lifeKeeper.innerText = parseFloat(lifeKeeper.innerText) - 1;
			lifeKeeper.innerText.toString();
			}


			if(lifeKeeper.innerText<=0){
			gameoverModal.style.display='block';
			}

	}

}

//-----------------------------------------------------------------

setInterval(spawnBanana,5000);

setInterval(spawnBanana,9000);


function spawnBanana(){

	let banana = document.createElement('div');
	banana.classList.add('bananaClass');
	body.append(banana);

	banana.addEventListener("mouseleave",killBanana)

	function killBanana(){
			let bananaSndfx = document.createElement('audio');
			bananaSndfx.autoplay = true;
			bananaSndfx.Muted = true;
			bananaSndfx.setAttribute("src","media/sounds/light.wav");
			body.append(bananaSndfx);


			banana.classList.add('killedBanana');
			setTimeout(function(){
      		banana.remove();
    		}, 600)


			scoreKeeper.innerText = parseFloat(scoreKeeper.innerText) + 1;
			scoreKeeper.innerText.toString();
			finalScore.innerText = scoreKeeper.innerText;
			clearInterval(fruitInterval);

	}





	let positionY = 0;
	let positionX = Math.floor(Math.random() * 90);
	let positionWild = Math.floor(Math.random() * 90);

	let fruitInterval = setInterval(fruitMove,20)






	function fruitMove(){
			positionX++;
			positionY++;
			banana.style.top = positionY + "vh";
			banana.style.left = positionX + "vw";


			if(banana.style.top == '120vh'){


			let failSound = document.createElement('audio');
			failSound.autoplay = true;
			failSound.Muted = true;
			failSound.setAttribute("src","media/sounds/robloxdeath.mp3");
			body.append(failSound);



			banana.remove();
			clearInterval(fruitInterval);
			lifeKeeper.innerText = parseFloat(lifeKeeper.innerText) - 1;
			lifeKeeper.innerText.toString();
			}


			if(lifeKeeper.innerText<=0){
			gameoverModal.style.display='block';
			}

	}

}
//-------------------------------------------------------------------




setInterval(spawnPeach,3800);


function spawnPeach(){

	let peach = document.createElement('div');
	peach.classList.add('peachClass');
	body.append(peach);

	peach.addEventListener("mouseleave",killPeach)

	function killPeach(){

			let peachSndfx = document.createElement('audio');
			peachSndfx.autoplay = true;
			peachSndfx.Muted = true;
			peachSndfx.setAttribute("src","media/sounds/heavyslash.wav");
			body.append(peachSndfx);

			peach.classList.add('killedPeach');
			setTimeout(function(){
      		peach.remove();
    		}, 600)
			scoreKeeper.innerText = parseFloat(scoreKeeper.innerText) + 1;
			scoreKeeper.innerText.toString();
			finalScore.innerText = scoreKeeper.innerText;
			clearInterval(fruitInterval);

	}





	let positionY = 0;
	let positionX = Math.floor(Math.random() * 90);
	let positionWild = Math.floor(Math.random() * 90);

	let fruitInterval = setInterval(fruitMove,20)






	function fruitMove(){
			positionX++;
			positionY++;
			peach.style.top = positionY + "vh";
			peach.style.left = positionX + "vw";


			if(peach.style.top == '120vh'){

			let failSound = document.createElement('audio');
			failSound.autoplay = true;
			failSound.Muted = true;
			failSound.setAttribute("src","media/sounds/robloxdeath.mp3");
			body.append(failSound);


			peach.remove();
			clearInterval(fruitInterval);
			lifeKeeper.innerText = parseFloat(lifeKeeper.innerText) - 1;
			lifeKeeper.innerText.toString();
			}


			if(lifeKeeper.innerText<=0){
			gameoverModal.style.display='block';
			}
	}

}



//------------------------------------------------------------------------------

setInterval(spawnWatermelon,3000);



function spawnWatermelon(){

	let watermelon = document.createElement('div');
	watermelon.classList.add('watermelonClass');
	body.append(watermelon);

	watermelon.addEventListener("mouseleave",killWatermelon)

	function killWatermelon(){

			let watermelonSndfx = document.createElement('audio');
			watermelonSndfx.autoplay = true;
			watermelonSndfx.Muted = true;
			watermelonSndfx.setAttribute("src","media/sounds/heavyslash.wav");
			body.append(watermelonSndfx);

			watermelon.classList.add('killedWatermelon');
			setTimeout(function(){
      		watermelon.remove();
    		}, 600)
			scoreKeeper.innerText = parseFloat(scoreKeeper.innerText) + 1;
			scoreKeeper.innerText.toString();
			finalScore.innerText = scoreKeeper.innerText;
			clearInterval(fruitInterval);
				 return finalScore;

	}





	let positionY = 0;
	let positionX = Math.floor(Math.random() * 90);
	let positionWild = Math.floor(Math.random() * 90);

	let fruitInterval = setInterval(fruitMove,20)






	function fruitMove(){
			positionX++;
			positionY++;
			watermelon.style.top = positionY + "vh";
			watermelon.style.left = positionX + "vw";


			if(watermelon.style.top == '120vh'){


			let failSound = document.createElement('audio');
			failSound.autoplay = true;
			failSound.Muted = true;
			failSound.setAttribute("src","media/sounds/robloxdeath.mp3");
			body.append(failSound);


			watermelon.remove();
			clearInterval(fruitInterval);
			lifeKeeper.innerText = parseFloat(lifeKeeper.innerText) - 1;
			lifeKeeper.innerText.toString();
			}

			if(lifeKeeper.innerText<=0){
			gameoverModal.style.display='block';
			}

	}

}
//-------------------------------------------------------------------




setInterval(spawnPear,5700);
setInterval(spawnPear,28000);
setInterval(spawnPear,30000);


function spawnPear(){

	let pear = document.createElement('div');
	pear.classList.add('pearClass');
	body.append(pear);

	pear.addEventListener("mouseleave",killPear)

	function killPear(){

			let pearSndfx = document.createElement('audio');
			pearSndfx.autoplay = true;
			pearSndfx.Muted = true;
			pearSndfx.setAttribute("src","media/sounds/medium.wav");
			body.append(pearSndfx);

			pear.classList.add('killedPear');
			setTimeout(function(){
      		pear.remove();
    		}, 600)
			scoreKeeper.innerText = parseFloat(scoreKeeper.innerText) + 1;
			scoreKeeper.innerText.toString();
			 finalScore.innerText = scoreKeeper.innerText;
			clearInterval(fruitInterval);
	}





	let positionY = 0;
	let positionX = Math.floor(Math.random() * 90);
	let positionWild = Math.floor(Math.random() * 90);

	let fruitInterval = setInterval(fruitMove,20)






	function fruitMove(){
			positionX++;
			positionY++;
			pear.style.top = positionY + "vh";
			pear.style.left = positionX + "vw";


			if(pear.style.top == '120vh'){


			let failSound = document.createElement('audio');
			failSound.autoplay = true;
			failSound.Muted = true;
			failSound.setAttribute("src","media/sounds/robloxdeath.mp3");
			body.append(failSound);


			pear.remove();
			clearInterval(fruitInterval);
			lifeKeeper.innerText = parseFloat(lifeKeeper.innerText) - 1;
			lifeKeeper.innerText.toString();
			}

			if(lifeKeeper.innerText<=0){
			gameoverModal.style.display='block';
			}

	}

}

}




//----------------------------------------------------------
						//BOMBS!!
//----------------------------------------------------------


setInterval(spawnBombs,8000);
setInterval(spawnBombs,30000);
setInterval(spawnBombs,29000);
setInterval(spawnBombs,29000);
setInterval(spawnBombs,26000);




function spawnBombs(){
let bomb = document.createElement('div');
	bomb.classList.add('bombClass');
	body.append(bomb);



	bomb.addEventListener("mouseleave",hitBomb);

		function hitBomb(){
			let bombBang = document.createElement('audio');
			bombBang.autoplay = true;
			bombBang.Muted = true;
			bombBang.setAttribute("src","media/sounds/bomb.wav");
			body.append(bombBang);


			bomb.classList.add('killBomb');
			setTimeout(function(){
      		bomb.remove();
    		}, 200)
			lifeKeeper.innerText = parseFloat(lifeKeeper.innerText) - 1;
			if(lifeKeeper.innerText<=0){
			gameoverModal.style.display='block';
			}

			clearInterval(bombInterval);
		}

let bombInterval = setInterval(bombMove,20)

let positionY = 0;
let positionX = Math.random() * 90;

function bombMove(){

	positionY++;
	bomb.style.top = positionY + "vh";
	bomb.style.left = positionX + "vw";


		if(bomb.style.top == '90vh'){
		bomb.remove();
		clearInterval(bombInterval);
	}
}
}

//---------------------------------------------------------
					//GameOver
//---------------------------------------------------------


let gameoverModal = document.querySelector('.gameoverModal');
let playAgain = document.querySelector('#keep');

playAgain.addEventListener("click",function(){
	location.reload();
})

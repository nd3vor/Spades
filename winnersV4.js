
//Winners function will take in each of the players' arrays of books they have won. 
//The winners function will have 4 arguements which will be each of the players' takebook array

function Winners(p1Score, p2Score, p3Score, p4Score){

	let scores = [];
	let winners = [];
	let highScore = 0;
  let playerScores = "";
  let winningMessage = "";

	scores.push(p1Score,p2Score,p3Score,p4Score);
	
	highScore = getHighScore(scores);

	for(i=0; i<scores.length; i++){
		if(highScore == scores[i]){
			winners.push(`Player${i+1}`);	
		}
	}
  for(i=0; i<4; i++){
		playerScores += `Player${i+1} Score: ${scores[i]} \n`;	
	}

  winningMessage += playerScores;

  if(winners.length < 2)
		winningMessage += "The winnner is " + winners[0];	
  else{
    winningMessage += "It's a tie! The winners are";
    for(i=0; i<winners.length; i++){
      winningMessage += " " + winners[i];
    }
  }
  winningMessage += "!";
  return winningMessage;
} 

function Compare(num1, num2){
	if(num1 > num2)
		return num1;
	else
		return num2;
}

function getHighScore(playerScores){
	let highScore = Compare(playerScores[0],playerScores[1]); 
	
	for(i=1; i<playerScores.length; i++){
		highScore = Compare(highScore,playerScores[i]) 
	}
	return highScore;
}

let p1 = 2;
let p2 = 4;
let p3 = 4;
let p4 = 3;
console.log(Winners(p1,p2,p3,p4));
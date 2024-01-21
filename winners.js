
//Winners function will take in each of the players' arrays of books they have won. 
//The winners function will have 4 arguements which will be each of the players' takebook array

function Winners(p1Books, p2Books, p3Books, p4Books){

	let scores = [];
	let p1Score = p1Books.length;
	let p2Score = p2Books.length;
	let p3Score = p3Books.length;
	let p4Score = p4Books.length;
	let winners = [];
	let highScore = 0;

	scores.push(p1Score,p2Score,p3Score,p4Score);
	
	highScore = getHighScore(scores);

	for(i=0; i<scores.length; i++){
		if(highScore == scores[i]){
			winners.push(`Player${i+1}`);	
		}
	}
	return winners	
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

let p1 = [2,3,4,5,4];
let p2 = [1,2,3,4];
let p3 = [1];
let p4 = [2,3];

console.log(Winners(p1,p2,p3,p4));


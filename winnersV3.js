
//Simply displays scores for you to compare as the user.

function Winners(p1Score, p2Score, p3Score, p4Score){

	let scores = [];
	let playerScores = "";

	scores.push(p1Score,p2Score,p3Score,p4Score);

	for(i=0; i<4; i++){
		playerScores+= `Player${i+1} Score: ${scores[i]} \n`;	
	}
		return playerScores;
} 

let p1 = 2;
let p2 = 3;
let p3 = 5;
let p4 = 3;
console.log(Winners(p1,p2,p3,p4));
const game = () => {
  let pScore = 0;
  let cScore = 0;
  const modal=document.querySelector(".modal");
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    const winner = document.querySelector(".winner");

 
  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");
    const restart=document.getElementById("restart");
    const quit=document.getElementById("quit");

    playBtn.addEventListener("click", () => {
      introScreen.classList.remove("fadeIn");
      introScreen.classList.add("fadeOut");
      match.classList.remove("fadeOut");
      match.classList.add("fadeIn");
    });

    restart.addEventListener("click", () => {
       pScore=0;
       cScore=0;
      modal.style.display="none";
       playerScore.textContent=0+"/5";
       computerScore.textContent=0+"/5";
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });

    quit.addEventListener("click", () => {
       modal.style.display="none";
       pScore=0;
       cScore=0;
       modal.style.display="none";
       playerScore.textContent=0+"/5";
       computerScore.textContent=0+"/5";
      match.style.transition="none";
      introScreen.classList.remove("fadeOut");
      match.classList.remove("fadeIn");
      introScreen.classList.add("fadeIn");
      match.classList.add("fadeOut");
      
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        winner.style.opacity=0;
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const result=document.getElementById("result");
    const won=document.getElementById("won");
    const lose=document.getElementById("lose");
     playerScore.textContent = pScore + "/5";
     computerScore.textContent = cScore + "/5";


    if(pScore===5 & cScore<5){
         // result.innerHTML ="<h1>You Won</h1>";
       pScore=0;
       cScore=0;
      setTimeout(() => {
         playerScore.textContent=0+"/5";
         computerScore.textContent=0+"/5";
       }, 2000);
      won.style.display="block";
      lose.style.display="none";
      modal.style.display="block";

        // Clear modal
        function clearModal(e) {
          if (e.target == modal) {
            modal.style.display = 'none';
          }
        }
        window.addEventListener('click', clearModal);

       winner.textContent="Choose an option";
       winner.style.color="skyblue";
    }
    
   if(pScore<5 & cScore===5)
      {
   
        // result.innerHTML ="<h1>You Lost</h1>"
      pScore=0;
       cScore=0;
       setTimeout(() => {
         playerScore.textContent=0+"/5";
         computerScore.textContent=0+"/5";
       }, 2000);
        lose.style.display="block";
        won.style.display="none";
        modal.style.display="block";


          // Clear modal
        function clearModal(e) {
          if (e.target == modal) {
            modal.style.display = 'none';
          }
        }
        window.addEventListener('click', clearModal);

        winner.textContent="Choose an option";
        winner.style.color="skyblue";
    }
      
  };

  const compareHands = (playerChoice, computerChoice) => {
    //Update Text
    
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.style.opacity=1;
      winner.textContent = "It is a tie";
        winner.style.color="yellow";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
         winner.style.opacity=1;
        winner.textContent = "Player Wins";
        winner.style.color="green";
        pScore++;
        updateScore();
        return;
      } else {
         winner.style.opacity=1;
        winner.textContent = "Computer Wins";
         winner.style.color="red";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
         winner.style.opacity=1;
        winner.textContent = "Computer Wins";
          winner.style.color="red";
        cScore++;
        updateScore();
        return;
      } else {
         winner.style.opacity=1;
        winner.textContent = "Player Wins";
         winner.style.color="green";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
         winner.style.opacity=1;
        winner.textContent = "Computer Wins";
          winner.style.color="red";
        cScore++;
        updateScore();
        return;
      } else {
         winner.style.opacity=1;
        winner.textContent = "Player Wins";
         winner.style.color="green";
        pScore++;
        updateScore();
        return;
      }
    }

  };
   


  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
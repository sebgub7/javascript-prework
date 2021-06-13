{
  const rock = 'kamień'
  const paper = 'papier'
  const scissors = 'nożyce'
  const playGame = function(playerInput) {
    clearMessages()

    function getMoveName(argMoveId) {
      if (argMoveId == 1) {
        return rock;
      } else if (argMoveId == 2) {
        return paper;
      } else if (argMoveId == 3) {
        return scissors;
      }

      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }

    const displayResult = function(argComputerMove, argPlayerMove) {
      console.log('moves:', argComputerMove, argPlayerMove);
      printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
      const win = 'Ty wygrywasz!'
      if (argComputerMove == rock && argPlayerMove == paper) {
        printMessage(win);
      } else if (argComputerMove == paper && argPlayerMove == scissors) {
        printMessage(win);
      } else if (argComputerMove == scissors && argPlayerMove == rock) {
        printMessage(win);
      } else if (argComputerMove == argPlayerMove) {
        printMessage('Mamy remis!')
      } else {
        printMessage('Ty przegrywasz!');
      }
    }
    const max = 3;
    const min = 1;
    const randomNumber = Math.floor(Math.random() * max + min);
    console.log('Wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    /*if(randomNumber == 1){
      computerMove = 'kamień';
    } else if (randomNumber == 2){
      computerMove = 'papier';
    } else if (randomNumber == 3) {
      computerMove = 'nożyce';
    }*/
    printMessage('Mój ruch to: ' + computerMove);
    /*let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');*/
    console.log('Gracz wpisał: ' + playerInput);
    const playerMove = getMoveName(playerInput);
    /*if(playerInput == '1'){
      playerMove = 'kamień';
    } else if(playerInput =='2') {
      playerMove = 'papier';
    } else if(playerInput =='3') {
      playerMove = 'nożyce';
    }*/
    printMessage('Twój ruch to: ' + playerMove);
    displayResult(computerMove, playerMove);
  }
  document.getElementById('play-rock').addEventListener('click', function() {
    playGame(1)('Zagrałeś kamień');
  });
  document.getElementById('play-paper').addEventListener('click', function() {
    playGame(2)('Zagrałeś papier');
  });
  document.getElementById('play-scissors').addEventListener('click', function() {
    playGame(3)('Zagrałeś nożyce');
  });
}

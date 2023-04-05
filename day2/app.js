// In this project, you'll create a simple guessing game where the user has to guess a random
// number between 1 and 100. You'll use control flow statements to check if the user's guess is
// correct, and to provide feedback if the guess is too high or too low.
// Here are the steps to create this project:
// 1. Generate a random number between 1 and 100 using the Math.random() function in
// JavaScript.
// 2. Create a loop that will run until the user guesses the correct number.

// 3. Inside the loop, prompt the user to enter a number using the prompt() function in
// JavaScript.
// 4. Use an if/else statement to check if the user's guess is correct, too high, or too low.
// 5. If the guess is correct, display a message congratulating the user and telling them how
// many attempts it took to guess the number.
// 6. If the guess is too high or too low, display a message telling the user to guess again and
// whether their guess was too high or too low.
// 7. Use a variable to keep track of how many attempts it took the user to guess the correct
// number.
// 8. After the user guesses the correct number, ask them if they want to play again. If they
// do, reset the game and start over. If they don't, end the game.

const number = Math.floor(Math.random() * 100) + 1;
console.log(number)
let guess;
let count = 0
let game = false


function playGame() {
  while (guess != number) {
    let guess = parseInt(prompt('Guess a number 1-100 '))
    if (guess > number) {
      console.log('to high')
      count++
    } else if (guess < number) {
      console.log('to low')
      count++
    } else if (guess == number) {
      count++
      console.log(`You guess right and it only took you ${count} try`)
      break;
    }

  }

}

playGame()



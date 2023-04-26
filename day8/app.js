// Array of at least 10 random facts
const facts = [
    "The tallest mammal in the world is the giraffe",
    "Bananas are berries, but strawberries are not",
    "A group of flamingos is called a flamboyance",
    "The longest river in the world is the Nile",
    "The shortest war in history was between Zanzibar and the United Kingdom in 1896. Zanzibar surrendered after just 38 minutes.",
    "A cat can make over 100 different sounds",
    "The Earth has more than 8,000 known species of ants",
    "The longest word in the English language is 189,819 letters long",
    "The human nose can detect over 1 trillion smells",
    "There is a species of jellyfish that is immortal"
  ];
  
  // Function to get a random fact
  function getRandomFact() {
    // Generate a random index number
  
    // Get the fact at the random index
  
    // Use setTimeout to simulate a delay of 1-3 seconds
    const delay = Math.floor(Math.random() * 3000) + 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        //insert code here
      }, delay);
    });
  }
  
  // Async/await function to display a random fact
  async function displayRandomFact() {
    try {
      const fact = //insert code here   // Wait for the fact to be retrieved
      // Log the fact to the console
    } catch (error) {
      // Log any errors to the console
    }
  }
  
  // Call the displayRandomFact function to display a random fact in the console
 //insert code here
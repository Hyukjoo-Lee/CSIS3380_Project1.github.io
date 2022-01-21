// Create an empty array
const quotes = [];

// Create empty and comma-separated objects
var quoteOne,
  quoteTwo,
  quoteThree,
  quoteFour,
  quoteFive,
  quoteSix = {};

// Create individual properties to each objects
quoteOne = {
  quote: "You always pass failure on the way to success",
  source: "Mickey Rooney",
  citation: "medium.com",
  year: null,
};

quoteTwo = {
  quote:
    "You're braver than you believe, and stronger than you seem, and smarter than you think.",
  source: "A.A. Mine",
  citation: "quotespedia.org",
  year: 1926,
};

quoteThree = {
  quote:
    "Once you replace negative thoughts with positive ones, you’ll start having positive results.",
  source: "Willie Nelson",
  citation: "quoteinvestigator.com",
  year: 2006,
};

quoteFour = {
  quote:
    "In every day, there are 1,440 minutes. That means we have 1,440 daily opportunities to make a positive impact.",
  source: "Les Brown",
  citation: "brainyquote.com",
  year: 2021,
  // To test
  // citation: null,
  // year: null,
};

quoteFive = {
  quote: "If opportunity doesn't knock, build a door.",
  source: "Milton Berle",
  citation: "quotery.com",
  year: null,
};

quoteSix = {
  quote: "Whether you believe you can do a thing or not, you are right.",
  source: "Henry Ford",
  citation: "quoteinvestigator.com",
  year: null,
};

// Add objects to the array
quotes.push(quoteOne, quoteTwo, quoteThree, quoteFour, quoteFive, quoteSix);

// Get and return a quote randomly
const getRandomQuote = () => {
  // Variable to store a random number from zero to the last item in the array
  const ranNum = Math.floor(Math.random() * quotes.length);
  // Return a random quote object in the array
  return quotes[ranNum];
};

// Print a random quote
const printQuote = () => {
  // Variable to store a quote returned from getRandomQuote function
  let randomQuote = getRandomQuote();
  // Variable to store the HTML string
  let PtoHTML1 =
    "<p class='quote'>" +
    randomQuote.quote +
    "</p><p class='source'>" +
    randomQuote.source;

  // Check whether citation & year properties exist or not
  if (randomQuote.citation && randomQuote.year) {
    // Print all properties
    PtoHTML1 =
      PtoHTML1 +
      "<span class='citation'>" +
      randomQuote.citation +
      "</span><span class='year'>" +
      randomQuote.year +
      "</span></p>";
  } else {
    // If both for citation and year does not exist, ...
    if (randomQuote.citation == null && randomQuote.year == null) {
      // Print without citation and year
      PtoHTML1 = PtoHTML1 + "</p>";
    } else {
      // If only citation exists, ...
      if (randomQuote.citation) {
        // Print with citation only
        PtoHTML1 =
          PtoHTML1 +
          "<span class='citation'>" +
          randomQuote.citation +
          "</span></p>";
      }
      // If only year exists, ...
      if (randomQuote.year) {
        // Print with year only
        PtoHTML1 =
          PtoHTML1 + "<span class='year'>" + randomQuote.year + "</span></p>";
      }
    }
  }
  // Set the innerHTML to modified HTML string
  document.getElementById("quote-box").innerHTML = PtoHTML1;

  // FINAL CODE TEST
  console.log(randomQuote); // Log out the random quote object
  console.log(PtoHTML1); // Log out the complete HTML String
};

// Click event listener for the print quote button
document.getElementById("load-quote").addEventListener("click", function () {
  printQuote();
});

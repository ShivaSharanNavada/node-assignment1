// Define a promise
const displayMessage = new Promise((resolve, reject) => {
  const message = "Hello, world!!!";
  resolve(message);
});

// Call the promise
displayMessage.then((message) => {
  console.log(message);
});

const request = require("request");

const url = "https://api.weatherstack.com/current?access_key=e86030de59ea0146a8ea30992312948d&query=37.8267,-122.4233";

request({ url: url }, (err, res) => {
  const data = JSON.parse(res.body);
  console.log(data.current);
});

// console.log("starting");

// setTimeout(() => {
//   console.log("2 seconds later");
// }, 2000);

// setTimeout(() => {
//   console.log("0 seconds later");
// }, 0);

// console.log("stopping");

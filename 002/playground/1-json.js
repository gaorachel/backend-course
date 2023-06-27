const fs = require("fs");

const infoButter = fs.readFileSync("1-json.json");
console.log(infoButter);
const infoJSOn = infoButter.toString();
console.log(infoJSOn);
const info = JSON.parse(infoJSOn);
console.log(info);

info.name = "Rachel";
info.age = 29;
console.log(info);

const newInfoJSON = JSON.stringify(info);
console.log(newInfoJSON);
fs.writeFileSync("1-json.json", newInfoJSON);

// const book = {
//   title: "Ego is the enemy",
//   author: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book); // object to json format
// fs.writeFileSync("1-json.json", bookJSON);
// const dataBuffer = fs.readFileSync("1-json.json");
// console.log(dataBuffer);
// const dataJSON = dataBuffer.toString();
// console.log(dataJSON);

// const data = JSON.parse(dataJSON);
// console.log(data);
// console.log(data.title);

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON); // json format to object
// console.log(parsedData.author);

/*{"title":"Ego is the enemy","author":"Ryan Holiday"}*/

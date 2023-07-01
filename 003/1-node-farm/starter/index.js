const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  res.end("Hello from the server!!!");
});

server.listen(8000, "127.0.0.1", () => {
  console.log("Listening to requests on port 8000");
}); // localhost:8000

// server.listen(8000, "localhost", () => {
//   console.log("Listening to requests on port 8000");
// }); // localhost:8000

// // non-blocking, async way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log(err);

//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     if (err) return console.log(err);

//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       if (err) return console.log(err);

//       console.log(data3);

//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("Your file has been written.");
//       });
//     });
//   });
// });

// // blocking, sync way
// const output = fs.writeFileSync("./txt/start.txt", "utf-8");
// console.log(output);

import { statement, htmlStatement } from "./statement.js";

// package.jsonを作ったらrequireが使えなくなった
// const fs = require("fs");
// const plays = JSON.parse(fs.readFileSync("./plays.json", "utf8"));
// const invoices = JSON.parse(fs.readFileSync("./invoices.json", "utf8"));

const plays = {
  hamlet: { name: "Hamlet", type: "tragedy" },
  "as-like": { name: "As You Like It", type: "comedy" },
  othello: { name: "Othello", type: "tragedy" },
};

const invoices = [
  {
    customer: "Bigco",
    performances: [
      {
        playID: "hamlet",
        audience: 55,
      },
      {
        playID: "as-like",
        audience: 35,
      },
      {
        playID: "othello",
        audience: 40,
      },
    ],
  },
];

//console.log(statement(invoices[0], plays));
console.log(htmlStatement(invoices[0], plays));

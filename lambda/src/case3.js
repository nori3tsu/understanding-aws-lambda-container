"use strict";

let count = 0;
module.exports.handle = async (event) => {
  console.log("START");
  count++;
  console.log("END");

  return { pid: process.pid, count };
};

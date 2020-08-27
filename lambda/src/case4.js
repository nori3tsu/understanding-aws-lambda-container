"use strict";

let count = 0;
module.exports.handle = async (event) => {
  console.log("START");
  await new Promise((resolve) => setTimeout(resolve, 1000));
  count++;
  console.log("END");

  return { pid: process.pid, count };
};

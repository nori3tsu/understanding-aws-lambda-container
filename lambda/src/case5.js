"use strict";

const uuid = require("uuid");
const cid = uuid.v4();

let count = 0;
module.exports.handle = async (event) => {
  console.log("START");
  count++;
  console.log("END");

  return { cid, pid: process.pid, count };
};

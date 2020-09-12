"use strict";

const uuid = require("uuid");
const cid = uuid.v4();

module.exports.handle = async (event) => {
  console.log("START");
  console.log({ cid, pid: process.pid });
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("END");

  return { cid, pid: process.pid };
};

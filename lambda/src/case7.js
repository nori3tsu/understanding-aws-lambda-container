"use strict";

const uuid = require("uuid");
const cid = uuid.v4();

module.exports.handle = async (event) => {
  console.log("START");
  console.log({ cid, pid: process.pid });

  const buff = [];
  for (let i = 0; i < 1024 * 1024 * 128; i++) {
    buff.push(0);
  }

  console.log("END");

  return { cid, pid: process.pid };
};

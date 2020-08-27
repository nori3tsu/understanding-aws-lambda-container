"use strict";

module.exports.handle = async (event) => {
  console.log("START");
  const maxCount = 100000000;
  for (let i = 0; i < maxCount; i++) {}
  console.log("END");

  return { pid: process.pid };
};

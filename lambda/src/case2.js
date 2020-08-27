"use strict";

module.exports.handle = async (event) => {
  console.log("START");
  await new Promise((resolve) => setTimeout(resolve, 3000));
  console.log("END");

  return { pid: process.pid };
};

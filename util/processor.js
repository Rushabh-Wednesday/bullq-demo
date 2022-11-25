// processor.js
module.exports = function (job) {
  // Do some heavy work
  for (let i = 0; i < 100000; i++) {
    console.log("***************", i);
  }
  return Promise.resolve();
};

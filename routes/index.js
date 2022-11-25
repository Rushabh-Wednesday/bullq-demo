const express = require("express");
const router = express.Router();
const Bull = require("bull");
const path = require('path')

/* GET home page. */
router.get("/express", function (req, res, next) {
  res.json({ message: "Express Send it's regards" });
});

router.get("/queue", async function (req, res, next) {
  const demoQ = new Bull("demo");
  await demoQ.add({ message: "testing" });
  // If using this to process queue it blocks the main thread
  demoQ.process(async (job) => {
    for (let i = 0; i < 10000000; i++) {
      console.log("***************", i);
    }
  });
  // If using this it creates new process
  // const processorPath =path.join(__dirname,'../util/processor.js')
  // demoQ.process(processorPath)
  res.json({ message: "queue has been called" });
});

module.exports = router;

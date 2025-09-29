const express = require("express");
const router = express.Router();
const path = require("path");
const fs = require("fs");

router.get("/", (req, res) => {
  const version = req.pricingVersion || "blue";
  const filePath = path.join(__dirname, "../data", `${version}-pricing.json`);
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Pricing data not found" });
    }

    // Log request metadata and version
    const finalDat = { ...JSON.parse(data), version: version };
    // console.log({
    //   time: new Date().toISOString(),
    //   ip: req.ip,
    //   version,
    //   headers: req.headers,
    // });

    // res.json(JSON.parse(data));
    res.json(finalDat);
  });
});

module.exports = router;

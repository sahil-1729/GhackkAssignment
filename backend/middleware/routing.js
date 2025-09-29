const fs = require("fs");
const path = require("path");
const config = require("../config/routing.json");

function getRandomVersion(percentageSplit) {
  const rand = Math.random() * 100;
  return rand < percentageSplit.blue ? "blue" : "green";
}

function getVersion(req) {
  // Cookie-based sticky routing
  if (req.cookies && req.cookies[config.cookieName]) {
    return req.cookies[config.cookieName];
  }

  switch (config.strategy) {
    case "percentage":
      return getRandomVersion(config.percentageSplit);
    case "ip":
      // Simple IP-based routing: even IPs get blue, odd get green
      const ip = req.ip.replace(/\D/g, "");
      return parseInt(ip) % 2 === 0 ? "blue" : "green";
    case "header":
      return req.headers[config.headerKey.toLowerCase()] === "green"
        ? "green"
        : "blue";
    default:
      return "blue";
  }
}

function routingMiddleware(req, res, next) {
  const version = getVersion(req);

  // Set the sticky cookie if isn't present
  if (!req.cookies || !req.cookies[config.cookieName]) {
    res.cookie(config.cookieName, version, { maxAge: 7 * 24 * 60 * 60 * 1000 });
  }
  req.pricingVersion = version;
  next();
}

module.exports = routingMiddleware;

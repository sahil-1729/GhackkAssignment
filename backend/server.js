const express = require("express");
const cookieParser = require("cookie-parser");
const routingMiddleware = require("./middleware/routing");
const pricingRoute = require("./routes/pricing");

const app = express();
app.use(cookieParser());
app.use(routingMiddleware);
app.use("/pricing", pricingRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});

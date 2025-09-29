import React, { useEffect, useState } from "react";

function App() {
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/pricing")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPricing(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch pricing");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  if (!pricing)
    return (
      <div className="flex items-center justify-center h-screen text-xl">
        No pricing data available.
      </div>
    );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <h1 className="text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
        Choose Your Plan
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {pricing.plans.map((plan, i) => (
          <div
            key={plan.name}
            className={`relative w-full max-w-sm rounded-2xl shadow-xl bg-white p-8 border-t-8 ${
              pricing.version === "blue"
                ? "border-blue-500"
                : "border-green-400"
            } flex flex-col items-center hover:scale-105 transition-transform duration-200`}
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-5xl">
              {/* {i % 2 === 0 ? "💙" : "💚"} */}
            </div>
            <h2 className="mt-8 text-2xl font-bold mb-2 text-gray-800">
              {plan.name}
            </h2>
            <p
              className={`text-3xl font-extrabold mb-4 ${
                pricing.version === "blue" ? "text-blue-500" : "text-green-400"
              }`}
            >
              {plan.price}
            </p>
            <ul className="mb-6 w-full">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-gray-700 mb-2"
                >
                  <span className="text-green-400">✔️</span>{" "}
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-3 rounded-xl font-semibold text-lg bg-gradient-to-r ${
                pricing.version === "blue"
                  ? "from-blue-500 to-blue-400"
                  : "from-green-400 to-green-300"
              } text-white shadow hover:from-blue-600 hover:to-blue-500 hover:scale-105 transition-all duration-200`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

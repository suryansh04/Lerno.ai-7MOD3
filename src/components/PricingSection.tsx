import React from "react";
import { useNavigate } from "react-router-dom";

// ====== CONFIGURATION ======
const PRO_PLAN_PRICE_ID = "price_1Re8ll070ajDSpWDoI0ROg96"; // <-- Your Stripe Price ID
const STRIPE_CHECKOUT_API = "http://localhost:5000/api/create-checkout-session"; // <-- Match your backend URL
// ===========================

const PricingComponent: React.FC = () => {
  const navigate = useNavigate();

  // Stripe checkout handler
  const handleProCheckout = async () => {
    try {
      const res = await fetch(STRIPE_CHECKOUT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId: PRO_PLAN_PRICE_ID }),
      });
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Failed to create Stripe checkout session.");
      }
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="w-full flex flex-col lg:flex-row items-start justify-center bg-black py-16 px-4 lg:px-8">
      {/* Left Side: Pricing Title & Description */}
      <div className="w-full lg:w-2/5 mb-12 lg:mb-0 lg:mr-12 lg:pr-8">
        <h2 className="text-white text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Pricing
        </h2>
        <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed mb-8">
          Start learning for free. Upgrade only when you&apos;re ready to unlock
          advanced features, unlimited access, and deeper learning analytics.
        </p>
        <div className="space-y-4">
          <div className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            <span className="text-lg">
              No credit card required for free tier
            </span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
            <span className="text-lg">Cancel anytime with Pro plan</span>
          </div>
          <div className="flex items-center text-gray-300">
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
            <span className="text-lg">Trusted by 10,000+ learners</span>
          </div>
        </div>
      </div>

      {/* Right Side: Pricing Cards */}
      <div className="w-full lg:w-3/5 flex flex-col md:flex-row gap-6 justify-center">
        {/* Free Tier */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl flex-1 max-w-sm flex flex-col transform  transition-all duration-300">
          <div className="mb-4">
            <h3 className="text-black font-semibold text-xl mb-2">Free Tier</h3>
            <div className="flex items-end mb-2">
              <span className="text-black text-4xl font-extrabold mr-2">
                ₹0
              </span>
              <span className="text-gray-500 text-sm mb-1">/month</span>
            </div>
            <p className="text-gray-700 mb-4">
              Ideal for students exploring personalized learning for the first
              time.
            </p>
          </div>

          <hr className="my-4 border-gray-200" />

          <ul className="space-y-3 mb-8 text-black text-base flex-grow">
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              AI-generated lessons
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Up to 10 topic requests/month
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Visual explanations
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Progress tracking
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Community support access
            </li>
          </ul>

          <button
            onClick={() => navigate("/signup")}
            className="w-full bg-gray-100 text-gray-900 border-gray-200 rounded-xl py-4 font-semibold transition-all duration-300 cursor-pointer"
          >
            Get Started Free
          </button>
        </div>

        {/* Pro Plan */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl flex-1 max-w-sm flex flex-col transform  transition-all duration-300 relative">
          {/* Popular Badge */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <span className="bg-black text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Most Popular
            </span>
          </div>

          <div className="mb-4 mt-4">
            <h3 className="text-black font-semibold text-xl mb-2">Pro Plan</h3>
            <div className="flex items-end mb-2">
              <span className="text-black text-4xl font-extrabold mr-2">
                ₹799
              </span>
              <span className="text-gray-500 text-sm mb-1">/month</span>
            </div>
            <p className="text-gray-700 mb-4">
              For learners or educators seeking deeper personalization and
              unlimited access.
            </p>
          </div>

          <hr className="my-4 border-gray-200" />

          <ul className="space-y-3 mb-8 text-black text-base flex-grow">
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Unlimited topic requests
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              AI-powered chatbot
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Premium support
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Adaptive learning paths
            </li>
            <li className="flex items-center">
              <span className="mr-3 text-green-500 font-bold">✔</span>
              Advanced progress analytics
            </li>
          </ul>

          <button
            onClick={handleProCheckout}
            className="w-full bg-black text-white rounded-xl py-4 font-semibold hover:bg-gray-900 transition-all duration-300  cursor-pointer"
          >
            Upgrade to Pro
          </button>
        </div>
      </div>
    </section>
  );
};

export default PricingComponent;

import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Header Section */}
      <header className=" text-center py-20 animate-fadeIn">
        <h2 className="text-4xl font-bold mb-4">
          Manage Your Crypto Portfolio with Ease
        </h2>
        <p className="text-lg text-gray-200 mb-6">
          Track all your ERC-20 tokens, analyze your holdings, and stay
          informed.
        </p>
        <button className="bg-green-500 px-6 py-3 rounded transition duration-300 hover:bg-green-600">
          <Link to="/portfolio"> Get Started</Link>
        </button>
      </header>

      {/* Content Section */}
      <section className="p-10 text-center animate-fadeIn delay-200">
        <h3 className="text-3xl font-bold mb-6">Why Choose CryptoPortfolio?</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-900 rounded shadow transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold">Real-Time Tracking</h4>
            <p className="text-gray-300 mt-2">
              Get live updates on your crypto assets.
            </p>
          </div>
          <div className="p-6  bg-gray-900 rounded shadow transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold">Secure & Private</h4>
            <p className="text-gray-300 mt-2">
              We ensure top-notch security for your data.
            </p>
          </div>
          <div className="p-6 bg-opacity-50 bg-gray-900 rounded shadow transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold">Subscription Plans</h4>
            <p className="text-gray-300 mt-2">
              Choose a plan that fits your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Subscription Cards */}
      <section className="p-10 text-center animate-fadeIn delay-300">
        <h3 className="text-3xl font-bold mb-6">Subscription Plans</h3>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="border border-gray-700 p-6 rounded bg-opacity-50 bg-gray-900 shadow-lg transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold">Analyst</h4>
            <p className="text-gray-400 mt-2">
              For mission-critical analysis work.
            </p>
            <p className="text-3xl font-bold mt-4">$49/mo</p>
            <button className="mt-4 bg-gray-500 px-4 py-2 rounded transition duration-300 hover:bg-gray-600">
              Subscribe Now
            </button>
          </div>
          <div className="border border-green-500 p-6 rounded bg-opacity-50 bg-gray-900 shadow-lg relative transition duration-300 hover:scale-105">
            <span className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-3 py-1 text-xs font-bold rounded-b">
              Recommended
            </span>
            <h4 className="text-xl font-semibold">Lite</h4>
            <p className="text-gray-400 mt-2">Best for growing projects.</p>
            <p className="text-3xl font-bold mt-4">$199/mo</p>
            <button className="mt-4 bg-green-500 px-4 py-2 rounded transition duration-300 hover:bg-green-600">
              Subscribe Now
            </button>
          </div>
          <div className="border border-blue-500 p-6 rounded bg-opacity-50 bg-gray-900 shadow-lg transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold">Pro</h4>
            <p className="text-gray-400 mt-2">
              Scale your projects like a pro.
            </p>
            <p className="text-3xl font-bold mt-4">$299/mo</p>
            <button className="mt-4 bg-blue-500 px-4 py-2 rounded transition duration-300 hover:bg-blue-600">
              Subscribe Now
            </button>
          </div>
          <div className="border border-yellow-500 p-6 rounded bg-opacity-50 bg-gray-900 shadow-lg transition duration-300 hover:scale-105">
            <h4 className="text-xl font-semibold">Enterprise</h4>
            <p className="text-gray-400 mt-2">
              Custom solutions for your business.
            </p>
            <p className="text-xl font-bold mt-4">Inquire for pricing</p>
            <button className="mt-4 bg-yellow-500 px-4 py-2 rounded transition duration-300 hover:bg-yellow-600">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="p-6 text-center shadow-lg">
        <p className="text-white">
          © 2025 devsachinborse. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;

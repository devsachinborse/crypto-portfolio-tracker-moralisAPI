import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";

const CryptoPortfolio = () => {
  const [assets, setAssets] = useState([]);
  const [address, setAddress] = useState(""); // State to store the input address

  //0x209c8bbE2454257Eb1A8E630f59f4b1b50a98543
  const fetchAssets = async (address) => {
    try {
      // Replace this URL with the actual API endpoint
      const response = await fetch(
        `https://deep-index.moralis.io/api/v2.2/wallets/${address}/tokens?chain=eth&exclude_spam=true&exclude_unverified_contracts=true`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": import.meta.env.VITE_API_KEY,
          },
        }
      );
      const data = await response.json();
      console.log(data.result);
      setAssets(data.result);
    } catch (error) {
      console.error("Error fetching assets:", error);
    }
  };

  // Function to handle the input change
  const handleInputChange = (e) => {
    setAddress(e.target.value);
  };

  // Function to handle button click
  const handleButtonClick = () => {
    fetchAssets(address);
  };

  useEffect(() => {
    fetchAssets(address);
  }, [address]);

  return (
    <>
      <div className=" min-h-screen bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <Navbar />
        <div className="max-w-2xl mx-auto my-16 bg-gray-900 p-6 rounded-lg shadow-lg">
          <h1 className="text-2xl text-center font-bold mb-4">
            Crypto Portfolio
          </h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter Wallet Address"
              value={address}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700"
            />
            {/* <button
              onClick={handleButtonClick}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
            >
              Search
            </button> */}
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 bg-gray-900 p-6 rounded-lg shadow-lg ">
          <table className="w-full border-collapse border border-gray-700">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-6 border border-gray-700">Logo</th>
                <th className="p-4 border border-gray-700">Symbol</th>
                <th className="p-4 border border-gray-700">Name</th>
                <th className="p-4 border border-gray-700">Price</th>
                <th className="p-4 border border-gray-700">24h Change</th>
                <th className="p-4 border border-gray-700">Holdings</th>
                <th className="p-4 border border-gray-700">Value</th>
              </tr>
            </thead>
            <tbody>
              {assets.map((asset) => (
                <tr key={asset.token_address} className="text-center">
                  <td className="p-2 border border-gray-700">
                    <img
                      src={asset.thumbnail || "default-logo.png"}
                      alt={asset.name}
                      className="w-8 h-8 mx-auto"
                    />
                  </td>
                  <td className="p-2 border border-gray-700">{asset.symbol}</td>
                  <td className="p-2 border border-gray-700">{asset.name}</td>
                  <td className="p-2 border border-gray-700">
                    $ {asset.usd_price || "N/A"}
                  </td>
                  <td
                    className={`p-2 border border-gray-700 ${
                      asset.usd_price_24hr_percent_change > 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {asset.usd_price_24hr_percent_change?.toFixed(2)}%
                  </td>
                  <td className="p-2 border border-gray-700">
                    {(asset.balance / 10 ** asset.decimals).toFixed(4)}
                  </td>

                  <td className=" p-2 border border-gray-700">
                    {asset.usd_value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <footer className="p-6 mt-8 text-center shadow-lg">
          <p className="text-white">
            © 2025 devsachinborse. All rights reserved.
          </p>
        </footer>
      </div>
    </>
  );
};

export default CryptoPortfolio;

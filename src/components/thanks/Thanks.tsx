"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Thanks = () => {
  const [orderID, setOrderID] = useState("");
  const [timeLeft, setTimeLeft] = useState("30:00");
  const router = useRouter();

  useEffect(() => {
    const randomID = "OD" + Math.floor(100000 + Math.random() * 900000);
    setOrderID(randomID);
  }, []);

  useEffect(() => {
    const countdownTime = Date.now() + 30 * 60 * 1000;

    const timer = setInterval(() => {
      const now = Date.now();
      const distance = countdownTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft("00:00");
        return;
      }

      const minutes = String(
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      ).padStart(2, "0");
      const seconds = String(
        Math.floor((distance % (1000 * 60)) / 1000)
      ).padStart(2, "0");

      setTimeLeft(`${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      {/* Order delivery GIF */}
      <img
        src="/images/order-delivery.gif"
        alt="Order Delivery"
        className="w-48 h-48 mb-6"
      />
      <h1 className="text-2xl font-semibold mb-4 text-green-700">
        🎉 Thanks for placing an order with us! Your Order is Confirmed!
      </h1>
      <p className="text-lg mb-2">
        Your order ID is{" "}
        <span className="font-mono text-blue-600">{orderID}</span>
      </p>
      <p className="text-md text-gray-600">
        Estimated delivery time:{" "}
        <span className="font-semibold">{timeLeft}</span>
      </p>

      <a
        href="/main"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => router.push("/main")}
      >
        Back to Home
      </a>
    </div>
  );
};

export default Thanks;

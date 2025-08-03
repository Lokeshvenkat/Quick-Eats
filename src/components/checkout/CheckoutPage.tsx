"use client"

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutPage: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
   const router = useRouter();
   

  const isCash = paymentMethod === "cash";
  const serviceCharge = isCash ? 50 : 0;

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

          {/* Shipping Address */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="first_name" className="block text-gray-700 dark:text-white mb-1 autofocus">First Name</label>
                <input type="text" id="first_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
              <div>
                <label htmlFor="last_name" className="block text-gray-700 dark:text-white mb-1">Last Name</label>
                <input type="text" id="last_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="door" className="block text-gray-700 dark:text-white mb-1 autofocus">Door No</label>
                <input type="text" id="door" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
              <div>
                <label htmlFor="street" className="block text-gray-700 dark:text-white mb-1">Street</label>
                <input type="text" id="street" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="area" className="block text-gray-700 dark:text-white mb-1">Area</label>
              <input type="text" id="area" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>

            <div className="mt-4">
              <label htmlFor="city" className="block text-gray-700 dark:text-white mb-1">City</label>
              <input type="text" id="city" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label htmlFor="state" className="block text-gray-700 dark:text-white mb-1">State</label>
                <input type="text" id="state" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
              <div>
                <label htmlFor="zip" className="block text-gray-700 dark:text-white mb-1">Pin Code</label>
                <input type="text" id="zip" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>

            {/* Payment Method Selection */}
            <div className="mt-2 flex gap-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  checked={paymentMethod === "card"}
                  onChange={() => setPaymentMethod("card")}
                />
                <span className="text-gray-700 dark:text-white">Card</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="upi"
                  checked={paymentMethod === "upi"}
                  onChange={() => setPaymentMethod("upi")}
                />
                <span className="text-gray-700 dark:text-white">UPI</span>
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  checked={paymentMethod === "cash"}
                  onChange={() => setPaymentMethod("cash")}
                />
                <span className="text-gray-700 dark:text-white">Cash (+₹50)</span>
              </label>
            </div>

            {/* Conditional Inputs */}
            {paymentMethod === "card" && (
              <>
                <div className="mt-4">
                  <label htmlFor="card_number" className="block text-gray-700 dark:text-white mb-1">Card Number</label>
                 <input type="text" id="card_number" inputMode="numeric" pattern="[0-9]*" maxLength={16} placeholder="0000 0000 0000 0000"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"/>
                </div>

                 <div className="mt-4">
                  <label htmlFor="card_name" className="block text-gray-700 dark:text-white mb-1">Name on Card</label>
                  <input type="text" id="card_name" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                </div>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div>
                    <label htmlFor="exp_date" className="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
                    <input  type="text" id="card_number" inputMode="numeric" pattern="^(0[1-9]|1[0-2])\/\d{2}$" maxLength={4} placeholder="mm/yy"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-gray-700 dark:text-white mb-1">CVV</label>
                    <input type="password" id="cvv"  maxLength={3} className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
                  </div>
                </div>
              </>
            )}

            {paymentMethod === "upi" && (
              <div className="mt-4">
                <label htmlFor="upi_id" className="block text-gray-700 dark:text-white mb-1">UPI ID</label>
                <input type="text" id="upi_id" placeholder="example@upi" className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none" />
              </div>
            )}

            {paymentMethod === "cash" && (
              <p className="mt-4 text-yellow-600 dark:text-yellow-400">
                ₹50 will be added for handling cash payments.
              </p>
            )}
          </div>

          {/* Place Order Button */}
          <div className="mt-8 flex justify-end">
            <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:hover:bg-teal-900"
             onClick={() => router.push("/thanks")}
            >
              Place Order {isCash && <span>(+₹{serviceCharge})</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;

"use client";
import { useCart } from "@/components/cart/CartContext";
import Image from "next/image";

const CartPage = () => {
  const { cart, clearCart, updateQuantity } = useCart();

  const handleClearCart = () => {
    const confirmClear = window.confirm("Are you sure you want to clear the cart?");
    if (confirmClear) clearCart();
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const taxes = subtotal * 0.2; 
  const delivery = subtotal === 0 ? 0 : subtotal > 499 ? 0 : 100;
  const total = subtotal + taxes + delivery;

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-black text-2xl font-semibold mb-4">Your Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Cart Items */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-black text-left font-semibold">Product</th>
                    <th className="text-black text-left font-semibold">Price</th>
                    <th className="text-black text-left font-semibold">Quantity</th>
                    <th className="text-black text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4">
                        <div className="flex items-center text-black">
                          <Image
                            src={item.image }
                            alt={item.name}
                            width={64}
                            height={64}
                            className="mr-4 rounded object-cover"
                          />
                          <span className="font-semibold text-black">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4 text-black">₹{item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center text-black">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="border rounded-md py-1 px-3 mr-2 text-black"
                            disabled={item.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="text-black text-center w-8 text-black">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="border rounded-md py-1 px-3 ml-2"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4 text-black">₹{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={handleClearCart}
                className="mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
              >
                Clear Cart
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4 text-black">Summary</h2>
              <div className="flex justify-between mb-2 text-black">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-black">
                <span>Taxes</span>
                <span>₹{taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2 text-black">
                <span>Delivery Charges</span>
                <span>₹{delivery.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2 font-semibold text-black">
                <span>Total</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
              <div><p className="text-black text-center">Delivery will be provided upto 5 kms radius.</p></div>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full hover:bg-blue-700 text-black">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartPage;

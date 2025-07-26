"use client";
import { useCart } from "@/components/cart/CartContext";

const CartPage = () => {
  const { cart, updateQuantity, clearCart } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const taxes = parseFloat((subtotal * 0.1).toFixed(2));
  const shipping = 0;
  const total = subtotal + taxes + shipping;

  const handleQuantityChange = (id: string, delta: number) => {
    const item = cart.find((item) => item.id === id);
    if (!item) return;
    const newQuantity = Math.max(1, item.quantity + delta);
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>
        <div className="flex flex-col md:flex-row gap-4">
          {/* Cart Items */}
          <div className="md:w-3/4">
            <div className="bg-white rounded-lg shadow-md p-6 mb-4">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left font-semibold">Product</th>
                    <th className="text-left font-semibold">Price</th>
                    <th className="text-left font-semibold">Quantity</th>
                    <th className="text-left font-semibold">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => (
                    <tr key={item.id}>
                      <td className="py-4">
                        <div className="flex items-center">
                          <img
                            className="h-16 w-16 mr-4"
                            src="https://via.placeholder.com/150"
                            alt={item.name}
                          />
                          <span className="font-semibold">{item.name}</span>
                        </div>
                      </td>
                      <td className="py-4">₹{item.price}</td>
                      <td className="py-4">
                        <div className="flex items-center">
                          <button
                            className="border rounded-md py-2 px-4 mr-2"
                            onClick={() => handleQuantityChange(item.id, -1)}
                          >
                            -
                          </button>
                          <span className="text-center w-8">{item.quantity}</span>
                          <button
                            className="border rounded-md py-2 px-4 ml-2"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="py-4">₹{item.price * item.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {cart.length > 0 && (
                <button
                  className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                  onClick={() => {
                    if (window.confirm("Are you sure you want to clear the cart?")) {
                      clearCart();
                    }
                  }}
                >
                  Clear Cart
                </button>
              )}
            </div>
          </div>

          {/* Summary */}
          <div className="md:w-1/4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-4">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>₹{taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>₹{shipping.toFixed(2)}</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">₹{total.toFixed(2)}</span>
              </div>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;

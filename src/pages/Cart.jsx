import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Cart() {
  const cart = useSelector((state) => state.cart || []);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {cart.length > 0 ? (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))}
            </div>
          </div>

          {/* Summary */}
          <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Summary</h2>
            <p className="mb-2">
              Total Items: <span className="font-bold">{cart.length}</span>
            </p>
            <p className="mb-4">
              Total Amount: <span className="font-bold text-blue-600">${totalAmount}</span>
            </p>
            <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition-colors duration-200">
              Checkout Now
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <h1 className="text-3xl font-semibold mb-4">Cart Empty</h1>
          <Link to="/">
            <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors duration-200">
              Shop Now
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;

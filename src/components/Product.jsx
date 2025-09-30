import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

function Product({ post }) {
  const cart = useSelector((state) => state.cart || []);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="flex justify-center mb-4">
        <img
          src={post.image}
          alt={post.title}
          className="h-40 w-40 object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 flex flex-col justify-between">
        <h2 className="font-semibold text-lg mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4">
          {post.description
            ? post.description.split(" ").slice(0, 15).join(" ") + "..."
            : ""}
        </p>
        <p className="font-bold text-blue-600 text-lg mb-4">${post.price}</p>

        {/* Add / Remove Button */}
        {cart.some((p) => p.id === post.id) ? (
          <button
            onClick={removeFromCart}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors duration-200"
          >
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors duration-200"
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;

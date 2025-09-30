import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/cartSlice";
import { toast } from "react-hot-toast";

function CartItem({ item, itemIndex }) {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item removed");
  };

  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 mb-4 hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-lg">{item.title}</h2>
        <p className="text-gray-600 text-sm mt-1">
            {item.description
      ? item.description.split(" ").slice(0, 15).join(" ") + "..."
      : ""}
      </p>
        <div className="flex items-center justify-between mt-2">
          <p className="font-bold text-blue-600">${item.price}</p>
          <button
            onClick={removeFromCart}
            className="text-red-500 hover:text-red-700 transition-colors duration-200"
          >
            <MdDelete size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);

  async function fetchProduct() {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log("Error occurred");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {loading ? (
        <Spinner />
      ) : posts.length > 0 ? (
        <div className="grid  grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Product post={post} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-10">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [numArr, setNumArr] = useState(Array.from({ length: 20 }, (_, i) => i));

  const fetchMoreData = () => {
    setNumArr((prevNums) => [
      ...prevNums,
      ...Array.from({ length: 20 }, (_, i) => i + prevNums.length),
    ]);
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      fetchMoreData();
    }
  };

  // Listen for scroll events
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="font-serif text-3xl text-center">
      {numArr.map((num, index) => (
        <div
          key={index}
          className="m-2 p-5 bg-white shadow-md rounded cursor-pointer hover:shadow-lg transition-shadow duration-300 ease-in-out"
        >
          {num}
        </div>
      ))}
    </div>
  );
}
export default App;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

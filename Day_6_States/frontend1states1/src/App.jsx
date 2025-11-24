import { useState } from "react";
import pic1 from "./assets/images/img1.jpg";
import pic2 from "./assets/images/img2.jfif";

const App = () => {
  const [text, setText] = useState(true);
  const [Image, setImage] = useState(true);
  const [isRound, setIsRound] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">

      {/* Card 1: Text Toggle */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mb-10 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          {text ? "Hai" : "Welcome"}
        </h1>

        <button
          onClick={() => setText(!text)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
        >
          Change Text
        </button>
      </div>

      {/* Card 2: Image Toggle */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mb-10 text-center">
        <img
          src={Image ? pic1 : pic2}
          alt="toggle"
          className="w-60 h-40 object-cover rounded-xl mx-auto shadow-md transition-all duration-500"
        />

        <button
          onClick={() => setImage(!Image)}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
        >
          Change Image
        </button>
      </div>

      {/* Card 3: Shape Toggle */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-6 text-center space-y-6">
        <div
          className={`w-32 h-32 mx-auto bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition-all duration-500 ${
            isRound ? "rounded-full" : "rounded-xl"
          }`}
        ></div>

        <button
          onClick={() => setIsRound(!isRound)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all"
        >
          Change Shape
        </button>
      </div>
    </div>
  );
};

export default App;

import { Link } from "react-router-dom";
import "@fontsource/press-start-2p"; // Eğer npm ile kurduysan

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#0d0d0d] text-[#c95c5c] font-['Press_Start_2P'] px-4 text-center">
      <h1 className="text-4xl md:text-6xl animate-pulse">
        404: SYSTEM FAILURE
      </h1>
      <p className="mt-10 text-xl text-[#633838] mb-6">
        Ooops! Your camper seems to have taken a wrong turn. This page doesn’t
        exist.
      </p>
      <Link
        to="/"
        className="mt-10 inline-block text-[#48ce8f] border border-[#48ce8f] px-6 py-3 hover:bg-[#48ce8f] hover:text-black transition-colors duration-300"
      >
        RETURN TO THE HOME PAGE
      </Link>
    </div>
  );
};

export default NotFound;

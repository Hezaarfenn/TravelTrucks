import { Link } from "react-router-dom";

const HeaderInfo = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full px-20">
      <div className="flex flex-col gap-2 pb-10 text-[#F7F7F7]">
        <h1 className="text-5xl font-bold">Campers of your dreams</h1>
        <p className="text-2xl font-bold">
          You can find everything you want in our catalog
        </p>
      </div>
      <Link to="/catalog">
        <button className="bg-[#E44848] cursor-pointer rounded-4xl text-white py-4 px-14">
          View Now
        </button>
      </Link>
    </div>
  );
};

export default HeaderInfo;

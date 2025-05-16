import GridLoader from "react-spinners/GridLoader";

const Loader = () => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <GridLoader color="#E44848" size={40} />
    </div>
  );
};

export default Loader;

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchCatalog from "../../redux/catalog/catalogSlice";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";
import CatalogTruckCard from "../../components/CatalogTruckCard/CatalogTruckCard";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.catalog);

  const handleSearch = () => {
    dispatch(fetchCatalog());
  };

  return (
    <div className="flex gap-20">
      <div>
        <CatalogSideBar />
        <button
          onClick={handleSearch}
          className="bg-[#E44848] cursor-pointer rounded-4xl text-white py-4 px-14 mt-10"
        >
          Search
        </button>
      </div>

      <div>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {items.length > 0 && <CatalogTruckCard items={items} />}
      </div>
    </div>
  );
};

export default CatalogPage;

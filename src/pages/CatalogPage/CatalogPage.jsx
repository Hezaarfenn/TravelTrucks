import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fetchCatalog } from "../../redux/catalog/catalogOps";
import { filterTrucks } from "../../utils/filterTrucks";
import CatalogSideBar from "../../components/CatalogSideBar/CatalogSideBar";
import CatalogTruckCard from "../../components/CatalogTruckCard/CatalogTruckCard";
import Loader from "../../components/Loader/Loader";

const CatalogPage = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector((state) => state.catalog);

  const allTrucks = items?.items || [];

  const [filteredItems, setFilteredItems] = useState([]);
  const [location, setLocation] = useState("");
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(`Error occurred when receiving data: ${error}`);
    }
  }, [error]);

  const handleSearch = () => {
    const result = filterTrucks({
      trucks: allTrucks,
      location,
      selectedTypes,
      selectedEquipments,
    });

    setFilteredItems(result);
    setHasSearched(true);
  };

  return (
    <div className="flex gap-20">
      <div>
        <CatalogSideBar
          location={location}
          setLocation={setLocation}
          selectedEquipments={selectedEquipments}
          setSelectedEquipments={setSelectedEquipments}
          selectedTypes={selectedTypes}
          setSelectedTypes={setSelectedTypes}
        />
        <button
          onClick={handleSearch}
          className="bg-[#E44848] hover:border-[#D84343] cursor-pointer rounded-4xl text-white py-4 px-14 mt-10 ml-12"
        >
          Search
        </button>
      </div>

      <div>
        {isLoading && <Loader />}
        {error && <p>Error: {error}</p>}

        {hasSearched ? (
          filteredItems.length > 0 ? (
            <CatalogTruckCard items={filteredItems} />
          ) : (
            <p className="text-center mt-20 text-gray-500 text-xl">
              No results found for your filters.
            </p>
          )
        ) : (
          allTrucks.length > 0 && <CatalogTruckCard items={allTrucks} />
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

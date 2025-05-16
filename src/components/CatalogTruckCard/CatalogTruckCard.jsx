import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCatalog } from "../../redux/catalog/catalogOps";
import { useNavigate } from "react-router-dom";
import {
  toggleFavorite,
  selectFavorites,
} from "../../redux/favorites/favoritesSlice";
import Loader from "../Loader/Loader";

const CatalogTruckCard = ({ items = [] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector((state) => state.catalog.isLoading);
  const error = useSelector((state) => state.catalog.error);

  const favorites = useSelector(selectFavorites);

  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  if (isLoading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <ul className="mt-12 flex flex-col gap-8 ">
        {items.slice(0, visibleCount).map((item) => {
          const isFavorite = favorites.some(
            (favorite) => favorite.id === item.id,
          );
          return (
            <li
              key={item.id}
              className="p-6 border border-[#DADDE1] rounded-[20px] "
            >
              <div className="flex gap-6">
                <img
                  className="w-[292px] h-[320px] object-cover"
                  src={item.gallery[0]?.thumb}
                  alt={item.name}
                />
                <div className="w-[888px]">
                  <div className="flex gap-60 justify-between">
                    <h2>{item.name}</h2>
                    <div className="flex gap-4">
                      <p>€ {item.price.toFixed(2)}</p>
                      <button
                        onClick={() => {
                          console.log("Favori butonuna tıklandı:", item.id);
                          dispatch(toggleFavorite(item));
                        }}
                        className="focus:outline-none"
                        aria-label="Toggle Favorite"
                      >
                        <svg
                          className="text-[#101828] cursor-pointer"
                          width="24px"
                          height="21px"
                        >
                          <use
                            href={
                              isFavorite
                                ? "/sprite.svg#icon-filled-hearth"
                                : "/sprite.svg#icon-empty-hearth"
                            }
                          />
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="flex gap-4 mt-2">
                      <div className="flex gap-1 items-center">
                        <svg width="16px" height="16px">
                          <use href="/sprite.svg#icon-filled-star" />
                        </svg>
                        <p>
                          {item.rating} ({item.reviews.length} Reviews)
                        </p>
                      </div>
                      <div className="flex gap-1 items-center">
                        <svg width="16px" height="16px">
                          <use href="/sprite.svg#icon-map" />
                        </svg>
                        <p>{item.location}</p>
                      </div>
                    </div>

                    <p className="mt-6">{item.description}</p>

                    {/* Özellikler */}
                    <ul className="flex flex-wrap gap-2 mt-6">
                      {item.transmission && (
                        <li className="flex gap-2 border border-[#F2F4F7] rounded-full py-3 px-4.5">
                          <svg
                            className="text-[#101828]"
                            width="20px"
                            height="20px"
                          >
                            <use href="/sprite.svg#icon-automatic" />
                          </svg>
                          <span>{item.transmission}</span>
                        </li>
                      )}
                      {item.engine && (
                        <li className="flex gap-2 border border-[#F2F4F7] rounded-full py-3 px-4.5">
                          <svg
                            className="text-[#101828]"
                            width="20px"
                            height="20px"
                          >
                            <use href="/sprite.svg#icon-petrol" />
                          </svg>
                          <span>{item.engine}</span>
                        </li>
                      )}
                      {item.kitchen && (
                        <li className="flex gap-2 border border-[#F2F4F7] rounded-full py-3 px-4.5">
                          <svg
                            className="text-[#101828]"
                            width="20px"
                            height="20px"
                          >
                            <use href="/sprite.svg#icon-kitchen" />
                          </svg>
                          <span>Kitchen</span>
                        </li>
                      )}
                    </ul>

                    <ul className="flex flex-wrap gap-2 mt-2">
                      {item.ac && (
                        <li className="flex gap-2 border border-[#F2F4F7] rounded-full py-3 px-4.5">
                          <svg
                            className="text-[#101828]"
                            width="20px"
                            height="20px"
                          >
                            <use href="/sprite.svg#icon-ac" />
                          </svg>
                          <span>AC</span>
                        </li>
                      )}
                    </ul>

                    <button
                      onClick={() => navigate(`/catalog/${item.id}`)}
                      className="bg-[#E44848] hover:border-[#D84343] cursor-pointer rounded-4xl text-white py-4 px-14 mt-10"
                    >
                      Show More
                    </button>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      {visibleCount < items.length && (
        <div className="flex justify-center m-10">
          <button
            onClick={handleLoadMore}
            className="bg-[#DADDE1] cursor-pointer hover:border hover:border-[#D84343] border border-transparent rounded-full text-[#101828] py-4 px-8"
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
};

export default CatalogTruckCard;

import { useState } from "react";
import Features from "../DetailsFeatures/DetailsFeatures";
import Reviews from "../DetailsReviews/DetailsReviews";
const CamperDetails = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  if (!camper) return null;

  const { name, raiting, reviews, location, price, gallery, description } =
    camper;

  return (
    <div>
      <div className="mt-12 ml-16">
        <h2 className="text-xl font-bold">{name}</h2>
        <div className="flex gap-4 mt-2">
          <div className="flex gap-1 items-center">
            <svg width="16px" height="16px">
              <use href="/sprite.svg#icon-filled-star" />
            </svg>
            <p>
              {raiting} ({reviews.length} Reviews
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <svg width="16px" height="16px">
              <use href="/sprite.svg#icon-map" />
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <p className="mt-4 text-xl font-semibold">€ {price}</p>
      </div>

      <div className="flex flex-wrap gap-12 mt-7 ml-16">
        {gallery.map((img, index) => (
          <img
            key={index}
            className="w-[292px] h-[312px] rounded-xl object-cover"
            src={img.original}
            alt={`camper-img-${index}`}
          />
        ))}
      </div>

      <p className="mt-7 ml-16">{description}</p>

      <div className="flex mt-15 ml-16 gap-10 font-bold text-xl">
        <button
          className={`pb-1 border-b-[5px] ${
            activeTab === "features" ? "border-[#E44848]" : "border-transparent"
          } pb-4`}
          onClick={() => setActiveTab("features")}
        >
          Feature
        </button>
        <button
          className={`pb-1 border-b-[5px] ${
            activeTab === "reviews" ? "border-[#E44848]" : "border-transparent"
          } pb-4`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>

      <div>
        {activeTab === "features" && <Features camper={camper} />}
        {activeTab === "reviews" && <Reviews camper={camper} />}
      </div>
    </div>
  );
};

export default CamperDetails;

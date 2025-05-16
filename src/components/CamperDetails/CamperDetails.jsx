import { useState } from "react";
import Features from "../DetailsFeatures/DetailsFeatures";
import Reviews from "../DetailsReviews/DetailsReviews";
import CamperContactForm from "../CamperContactForm/CamperContactForm";
const CamperDetails = ({ camper }) => {
  const [activeTab, setActiveTab] = useState("features");

  if (!camper) return null;

  const {
    name,
    rating,
    reviews,
    location,
    price,
    gallery,
    description,
    transmission,
    AC,
    engine,
    kitchen,
    radio,
    form,
    length,
    width,
    height,
    tank,
    consumption,
  } = camper;

  const details = {
    transmission,
    airConditioner: AC,
    engine,
    kitchen,
    radio,
  };

  const vehicleDetails = {
    form,
    length,
    width,
    height,
    tank,
    consumption,
  };

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
              {rating} ({reviews.length} Reviews)
            </p>
          </div>
          <div className="flex gap-1 items-center">
            <svg width="16px" height="16px">
              <use href="/sprite.svg#icon-map" />
            </svg>
            <p>{location}</p>
          </div>
        </div>
        <p className="mt-4 text-xl font-semibold">€ {price.toFixed(2)}</p>
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

      <p className="mt-7 ml-16 text-[#475467]">{description}</p>

      <div className="flex mt-15 ml-16 gap-10 font-bold text-xl">
        <button
          className={`pb-1 border-b-[5px] ${
            activeTab === "features" ? "border-[#E44848]" : "border-transparent"
          } pb-4`}
          onClick={() => setActiveTab("features")}
        >
          Features
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

      <div className="mt-11 flex gap-10">
        <div>
          {activeTab === "features" && (
            <Features details={details} vehicleDetails={vehicleDetails} />
          )}
          {activeTab === "reviews" && <Reviews reviews={reviews} />}
        </div>

        <div>
          <CamperContactForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;

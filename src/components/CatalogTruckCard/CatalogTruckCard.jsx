const CatalogTruckCard = ({ items = [] }) => {
  return (
    <ul className="mt-12">
      {items.map((item) => (
        <li key={item.id} className="p-6">
          <div className="flex gap-6">
            <img
              className="w-[292px] h-[320px] object-cover"
              src={item.gallery[0]?.thumb}
              alt={item.name}
            />
            <div>
              <div className="flex gap-60 justify-between">
                <h2>{item.name}</h2>
                <div className="flex gap-4">
                  <p>{item.price}</p>
                  <svg className="text-[#101828]" width="24px" height="21px">
                    <use href="/sprite.svg#icon-empty-hearth" />
                  </svg>
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
                    <li className="flex gap-2">
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
                    <li className="flex gap-2">
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
                    <li className="flex gap-2">
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
                    <li className="flex gap-2">
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

                <button className="bg-[#E44848] cursor-pointer rounded-4xl text-white py-4 px-14 mt-10">
                  Show More
                </button>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CatalogTruckCard;

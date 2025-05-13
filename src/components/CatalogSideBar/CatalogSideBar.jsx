import { useState } from "react";

const equipmentList = [
  { id: "ac", label: "AC", icon: "icon-ac" },
  { id: "auto", label: "Automatic", icon: "icon-automatic" },
  { id: "kitchen", label: "Kitchen", icon: "icon-kitchen" },
  { id: "tv", label: "TV", icon: "icon-tv" },
  { id: "bathroom", label: "Bathroom", icon: "icon-bathroom" },
];

const typeList = [
  { id: "van", label: "Van", icon: "icon-van" },
  { id: "full", label: "Full Integrated", icon: "icon-fully-integrated" },
  { id: "alcove", label: "Alcove", icon: "icon-alcove" },
];

const CatalogSideBar = () => {
  const [selectedEquipments, setSelectedEquipments] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  const toggleItem = (id, type) => {
    const updater =
      type === "equipment" ? setSelectedEquipments : setSelectedTypes;
    const current = type === "equipment" ? selectedEquipments : selectedTypes;

    updater((prev) =>
      current.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const renderItem = (item, selectedList, type) => (
    <li
      key={item.id}
      onClick={() => toggleItem(item.id, type)}
      className={`flex flex-col gap-2 rounded-xl w-28 h-24 items-center justify-center cursor-pointer transition-all
        ${
          selectedList.includes(item.id)
            ? "border-1 border-[#E44848]"
            : "border border-transparent"
        }`}
    >
      <svg className="text-[#101828]" width="32px" height="32px">
        <use href={`/sprite.svg#${item.icon}`} />
      </svg>
      <p className="text-center">{item.label}</p>
    </li>
  );

  return (
    <div className="w-90 mt-12 ml-16">
      {/* Location */}
      <div className="flex flex-col gap-4">
        <p className="text-[#6C717B]">Location</p>
        <div className="relative w-full max-w-md">
          <svg
            className="absolute left-4 top-1/2 transform -translate-y-1/2 pointer-events-none"
            width="20"
            height="20"
          >
            <use href="/sprite.svg#icon-map" />
          </svg>
          <input
            className="pl-11 placeholder-gray-700 focus:outline-none focus:border-white border border-[#6C717B] rounded-full py-2 w-full"
            type="text"
            placeholder="Please enter the location."
            name="location"
          />
        </div>
      </div>

      {/* Equipment */}
      <div>
        <p className="text-[#6C717B] mt-10">Filters</p>
        <h2 className="mt-8 text-xl">Vehicle equipment</h2>
        <ul className="flex flex-wrap gap-2 mt-4">
          {equipmentList.map((item) =>
            renderItem(item, selectedEquipments, "equipment"),
          )}
        </ul>
      </div>

      {/* Type */}
      <div>
        <h2 className="mt-8 text-xl">Vehicle type</h2>
        <ul className="flex flex-wrap gap-2 mt-4">
          {typeList.map((item) => renderItem(item, selectedTypes, "type"))}
        </ul>
      </div>
    </div>
  );
};

export default CatalogSideBar;

const DetailsFeatures = ({ details = {}, vehicleDetails = {} }) => {
  if (!details || !vehicleDetails) return null;

  const featuresMap = [
    {
      key: "transmission",
      label: "Automatic",
      icon: "icon-automatic",
      isBoolean: false,
    },
    { key: "airConditioner", label: "AC", icon: "icon-ac", isBoolean: true },
    { key: "engine", label: "Diesel", icon: "icon-gas", isBoolean: false },
    { key: "kitchen", label: "Kitchen", icon: "icon-kitchen", isBoolean: true },
    { key: "radio", label: "Radio", icon: "icon-radio", isBoolean: true },
  ];

  return (
    <div className="ml-16 mb-20 border border-[#DADDE1] rounded-[10px] p-11 flex flex-col gap-[100px] min-h-[600px] w-[631px]">
      <ul className="flex flex-wrap gap-2">
        {featuresMap.map(({ key, label, icon, isBoolean }) => {
          const value = details[key];

          if (isBoolean && !value) return null;

          if (!isBoolean) {
            if (!value) return null;
            if (key === "transmission" && value.toLowerCase() !== "automatic")
              return null;
            if (key === "engine" && value.toLowerCase() !== "diesel")
              return null;
          }

          return (
            <li
              key={key}
              className="flex gap-2 py-3 px-4.5 border border-[#F2F4F7] bg-[#F2F4F7] rounded-full"
            >
              <svg className="text-[#101828]" width="20px" height="20px">
                <use href={`/sprite.svg#${icon}`} />
              </svg>
              <span>{label}</span>
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-6">
        <h2 className="font-bold text-xl">Vehicle details</h2>
        <hr className="border-solid border-[#DADDE1]" />

        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <p>Form</p>
            <p>Length</p>
            <p>Width</p>
            <p>Height</p>
            <p>Tank</p>
            <p>Consumption</p>
          </div>
          <div className="flex flex-col gap-4">
            <p>{vehicleDetails.form}</p>
            <p>{vehicleDetails.length}</p>
            <p>{vehicleDetails.width}</p>
            <p>{vehicleDetails.height}</p>
            <p>{vehicleDetails.tank}</p>
            <p>{vehicleDetails.consumption}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsFeatures;

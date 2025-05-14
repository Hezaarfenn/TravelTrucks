export const filterTrucks = ({
  trucks,
  location,
  selectedTypes,
  selectedEquipments,
}) => {
  return trucks.filter((item) => {
    const matchesLocation = location
      ? item.location?.toLowerCase().includes(location.toLowerCase())
      : true;

    const matchesType =
      selectedTypes.length === 0 ||
      selectedTypes
        .map((type) => type.toLowerCase())
        .includes(item.form?.toLowerCase());

    const matchesEquipments =
      selectedEquipments.length === 0 ||
      selectedEquipments.every((equip) => {
        switch (equip) {
          case "ac":
            return item.AC;
          case "auto":
            return item.transmission === "automatic";
          case "kitchen":
            return item.kitchen;
          case "tv":
            return item.TV;
          case "bathroom":
            return item.bathroom;
          default:
            return false;
        }
      });

    return matchesLocation && matchesType && matchesEquipments;
  });
};

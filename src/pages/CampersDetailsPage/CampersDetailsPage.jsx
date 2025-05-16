import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTruckById } from "../../redux/catalog/catalogOps";
import CamperDetails from "../../components/CamperDetails/CamperDetails";
import Loader from "../../components/Loader/Loader";

const CampersDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const camper = useSelector((state) => state.catalog.selectedTruck);
  const isLoading = useSelector((state) => state.catalog.isLoading);

  useEffect(() => {
    if (id) {
      dispatch(fetchTruckById(id));
    }
  }, [id, dispatch]);

  if (isLoading) return <Loader />;
  if (!camper) return <div>Camper not found</div>;

  return <CamperDetails camper={camper} />;
};

export default CampersDetailsPage;

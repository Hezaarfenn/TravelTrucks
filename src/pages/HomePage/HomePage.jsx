import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";
import HomePicture from "/img/HomePicture.png";

const HomePage = () => {
  return (
    <>
      <img width="100%" src={HomePicture} alt="HomePicture" />
      <div>
        <HeaderInfo />
      </div>
    </>
  );
};

export default HomePage;

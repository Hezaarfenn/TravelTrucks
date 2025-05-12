import Header from "../../components/Header/Header";
import HeaderInfo from "../../components/HeaderInfo/HeaderInfo";
import HomePicture from "/img/HomePicture.png";

export const HomePage = () => {
  return (
    <>
      <Header />
      <img width="100%" src={HomePicture} alt="HomePicture" />
      <div>
        <HeaderInfo />
      </div>
    </>
  );
};

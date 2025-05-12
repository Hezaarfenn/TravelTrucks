import Header from "../../components/Header/Header";
import HomePicture from "/img/HomePicture.png";

export const HomePage = () => {
  return (
    <>
      <Header />
      <img width="1440px" height="696px" src={HomePicture} alt="HomePicture" />
    </>
  );
};

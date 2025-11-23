import "../src/MissingPage.css";
import Header from "./Header";
const MissingPage = () => {
  return (
    <>
      <Header />
      <div className='missingPage'>
        <p>This Page can not be found... Try again...</p>
      </div>
    </>
  );
};

export default MissingPage;

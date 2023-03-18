import { RotatingTriangles } from "react-loader-spinner";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="overlay">
      <RotatingTriangles
        visible={true}
        height="80"
        width="80"
        ariaLabel="rotating-triangels-loading"
        wrapperStyle={{}}
        wrapperClass="rotating-triangels-wrapper"
        colors={["#CBE4DE", "#0E8388", "#2E4F4F"]}
      />
    </div>
  );
};

export default Loader;

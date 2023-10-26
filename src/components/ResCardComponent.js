import { CDNIMG_URL } from "../utils/imgUrl";

const ResCardComponent = (props) => {
  const { resData } = props;

  const { name, cuisines, costForTwoString, totalRatingsString } =
    resData?.data; // Oonditional chaining & Adding the props.

  return (
    <div className="res-card">
      <h3 style={{ textAlign: "center" }}>{name}</h3>
      <img
        style={{ width: "270px", height: "210px" }}
        src={CDNIMG_URL + resData.data.cloudinaryImageId}
      />

      <h4 style={{ textAlign: "center" }}>{cuisines}</h4>
      <h4 style={{ textAlign: "center" }}>{costForTwoString}</h4>

      <h4 style={{ textAlign: "center" }}>{totalRatingsString} </h4>
    </div>
  );
};
export default ResCardComponent;

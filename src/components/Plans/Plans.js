import PlanWrapper from "./Plans.style";
import astro from "../../assets/astro.png";
import zee5 from "../../assets/zee5.png";
import { useHistory } from "react-router-dom";

const Plans = (props) => {
  const history = useHistory();
  return (
    <PlanWrapper>
      <div className="mainPlanDiv" style={{ borderColor: "#4ae5f0" }}>
        <span className="ribbon" style={{ backgroundColor: "#4ae5f0" }}>
          Basic
        </span>
        <div className="priceCombo">
          <div className="priceNumber" style={{ color: "#4ae5f0" }}>
            ₹249
          </div>
          <div className="priceText">+Coupons</div>
        </div>
        <hr></hr>
        <div className="midDiv"></div>
        <div classname="description">Includes accidental Group Policy</div>
        <div className="divPayBtn">
          <div className="paybtn" onClick={() => history.push("/plans/basic")}>
            Buy Now
          </div>
        </div>
      </div>
      <div className="mainPlanDiv" style={{ borderColor: "#f47530" }}>
        <span className="ribbon" style={{ backgroundColor: "#f47530" }}>
          Standard
        </span>
        <div className="priceCombo">
          <div className="priceNumber" style={{ color: "#f47530" }}>
            ₹499
          </div>
          <div className="priceText">+5x Coupons</div>
        </div>
        <hr></hr>
        <div className="midDiv">
          <img src={astro} className="imgCentre" />
        </div>
        <div classname="description">
          Includes Group Personal Policy and group terms life
        </div>
        <div className="divPayBtn">
          <div
            className="paybtn"
            onClick={() => history.push("/plans/standard")}
          >
            Buy Now
          </div>
        </div>
      </div>
      <div className="mainPlanDiv" style={{ borderColor: "#5df07d" }}>
        <span className="ribbon" style={{ backgroundColor: "#5df07d" }}>
          Premium
        </span>
        <div className="priceCombo">
          <div className="priceNumber" style={{ color: "#5df07d" }}>
            ₹999
          </div>
          <div className="priceText">+10x Coupons</div>
        </div>
        <hr></hr>
        <div className="midDiv">
          <img src={astro} className="imgCentre" />
          <img src={zee5} className="imgCentre" />
        </div>
        <div classname="description">
          Includes Group Personal Policy and group terms life and hospicash
        </div>
        <div className="divPayBtn">
          <div
            className="paybtn"
            onClick={() => history.push("/plans/premium")}
          >
            Buy Now
          </div>
        </div>
      </div>
    </PlanWrapper>
  );
};

export default Plans;

import PlanBannerWrapper from "./PlansBanner.style";
import coloredLinePlans from "../../assets/coloredLinePlans.png";

const PlansBanner = (props) => {
  return (
    <PlanBannerWrapper>
      <div className="titleDiv">
        <h1>Zopper Plans</h1>
        <img src={coloredLinePlans} className="imgPlanBanner"/>
      </div>
    </PlanBannerWrapper>
  );
};

export default PlansBanner;

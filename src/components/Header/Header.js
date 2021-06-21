import groupJumping from "../../assets/groupJumping.png";
import rewardsPlatform from "../../assets/rewardsPlatform.png";
import HeaderWrapper from "./Header.style";

const Header = (props) => {
  return (
    <HeaderWrapper>
      <div className="mainDiv">
        <div className="rewardsDiv">
          <img src={rewardsPlatform} className="imgRewards"/>
        </div>
        <div className="groupDiv">
          <img src={groupJumping} className="imgGroup"/>
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;

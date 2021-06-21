import styled from "styled-components";

const HeaderWrapper = styled.section`
  top: 0;
  left: 0;
  width: 100%;
  background-color: #dcf4ff;

  .mainDiv {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  .rewardsDiv {
    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .groupDiv {
    width: 50%;
    @media (max-width: 500px) {
      width: 100%;
    }
  }

  .imgRewards {
    width: 100%;
    padding: 10%;
    @media (max-width: 760px) {
      padding: 2%;
    }
  }

  .imgGroup {
    width: 100%;
    padding: 10%;
    @media (max-width: 760px) {
      padding: 2%;
    }
  }
`;

export default HeaderWrapper;

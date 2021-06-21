import styled from "styled-components";

const PlanBannerWrapper = styled.section`
  width: 100%;
  align-items: center;
  padding: 20px;

  .titleDiv {
    text-align: center;
  }

  .imgPlanBanner {
    width: 400px;
    @media (max-width: 400px) {
        width: 100%;
    }
  }
`;

export default PlanBannerWrapper;

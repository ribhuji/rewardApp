import styled from "styled-components";

const PlanWrapper = styled.section`
  align-items: center;
  width: 100%;
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;

  .mainPlanDiv {
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    width: 400px;
    min-width: 200px;
    heigth: 400px;
    min-height: 400px;
    margin: auto;
    border-style: solid;
    border-color: coral;
    border-radius: 5px;
    align-items: center;
    text-align: center;
    align-content: space-around;
    margin-top: 40px;
    padding-right: 20px;
    padding-left: 20px;
    padding-bottom: 20px;
    @media (max-width: 760px) {
      width: 80%;
    }
  }

  .mainPlanDiv:hover {
    box-shadow: 0 10px 50px 0 rgba(0, 0, 0, 0.2);
  }

  .ribbon {
    width: 60px;
    padding: 10px;
    top: -6px;
    text-align: center;
    background: #f47530;
  }

  .priceCombo {
    display: flex;
    padding: 20px;
    justify-content: center;
    height: 30%;
    min-height: 30%;
  }
  .priceNumber {
    font-size: 20px;
    text-align: right;
    width: 50%;
    vertical-align: middle;
    display: inline;
  }

  .priceText {
    text-align: left;
    width: 50%;
    vertical-align: middle;
    display: inline;
  }

  .description {
    height: 40%;
    min-height: 40%;
  }

  .divPayBtn {
    height: 30%;
    min-height: 30%;
  }
  .paybtn {
    border-style: solid;
    border-color: grey;
    border-radius: 5px;
    width: 100px;
    align-self: center;
    margin: auto;
    bottom: 0;
    cursor: pointer;
  }
  .midDiv {
    heigth: 200px;
    min-height: 200px;
    display: flex;
    align-items: center;
  }
  .imgCentre {
    max-height: 100px;
    margin: auto;
    max-width: 40%;
  }
`;

export default PlanWrapper;

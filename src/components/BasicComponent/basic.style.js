import styled from "styled-components";

const basicWrapper = styled.section`
  align-items: center;
  width: 100%;
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 20px;

  .formDiv {
    border-style: solid;
    border-color: coral;
    border-radius: 5px;
    box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.2);
  }
  .title {
    font-weight: 900;
    font-size: 50px;
  }
  .imgBasicLine {
    align-self: left;
    width: 400px;
    @media (max-width: 400px) {
      width: 100%;
    }
  }
`;

export default basicWrapper;

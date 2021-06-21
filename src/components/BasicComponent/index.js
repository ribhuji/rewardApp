import coloredLineBasic from "../../assets/coloredLineBasic.png";
import { useEffect, useState } from "react";
import basicWrapper from "./basic.style";

const Basic = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  useEffect(() => {
    console.log(title, "title", body, "body", userId, "userId");
  }, [title, body, userId]);

  const callapi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        body,
        userId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <basicWrapper>
      <div>
        <div className="title">
          <h1>{props.name} ZRP Plan</h1>
        </div>
        <div>
          <img src={coloredLineBasic} className="imgPlanBanner" />
        </div>
        <div className="formDiv">
          <div>
            <input
              type="text"
              placeholder="Title"
              onChange={(event) => setTitle(event.target.value)}
            ></input>
            <input
              type="text"
              placeholder="Body"
              onChange={(event) => setBody(event.target.value)}
            ></input>
            <input
              type="text"
              placeholder="UserId"
              onChange={(event) => setUserId(event.target.value)}
            ></input>
          </div>
          <div>
            <button onClick={callapi}>Submit</button>
          </div>
        </div>
      </div>
    </basicWrapper>
  );
};

export default Basic;

import { Fragment } from "react";
import Header from "./components/Header/Header";
import PlansBanner from "./components/PlansBanner/PlansBanner";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Basic from "./components/BasicComponent";
import Plans from "./components/Plans/Plans";

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <Fragment>
                <Header />
                <main style={{ paddingBottom: "50px" }}>
                  <PlansBanner />
                  <Plans />
                </main>
              </Fragment>
            )}
          />
          <Route path="/plans/basic" exact component={() => <Basic name="Basic"/>}/>
          <Route path="/plans/standard" exact component={() => <Basic name="Standard"/>}/>
          <Route path="/plans/premium" exact component={() => <Basic name="Premium"/>}/>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;

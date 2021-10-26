import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";


import DocumentationView from "./views/DocumentationView";
import TimersView from "./views/TimersView";

const Container = styled.div`
  margin: 40px auto;
  text-align: center;
`;

const StyledNav = styled.nav`
  margin: 40px auto;
  text-align: left;
`;

function App() {
  return (
    <Container>
      <Router>
        <StyledNav>
          <ul>
            <li>
              <Link to="/">Timers</Link>
            </li>
            <li>
              <Link to="/docs">Documentation</Link>
            </li>
          </ul>
        </StyledNav>
        <Switch>
          <Route path="/docs">
            <DocumentationView />
          </Route>
          <Route path="/">
            <TimersView />
          </Route>
        </Switch>
      </Router>
    </Container>

  );
}

export default App;

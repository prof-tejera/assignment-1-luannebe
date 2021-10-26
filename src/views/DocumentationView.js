import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import Loading from "../components/generic/Loading";
import { StartButton, StopButton, ResetButton } from "../components/generic/Button";
import { NumInput, Rounds, Cycle } from "../components/generic";
import { TimerDisplay } from "../utils/styles"
import { WorkPeriod, RestPeriod } from "../components/generic/Period";

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  text-align: left;
`;

const Title = styled.div`
  font-size: 2rem;
  text-align: left;
`;

class Documentation extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <Title>Documentation</Title>
          <DocumentComponent
            title="Loading spinner "
            component={<Loading />}
            propDocs={[
              {
                prop: "size",
                description: "Changes the size of the loading spinner",
                type: "string",
                defaultValue: "medium",
              },
            ]}
          />
          <DocumentComponent
            title="StartButton"
            component={<StartButton disabled={false} label="Start" />}
            propDocs={[
              {
                prop: "disabled",
                description: "Disables button and changes styling",
                type: "boolean",
                defaultValue: "false",
              },
              {
                prop: "label",
                description: "Label on button",
                type: "string",
                defaultValue: "",
              },
            ]}
          />
          <DocumentComponent
            title="NumInput"
            component={<NumInput id="hours" name="hours" min="0" max="12" defaultVal="0" label="Hours" />}
            propDocs={[
              {
                prop: "disabled",
                description: "",
                type: "boolean",
                defaultValue: "",
              },
            ]}
          />
          <DocumentComponent
            title="TimerDisplay"
            component={<TimerDisplay visible={true} >00:00:00</TimerDisplay>}
            propDocs={[
              {
                prop: "disabled",
                description: "Disables button and changes styling",
                type: "boolean",
                defaultValue: "false",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;

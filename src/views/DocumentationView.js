import React from "react";
import styled from "styled-components";

import DocumentComponent from "../components/documentation/DocumentComponent";

import { StartButton } from "../components/generic/Button";
import { NumInput } from "../components/generic";


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
            title="Button"
            component={<StartButton label="Start" />}
            propDocs={[
              {
                prop: "disabled",
                description: "Disables button and triggers style changes",
                type: "boolean",
                defaultValue: "false",
              },
              {
                prop: "label",
                description: "Label on button",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "onClick",
                description: "Callback function. TBD in next phase.",
                type: "func",
              },
            ]}
          />
          <DocumentComponent
            title="NumInput"
            component={<NumInput id="hours" name="hours" min="0" max="12" defaultVal="0" label="Hours" />}
            propDocs={[
              {
                prop: "id",
                description: "Id for the number input field (HTML input type number)",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "name",
                description: "Name for the number input field",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "min",
                description: "Minimum allowed number input value",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "max",
                description: "Maximum allowed number input value",
                type: "string",
                defaultValue: "",
              },
              {
                prop: "defaultValue",
                description: "Value to appear when Timer is first displayed",
                type: "string",                
                defaultValue: "0",
              },
              {
                prop: "label",
                description: "Text to label the number input control",
                type: "string",   
                defaultValue: "",
              },
            ]}
          />
        </div>
      </Container>
    );
  }
}

export default Documentation;

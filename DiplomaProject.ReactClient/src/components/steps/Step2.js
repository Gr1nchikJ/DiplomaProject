import { Divider } from "primereact/divider";
import React from "react";
import { FieldPanelFullWidth } from "../utils_components/Styled.components";
import WizardTextInputComponent from "../utils_components/WizardTextInputComponent";

export const Step2 = ({certificate}) => {
  return (
    <FieldPanelFullWidth>
      <WizardTextInputComponent
        label={"Поштовий індекс"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <WizardTextInputComponent
        label={"Країна"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <WizardTextInputComponent
        label={"Регіон"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <Divider />
      <WizardTextInputComponent
        label={"Населений пункт"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <WizardTextInputComponent
        label={"Вулиця або аналог"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <WizardTextInputComponent
        label={"Район"}
        labelStyle={{ marginRight: "5px" }}
      />
      <Divider />
      <WizardTextInputComponent
        label={"Номер будівлі"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <WizardTextInputComponent
        label={"Номер корпусу"}
        labelStyle={{ marginRight: "5px" }}
      />
    </FieldPanelFullWidth>
  );
};

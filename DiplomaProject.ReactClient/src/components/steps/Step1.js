import React from "react";
import { FieldPanelFullWidth } from "../utils_components/Styled.components";
import { Divider } from "primereact/divider";
import WizardTextInputComponent from "../utils_components/WizardTextInputComponent";

export const Step1 = ({ certificate }) => {
  return (
    <FieldPanelFullWidth>
      <WizardTextInputComponent
        label={"Назва сертифікату"}
        labelStyle={{ marginRight: "5px" }}
        value={certificate.certificateName}
        required
      />
      <WizardTextInputComponent
        label={"Назва органу"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <WizardTextInputComponent
        label={"Ідентифікатор органу"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <WizardTextInputComponent
        label={"Ім'я або назва суб’єкта"}
        labelStyle={{ marginRight: "5px" }}
        required
      />
      <Divider></Divider>
      <WizardTextInputComponent
        label={"Ідентифікатор суб’єкта"}
        labelStyle={{ marginRight: "5px" }}
      />
      <WizardTextInputComponent
        label={"Назва об'єкта"}
        labelStyle={{ marginRight: "5px" }}
        value={certificate.name === undefined ? "" : certificate.name}
        required
      />
    </FieldPanelFullWidth>
  );
};

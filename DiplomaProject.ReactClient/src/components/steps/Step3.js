import React from "react";
import { Button } from "primereact/button";
import styled from "styled-components";
import WizardTextInputComponent from "../utils_components/WizardTextInputComponent";
import { FieldPanelFullWidth } from "../utils_components/Styled.components";
import { Divider } from "primereact/divider";

export const Step3 = ({ certificate }) => {
  return (
    <>
      <ContentWrapper>
        <div>
          <Button
            label="Підтвердити валідність"
            onClick={() => navigate("/library")}
            raised
          />
          <Button
            className="mr-3 ml-3"
            label="Видалити сертифікат"
            onClick={() => navigate("/library")}
            raised
          />
          <Button
            label="Зробити транзакцію"
            onClick={() => navigate("/library")}
            raised
          />
        </div>
      </ContentWrapper>
      <div>
        <NearBadge />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <CheckmarkBadge />
        </div>
        
      </div>
      <FieldPanelFullWidth>
        <Divider />
        <WizardTextInputComponent
          label={"Контактні дані"}
          labelStyle={{ marginRight: "5px" }}
          required
        />
        <WizardTextInputComponent
          label={"Контактний адрес електронної пошти"}
          labelStyle={{ marginRight: "5px" }}
          required
        />
        <WizardTextInputComponent
          label={"Контактний номер телефону"}
          labelStyle={{ marginRight: "5px" }}
          required
        />
        <Divider />
      </FieldPanelFullWidth>
    </>
  );
};

const ContentWrapper = styled.div`
  margin: 2.5rem 0px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const BadgeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
`;

const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  color: white;
  font-size: 14px;
  margin-left: 8px;
`;

const NearLogo = styled.img`
  width: 20px;
  height: 20px;
`;

const CheckmarkBadge = () => <Badge color="green">✓</Badge>;

const NearBadge = () => (
  <BadgeContainer>
    <NearLogo
      src="https://cryptologos.cc/logos/near-protocol-near-logo.png"
      alt="NEAR Logo"
    />
  </BadgeContainer>
);

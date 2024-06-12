import React, { useEffect, useState } from "react";
import { Carousel } from "primereact/carousel";
import { Button } from "primereact/button";
import styled from "styled-components";
import { Divider } from "primereact/divider";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";
import AuthorizeView from "./AuthorizeView";
import { useCreateCertificateMutation } from "../mutations";
import { useAllCertificates } from "../queries"

export const Home = () => {
  const navigate = useNavigate();
  const createMutation = useCreateCertificateMutation();
  const certificates = useAllCertificates().data;

  const handleCreate = async () => {
    var certificate = await createMutation.mutateAsync({userId: '23e2a665-90e7-4b57-9a08-7872560479f5'});
    navigate(`/certificate/${certificate.id}`)
  };

  const responsiveOptions = [
    {
      breakpoint: "1400px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "1199px",
      numVisible: 3,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 1,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
      numScroll: 1,
    },
  ];


  const certificateTemplate = (certificate) => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://img.freepik.com/premium-vector/documents-folder-with-stamp-text-contract-with-approval-stamp_349999-535.jpg`}
            alt={certificate.certificateName}
            className="w-4 shadow-4"
          />
        </div>
        <div>
          <h4 className="mb-1">{certificate.certificateName}</h4>
          <div className="mt-4 flex flex-wrap gap-2 justify-content-center">
            <Button icon="pi pi-search" className="p-button p-button-rounded" onClick={() => navigate(`/certificate/${certificate.id}`)}/>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
        <Carousel
          value={certificates}
          numVisible={3}
          numScroll={3}
          responsiveOptions={responsiveOptions}
          className="custom-carousel"
          circular
          autoplayInterval={7000}
          itemTemplate={certificateTemplate}
        />
        <CustomDivider />
        <ContentWrapper>
          <div>
            <Button
              label="Створити сертифікат"
              onClick={() => handleCreate()}
              raised
              style={{ marginRight: "10px" }}
            />
            <Button
              label="Перегляд сертифікатів"
              onClick={() => navigate("/library")}
              raised
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <span className="p-input-icon-left">
              <i className="pi pi-search" />
              <InputText placeholder="Знайти" />
            </span>
          </div>
        </ContentWrapper>
        <CustomDivider />
        <AboutUsSection>
          <CaptureText>Про застосунок</CaptureText>
          <RegularText>
            <p>
            Застосунок розробляється для сертифікації закладів на відповідність вимогам доступності для людей з обмеженими можливостями. 
            Він дозволяє закладам реєструватися та подавати заявки на сертифікацію, яку проводять спеціалісти, оцінюючи різні аспекти доступності. 
            Після успішного проходження перевірки заклад отримує сертифікат, який підтверджує його відповідність стандартам доступності. 
            Сертифікати зберігаються у базі та відбувається транзакція до мережи блокчейну для забезпечення їхньої автентичності та неможливості підробки. 
            Користувачі можуть переглядати сертифіковані заклади через веб-інтерфейс, а адміністратори мають можливість керувати заявками та процесом сертифікації.
            </p>
          </RegularText>
        </AboutUsSection>
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

const AboutUsSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
`;

const CustomDivider = styled(Divider)`
  .p-divider .p-divider-horizontal:before {
    border-top: 2px #3f4b5b;
  }
`;

const CaptureText = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  height: 3vh;
`;

const RegularText = styled.div`
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  width: 800px;
  text-align: center;
  color: rgba(21, 21, 21, 0.8);
`;

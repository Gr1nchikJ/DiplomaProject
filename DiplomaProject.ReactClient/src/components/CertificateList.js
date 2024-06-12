import React from "react";
import styled from "styled-components";
import { Card } from "primereact/card";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { useNavigate } from "react-router-dom";

function CertificateList({ certificates = [] }) {

    const navigate = useNavigate();

    const handleClick = (id) => {
        navigate(`/certificate/${id}`);
    };

    return (
        <Container>
            {certificates.length > 0 ? (
                certificates.map((certificate) => (
                    <CertificateCard
                        key={certificate.id}
                        title={<CertificateTitle>{certificate.certificateName}</CertificateTitle>}
                        onClick={() => handleClick(certificate.id)}
                    >
                        <p>{certificate.description}</p>
                    </CertificateCard>
                ))
            ) : (
                <p>No certificates available.</p>
            )}
        </Container>
    );
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background-color: #f5f5f5;
`;

const CertificateCard = styled(Card)`
  width: 70%;
  margin: 1rem;
`;

const CertificateTitle = styled.h4`
  margin: 0;
`;

export default CertificateList;

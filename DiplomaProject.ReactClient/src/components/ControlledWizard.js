import React, { useState } from "react";
import { Steps } from "primereact/steps";
import { Button } from "primereact/button";
import { Step1 } from "./steps/Step1";
import { Step2 } from "./steps/Step2";
import { Step3 } from "./steps/Step3";
import { useParams } from "react-router-dom";
import { useGetCertificate } from "../queries";

export default function ControlledWizard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { id } = useParams();
  const certificate = useGetCertificate(id).data;

  if (!certificate) {
    return <p>Certificate not found.</p>;
  }

  const items = [
    {
      label: "Інформація про будівлю",
    },
    {
      label: "Інформація про адресу",
    },
    {
      label: "Додаткова інформація",
    },
  ];

  return (
    <div className="card m-3">
      <div className="flex flex-wrap justify-content-end gap-2 mb-3">
        <Button
          outlined={activeIndex !== 0}
          rounded
          label="1"
          onClick={() => setActiveIndex(0)}
          className="w-2rem h-2rem p-0"
        />
        <Button
          outlined={activeIndex !== 1}
          rounded
          label="2"
          onClick={() => setActiveIndex(1)}
          className="w-2rem h-2rem p-0"
        />
        <Button
          outlined={activeIndex !== 2}
          rounded
          label="3"
          onClick={() => setActiveIndex(2)}
          className="w-2rem h-2rem p-0"
        />
      </div>
      <Steps model={items} activeIndex={activeIndex} />
      {activeIndex === 0 && <Step1 certificate={certificate} />}
      {activeIndex === 1 && <Step2 certificate={certificate} />}
      {activeIndex === 2 && <Step3 certificate={certificate} />}
    </div>
  );
}

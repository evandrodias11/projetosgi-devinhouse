import React from "react";
import FormCompanies from "../../components/formCompanies";
import Header from "../../components/header";

function CompaniesRegsitration() {
  return (
    <>
      <Header></Header>
      <div className="companies-container">
        <FormCompanies></FormCompanies>
      </div>
    </>
  );
}

export default CompaniesRegsitration;

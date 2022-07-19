import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import h1 from "./assets/images/h1.png";
import desktop from "./assets/images/desktop.png";
import ros from "./assets/images/ros.png";
import "./assets/css/style.css";
import React, { useEffect, useState } from "react";
import Basicdetails from "./Basicdetails.js";

import Accordion from "react-bootstrap/Accordion";
import TransactionDetails from "./TransactionDetails";
import KYCDetails from "./KYCDetails";
import NomineeDetail from "./NomineeDetail";
import RiskProfile from "./RiskProfile";
import DocsDetail from "./DocsDetail";
import Footer from "./Footer";
function StepperForm() {
  const [key, setKey] = useState(1);
  const [formObj, setformObj] = useState({
    setupProfile: {
      fullName: "",
      guadrianName: "",
      motherName: "",
      documentType: "",
      documentNumber: "",
      issuanceDate: "",
      lifeTimeExpiry: "",
      expiryDate: "",
      dob: "",
      placeofBirth: "",
      gender: "",
      religion: "",
      martialStatus: "",
      residentialStaus: "",
      permanetResidentinPK: "",
      nationality: "",
      country: "",
      otherNationalityBool: "",
      otherNationality: "",
      greencardHolder: "",
      usResident: "",
      taxResident: "",
      residentialAddress: "",
      mailingAddress: "",
      email: "",
      phone: "",
      region: "",
      city: "",
      zipcode: "",
      telnoRes: "",
      telnoOff: "",
      taxStatus: "",
      ntnNo: "",
    },
    professionalDetail: {
      education: "",
      occupation: "",
      sourceOfFund: "",
      monthlyIncome: "",
      modeofTransaction: "",
      noofTransactions: "",
      annualIncome: "",
      expectedTurnOver: "",
    },
    kycDetail: {
      otherNAtionality: "",
      notPartoffatf: "",
      offShoreAccounts: "",
      refusedToopenuraccount: "",
      dealWithHighItem: "",
      residentInAfghanOrSPunjab: "",
      profilePosition: "",
      actingBehalfonOther: "",
      pep: "",
      relationwithPep: "",
      customerrefusedToopenuraccount: "",
      openingAccountbehlfonOther: "",
      postioninGovt: "",
      postioninPoliticalParty: "",
      titleofAcct: "",
      cnic: "",
      countryResidence: "",
      placeofBirth: "",
      USCitizen: "",
      USResident: "",
      greencardHolder: "",
      otherNationalityBool: "",
      otherNationality: "",
      taxObligationOtherBool: "",
      taxObligationOther: "",
      overseasPowerOfAttorney: "",
      addressPowerOfAttorney: "",
      terms_condition_bool: "",
      name: "",
      businessName: "",
      fedralTaxClassfication: "",
      payeeCode: "",
      FatcaReportingCode: "",
      residentialAddress: "",
      region: "",
      city: "",
      zipcode: "",
      accountNumber: "",
      tinnumber: "",
    },
    nomineeDetail: {
      name: "",
      guardianName: "",
      cnic: "",
      email: "",
      mailingAddress: "",
      phone: "",
      relationship: "",
    },
    riskProfile: {
      schemeCode: "",
      assetAllocation: "",
      mediumvolatilityBalance: "",
      lowvolatilityBalance: "",
      lowervolatilityBalance: "",
    },

    uploaddocumentsdetail: {
      idDocType: "",
      idDocFrontCopy: {},
      idDocBackCopy: "",
      SourceofIncomeCopy: "",
      nomineeCnicCopy: "",
      w8FormCopy: "",
      businessEmpProofCopy: "",
      digitalSignCopy: "",
      utilityBillCopy: "",
    },
  });

  const continueStepEvent = () => {
    let index = parseInt(key) + 1;
    setKey(index);
  };
  const backStepEvent = () => {
    let index = parseInt(key) - 1;
    setKey(index);
  };

  const handleChange = (e, object, key) => {
    setformObj({
      ...formObj,
      [object]: {
        ...formObj[object],
        [key]: e.target?.files
          ? e.target.files[0]
          : e?.target?.value
          ? e.target.value
          : e,
      },
    });
  };

  useEffect(() => {
    console.log(formObj);
  }, [formObj]);
  return (
    <div>
      <header>
        <div className="header">
          <div
            className="d-flex justify-content-between align-items-center w-30 "
            style={{ marginLeft: "20px" }}
          >
            <div className="logo">
              <img src={h1} alt="" />
            </div>

            <div className="logo">
              <img src={desktop} alt="" />
            </div>

            <div className="logo">
              <img src={ros} alt="" />
            </div>
          </div>
          <div className="wizard">
            <div className="wizard-inner container">
              <div className="connecting-line"></div>

              <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
              >
                <Tab
                  eventKey={1}
                  title={
                    <>
                      <span className="tab-title">Setup Profile</span>
                      <span className="round-tab">1 </span>
                    </>
                  }
                >
                  <Basicdetails
                    formObj={formObj}
                    handleChange={handleChange}
                    backStepEvent={backStepEvent}
                    continueStepEvent={continueStepEvent}
                  />
                </Tab>
                <Tab
                  eventKey={2}
                  title={
                    <>
                      <span className="tab-title">Transaction Details</span>
                      <span className="round-tab">2 </span>
                    </>
                  }
                >
                  <TransactionDetails
                    formObj={formObj}
                    handleChange={handleChange}
                    backStepEvent={backStepEvent}
                    continueStepEvent={continueStepEvent}
                  />
                </Tab>
                <Tab
                  eventKey={3}
                  title={
                    <>
                      <span className="tab-title">KYC</span>
                      <span className="round-tab">3 </span>
                    </>
                  }
                >
                  <KYCDetails
                    formObj={formObj}
                    handleChange={handleChange}
                    backStepEvent={backStepEvent}
                    continueStepEvent={continueStepEvent}
                  />
                </Tab>
                <Tab
                  eventKey={4}
                  title={
                    <>
                      <span className="tab-title">Nominee Details</span>
                      <span className="round-tab">4 </span>
                    </>
                  }
                >
                  <NomineeDetail
                    formObj={formObj}
                    handleChange={handleChange}
                    backStepEvent={backStepEvent}
                    continueStepEvent={continueStepEvent}
                  />
                </Tab>
                <Tab
                  eventKey={5}
                  title={
                    <>
                      <span className="tab-title">Risk Profile</span>
                      <span className="round-tab">5 </span>
                    </>
                  }
                >
                  <RiskProfile
                    formObj={formObj}
                    handleChange={handleChange}
                    backStepEvent={backStepEvent}
                    continueStepEvent={continueStepEvent}
                  />
                </Tab>
                <Tab
                  eventKey={6}
                  title={
                    <>
                      <span className="tab-title">Upload Documents</span>
                      <span className="round-tab">6 </span>
                    </>
                  }
                >
                  <DocsDetail
                    formObj={formObj}
                    handleChange={handleChange}
                    backStepEvent={backStepEvent}
                    continueStepEvent={continueStepEvent}
                  />
                </Tab>
                <Tab
                  eventKey={7}
                  title={
                    <>
                      <span className="tab-title">Preview</span>
                      <span className="round-tab">7 </span>
                    </>
                  }
                >
                  <div className="tab-pane" role="tabpanel" id="step8">
                    <h4 className="text-center">Review From and Submitt</h4>

                    <Accordion>
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Setup Profile</Accordion.Header>
                        <Accordion.Body>
                          <Basicdetails
                            formObj={formObj}
                            handleChange={handleChange}
                            backStepEvent={backStepEvent}
                            continueStepEvent={continueStepEvent} isPreview={true}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Transaction Details</Accordion.Header>
                        <Accordion.Body>
                          <TransactionDetails
                            formObj={formObj}
                            handleChange={handleChange}
                            backStepEvent={backStepEvent}
                            continueStepEvent={continueStepEvent} isPreview={true}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>KYC</Accordion.Header>
                        <Accordion.Body>
                          <KYCDetails
                            formObj={formObj}
                            handleChange={handleChange}
                            backStepEvent={backStepEvent}
                            continueStepEvent={continueStepEvent} isPreview={true}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Nominee Details</Accordion.Header>
                        <Accordion.Body>
                          <NomineeDetail
                            formObj={formObj}
                            handleChange={handleChange}
                            backStepEvent={backStepEvent}
                            continueStepEvent={continueStepEvent} isPreview={true}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Risk Profile</Accordion.Header>
                        <Accordion.Body>
                          <RiskProfile
                            formObj={formObj}
                            handleChange={handleChange}
                            backStepEvent={backStepEvent}
                            continueStepEvent={continueStepEvent} isPreview={true}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>Upload Documents</Accordion.Header>
                        <Accordion.Body>
                          <DocsDetail
                            formObj={formObj}
                            handleChange={handleChange}
                            backStepEvent={backStepEvent}
                            continueStepEvent={continueStepEvent} isPreview={true}
                          />
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>

                    <ul className="list-inline pull-right">
                      <li>
                        <button
                          type="button"
                          className="default-btn prev-step"
                          onClick={backStepEvent}
                        >
                          Back
                        </button>
                      </li>
                      <li>
                        {/* <button
                          type="button"
                          className="default-btn next-step skip-btn"
                          onClick={continueStepEvent}
                        >
                          Skip
                        </button> */}
                      </li>
                      <li>
                        <button
                          type="button"
                          className="default-btn next-step"
                          onClick={continueStepEvent}
                        >
                          Continue
                        </button>
                      </li>
                    </ul>
                  </div>
                </Tab>
                <Tab
                  eventKey={8}
                  title={
                    <>
                      <span className="tab-title">Finish</span>
                      <span className="round-tab">8 </span>
                    </>
                  }
                >
                  <div className="tab-pane" role="tabpanel" id="step9">
                    <div className="row justify-content-center">
                      <div className="col-lg-8">
                        <h4
                          className="text-center"
                          style={{ fontWeight: "bold" }}
                        >
                          Thank you For Your Interest in Roshan Pension Plan
                        </h4>

                        <p
                          style={{
                            fontSize: "15px",
                            textAlign: "center",
                            fontWeight: "bold",
                          }}
                        >
                          Thank you for choosing JS Bank. Your Roshan Pension
                          Plan request has been submitted. You will be notified
                          within 48 hours.
                        </p>
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>
        </div>
      </header>
      <Footer/>
    </div>
  );
}

export default StepperForm;

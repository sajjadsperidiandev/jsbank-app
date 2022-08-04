import React from "react";
import { Form } from "react-bootstrap";
import { SelectComponent } from "./Components/Select";
import {
  cities,
  countries,
  provinceWithCity,
  religions,
} from "./staticvariables";

function Basicdetails({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,
  isPreview,
}) {
  const setupProfile = formObj.setupProfile;

  const continueFormEvent = (e) => {
    e.preventDefault();
    continueStepEvent("setupProfile");
  };

  return (
    <div className="tab-pane" role="tabpanel" id="step2">
      <Form onSubmit={(e) => continueFormEvent(e)}>
        <h4 className="">Basic Details</h4>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
            <label>Annual Income *</label>
              <SelectComponent dataList={religions} value={setupProfile.annualIncome.value}
              label="Select Annual Income" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "annualIncome")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Basic Information Disclaimer </label>
              <input
                  type="checkbox"
                  value={setupProfile?.basicInfoDisclaimerChecked?.value}
                  onChange={(e) =>
                    handleChange(e, "setupProfile", "basicInfoDisclaimerChecked")
                  }
                />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
            <label>Birth City *</label>
              <SelectComponent dataList={religions} value={setupProfile.birthCityCode.value}
              label="Select Birth City" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "birthCityCode")} />
            </div>
          </div>
         
          <div className="col-md-4">
            <div className="form-group">
            <label>Birth State *</label>
              <SelectComponent dataList={religions} value={setupProfile.birthStateCode.value}
              label="Select Birth State" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "birthStateCode")} />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
            <label>City *</label>
              <SelectComponent dataList={religions} value={setupProfile.city.value}
              label="Select City" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "city")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>CNIC Number *</label>
              <input
                value={setupProfile.cnic.value}
                className="form-control"
                type="number"
                name="name"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter CNIC Number"
                onChange={(e) => handleChange(e, "setupProfile", "cnic")}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>CNIC Expiry Date *</label>
              <input
                required
                value={setupProfile.cnicExpiryDate.value}
                onChange={(e) =>
                  handleChange(e, "setupProfile", "cnicExpiryDate")
                }
                className="form-control"
                type="date"
                name="name"
                placeholder="Enter CNIC Expiry Date"
                disabled={isPreview ? true : false}
              />
            </div>
          </div>
          <div className="col-md-4">
            <div className="form-group">
              <label>CNIC Issuance Date *</label>
              <input
                required
                disabled={isPreview ? true : false}
                value={setupProfile.cnicIssueDate.value}
                onChange={(e) =>
                  handleChange(e, "setupProfile", "cnicIssueDate")}
                className="form-control"
                type="date"
                placeholder="Enter CNIC Issueance Date"
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
            <label>Mailing City *</label>
              <SelectComponent dataList={religions} value={setupProfile.mailingCity.value}
              label="Select Mailing City" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "mailingCity")} />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
            <label>Pakistan Resident *</label>
              <SelectComponent dataList={religions} value={setupProfile.pakResident.value}
              label="Select Pakistan Resident" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "pakResident")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Religion *</label>
              <SelectComponent dataList={religions} value={setupProfile.Religion.value}
              label="Select Religion" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "Religion")} />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label>Occupation *</label>
              <SelectComponent dataList={religions} value={setupProfile.Religion.value}
              label="Select Occupation" isDisabled = {isPreview ? true : false}
              handleChange={(e) => handleChange(e, "setupProfile", "Religion")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>RPQ Disclaimer </label>
              <input
                  type="checkbox"
                  value={setupProfile?.rpqDisclaimerChecked?.value}
                  onChange={(e) =>handleChange(e, "setupProfile", "rpqDisclaimerChecked")}
                />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label>CRS Disclaimer </label>
              <input
                  type="checkbox"
                  value={setupProfile?.crsDisclaimerChecked?.value}
                  onChange={(e) =>handleChange(e, "setupProfile", "crsDisclaimerChecked")}
                />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label>FATC Disclaimer </label>
              <input
                  type="checkbox"
                  value={setupProfile?.fatcaDisclaimerChecked?.value}
                  onChange={(e) =>handleChange(e, "setupProfile", "fatcaDisclaimerChecked")}
                />
            </div>
          </div>
          
          <div className="col-md-4">
            <div className="form-group">
              <label>Doc Upload Disclaimer </label>
              <input
                  type="checkbox"
                  value={setupProfile?.docUploadDisclaimerChecked?.value}
                  onChange={(e) =>handleChange(e, "setupProfile", "docUploadDisclaimerChecked")}
                />
            </div>
          </div>
         
          <div className="col-md-4">
            <div className="form-group">
              <label>KYC Disclaimer </label>
              <input
                  type="checkbox"
                  value={setupProfile?.kycDisclaimerChecked?.value}
                  onChange={(e) =>handleChange(e, "setupProfile", "kycDisclaimerChecked")}
                />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Retirement Age *</label>
              <input
                value={setupProfile.retirementAge.value}
                className="form-control"
                type="number"
                name="name"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter Retirement Age"
                onChange={(e) => handleChange(e, "setupProfile", "retirementAge")}
              />
            </div>
          </div>

        </div>
        {!isPreview ? (
          <ul className="list-inline pull-right">
            {/* <li>
            <button
              type="button"
              className="default-btn prev-step"
              onClick={backStepEvent}
            >
              Back
            </button>
          </li> */}
            <li>
              <button type="submit" className="default-btn next-step">
                Continue
              </button>
            </li>
          </ul>
        ) : (
          ""
        )}
      </Form>
    </div>
  );
}

export default Basicdetails;

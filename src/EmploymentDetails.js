import React from "react";
import { countries } from "./staticvariables";
import { Form } from "react-bootstrap";

function EmploymentDetails({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,
  isPreview,
}) {
  const detailObject = formObj.employmentDetail;
  const continueFormEvent = (e) => {
    e.preventDefault();
    continueStepEvent('employmentDetail')
  }
  return (
    <div className="tab-pane" role="tabpanel" id="step4">
      <Form onSubmit={(e) => continueFormEvent(e)}>
      <h4 className="">Employmnet Details</h4>

        <div className="row">
        <div className="col-md-4">
            <div className="form-group">
              <label>Employer Name *</label>
              <input
                value={detailObject?.employerName?.value}
                className="form-control"
                type="text"
                name="name"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter Employer Name"
                onChange={(e) => handleChange(e, "employmentDetail", "employerName")}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Employer Designation *</label>
              <input
                value={detailObject?.employerDesignation?.value}
                className="form-control"
                type="text"
                name="name"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter Employer Designation"
                onChange={(e) => handleChange(e, "employmentDetail", "employerDesignation")}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Employer Nature Of Business *</label>
              <input
                value={detailObject?.employerNatureOfBusiness?.value}
                className="form-control"
                type="text"
                name="name"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter Employer Nature Of Business"
                onChange={(e) => handleChange(e, "employmentDetail", "employerNatureOfBusiness")}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Employer Profession *</label>
              <input
                value={detailObject?.employerProfession?.value}
                className="form-control"
                type="text"
                name="name"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter Employer Profession"
                onChange={(e) => handleChange(e, "employmentDetail", "employerProfession")}
              />
            </div>
          </div>
        </div>
        {!isPreview ? <ul className="list-inline pull-right">
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

          </li>
          <li>
            <button
              type="submit"
              className="default-btn next-step"
            >
              Continue
            </button>
          </li>
        </ul> : ''}
      </Form>
    </div>
  );
}

export default EmploymentDetails;

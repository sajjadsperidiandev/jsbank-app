import React from "react";
import { Form } from "react-bootstrap";
import { SelectComponent } from "./Components/Select";
import { religions } from "./staticvariables";

function TransactionDetails({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,
  isPreview,
}) {
  const detailObject = formObj.transactionDetail;

  const continueFormEvent = (e) => {
    e.preventDefault();
    continueStepEvent("transactionDetail");
  };
  return (
    <div className="tab-pane" role="tabpanel" id="step3">
      <Form onSubmit={(e) => continueFormEvent(e)}>
        <div className="row">
          <h4 className="my-3">Transaction Details</h4>

          <div className="col-md-4">
            <div className="form-group">
              <label>Tax Paid Country *</label>
              <SelectComponent dataList={religions} value={detailObject.taxPaidCountry.value}
                label="Select Tax Paid Country" isDisabled={isPreview ? true : false}
                handleChange={(e) => handleChange(e, "detailObject", "taxPaidCountry")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Tax Resident Country Other than Pakistan *</label>
              <SelectComponent dataList={religions} value={detailObject.taxResCountryOtherThanPak.value}
                label="Select Tax Resident Country Other than Pakistan" isDisabled={isPreview ? true : false}
                handleChange={(e) => handleChange(e, "detailObject", "taxResCountryOtherThanPak")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Other Tax Resident Country *</label>
              <SelectComponent dataList={religions} value={detailObject.otherTaxResCountry.value}
                label="Select Other Tax Resident Country" isDisabled={isPreview ? true : false}
                handleChange={(e) => handleChange(e, "detailObject", "otherTaxResCountry")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Tax identification number *</label>
              <input
                value={detailObject.taxIdentificationNumber.value}
                className="form-control"
                type="number"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter Tax identification number"
                onChange={(e) => handleChange(e, "detailObject", "taxIdentificationNumber")}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Expected Turnover In Account Type *</label>
              <SelectComponent dataList={religions} value={detailObject.expTurnoverInAccType.value}
                label="Select Expected Turnover In Account Type" isDisabled={isPreview ? true : false}
                handleChange={(e) => handleChange(e, "detailObject", "expTurnoverInAccType")} />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Expected turnover amount in account (PKR) *</label>
              <input
                value={detailObject.expTurnoverInAccAmount.value}
                className="form-control"
                type="number"
                required
                disabled={isPreview ? true : false}
                placeholder="Enter Expected turnover amount in account"
                onChange={(e) => handleChange(e, "detailObject", "expTurnoverInAccAmount")}
              />
            </div>
          </div>

          <div className="col-md-4">
            <div className="form-group">
              <label>Expected Investment Amount *</label>
              <SelectComponent dataList={religions} value={detailObject.expectedInvestmentAmount.value}
                label="Select Expected Investment Amount" isDisabled={isPreview ? true : false}
                handleChange={(e) => handleChange(e, "detailObject", "expectedInvestmentAmount")} />
            </div>
          </div>

        </div>
        {!isPreview ? (
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
            <li></li>
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

export default TransactionDetails;

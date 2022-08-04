import React from "react";
import { Form } from "react-bootstrap";

function RiskProfile({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,
  isPreview,
}) {
  const detailObject = formObj.riskProfile;

  const continueFormEvent = (e) => {
    e.preventDefault();
    continueStepEvent("riskProfile");
  };
  return (
    <div className="tab-pane" role="tabpanel" id="step6">
      <Form onSubmit={(e) => continueFormEvent(e)}>
        <h4 className="">Risk Profile</h4>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label>Scheme Code *</label>
              <select
                name=""
                id=""
                className="form-control custom-select"
                style={{ backgroundPositionX: "500px" }}
                value={detailObject.schemeCode.value}
                disabled={isPreview ? true : false}
                onChange={(e) => handleChange(e, "riskProfile", "schemeCode")}
              >
                <option value="" disabled="disabled">
                  Select Scheme Code
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Customized Asset Allocation *</label>
              <select
                name=""
                disabled={isPreview ? true : false}
                id=""
                className="form-control custom-select"
                style={{ backgroundPositionX: "500px" }}
                value={detailObject.assetAllocation.value}
                onChange={(e) =>
                  handleChange(e, "riskProfile", "assetAllocation")
                }
              >
                <option value="" disabled="disabled">
                  Select Customized Asset Allocation
                </option>
                <option value="Js Pention Saving Fund Equity Sub Fund : 35-50">
                  Js Pention Saving Fund Equity Sub Fund : 35-50
                </option>
                <option value="Js Pention Saving Fund Debt sub fund: 40-55">
                  Js Pention Saving Fund Debt sub fund: 40-55
                </option>
                <option value="Js Pention Saving Fund - Money Market sub fund: 10-25">
                  Js Pention Saving Fund - Money Market sub fund: 10-25
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Medium Volatility (Balance) *</label>
              <select
                name=""
                disabled={isPreview ? true : false}
                id=""
                className="form-control custom-select"
                style={{ backgroundPositionX: "500px" }}
                value={detailObject.mediumvolatilityBalance.value}
                onChange={(e) =>
                  handleChange(e, "riskProfile", "mediumvolatilityBalance")
                }
              >
                <option value="" disabled="disabled">
                  Select Medium Volatility (Balance)
                </option>
                <option value="Js Pention Saving Fund Equity Sub Fund : 35-50">
                  Js Pention Saving Fund Equity Sub Fund : 35-50
                </option>
                <option value="Js Pention Saving Fund Debt sub fund: 40-55">
                  Js Pention Saving Fund Debt sub fund: 40-55
                </option>
                <option value="Js Pention Saving Fund - Money Market sub fund: 10-25">
                  Js Pention Saving Fund - Money Market sub fund: 10-25
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Low Volatility (Conservative) *</label>
              <select
                disabled={isPreview ? true : false}
                name=""
                id=""
                className="form-control custom-select"
                style={{ backgroundPositionX: "500px" }}
                value={detailObject.lowvolatilityBalance.value}
                onChange={(e) =>
                  handleChange(e, "riskProfile", "lowvolatilityBalance")
                }
              >
                <option value="" disabled="disabled">
                  Select Low Volatility (Conservative)
                </option>
                <option value="Js Pention Saving Fund Equity Sub Fund : 10-25">
                  Js Pention Saving Fund Equity Sub Fund : 10-25
                </option>
                <option value="Js Pention Saving Fund Debt sub fund: 60-75">
                  Js Pention Saving Fund Debt sub fund: 60-75
                </option>
                <option value="Js Pention Saving Fund - Money Market sub fund: 15-30">
                  Js Pention Saving Fund - Money Market sub fund: 15-30
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label>Lower Volatility (very Conservative) *</label>
              <select
                disabled={isPreview ? true : false}
                name=""
                id=""
                className="form-control custom-select"
                style={{ backgroundPositionX: "500px" }}
                value={detailObject.lowervolatilityBalance.value}
                onChange={(e) =>
                  handleChange(e, "riskProfile", "lowervolatilityBalance")
                }
              >
                <option value="" disabled="disabled">
                  Select Lower Volatility
                </option>
                <option value="Js Pention Saving Fund Equity Sub Fund : 0 ">
                  Js Pention Saving Fund Equity Sub Fund : 0{" "}
                </option>
                <option value="Js Pention Saving Fund Debt sub fund: 40-60">
                  Js Pention Saving Fund Debt sub fund: 40-60
                </option>
                <option value="Js Pention Saving Fund - Money Market sub fund: 40-60">
                  Js Pention Saving Fund - Money Market sub fund: 40-60
                </option>
              </select>
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

export default RiskProfile;

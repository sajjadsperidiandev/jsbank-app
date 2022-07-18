import React from 'react'

function TransactionDetails({
    continueStepEvent,
    backStepEvent,
    handleChange,
    formObj,isPreview
}) {
    const detailObject = formObj.professionalDetail;

  return (
    <div className="tab-pane" role="tabpanel" id="step3">
                    <div className="row">
                      <h4 className="my-3">Professional Details</h4>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>EDUCATION*</label>
                          <select
                            value={detailObject.education}
                            className="form-control custom-select"
                            onChange={(e) => handleChange(e, "professionalDetail", "education")} disabled={isPreview ? true : false}

                          >
                            <option value="" disabled>
                              Select Education
                            </option>
                            <option value="Undergraduate">Undergraduate</option>
                            <option value="Graduate">Graduate</option>
                            <option value="Postgraduate">Postgraduate</option>
                            <option value="Professional">Professional</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>OCCUPATION*</label>
                          <select
                            name=""
                            id=""
                            className="form-control custom-select"
                            value={detailObject.occupation}
                            onChange={(e) => handleChange(e, "professionalDetail", "occupation")} disabled={isPreview ? true : false}

                          >
                            <option value="" disabled>
                              Select Select Occupation
                            </option>
                            <option value="Freelance">Freelance</option>
                            <option value="Government Service">
                              Government Service
                            </option>
                            <option value="Homemaker / Housewife">
                              Homemaker / Housewife
                            </option>
                            <option value="Private Service">
                              Private Service
                            </option>
                            <option value="Information and communication">
                              Information and communication
                            </option>
                            <option value="Retired">Retired</option>
                            <option value="Self Employment">
                              Self Employment
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>SOURCE OF FUNDS*</label>
                          <select
                            name=""
                            id=""
                            className="form-control custom-select"
                            onChange={(e) => handleChange(e, "professionalDetail", "sourceOfFund")}
                            value={detailObject.sourceOfFund} disabled={isPreview ? true : false}
                          >
                            <option value="" disabled>
                              Select Source of Funds
                            </option>
                            <option value="Freelance">Business</option>
                            <option value="Inheritance">Inheritance</option>
                            <option value="Others">Others</option>
                            <option value="Remittance">Remittance</option>
                            <option value="Salary / Wages">
                              Salary / Wages
                            </option>
                            <option value="Savings Investments">
                              Savings Investments
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>MONTHLY INCOME*</label>
                          <select
                            name=""
                            id=""
                            className="form-control custom-select"
                            onChange={(e) => handleChange(e, "professionalDetail", "monthlyIncome")}
                            value={detailObject.monthlyIncome} disabled={isPreview ? true : false}
                          >
                            <option value="" disabled>
                              Select Monthly Income
                            </option>
                            <option value="Over Rs. 1,000,000">
                              Over Rs. 1,000,000
                            </option>
                            <option value="Under Rs. 1,000,000">
                              Under Rs. 1,000,000
                            </option>
                            <option value="Under Rs. 500,000">
                              Under Rs. 500,000
                            </option>
                            <option value="Under Rs.100,000">
                              Under Rs.100,000
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            POSSIBLE MODES OF TRANSACTIONS / DELIVERY CHANNELS*
                          </label>
                          <select
                            name=""
                            id="" disabled={isPreview ? true : false}
                            className="form-control custom-select"
                            onChange={(e) => handleChange(e, "professionalDetail", "modeofTransaction")}
                            value={detailObject.modeofTransaction}
                          >
                            <option value="" disabled>
                              Select Possible Modes of Transactions
                            </option>
                            <option value="Both">Both</option>
                            <option value=">Online">Online</option>
                            <option value="Physical">Physical</option>
                          </select>
                        </div>
                      </div>

                      <hr className="line-hr" />

                      <h4 className="my-3">Transaction Details</h4>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>EXPECTED NO. OF TRANSACTIONS (MONTHLY)*</label>
                          <select
                            name=""
                            id="" disabled={isPreview ? true : false}
                            className="form-control custom-select"
                            onChange={(e) => handleChange(e, "professionalDetail", "noofTransactions")}
                            value={detailObject.noofTransactions}
                          >
                            <option value="" disabled>
                              Select Expected No. of Transactions
                            </option>
                            <option value="1-3">1-3</option>
                            <option value="4-7">4-7</option>
                            <option value="7-10">7-10</option>
                            <option value="10 above">10 above</option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>ANNUAL INCOME*</label>
                          <select
                            name=""
                            id=""  disabled={isPreview ? true : false}
                            className="form-control custom-select"
                            onChange={(e) => handleChange(e, "professionalDetail", "annualIncome")}
                            value={detailObject.annualIncome}
                          >
                            <option value="" disabled>
                              Select Annual Income
                            </option>
                            <option value="Above Rs. 12M">Above Rs. 12M</option>
                            <option value="Up-to Rs. 1M">Up-to Rs. 1M</option>
                            <option value="Up-to Rs. 1M to Rs. 3M">
                              Up-to Rs. 1M to Rs. 3M
                            </option>
                            <option value="Up-to Rs. 3M to Rs. 6M">
                              Up-to Rs. 3M to Rs. 6M
                            </option>
                            <option value="Up-to Rs. 6M to Rs. 12M">
                              Up-to Rs. 6M to Rs. 12M
                            </option>
                          </select>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>
                            EXPECTED TURNOVER IN ACCOUNT (MONTHLY) PKR*
                          </label>
                          <select
                            name=""
                            id="" disabled={isPreview ? true : false}
                            className="form-control custom-select"
                            onChange={(e) => handleChange(e, "professionalDetail", "expectedTurnOver")}
                            value={detailObject.expectedTurnOver}
                          >
                            <option value="" disabled>
                              Select Expected Turnover in Account
                            </option>
                            <option value="Up to Rs. 1,000,000">
                              Up to Rs. 1,000,000
                            </option>
                            <option value="Rs. 1,000,001 to Rs. 5,000,000">
                              Rs. 1,000,001 to Rs. 5,000,000
                            </option>
                            <option value="Rs. 5,000,001 to Rs. 10,000,000">
                              Rs. 5,000,001 to Rs. 10,000,000
                            </option>
                            <option value="Up-to Rs. 3M to Rs. 6M">
                              Up-to Rs. 3M to Rs. 6M
                            </option>
                            <option value="Above Rs. 10,000,000">
                              Above Rs. 10,000,000
                            </option>
                          </select>
                        </div>
                      </div>

                      <hr className="line-hr" />
                    </div>

                    {!isPreview ? 
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
                </ul>: ''  
                  }
                  </div>
  )
}

export default TransactionDetails
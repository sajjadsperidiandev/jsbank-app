import React from 'react'

function NomineeDetail({
    continueStepEvent,
    backStepEvent,
    handleChange,
    formObj, isPreview
}) {
    const detailObject = formObj.nomineeDetail;

  return (
    <div className="tab-pane" role="tabpanel" id="step5">
                    <div className="row">
                      <h4 className="my-3">Nominee Details </h4>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Enter Name (Mr./Ms./Mrs.) *</label>
                          <input
                            className="form-control" value={detailObject.name}
                            onChange={(e) => handleChange(e, "nomineeDetail", "name")}
                            type="text"
                            name="NAME (MR./MS./MRS.)"
                            placeholder="Enter Name (Mr./Ms./Mrs.)" disabled={isPreview ? true : false}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>FATHER / HUSBAND NAME *</label>
                          <input value={detailObject.guardianName}
                          onChange={(e) => handleChange(e, "nomineeDetail", "guardianName")}
                            className="form-control"
                            type="text"
                            name="Father / Husband Name"
                            placeholder="Enter Father / Husband Name" disabled={isPreview ? true : false}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>CNIC/NICOP NO. *</label>
                          <input value={detailObject.cnic}
                          onChange={(e) => handleChange(e, "nomineeDetail", "cnic")}
                            className="form-control"
                            type="number"
                            name="CNIC/NICOP NO."
                            placeholder="Enter CNIC/NICOP No." disabled={isPreview ? true : false}
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>EMAIL ADDRESS *</label>
                          <input value={detailObject.email}
                          onChange={(e) => handleChange(e, "nomineeDetail", "email")}
                            className="form-control"
                            type="email"
                            name="EMAIL ADDRESS"
                            placeholder="Enter Email Address." disabled={isPreview ? true : false}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>MAILING ADDRESS *</label>
                          <input value={detailObject.mailingAddress}
                          onChange={(e) => handleChange(e, "nomineeDetail", "mailingAddress")}
                            className="form-control"
                            type="email"
                            name="MAILING ADDRESS"
                            placeholder="Enter Mailing Address" disabled={isPreview ? true : false}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>PHONE NUMBER *</label>
                          <input value={detailObject.phone}
                          onChange={(e) => handleChange(e, "nomineeDetail", "phone")}
                            className="form-control"
                            type="number"
                            name="PHONE NUMBER"
                            placeholder="Enter Phone Number" disabled={isPreview ? true : false}
                          />
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group">
                          <label>RELATIONSHIP*</label>
                          <select
                            name=""
                            id=""
                            className="form-control custom-select" 
                            onChange={(e) => handleChange(e, "nomineeDetail", "relationship")}
                            value={detailObject.relationship} disabled={isPreview ? true : false}
                          >
                            <option value='' disabled="disabled">
                              Select Relationship
                            </option>
                            <option value="Brother">Brother</option>
                            <option value="Daughter">Daughter</option>
                            <option value="Father">Father</option>
                            <option value="Husband">Husband</option>
                            <option value="Mother">Mother</option>
                            <option value="Sister">Sister</option>
                            <option value="Son">Son</option>
                            <option value="Wife">Wife</option>
                          </select>
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
                          type="button"
                          className="default-btn next-step"
                          onClick={continueStepEvent}
                        >
                          Continue
                        </button>
                      </li>
                    </ul> : '' }
                  </div>
  )
}

export default NomineeDetail
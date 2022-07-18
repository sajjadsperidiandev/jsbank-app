import React from "react";

function DocsDetail({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,isPreview
}) {
  const detailObject = formObj.uploaddocumentsdetail;

  return (
    <div className="tab-pane" role="tabpanel" id="step7">
      <h4 className="">Upload Documents</h4>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>ID DOCUMENT TYPE *</label>
            <select
              name=""
              id=""
              disabled={isPreview ? true : false}
              className="form-control custom-select"
              style={{ backgroundPositionX: "500px" }}
              value={detailObject.idDocType}
              onChange={(e) =>
                handleChange(e, "uploaddocumentsdetail", "idDocType")
              }
            >
              <option value="">Select ID Document Type</option>
              <option value="National ID Card">National ID Card</option>
              <option value="National Identity Card for Overseas Pakistanis">
                National Identity Card for Overseas Pakistanis
              </option>
              <option value="Pakistan Origin Card">Pakistan Origin Card</option>
              <option value="National Alien Registration System">
                National Alien Registration System
              </option>
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>ID DOCUMENT FRONT SCAN COPY *</label>
            <div className="custom-file">
              <input
                            disabled={isPreview ? true : false}

                type="file"
                className="custom-file-input"
                id="customFile"
                onChange={(e) =>
                  handleChange(e, "uploaddocumentsdetail", "idDocFrontCopy")
                }
              />
              <label className="custom-file-label">
                {detailObject?.idDocFrontCopy?.name ? (
                  <a href={URL.createObjectURL(detailObject?.idDocFrontCopy)}>
                    {detailObject?.idDocFrontCopy?.name}
                  </a>
                ) : (
                  "Select scan copy (JPG, PNG or TIFF file)"
                )}{" "}
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <label>ID DOCUMENT BACK SCAN COPY *</label>
          <div className="custom-file">
            <input
              type="file"
              disabled={isPreview ? true : false}

              className="custom-file-input"
              id="customFile"
              onChange={(e) =>
                handleChange(e, "uploaddocumentsdetail", "idDocBackCopy")
              }
            />
            <label className="custom-file-label">
              {detailObject?.idDocBackCopy?.name ? (
                <a href={URL.createObjectURL(detailObject?.idDocBackCopy)}>
                  {detailObject?.idDocBackCopy?.name}
                </a>
              ) : (
                ""
              )}{" "}
            </label>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>DOCUMENT SOURCE OF INCOME SCAN COPY</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                disabled={isPreview ? true : false}

                onChange={(e) =>
                  handleChange(e, "uploaddocumentsdetail", "SourceofIncomeCopy")
                }
              />
              <label className="custom-file-label">
                {detailObject?.SourceofIncomeCopy?.name ? (
                  <a
                    href={URL.createObjectURL(detailObject?.SourceofIncomeCopy)}
                  >
                    {detailObject?.SourceofIncomeCopy?.name}
                  </a>
                ) : (
                  ""
                )}{" "}
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>NOMINEE CNIC SCAN COPY</label>
            <div className="custom-file">
              <input
                type="file"
                disabled={isPreview ? true : false}

                className="custom-file-input"
                id="customFile"
                onChange={(e) =>
                  handleChange(e, "uploaddocumentsdetail", "nomineeCnicCopy")
                }
              />
              <label className="custom-file-label">
                {detailObject?.nomineeCnicCopy?.name ? (
                  <a href={URL.createObjectURL(detailObject?.nomineeCnicCopy)}>
                    {detailObject?.nomineeCnicCopy?.name}
                  </a>
                ) : (
                  ""
                )}{" "}
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>W-8 FORM (FOR NON-US CITIZEN) SCAN COPY</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                disabled={isPreview ? true : false}

                onChange={(e) =>
                  handleChange(e, "uploaddocumentsdetail", "w8FormCopy")
                }
              />

              <label className="custom-file-label">
                {detailObject?.w8FormCopy?.name ? (
                  <a href={URL.createObjectURL(detailObject?.w8FormCopy)}>
                    {detailObject?.w8FormCopy?.name}
                  </a>
                ) : (
                  ""
                )}{" "}
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>BUSINESS/EMPLOYMENT PROOF SCAN COPY</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                disabled={isPreview ? true : false}

                onChange={(e) =>
                  handleChange(
                    e,
                    "uploaddocumentsdetail",
                    "businessEmpProofCopy"
                  )
                }
              />
              <label className="custom-file-label">
                {detailObject?.businessEmpProofCopy?.name ? (
                  <a
                    href={URL.createObjectURL(
                      detailObject?.businessEmpProofCopy
                    )}
                  >
                    {detailObject?.businessEmpProofCopy?.name}
                  </a>
                ) : (
                  ""
                )}{" "}
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>DIGITAL SIGNATURE SCAN COPY</label>
            <div className="custom-file">
              <input
                type="file"
                disabled={isPreview ? true : false}

                className="custom-file-input"
                id="customFile"
                onChange={(e) =>
                  handleChange(e, "uploaddocumentsdetail", "digitalSignCopy")
                }
              />
              <label className="custom-file-label">
                {detailObject?.digitalSignCopy?.name ? (
                  <a href={URL.createObjectURL(detailObject?.digitalSignCopy)}>
                    {detailObject?.digitalSignCopy?.name}
                  </a>
                ) : (
                  ""
                )}{" "}
              </label>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="form-group">
            <label>UTILITY BILL SCAN COPY</label>
            <div className="custom-file">
              <input
                type="file"
                className="custom-file-input"
                id="customFile"
                disabled={isPreview ? true : false}

                onChange={(e) =>
                  handleChange(e, "uploaddocumentsdetail", "utilityBillCopy")
                }
              />
              <label className="custom-file-label">
                {detailObject?.utilityBillCopy?.name ? (
                  <a href={URL.createObjectURL(detailObject?.utilityBillCopy)}>
                    {detailObject?.utilityBillCopy?.name}
                  </a>
                ) : (
                  ""
                )}{" "}
              </label>
            </div>
          </div>
        </div>
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
  </ul> : ''  
    }
    </div>
  );
}

export default DocsDetail;

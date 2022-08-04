import React from "react";
import { Form } from "react-bootstrap";

function DocsDetail({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,isPreview
}) {
  const detailObject = formObj.uploaddocumentsdetail;

  const continueFormEvent = (e)=>{
    e.preventDefault();
    continueStepEvent('uploaddocumentsdetail')
  }

  return (
    <div className="tab-pane" role="tabpanel" id="step7">
                  <Form onSubmit={(e) => continueFormEvent(e)}>

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
              value={detailObject.idDocType.value}
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
                {detailObject?.idDocFrontCopy?.value.name ? (
                  <a href={URL.createObjectURL(detailObject?.idDocFrontCopy.value)}>
                    {detailObject?.idDocFrontCopy?.value.name}
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
              {detailObject?.idDocBackCopy.value?.name ? (
                <a href={URL.createObjectURL(detailObject?.idDocBackCopy.value)}>
                  {detailObject?.idDocBackCopy.value?.name}
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
                {detailObject?.SourceofIncomeCopy.value?.name ? (
                  <a
                    href={URL.createObjectURL(detailObject?.SourceofIncomeCopy.value)}
                  >
                    {detailObject?.SourceofIncomeCopy.value?.name}
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
                {detailObject?.nomineeCnicCopy.value?.name ? (
                  <a href={URL.createObjectURL(detailObject?.nomineeCnicCopy.value)}>
                    {detailObject?.nomineeCnicCopy.value?.name}
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
                {detailObject?.w8FormCopy.value?.name ? (
                  <a href={URL.createObjectURL(detailObject?.w8FormCopy.value)}>
                    {detailObject?.w8FormCopy.value?.name}
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
                {detailObject?.businessEmpProofCopy.value?.name ? (
                  <a
                    href={URL.createObjectURL(
                      detailObject?.businessEmpProofCopy.value
                    )}
                  >
                    {detailObject?.businessEmpProofCopy.value?.name}
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
                {detailObject?.digitalSignCopy.value?.name ? (
                  <a href={URL.createObjectURL(detailObject?.digitalSignCopy.value)}>
                    {detailObject?.digitalSignCopy.value?.name}
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
                {detailObject?.utilityBillCopy.value?.name ? (
                  <a href={URL.createObjectURL(detailObject?.utilityBillCopy.value)}>
                    {detailObject?.utilityBillCopy.value?.name}
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
        type="submit"
        className="default-btn next-step"
      >
        Continue
      </button>
    </li>
  </ul> : ''  
    }
    </Form>
    </div>
  );
}

export default DocsDetail;

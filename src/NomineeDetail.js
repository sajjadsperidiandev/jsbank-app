import React from "react";
import { Form } from "react-bootstrap";

function NomineeDetail({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,
  isPreview,
}) {
  const detailObject = formObj.nomineeDetail;
  const continueFormEvent = (e)=>{
    e.preventDefault();
    continueStepEvent('nomineeDetail')
  }
  return (
    <div className="tab-pane" role="tabpanel" id="step5">
                  <Form onSubmit={(e) => continueFormEvent(e)}>

      <div className="row">
        <h4 className="my-3">Nominee Details </h4>
        <div className="col-md-4">
          <div className="form-group">
            <label>Enter Name (Mr./Ms./Mrs.) *</label>
            <input
              className="form-control"
              value={detailObject.name.value}
              onChange={(e) => handleChange(e, "nomineeDetail", "name")}
              type="text"
              placeholder="Enter Name (Mr./Ms./Mrs.)"
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>CNIC/NICOP NO. * (XXXXX-XXXXXXX-X)</label>
            <input
              value={detailObject.cnic.value}
              onChange={(e) => handleChange(e, "nomineeDetail", "cnic")}
              className="form-control"
              type="tel" 
              pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}" required
              name="CNIC/NICOP NO."
              placeholder="Enter CNIC/NICOP No."
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>Nominee Relation*</label>
            <input
              onChange={(e) => handleChange(e, "nomineeDetail", "relation")}
              value={detailObject.relation.value}
              className="form-control"
              type="text" 
               required
              placeholder="Nominee Relation"
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>PHONE NUMBER *</label>
            <input
              value={detailObject.mobile.value}
              onChange={(e) => handleChange(e, "nomineeDetail", "mobile")}
              className="form-control"
              type="number"
              name="PHONE NUMBER"
              placeholder="Enter Phone Number"
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>FATHER NAME *</label>
            <input
              value={detailObject.fatherName.value}
              onChange={(e) => handleChange(e, "nomineeDetail", "fatherName")}
              className="form-control"
              type="text"
              name="Father Name"
              placeholder="Enter Father Name"
              disabled={isPreview ? true : false}
            />
          </div>
        </div>


        <div className="col-md-4">
          <div className="form-group">
            <label>ADDRESS *</label>
            <input
              value={detailObject.address.value}
              onChange={(e) => handleChange(e, "nomineeDetail", "address")}
              className="form-control"
              type="text"
              placeholder="Enter Address."
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>Email *</label>
            <input
              value={detailObject.email.value}
              onChange={(e) =>
                handleChange(e, "nomineeDetail", "email")
              }
              className="form-control"
              type="email"
              placeholder="Enter Email"
              disabled={isPreview ? true : false}
            />
          </div>
        </div>
       
        <div className="col-md-4">
          <div className="form-group">
            <label>Share % of Nominee *</label>
            <input
              value={detailObject.sharePerc.value}
              onChange={(e) =>
                handleChange(e, "nomineeDetail", "sharePerc")
              }
              className="form-control"
              type="text"
              placeholder="Enter Share %"
              disabled={isPreview ? true : false}
            />
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
            <button
              type="submit"
              className="default-btn next-step"
            >
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

export default NomineeDetail;

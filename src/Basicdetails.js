import React, { useState } from "react";
import Form from "react-bootstrap/Form";
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

  return (
    <div className="tab-pane" role="tabpanel" id="step2">
      <h4 className="">Basic Details</h4>
      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>FULL NAME (AS PER IDENTITY DOCUMENT) *</label>
            <input
              value={setupProfile.fullName}
              disabled={isPreview ? true : false}
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter Full Name (As Per Identity Document)"
              onChange={(e) => handleChange(e, "setupProfile", "fullName")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>FATHER / HUSBAND NAME *</label>
            <input
              value={setupProfile.guadrianName}
              className="form-control"
              type="text"
              name="name"
              disabled={isPreview ? true : false}
              placeholder="Enter Father / Husband Name"
              onChange={(e) => handleChange(e, "setupProfile", "guadrianName")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>MOTHER NAME *</label>
            <input
              value={setupProfile.motherName}
              onChange={(e) => handleChange(e, "setupProfile", "motherName")}
              className="form-control"
              type="text"
              name="name"
              disabled={isPreview ? true : false}
              placeholder="Enter MOTHER NAME"
            />
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>ID DOCUMENT TYPE *</label>
            <select
              name=""
              id=""
              disabled={isPreview ? true : false}
              className="form-control custom-select"
              value={setupProfile.documentType}
              onChange={(e) => handleChange(e, "setupProfile", "documentType")}
            >
              <option value>Select ID Document Type</option>
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

        <div className="col-md-4">
          <div className="form-group">
            <label>ID DOCUMENT NUMBER *</label>
            <input
              disabled={isPreview ? true : false}
              value={setupProfile.documentNumber}
              onChange={(e) =>
                handleChange(e, "setupProfile", "documentNumber")
              }
              className="form-control"
              type="number"
              name="name"
              placeholder="Enter ID Document Number"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>ISSUANCE DATE *</label>
            <input
              disabled={isPreview ? true : false}
              value={setupProfile.issuanceDate}
              onChange={(e) => handleChange(e, "setupProfile", "issuanceDate")}
              className="form-control"
              type="date"
              name="name"
              placeholder="Enter ID Document Number"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label>LIFETIME EXPIRY *</label>

            <div>
              {isPreview ? (
                <>
                  <input
                    type="radio"
                    id="test1"
                    name="radio-group"
                    checked={setupProfile.lifeTimeExpiry}
                    disabled={isPreview ? true : false}
                  />
                  <label htmlFor="test1" className="radio-lab">
                    Yes
                  </label>
                </>
              ) : (
                <>
                  {" "}
                  <input
                    type="radio"
                    id="test2"
                    name="radio-group1"
                    value={setupProfile.lifeTimeExpiry}
                    onChange={(e) =>
                      handleChange(true, "setupProfile", "lifeTimeExpiry")
                    }
                  />
                  <label htmlFor="test2" className="radio-lab">
                    Yes
                  </label>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>EXPIRY DATE *</label>
            <input
              value={setupProfile.expiryDate}
              onChange={(e) => handleChange(e, "setupProfile", "expiryDate")}
              className="form-control"
              type="date"
              name="name"
              placeholder="Enter ID Document Number"
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>DATE OF BIRTH *</label>
            <input
              value={setupProfile.dob}
              onChange={(e) => handleChange(e, "setupProfile", "dob")}
              className="form-control"
              type="date"
              name="name"
              placeholder="Enter ID Document Number"
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>PLACE OF BIRTH *</label>
            <select
              className="form-control custom-select"
              value={setupProfile.placeofBirth}
              onChange={(e) => handleChange(e, "setupProfile", "placeofBirth")}
              disabled={isPreview ? true : false}
            >
              <option value="" disabled>
                Select PLACE OF BIRTH
              </option>
              {cities.map((item, index) => {
                return (
                  <option
                    value={item.label}
                    key={index}
                    disabled={item?.isDisabled}
                  >
                    {item.label}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>GENDER *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              value={setupProfile.gender}
              onChange={(e) => handleChange(e, "setupProfile", "gender")}
              disabled={isPreview ? true : false}
            >
              <option value="" disabled>
                Select GENDER
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>RELIGION *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              value={setupProfile.religion}
              onChange={(e) => handleChange(e, "setupProfile", "religion")}
              disabled={isPreview ? true : false}
            >
              <option value="" disabled="disabled">
                select RELIGION
              </option>
              {religions.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>MARITAL STATUS *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              value={setupProfile.martialStatus}
              onChange={(e) => handleChange(e, "setupProfile", "martialStatus")}
              disabled={isPreview ? true : false}
            >
              <option value="" disabled>
                Select MARITAL STATUS
              </option>
              <option value="Male">Divorced</option>
              <option value="Female">Married</option>
              <option value="Female">Single</option>
              <option value="Female">Widow</option>
            </select>
          </div>
        </div>

        <hr className="line-hr" />

        <h4 className="my-3">Residential Details</h4>

        <div className="col-md-4">
          <div className="form-group">
            <label>RESIDENTIAL STATUS *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              value={setupProfile.residentialStaus}
              onChange={(e) =>
                handleChange(e, "setupProfile", "residentialStaus")
              }
              disabled={isPreview ? true : false}
            >
              <option value="" disabled>
                Select Residential Status
              </option>

              <option value="Resident Pakistani">Resident Pakistani</option>
              <option value="Non-Resident Pakistani">
                Non-Resident Pakistani
              </option>
              <option value="Resident Foreign National">
                Resident Foreign National
              </option>
              <option value="Non-Resident Foreign National">
                Non-Resident Foreign National
              </option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>PERMANENT RESIDENT IN PAKISTAN *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              value={setupProfile.permanetResidentinPK}
              onChange={(e) =>
                handleChange(e, "setupProfile", "permanetResidentinPK")
              }
              disabled={isPreview ? true : false}
            >
              <option value="" disabled>
                Select Permanent Resident in Pakistan
              </option>

              <option value="Non Pakistani Resident">
                Non Pakistani Resident
              </option>
              <option value="Pakistani Resident">Pakistani Resident</option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>NATIONALITY *</label>
            <select
              name=""
              id=""
              disabled={isPreview ? true : false}
              className="form-control custom-select"
              value={setupProfile.nationality}
              onChange={(e) => handleChange(e, "setupProfile", "nationality")}
            >
              <option value="" disabled>
                Select Nationality
              </option>

              {countries.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>COUNTRY OF RESIDENCE *</label>
            <select
              name=""
              id=""
              disabled={isPreview ? true : false}
              className="form-control custom-select"
              value={setupProfile.country}
              onChange={(e) => handleChange(e, "setupProfile", "country")}
            >
              <option value="" disabled>
                Select COUNTRY OF RESIDENCE
              </option>

              {countries.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              DO YOU HAVE OTHER NATIONALITIES?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="NATIONALITIES11"
                  name="radio-group33"
                  disabled={isPreview ? true : false}
                  checked={setupProfile.otherNationalityBool}
                />
                <label htmlFor="NATIONALITIES11" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="NATIONALITIES21"
                  name="radio-group33"
                  disabled={isPreview ? true : false}
                  checked={!setupProfile.otherNationalityBool}
                />
                <label htmlFor="NATIONALITIES21" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="NATIONALITIES1"
                  name="radio-group3"
                  disabled={isPreview ? true : false}
                  value={setupProfile.otherNationalityBool}
                  onChange={(e) =>
                    handleChange(true, "setupProfile", "otherNationalityBool")
                  }
                />
                <label htmlFor="NATIONALITIES1" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="NATIONALITIES2"
                  name="radio-group3"
                  value={setupProfile.otherNationalityBool}
                  disabled={isPreview ? true : false}
                  onChange={(e) =>
                    handleChange(false, "setupProfile", "otherNationalityBool")
                  }
                />
                <label htmlFor="NATIONALITIES2" className="radio-lab">
                  No
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>SPECIFY OTHER NATIONALITIES (IF APPLICABLE) *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter NAME OF GUARDIAN"
              disabled={isPreview ? true : false}
              value={setupProfile.otherNationality}
              onChange={(e) =>
                handleChange(e, "setupProfile", "otherNationality")
              }
            />
          </div>
        </div>

        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              DO YOU HOLD US PERMANENT RESIDENT CARD (GREEN CARD)?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="greencardHolder11"
                  name="radio-group12"
                  disabled={isPreview ? true : false}
                  checked={setupProfile.greencardHolder}
                />
                <label htmlFor="greencardHolder11" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="greencardHolder21"
                  name="radio-group12"
                  disabled={isPreview ? true : false}
                  checked={!setupProfile.greencardHolder}
                />
                <label htmlFor="greencardHolder21" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="greencardHolder1"
                  name="radio-group1"
                  value={setupProfile.greencardHolder}
                  onChange={(e) =>
                    handleChange(true, "setupProfile", "greencardHolder")
                  }
                />
                <label htmlFor="greencardHolder1" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="greencardHolder2"
                  name="radio-group1"
                  value={setupProfile.greencardHolder}
                  onChange={(e) =>
                    handleChange(false, "setupProfile", "greencardHolder")
                  }
                />
                <label htmlFor="greencardHolder2" className="radio-lab">
                  No
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              ARE YOU A US RESIDENT?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="usResident11"
                  name="radio-group21"
                  disabled={isPreview ? true : false}
                  checked={setupProfile.usResident}
                />
                <label htmlFor="usResident11" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="usResident22"
                  name="radio-group21"
                  disabled={isPreview ? true : false}
                  checked={!setupProfile.usResident}
                />
                <label htmlFor="usResident22" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="usResident1"
                  name="radio-group2"
                  value={setupProfile.usResident}
                  onChange={(e) =>
                    handleChange(true, "setupProfile", "usResident")
                  }
                />
                <label htmlFor="usResident1" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="usResident2"
                  name="radio-group2"
                  value={setupProfile.usResident}
                  onChange={(e) =>
                    handleChange(false, "setupProfile", "usResident")
                  }
                />
                <label htmlFor="usResident2" className="radio-lab">
                  No
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              ARE YOU TAX RESIDENT OF PAKISTAN AND/OR USA?
            </label>
            

                  {isPreview ? <div>
              <input
                type="radio"
                id="taxResident12"
                name="radio-group41"
                disabled={isPreview ? true : false}
                  checked={setupProfile.taxResident}
              />
              <label htmlFor="taxResident12" className="radio-lab">
                Yes
              </label>

              <input
                type="radio"
                id="taxResident22"
                name="radio-group41"
                disabled={isPreview ? true : false}
                  checked={!setupProfile.taxResident}
              />
              <label htmlFor="taxResident22" className="radio-lab">
                No
              </label>
            </div>: <div>
              <input
                type="radio"
                id="taxResident1"
                name="radio-group4"
                value={setupProfile.taxResident}
                onChange={(e) =>
                  handleChange(true, "setupProfile", "taxResident")
                }
              />
              <label htmlFor="taxResident1" className="radio-lab">
                Yes
              </label>

              <input
                type="radio"
                id="taxResident2"
                name="radio-group4"
                value={setupProfile.taxResident}
                onChange={(e) =>
                  handleChange(false, "setupProfile", "taxResident")
                }
              />
              <label htmlFor="taxResident2" className="radio-lab">
                No
              </label>
            </div>}
            
          </div>
        </div>

        <hr className="line-hr" />

        <h4 className="my-3">Contact Details</h4>

        <div className="col-md-4">
          <div className="form-group">
            <label>RESIDENTIAL ADDRESS *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter Residential Address"
              value={setupProfile.residentialAddress}
              disabled={isPreview ? true : false}
              onChange={(e) =>
                handleChange(e, "setupProfile", "residentialAddress")
              }
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>MAILING ADDRESS *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter Mailing Address"
              value={setupProfile.mailingAddress}
              disabled={isPreview ? true : false}
              onChange={(e) =>
                handleChange(e, "setupProfile", "mailingAddress")
              }
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label> EMAIL *</label>
            <input
              className="form-control"
              type="email"
              name="Email"
              placeholder="Enter Email (e.g. john@xyz.com)"
              disabled={isPreview ? true : false}
              value={setupProfile.email}
              onChange={(e) => handleChange(e, "setupProfile", "email")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>PHONE NUMBER *</label>
            <input
              className="form-control"
              type="number"
              name="number"
              placeholder="Enter RELATIONSHIP WITH MINOR"
              disabled={isPreview ? true : false}
              value={setupProfile.phone}
              onChange={(e) => handleChange(e, "setupProfile", "phone")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>REGION *</label>
            <select
              id="country"
              name="country"
              className="form-control"
              value={setupProfile.region}
              disabled={isPreview ? true : false}
              onChange={(e) => handleChange(e, "setupProfile", "region")}
            >
              <option value="" disabled>
                Select Region
              </option>
              {provinceWithCity.map((item, index) => {
                return (
                  <option value={item.province} key={index}>
                    {item.province}
                  </option>
                );
              })}
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>CITY *</label>
            <select
              name="state"
              disabled={setupProfile.region && !isPreview ? false : true}
              id="state"
              className="form-control"
              value={setupProfile.city}
              onChange={(e) => handleChange(e, "setupProfile", "city")}
            >
              <option disabled value="">
                Select City
              </option>
              {setupProfile.region
                ? provinceWithCity
                    ?.filter((item) => item.province == setupProfile.region)[0]
                    .city.map((element, index) => {
                      return (
                        <option value={element} key={index}>
                          {element}
                        </option>
                      );
                    })
                : ""}
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>ZIP CODE/POSTAL CODE *</label>
            <input
              className="form-control"
              type="number"
              disabled={isPreview ? true : false}
              name="number"
              placeholder="Enter Zip Code/Postal Code (e.g. 12345)"
              value={setupProfile.zipcode}
              onChange={(e) => handleChange(e, "setupProfile", "zipcode")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>TEL NO. (RES) *</label>
            <input
              className="form-control"
              type="number"
              name="number"
              disabled={isPreview ? true : false}
              placeholder="Enter TEL NO. (RES)"
              value={setupProfile.telnoRes}
              onChange={(e) => handleChange(e, "setupProfile", "telnoRes")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>TEL NO. (OFF) *</label>
            <input
              className="form-control"
              type="number"
              disabled={isPreview ? true : false}
              name="number"
              placeholder="Enter TEL NO. (OFF)"
              value={setupProfile.telnoOff}
              onChange={(e) => handleChange(e, "setupProfile", "telnoOff")}
            />
          </div>
        </div>

        <hr className="line-hr" />

        <h4 className="my-3">Tax Details</h4>

        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              TAX STATUS
            </label>
            
            {isPreview ? <div>
              <input
                type="radio"
                id="taxStatus12"
                name="radio-group51"
                disabled={isPreview ? true : false}
                  checked={setupProfile.taxStatus}
              />
              <label htmlFor="taxStatus12" className="radio-lab">
                Yes
              </label>

              <input
                type="radio"
                id="taxStatus22"
                name="radio-group51"
                disabled={isPreview ? true : false}
                  checked={!setupProfile.taxStatus}
              />
              <label htmlFor="taxStatus22" className="radio-lab">
                No
              </label>
            </div> : <div>
              <input
                type="radio"
                id="taxStatus1"
                name="radio-group5"
                value={setupProfile.taxStatus}
                onChange={(e) =>
                  handleChange(true, "setupProfile", "taxStatus")
                }
              />
              <label htmlFor="taxStatus1" className="radio-lab">
                Yes
              </label>

              <input
                type="radio"
                id="taxStatus2"
                name="radio-group5"
                value={setupProfile.taxStatus}
                onChange={(e) =>
                  handleChange(false, "setupProfile", "taxStatus")
                }
              />
              <label htmlFor="taxStatus2" className="radio-lab">
                No
              </label>
            </div>}

            
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>NATIONAL TAX NO. (NTN) *</label>
            <input
              className="form-control"
              type="number"
              name="number"
              disabled={isPreview ? true : false}
              placeholder="Enter NATIONAL TAX NO. (NTN)"
              value={setupProfile.ntnNo}
              onChange={(e) => handleChange(e, "setupProfile", "ntnNo")}
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
              type="button"
              className="default-btn next-step"
              onClick={continueStepEvent}
            >
              Continue
            </button>
          </li>
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

export default Basicdetails;

import React from "react";
import { countries } from "./staticvariables";

function KYCDetails({
  continueStepEvent,
  backStepEvent,
  handleChange,
  formObj,
  isPreview,
}) {
  const detailObject = formObj.kycDetail;

  return (
    <div className="tab-pane" role="tabpanel" id="step4">
      <h4 className="my-3">KYC Questionnaire / PEP Declaration</h4>
      <div className="row">
        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              ARE YOU A RESIDENT/ NATIONAL OF ANY COUNTRY OTHER THAN PAKISTAN?
              (IF YES, PLEASE ANSWER THE NEXT QUESTION)
            </label>
            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id11"
                  name="natinol1"
                  checked={detailObject.otherNAtionality}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id11" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id22"
                  name="natinol1"
                  checked={!detailObject.otherNAtionality}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id22" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id1"
                  name="natinol"
                  value={detailObject.otherNAtionality}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "otherNAtionality")
                  }
                />
                <label htmlFor="id1" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id2"
                  name="natinol"
                  value={detailObject.otherNAtionality}
                  onChange={(e) =>
                    handleChange("No", "kycDetail", "otherNAtionality")
                  }
                />
                <label htmlFor="id2" className="radio-lab">
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
              DO YOU BELONG TO A COUNTRY THAT IS NOT PART OF FATF (FINANCIAL
              ACTION TASK FORCE)?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id31"
                  name="FINANCIAL1"
                  checked={detailObject.notPartoffatf}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id31" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id41"
                  name="FINANCIAL1"
                  checked={!detailObject.notPartoffatf}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id41" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id3"
                  name="FINANCIAL"
                  value={detailObject.notPartoffatf}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "notPartoffatf")
                  }
                />
                <label htmlFor="id3" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id4"
                  name="FINANCIAL"
                  value={detailObject.notPartoffatf}
                  onChange={(e) =>
                    handleChange("No", "kycDetail", "notPartoffatf")
                  }
                />
                <label htmlFor="id4" className="radio-lab">
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
              DO YOU HAVE ANY BUSINESS RELATIONSHIP OR TRANSACTIONS IN/ FROM
              OFFSHORE TAX HAVEN COUNTRIES?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id51"
                  name="RELATIONSHIP1"
                  checked={detailObject.offShoreAccounts}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id51" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id61"
                  name="RELATIONSHIP1"
                  checked={!detailObject.offShoreAccounts}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id61" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id5"
                  name="RELATIONSHIP"
                  value={detailObject.offShoreAccounts}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "offShoreAccounts")
                  }
                />
                <label htmlFor="id5" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id6"
                  name="RELATIONSHIP"
                  value={detailObject.offShoreAccounts}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "offShoreAccounts")
                  }
                />
                <label htmlFor="id6" className="radio-lab">
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
              HAS ANY FINANCIAL INSTITUTION EVER REFUSED TO OPEN YOUR ACCOUNT?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id71"
                  name="INSTITUTION1"
                  checked={detailObject.refusedToopenuraccount}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id71" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id81"
                  name="INSTITUTION1"
                  checked={!detailObject.refusedToopenuraccount}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id81" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id7"
                  name="INSTITUTION"
                  value={detailObject.refusedToopenuraccount}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "refusedToopenuraccount")
                  }
                />
                <label htmlFor="id7" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id8"
                  name="INSTITUTION"
                  value={detailObject.refusedToopenuraccount}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "refusedToopenuraccount")
                  }
                />
                <label htmlFor="id8" className="radio-lab">
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
              DO YOU DEAL IN HIGH VALUE ITEMS I.E. GOLD, SILVER, DIAMONDS,
              METALS, GEMS ETC.?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id91"
                  name="SILVER1"
                  checked={detailObject.dealWithHighItem}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id91" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id101"
                  name="SILVER1"
                  checked={!detailObject.dealWithHighItem}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id101" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id9"
                  name="SILVER"
                  value={detailObject.dealWithHighItem}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "dealWithHighItem")
                  }
                />
                <label htmlFor="id9" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id10"
                  name="SILVER"
                  value={detailObject.dealWithHighItem}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "dealWithHighItem")
                  }
                />
                <label htmlFor="id10" className="radio-lab">
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
              ARE YOU A RESIDENT OR INHABITANT OF SOUTHERN PUNJAB OR AFGHAN
              BORDER?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id111"
                  name="SOUTHERN1"
                  checked={detailObject.residentInAfghanOrSPunjab}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id11" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id121"
                  name="SOUTHERN1"
                  checked={!detailObject.residentInAfghanOrSPunjab}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id12" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id11"
                  name="SOUTHERN"
                  value={detailObject.residentInAfghanOrSPunjab}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "residentInAfghanOrSPunjab")
                  }
                />
                <label htmlFor="id11" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id12"
                  name="SOUTHERN"
                  value={detailObject.residentInAfghanOrSPunjab}
                  onChange={(e) =>
                    handleChange(
                      false,
                      "kycDetail",
                      "residentInAfghanOrSPunjab"
                    )
                  }
                />
                <label htmlFor="id12" className="radio-lab">
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
              DO YOU HOLD A HIGH PROFILE POSITION I.E. SPORTS OR MEDIA
              PERSONALITY?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id131"
                  name="I.E.1"
                  checked={detailObject.profilePosition}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id131" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id141"
                  name="I.E.1"
                  checked={!detailObject.profilePosition}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id141" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id13"
                  name="I.E."
                  value={detailObject.profilePosition}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "profilePosition")
                  }
                />
                <label htmlFor="id13" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id14"
                  name="I.E."
                  value={detailObject.profilePosition}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "profilePosition")
                  }
                />
                <label htmlFor="id14" className="radio-lab">
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
              ARE YOU ACTING ON BEHALF OF ANY OTHER PERSON? (IF YES, PLEASE
              PROVIDE "DECLARATION FOR ULTIMATE BENEFICIAL OWNERSHIP")
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id151"
                  name="DECLARATION1"
                  checked={detailObject.actingBehalfonOther}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id151" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id161"
                  name="DECLARATION1"
                  checked={!detailObject.actingBehalfonOther}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id161" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id15"
                  name="DECLARATION"
                  value={detailObject.actingBehalfonOther}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "actingBehalfonOther")
                  }
                />
                <label htmlFor="id15" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id16"
                  name="DECLARATION"
                  value={detailObject.actingBehalfonOther}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "actingBehalfonOther")
                  }
                />
                <label htmlFor="id16" className="radio-lab">
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
              ARE YOU A DOMESTIC OR FOREIGN "POLITICALLY EXPOSED PERSON" (PEP)?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id17"
                  name="PEP"
                  checked={detailObject.pep == "Foreign" ? true : false}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id17" className="radio-lab">
                  Foreign
                </label>

                <input
                  type="radio"
                  id="id18"
                  name="PEP"
                  checked={detailObject.pep == "Domestic" ? true : false}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id18" className="radio-lab">
                  Domestic
                </label>

                <input
                  type="radio"
                  id="id19"
                  name="PEP"
                  checked={detailObject.pep == "Neither" ? true : false}
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id19" className="radio-lab">
                  Neither
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id171"
                  name="PEP1"
                  value={detailObject.pep == "Foreign" ? true : false}
                  onChange={(e) => handleChange("Foreign", "kycDetail", "pep")}
                />
                <label htmlFor="id171" className="radio-lab">
                  Foreign
                </label>

                <input
                  type="radio"
                  id="id181"
                  name="PEP1"
                  value={detailObject.pep == "Domestic" ? true : false}
                  onChange={(e) => handleChange("Domestic", "kycDetail", "pep")}
                />
                <label htmlFor="id181" className="radio-lab">
                  Domestic
                </label>

                <input
                  type="radio"
                  id="id191"
                  name="PEP1"
                  value={detailObject.pep == "Neither" ? true : false}
                  onChange={(e) => handleChange("Neither", "kycDetail", "pep")}
                />
                <label htmlFor="id191" className="radio-lab">
                  Neither
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
              ARE YOU A FAMILY MEMBER OR CLOSE ASSOCIATE OF A DOMESTIC OR
              FOREIGN "POLITICALLY EXPOSED PERSON" (PEP)?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id201"
                  name="POLITICALLY1"
                  disabled={isPreview ? true : false}
                  checked={
                    detailObject.relationwithPep == "Foreign" ? true : false
                  }
                />
                <label htmlFor="id201" className="radio-lab">
                  Foreign
                </label>

                <input
                  type="radio"
                  id="id211"
                  name="POLITICALLY1"
                  checked={
                    detailObject.relationwithPep == "Domestic" ? true : false
                  }
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id211" className="radio-lab">
                  Domestic
                </label>

                <input
                  type="radio"
                  id="id221"
                  name="POLITICALLY1"
                  checked={
                    detailObject.relationwithPep == "Neither" ? true : false
                  }
                  disabled={isPreview ? true : false}
                />
                <label htmlFor="id221" className="radio-lab">
                  Neither
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id20"
                  name="POLITICALLY"
                  onChange={(e) =>
                    handleChange("Foreign", "kycDetail", "relationwithPep")
                  }
                  value={
                    detailObject.relationwithPep == "Foreign" ? true : false
                  }
                />
                <label htmlFor="id20" className="radio-lab">
                  Foreign
                </label>

                <input
                  type="radio"
                  id="id21"
                  name="POLITICALLY"
                  value={
                    detailObject.relationwithPep == "Domestic" ? true : false
                  }
                  onChange={(e) =>
                    handleChange("Domestic", "kycDetail", "relationwithPep")
                  }
                />
                <label htmlFor="id21" className="radio-lab">
                  Domestic
                </label>

                <input
                  type="radio"
                  id="id22"
                  name="POLITICALLY"
                  value={
                    detailObject.relationwithPep == "Neither" ? true : false
                  }
                  onChange={(e) =>
                    handleChange("Neither", "kycDetail", "relationwithPep")
                  }
                />
                <label htmlFor="id22" className="radio-lab">
                  Neither
                </label>
              </div>
            )}
          </div>
        </div>

        <hr className="line-hr" />

        <h4 className="my-3">Declaration by Customer</h4>
        <div className="col-md-4">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              HAS ANY FINANCIAL INSTITUTION EVER REFUSED TO OPEN YOUR ACCOUNT?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id231"
                  name="EVER1"
                  disabled={isPreview ? true : false}
                  checked={
                    detailObject.customerrefusedToopenuraccount ? true : false
                  }
                />
                <label htmlFor="id231" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id241"
                  name="EVER1"
                  disabled={isPreview ? true : false}
                  checked={
                    !detailObject.customerrefusedToopenuraccount ? true : false
                  }
                />
                <label htmlFor="id241" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id23"
                  name="EVER"
                  value={detailObject.customerrefusedToopenuraccount}
                  onChange={(e) =>
                    handleChange(
                      true,
                      "kycDetail",
                      "customerrefusedToopenuraccount"
                    )
                  }
                />
                <label htmlFor="id23" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id24"
                  name="EVER"
                  value={detailObject.customerrefusedToopenuraccount}
                  onChange={(e) =>
                    handleChange(
                      false,
                      "kycDetail",
                      "customerrefusedToopenuraccount"
                    )
                  }
                />
                <label htmlFor="id24" className="radio-lab">
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
              ARE YOU OPENING THIS ACCOUNT ON BEHALF OF ANY OTHER PERSON?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id251"
                  name="OTHER1"
                  disabled={isPreview ? true : false}
                  checked={
                    detailObject.openingAccountbehlfonOther ? true : false
                  }
                />
                <label htmlFor="id251" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id261"
                  name="OTHER1"
                  disabled={isPreview ? true : false}
                  checked={
                    !detailObject.openingAccountbehlfonOther ? true : false
                  }
                />
                <label htmlFor="id261" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id25"
                  name="OTHER"
                  value={detailObject.openingAccountbehlfonOther}
                  onChange={(e) =>
                    handleChange(
                      true,
                      "kycDetail",
                      "openingAccountbehlfonOther"
                    )
                  }
                />
                <label htmlFor="id25" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id26"
                  name="OTHER"
                  value={detailObject.openingAccountbehlfonOther}
                  onChange={(e) =>
                    handleChange(
                      false,
                      "kycDetail",
                      "openingAccountbehlfonOther"
                    )
                  }
                />
                <label htmlFor="id26" className="radio-lab">
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
              ARE YOU HOLDING A POSITION IN ANY GOVERNMENT/PUBLIC OFFICE?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id271"
                  name="OFFICE1"
                  disabled={isPreview ? true : false}
                  checked={detailObject.postioninGovt ? true : false}
                />
                <label htmlFor="id271" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id281"
                  name="OFFICE1"
                  disabled={isPreview ? true : false}
                  checked={!detailObject.postioninGovt ? true : false}
                />
                <label htmlFor="id281" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id27"
                  name="OFFICE"
                  value={detailObject.postioninGovt}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "postioninGovt")
                  }
                />
                <label htmlFor="id27" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id28"
                  name="OFFICE"
                  value={detailObject.postioninGovt}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "postioninGovt")
                  }
                />
                <label htmlFor="id28" className="radio-lab">
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
              ARE YOU HOLDING A POSITION IN ANY POLITICAL PARTY?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id291"
                  name="PARTY1"
                  disabled={isPreview ? true : false}
                  checked={detailObject.postioninPoliticalParty ? true : false}
                />
                <label htmlFor="id291" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id301"
                  name="PARTY1"
                  disabled={isPreview ? true : false}
                  checked={!detailObject.postioninPoliticalParty ? true : false}
                />
                <label htmlFor="id301" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id29"
                  name="PARTY"
                  value={detailObject.postioninPoliticalParty}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "postioninPoliticalParty")
                  }
                />
                <label htmlFor="id29" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id30"
                  name="PARTY"
                  value={detailObject.postioninPoliticalParty}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "postioninPoliticalParty")
                  }
                />
                <label htmlFor="id30" className="radio-lab">
                  No
                </label>
              </div>
            )}
          </div>
        </div>

        <hr className="line-hr" />

        <h4 className="my-3">FATCA Details</h4>

        <div className="col-md-4">
          <div className="form-group">
            <label>TITLE OF ACCOUNT *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              disabled={isPreview ? true : false}
              placeholder="Enter Title of Account"
              value={detailObject.titleofAcct}
              onChange={(e) => handleChange(e, "kycDetail", "titleofAcct")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>CNIC NO. *</label>
            <input
              className="form-control"
              type="number"
              name="name"
              disabled={isPreview ? true : false}
              placeholder="Enter CNIC No."
              value={detailObject.cnic}
              onChange={(e) => handleChange(e, "kycDetail", "cnic")}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>COUNTRY OF RESIDENCE *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              disabled={isPreview ? true : false}
              value={detailObject.countryResidence}
              onChange={(e) => handleChange(e, "kycDetail", "countryResidence")}
            >
              <option value="" disabled>
                Select Country of Residence
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
            <label>PLACE OF BIRTH *</label>
            <input
              className="form-control"
              type="text"
              disabled={isPreview ? true : false}
              name="name"
              placeholder="Enter place of Birth"
              value={detailObject.placeofBirth}
              onChange={(e) => handleChange(e, "kycDetail", "placeofBirth")}
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
              ARE YOU A US CITIZEN?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id331"
                  name="ARE YOU A US CITIZEN1"
                  disabled={isPreview ? true : false}
                  checked={detailObject.USCitizen ? true : false}
                />
                <label htmlFor="id331" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id331"
                  name="ARE YOU A US CITIZEN1"
                  disabled={isPreview ? true : false}
                  checked={!detailObject.USCitizen ? true : false}
                />
                <label htmlFor="id331" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id32"
                  name="ARE YOU A US CITIZEN"
                  value={detailObject.USCitizen}
                  onChange={(e) => handleChange(true, "kycDetail", "USCitizen")}
                />
                <label htmlFor="id32" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id33"
                  name="ARE YOU A US CITIZEN"
                  value={detailObject.USCitizen}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "USCitizen")
                  }
                />
                <label htmlFor="id33" className="radio-lab">
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
                  id="id341"
                  name="ARE YOU A US RESIDENT1"
                  disabled={isPreview ? true : false}
                  checked={detailObject.USResident ? true : false}
                />
                <label htmlFor="id341" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id351"
                  name="ARE YOU A US RESIDENT1"
                  disabled={isPreview ? true : false}
                  checked={!detailObject.USResident ? true : false}
                />
                <label htmlFor="id351" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id34"
                  name="ARE YOU A US RESIDENT"
                  value={detailObject.USResident}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "USResident")
                  }
                />
                <label htmlFor="id34" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id35"
                  name="ARE YOU A US RESIDENT"
                  value={detailObject.USResident}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "USResident")
                  }
                />
                <label htmlFor="id35" className="radio-lab">
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
              DO YOU HOLD US PERMANENT RESIDENT CARD (GREEN CARD)?
            </label>

            {isPreview ? (
              <div>
                <input
                  type="radio"
                  id="id361"
                  name="GREEN CARD1"
                  disabled={isPreview ? true : false}
                  checked={detailObject.greencardHolder ? true : false}
                />
                <label htmlFor="id361" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id371"
                  name="GREEN CARD1"
                  disabled={isPreview ? true : false}
                  checked={!detailObject.greencardHolder ? true : false}
                />
                <label htmlFor="id371" className="radio-lab">
                  No
                </label>
              </div>
            ) : (
              <div>
                <input
                  type="radio"
                  id="id36"
                  name="GREEN CARD"
                  value={detailObject.greencardHolder}
                  onChange={(e) =>
                    handleChange(true, "kycDetail", "greencardHolder")
                  }
                />
                <label htmlFor="id36" className="radio-lab">
                  Yes
                </label>

                <input
                  type="radio"
                  id="id37"
                  name="GREEN CARD"
                  value={detailObject.greencardHolder}
                  onChange={(e) =>
                    handleChange(false, "kycDetail", "greencardHolder")
                  }
                />
                <label htmlFor="id37" className="radio-lab">
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
              ARE YOU A RESIDENT/CITIZEN OF ANY COUNTRY OTHER THAN PAKISTAN?
            </label>

            

                  {isPreview ? <div>
              <input
                type="radio"
                id="id381"
                name="PAKISTAN1"
                disabled={isPreview ? true : false}
                  checked={detailObject.otherNationalityBool ? true : false}
              />
              <label htmlFor="id381" className="radio-lab">
                Yes
              </label>

              <input
                type="radio"
                id="id391"
                name="PAKISTAN1"
                disabled={isPreview ? true : false}
                  checked={!detailObject.otherNationalityBool ? true : false}
              />
              <label htmlFor="id391" className="radio-lab">
                No
              </label>
            </div> : 
            <div>
            <input
              type="radio"
              id="id38"
              name="PAKISTAN"
              value={detailObject.otherNationalityBool}
              onChange={(e) =>
                handleChange(true, "kycDetail", "otherNationalityBool")
              }
            />
            <label htmlFor="id38" className="radio-lab">
              Yes
            </label>

            <input
              type="radio"
              id="id39"
              name="PAKISTAN"
              value={detailObject.otherNationalityBool}
              onChange={(e) =>
                handleChange(false, "kycDetail", "otherNationalityBool")
              }
            />
            <label htmlFor="id39" className="radio-lab">
              No
            </label>
          </div>
            }
            
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>COUNTRY OF RESIDENCE OTHER THAN PAKISTAN *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              value={detailObject.otherNationality}
              onChange={(e) => handleChange(e, "kycDetail", "otherNationality")}
              disabled={isPreview ? true : false}
            >
              <option value="" disabled>
                Select Country of Residence
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
              DO YOU HAVE ANY TAX OBLIGATION IN A COUNTRY OTHER THAN PAKISTAN?
            </label>
            
           {isPreview ?
            <div>
            <input
              type="radio"
              id="id401"
              name="OBLIGATION1"
              disabled={isPreview ? true : false}
                  checked={detailObject.taxObligationOtherBool ? true : false}
            />
            <label htmlFor="id401" className="radio-lab">
              Yes
            </label>

            <input
              type="radio"
              id="id411"
              name="OBLIGATION1"
              disabled={isPreview ? true : false}
                  checked={!detailObject.taxObligationOtherBool ? true : false}
            />
            <label htmlFor="id411" className="radio-lab">
              No
            </label>
          </div> :  <div>
              <input
                type="radio"
                id="id40"
                name="OBLIGATION"
                value={detailObject.taxObligationOtherBool}
                onChange={(e) =>
                  handleChange(true, "kycDetail", "taxObligationOtherBool")
                }
              />
              <label htmlFor="id40" className="radio-lab">
                Yes
              </label>

              <input
                type="radio"
                id="id41"
                name="OBLIGATION"
                value={detailObject.taxObligationOtherBool}
                onChange={(e) =>
                  handleChange(false, "kycDetail", "taxObligationOtherBool")
                }
              />
              <label htmlFor="id41" className="radio-lab">
                No
              </label>
            </div> 
           }
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>COUNTRY OF TAX OBLIGATION OTHER THAN PAKISTAN *</label>
            <select
              name=""
              id=""
              className="form-control custom-select"
              value={detailObject.taxObligationOther}
              onChange={(e) =>
                handleChange(e, "kycDetail", "taxObligationOther")
              }
              disabled={isPreview ? true : false}
            >
              <option value="" disabled>
                Select Country of tax obligation
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
              HAVE YOU GIVEN POWER OF ATTORNEY TO ANYONE RESIDING OVERSEAS?
            </label>
            
            
            {isPreview ? 
            <div>
            <input
              type="radio"
              id="id421"
              name="GIVEN POWER1"
              disabled={isPreview ? true : false}
                  checked={detailObject.overseasPowerOfAttorney ? true : false}
            />
            <label htmlFor="id421" className="radio-lab">
              Yes
            </label>

            <input
              type="radio"
              id="id431"
              name="GIVEN POWER1"
              disabled={isPreview ? true : false}
                  checked={!detailObject.overseasPowerOfAttorney ? true : false}
            />
            <label htmlFor="id431" className="radio-lab">
              No
            </label>
          </div> : 
          <div>
          <input
            type="radio"
            id="id42"
            name="GIVEN POWER"
            value={detailObject.overseasPowerOfAttorney}
            onChange={(e) =>
              handleChange(true, "kycDetail", "overseasPowerOfAttorney")
            }
          />
          <label htmlFor="id42" className="radio-lab">
            Yes
          </label>

          <input
            type="radio"
            id="id43"
            name="GIVEN POWER"
            value={detailObject.overseasPowerOfAttorney}
            onChange={(e) =>
              handleChange(false, "kycDetail", "overseasPowerOfAttorney")
            }
          />
          <label htmlFor="id43" className="radio-lab">
            No
          </label>
        </div>}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>POWER OF ATTORNEY'S ADDRESS? *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={detailObject.addressPowerOfAttorney}
              placeholder="Enter Power of Attorney's address"
              onChange={(e) =>
                handleChange(e, "kycDetail", "addressPowerOfAttorney")
              }
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              I/WE HEREBY CONFIRM THE INFORMATION PROVIDED ABOVE IS TRUE,
              ACCURATE AND COMPLETE. I/WE HEREBY PROVIDE MY/OUR CONSENT TO JS
              INVESTMENTS LIMITED (JSIL) OR ANY OF ITS AFFILIATES TO DISCLOSE
              AND FURNISH AND SHARE INFORMATION PERTAINING TO MY/OUR ACCOUNT TO
              DOMESTIC OR OVERSEAS REGULATORS OR TAX AUTHORITIES WHERE NECESSARY
              TO ESTABLISH OUR TAX LIABILITY IN ANY JURISDICTION. I/ WE ALSO
              AUTHORIZE JSIL TO DEDUCT WITHHOLDING TAX FROM MY/ OUR ACCOUNT WHEN
              REQUIRED TO DO SO BY DOMESTIC OR OVERSEAS REGULATORS OR TAX
              AUTHORITIES OR PAY OUT,FROM MY/OUR ACCOUNT(S) SUCH AMOUNTS AS MAY
              BE REQUIRED ACCORDING TO APPLICABLE LAWS, REGULATIONS, AGREEMENTS
              WITH REGULATORS OR AUTHORITIES AND DIRECTIVES. I/WE SHALL
              INDEMNIFY AND HOLD JSIL HARMLESS AGAINST ANY CLAIM, DAMAGES,
              COSTS, EXPENSES AND OTHER DIRECT AND/OR INDIRECT CONSEQUENCE OF
              DISCLOSING, FURNISHING AND SHARING ANY INFORMATION WITH ANY
              DOMESTIC OR OVERSEAS REGULATORS OR TAX AUTHORITIES. I/WE AGREE AND
              UNDERTAKE TO NOTIFY THE JSIL WITHIN THIRTY (30) CALENDAR DAYS IF
              THERE IS A CHANGE IN ANY INFORMATION WHICH WE HAVE PROVIDED ABOVE.
            </label>
           
           {isPreview ? 
           
           <div>
              <input
                type="checkbox"
                id="id431"
                name="GIVEN POWER1"
                disabled={isPreview ? true : false}
                checked={detailObject.terms_condition_bool ? true : false}
              />
              <label htmlFor="id431" className="radio-lab">
                I Agree
              </label>
            </div> :  <div>
              <input
                type="checkbox"
                id="id43"
                name="GIVEN POWER"
                value={detailObject.terms_condition_bool}
                onChange={(e) =>
                  handleChange(e, "kycDetail", "terms_condition_bool")
                }
              />
              <label htmlFor="id43" className="radio-lab">
                I Agree
              </label>
            </div>}
          </div>
        </div>

        <hr className="line-hr" />

        <h4 className="my-3">W-9 Form (For US Citizens)</h4>

        <div className="col-md-4">
          <div className="form-group">
            <label>NAME (AS SHOWN ON YOUR INCOME TAX RETURN) *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={detailObject.name}
              onChange={(e) => handleChange(e, "kycDetail", "name")} 
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>BUSINESS NAME / DISREGARDED ENTITY NAME *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder="Enter Full Name"
              value={detailObject.businessName}
              onChange={(e) => handleChange(e, "kycDetail", "businessName")}
              disabled={isPreview ? true : false}
            />
          </div>
        </div>

        <div className="col-md-12">
          <div
            id="input-group-1"
            role="group"
            className="form-group required-field"
          >
            <label htmlFor="document-type" className="d-block">
              SELECT APPROPRIATE OPTION FOR FEDERAL TAX CLASSIFICATION?
            </label>
            
            {isPreview ? <div>
              <input
                type="radio"
                id="id441"
                name="Individual/Sole1"
                checked={
                  detailObject.fedralTaxClassfication == "Sole" ? true : false
                }

                disabled={isPreview ? true : false}
              />
              <label htmlFor="id441" className="radio-lab">
                Individual/Sole Proprietor Or Single-Member LLC
              </label>

              <input
                type="radio"
                id="id451"
                name="Individual/Sole1"
                checked={
                  detailObject.fedralTaxClassfication == "C Corporation"
                    ? true
                    : false
                }
                disabled={isPreview ? true : false}

              />
              <label htmlFor="id451" className="radio-lab">
                C Corporation
              </label>

              <input
                type="radio"
                id="id461"
                name="Individual/Sole1"
                checked={
                  detailObject.fedralTaxClassfication == "S Corporation"
                    ? true
                    : false
                }
                disabled={isPreview ? true : false}

              />
              <label htmlFor="id461" className="radio-lab">
                S Corporation
              </label>

              <input
                type="radio"
                id="id471"
                name="Individual/Sole1"
                checked={
                  detailObject.fedralTaxClassfication == "Partnership"
                    ? true
                    : false
                }
                disabled={isPreview ? true : false}

              />
              <label htmlFor="id471" className="radio-lab">
                Partnership
              </label>

              <input
                type="radio"
                id="id481"
                name="Individual/Sole1"
                checked={
                  detailObject.fedralTaxClassfication == "Trust/Estate"
                    ? true
                    : false
                }
                disabled={isPreview ? true : false}

              />
              <label htmlFor="id481" className="radio-lab">
                Trust/Estate
              </label>

              <input
                type="radio"
                id="id491"
                name="Individual/Sole1"
                checked={
                  detailObject.fedralTaxClassfication ==
                  "Limited Liability Company"
                    ? true
                    : false
                }
                disabled={isPreview ? true : false}

              />
              <label htmlFor="id491" className="radio-lab">
                Limited Liability Company
              </label>

              <input
                type="radio"
                id="id501"
                name="Individual/Sole1"
                checked={
                  detailObject.fedralTaxClassfication == "Other" ? true : false
                }
                disabled={isPreview ? true : false}

              />
              <label htmlFor="id501" className="radio-lab">
                Other
              </label>
            </div> : <div>
              <input
                type="radio"
                id="id44"
                name="Individual/Sole"
                value={
                  detailObject.fedralTaxClassfication == "Sole" ? true : false
                }
                onChange={(e) =>
                  handleChange("Sole", "kycDetail", "fedralTaxClassfication")
                }
              />
              <label htmlFor="id44" className="radio-lab">
                Individual/Sole Proprietor Or Single-Member LLC
              </label>

              <input
                type="radio"
                id="id45"
                name="Individual/Sole"
                value={
                  detailObject.fedralTaxClassfication == "C Corporation"
                    ? true
                    : false
                }
                onChange={(e) =>
                  handleChange(
                    "C Corporation",
                    "kycDetail",
                    "fedralTaxClassfication"
                  )
                }
              />
              <label htmlFor="id45" className="radio-lab">
                C Corporation
              </label>

              <input
                type="radio"
                id="id46"
                name="Individual/Sole"
                value={
                  detailObject.fedralTaxClassfication == "S Corporation"
                    ? true
                    : false
                }
                onChange={(e) =>
                  handleChange(
                    "S Corporation",
                    "kycDetail",
                    "fedralTaxClassfication"
                  )
                }
              />
              <label htmlFor="id46" className="radio-lab">
                S Corporation
              </label>

              <input
                type="radio"
                id="id47"
                name="Individual/Sole"
                value={
                  detailObject.fedralTaxClassfication == "Partnership"
                    ? true
                    : false
                }
                onChange={(e) =>
                  handleChange(
                    "Partnership",
                    "kycDetail",
                    "fedralTaxClassfication"
                  )
                }
              />
              <label htmlFor="id47" className="radio-lab">
                Partnership
              </label>

              <input
                type="radio"
                id="id48"
                name="Individual/Sole"
                value={
                  detailObject.fedralTaxClassfication == "Trust/Estate"
                    ? true
                    : false
                }
                onChange={(e) =>
                  handleChange(
                    "Trust/Estate",
                    "kycDetail",
                    "fedralTaxClassfication"
                  )
                }
              />
              <label htmlFor="id48" className="radio-lab">
                Trust/Estate
              </label>

              <input
                type="radio"
                id="id49"
                name="Individual/Sole"
                value={
                  detailObject.fedralTaxClassfication ==
                  "Limited Liability Company"
                    ? true
                    : false
                }
                onChange={(e) =>
                  handleChange(
                    "Limited Liability Company",
                    "kycDetail",
                    "fedralTaxClassfication"
                  )
                }
              />
              <label htmlFor="id49" className="radio-lab">
                Limited Liability Company
              </label>

              <input
                type="radio"
                id="id50"
                name="Individual/Sole"
                value={
                  detailObject.fedralTaxClassfication == "Other" ? true : false
                }
                onChange={(e) =>
                  handleChange("Other", "kycDetail", "fedralTaxClassfication")
                }
              />
              <label htmlFor="id50" className="radio-lab">
                Other
              </label>
            </div>}
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>EXEMPT PAYEE CODE (IF ANY) *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={detailObject.payeeCode}
              onChange={(e) => handleChange(e, "kycDetail", "payeeCode")}
              placeholder="Enter Exempt Payee Code"
              disabled={isPreview ? true : false}

            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>EXEMPTION FROM FATCA REPORTING CODE (IF ANY) *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={detailObject.FatcaReportingCode}
              disabled={isPreview ? true : false}

              onChange={(e) =>
                handleChange(e, "kycDetail", "FatcaReportingCode")
              }
              placeholder="Enter Exemption From FATCA Reporting Code"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>RESIDENTIAL ADDRESS *</label>
            <input
              className="form-control"
              type="text"
              name="name"
              disabled={isPreview ? true : false}

              value={detailObject.residentialAddress}
              onChange={(e) =>
                handleChange(e, "kycDetail", "residentialAddress")
              }
              placeholder="Enter Residential Address"
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
              disabled={isPreview ? true : false}

              value={detailObject.region}
              onChange={(e) => handleChange(e, "kycDetail", "region")}
            >
              <option></option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>CITY *</label>
            <select
              name="state"
              id="state"
              className="form-control"
              value={detailObject.city}
              disabled={isPreview ? true : false}

              onChange={(e) => handleChange(e, "kycDetail", "city")}
            >
              <option></option>
            </select>
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>ZIP CODE *</label>
            <input
              value={detailObject.zipcode}
              onChange={(e) => handleChange(e, "kycDetail", "zipcode")}
              className="form-control"
              type="text"
              name="number"
              disabled={isPreview ? true : false}

              placeholder="Enter Zip Code"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>ACCOUNT NUMBER *</label>
            <input
              className="form-control"
              value={detailObject.accountNumber}
              onChange={(e) => handleChange(e, "kycDetail", "accountNumber")}
              type="text"
              name="name"
              disabled={isPreview ? true : false}

              placeholder="Enter Account Number/IBAN (e.g. PK 00 AAAA 000000AA234567AA)"
            />
          </div>
        </div>

        <div className="col-md-4">
          <div className="form-group">
            <label>TAXPAYER IDENTIFICATION NUMBER (TIN) *</label>
            <input
              className="form-control"
              value={detailObject.tinnumber}
              onChange={(e) => handleChange(e, "kycDetail", "tinnumber")}
              type="number"
              disabled={isPreview ? true : false}

              name="name"
              placeholder="Enter TIN"
            />
          </div>
        </div>

        <hr className="line-hr" />
      </div>
     {!isPreview ?  <ul className="list-inline pull-right">
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
      </ul> : ''}
    </div>
  );
}

export default KYCDetails;

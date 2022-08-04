import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import logo from "./assets/images/logo1.png";
import bg from "./assets/images/bg1.jpg";

function RegisterAcoount() {
    const [registeraccnt, setRegisteraccnt] = useState({
        idDcotype:'',
        cnic:'',
        name:'',
        email:'',
        phone:'',
        referralCode:'',
        accountType:''
    }) 

    // useEffect(() => {
    //   console.log(registeraccnt);
    // }, [registeraccnt])

    const submitAccountDetails = (e)=>{
      e.preventDefault();
      console.log(registeraccnt);
    }
    
  return (
    <div className="container-flude">
      <div className="row">
        <div className="col-lg-6">
          <div className="imgfom" style={{backgroundImage:`url(${bg})`}}>
            <div className="form-logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="formtext p-5 px-4">
              <h1>
                GROWTH FOR YOUR <br />
                <span className="spantext">INVESTMENTS</span>
                <br /> JUST A CLICK AWAY!
              </h1>

              <ul>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  Open your Digital Sahulat Sarmayakari account to invest in
                  mutual funds.
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  Single Transaction Limit Rs.400,000/-
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  Annual Transaction Limit Rs.800,000/-
                </li>
                <li>
                  <i className="fa-solid fa-circle-check"></i>
                  Cumulative Transaction Limit Rs.1,000,000/-
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-lg-6 form-height-scroll">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <div className="form-feld">
                <div className="loginpanel py-5">
                  <div>
                    <h2>Register Your Account!</h2>
                    <p className="paper">
                      For the purpose of industry regulation, your details are
                      required.
                    </p>
                  </div>

                  <Form className="" onSubmit={(e)=>submitAccountDetails(e)}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div
                          id="input-group-1"
                          role="group"
                          className="form-group required-field"
                        >
                          <label htmlFor="document-type" className="d-block">
                            ID Document Type
                          </label>
                          <div>
                            <select
                              name="document type"
                              id="document-type" required
                              className="form-control custom-select" value={registeraccnt.idDcotype}
                              onChange={(e) => setRegisteraccnt({...registeraccnt,idDcotype :e.target.value })}
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
                      </div>

                      <div className="col-lg-6">
                        <div
                          id="input-group-1"
                          role="group"
                          className="form-group required-field"
                        >
                          <label htmlFor="document-type" className="d-block">
                            ID Document Type
                          </label>
                          <div>
                            <input
                              placeholder="Enter CNIC/NICOP"
                              name="cnic/nicop" required
                              className="form-control" value={registeraccnt.cnic}
                              onChange={(e) => setRegisteraccnt({...registeraccnt,cnic :e.target.value })}
                            />
                          </div>
                        </div>
                      </div>
                      <div
                        id="input-group-1"
                        role="group"
                        className="form-group required-field"
                      >
                        <label htmlFor="document-type" className="d-block">
                          FULL NAME (AS PER IDENTITY DOCUMENT)
                        </label>
                        <div>
                          <input
                            type="text"
                            placeholder="Enter full name (as per Identity Document)"
                            name="cnic/nicop"  required
                            className="form-control" value={registeraccnt.name}
                            onChange={(e) => setRegisteraccnt({...registeraccnt,name :e.target.value })}
                          />
                        </div>
                      </div>

                      <div
                        id="input-group-1"
                        role="group"
                        className="form-group required-field"
                      >
                        <label htmlFor="document-type" className="d-block">
                          Email Address
                        </label>
                        <div>
                          <input
                            type="email" required
                            placeholder="Enter email address (xxxx@xxx.xxx)"
                            name="cnic/nicop"
                            className="form-control" value={registeraccnt.email}
                            onChange={(e) => setRegisteraccnt({...registeraccnt,email :e.target.value })}
                          />
                        </div>
                      </div>

                      <div
                        id="input-group-1"
                        role="group"
                        className="form-group required-field"
                      >
                        <label htmlFor="document-type" className="d-block">
                          PHONE NUMBER
                        </label>
                        <div>
                          <input
                            type="tel" required
                            placeholder="Enter phone number (xxxx@xxx.xxx)"
                            name="cnic/nicop"
                            className="form-control" value={registeraccnt.phone}
                            onChange={(e) => setRegisteraccnt({...registeraccnt,phone :e.target.value })}
                          />
                        </div>
                      </div>

                      <div
                        id="input-group-1"
                        role="group"
                        className="form-group required-field"
                      >
                        <label htmlFor="document-type" className="d-block">
                          Referral Code (if any)
                        </label>
                        <div>
                          <input
                            type="number"
                            placeholder="Enter referral code (if any)"
                            name="cnic/nicop" required
                            className="form-control" value={registeraccnt.referralCode}
                            onChange={(e) => setRegisteraccnt({...registeraccnt,referralCode :e.target.value })}
                          />
                        </div>
                      </div>

                      <div
                        id="input-group-1"
                        role="group"
                        className="form-group required-field"
                      >
                        <label htmlFor="document-type" className="d-block">
                          Account Type
                        </label>

                        <div>
                          <input type="radio" id="test1" name="radio-group"  required
                          value={registeraccnt.accountType}
                          onChange={(e) => setRegisteraccnt({...registeraccnt,accountType :'Regular Digital Account' })}
                          />
                          <label htmlFor="test1" className="radio-lab">
                            Regular Digital Account
                          </label>

                          <input type="radio" id="test2" name="radio-group"  required
                          value={registeraccnt.accountType}
                          onChange={(e) => setRegisteraccnt({...registeraccnt,accountType :'Sahulat Sarmayakari Account' })}
                          />
                          <label htmlFor="test2" className="radio-lab">
                            Sahulat Sarmayakari Account
                          </label>
                        </div>
                      </div>

                      <div className="action-buttons">
                        <button
                          type="submit"
                          className="default-btn next-step"
                          //   onClick={continueStepEvent}
                        >
                          Continue
                        </button>
                      </div>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterAcoount;

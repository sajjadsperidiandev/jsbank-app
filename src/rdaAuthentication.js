import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { OTPModal } from "./Components/OTPModal";

export const RdaAuthentication = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [userInfo, setuserInfo] = useState({ cnic: "", accountNo: "" });

  const rdaUserAuthevnt = (e) => {
    e.preventDefault();
    // axios
    //   .post("testurl.com", userInfo)
    //   .then((res) => console.log(res))
    //   .catch((err) => {
    //     console.log(err);
    //   });
    handleShow();

  };

  const verifyOTP = (e) => {
    handleClose()
  }



  return (
    <>
      <div className="container rdaAuth">
        <Form onSubmit={(e) => rdaUserAuthevnt(e)} className="text-center" >
          <div className="col-6 m-auto">

            <Form.Group className="mb-3">
              <Form.Label>CNIC Number</Form.Label>
              <Form.Control
                placeholder="CNIC Number"
                type={"number"}
                required
                value={userInfo.cnic}
                onChange={(e) =>
                  setuserInfo({ ...userInfo, cnic: e.target.value })
                }
              />
            </Form.Group>
          </div>
          <div className="col-6 m-auto">

            <Form.Group className="mb-3">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type={"number"}
                placeholder="Account Number"
                required
                value={userInfo.accountNo}
                onChange={(e) =>
                  setuserInfo({ ...userInfo, accountNo: e.target.value })
                }
              />
            </Form.Group>
          </div>


          <Button className="btn btn-primary" type="submit">
            Check
          </Button>
        </Form>
      </div>

      <OTPModal show={show} handleClose={handleClose} verifyOTP={verifyOTP} />
    </>
  );
};

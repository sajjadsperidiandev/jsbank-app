import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope,faPhone,faGlobe} from '@fortawesome/free-solid-svg-icons'
import { faYoutube,faInstagram,faFacebook,faLinkedin,faTwitter } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="icon-box">
              <div className="icon" style={{fontSize:'30px',marginRight:'5px'}}>

                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="icon-text">
                <a href="mailto:ir@jsil.com">
                  Email
                  <br />
                  ir@jsil.com
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="icon-box">
            <div className="icon" style={{fontSize:'30px',marginRight:'5px'}}>
              <FontAwesomeIcon icon={faPhone} />

              </div>
              <div className="icon-text">
                <a href="tel:0800-00887">
                  Toll Free Number
                  <br />
                  0800-00887
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="icon-box">
            <div className="icon" style={{fontSize:'30px',marginRight:'5px'}}>
                <FontAwesomeIcon icon={faGlobe} />

              </div>
              <div className="icon-text">
                <a href="https://jsil.com/">
                  Website
                  <br />
                  www.jsil.com
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-4">
            <div className="icon-text">
              <h6>Follow us on social media</h6>

              <div className="footer-sosil-icon">
                <div className="sosil-icon">
                <FontAwesomeIcon icon={faYoutube} color='#fff' />
                </div>

                <div className="sosil-icon">
                  <FontAwesomeIcon icon={faFacebook} />

                </div>

                <div className="sosil-icon">
                  <FontAwesomeIcon icon={faInstagram} />

                </div>

                <div className="sosil-icon">
                  <FontAwesomeIcon icon={faTwitter} />

                </div>

                <div className="sosil-icon">
                  <FontAwesomeIcon icon={faLinkedin} />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

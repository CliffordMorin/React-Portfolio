import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//style
import "bootstrap/dist/css/bootstrap.min.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagramSquare,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h5>About</h5>
            <p className="text-justify">
              Clifford Morin is a full-stack javascript web-developer and
              designer based in Philadelphia, PA. Clifford has a BM from West
              Chester University and an MM from Temple University. After
              learning how to code at a Rutgers University six month long
              intensive full-stack coding bootcamp, Clifford is equipped with
              all the skills it takes to build your next web site or
              application.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li>
                <Link to="/">About Me</Link>
              </li>
              <li>
                <Link to="/work">My Work</Link>
              </li>
              <li>
                <Link to="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h5>Contact Info</h5>
            <ul className="footer-links">
              <li>
                <a href="tel:1+609-602-7201" target="_blank" rel="noreferrer">
                  (609)602-7201
                </a>
              </li>
              <li>
                <a
                  href="mailto:cemorin21@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  cemorin21@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Philadelphia,+PA/@40.0026767,-75.2581132,11z/data=!3m1!4b1!4m5!3m4!1s0x89c6b7d8d4b54beb:0x89f514d88c3e58c1!8m2!3d39.9525839!4d-75.1652215"
                  target="_blank"
                  rel="noreferrer"
                >
                  Philadelphia, PA, USA
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Built by and Copyright &copy; 2021 All Rights Reserved by Clifford
              Morin
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href="https://www.facebook.com/CliffordMorin21/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} size="3x" color="blue" />
                </a>
              </li>
              <li>
                <a
                  className="instagram"
                  href="https://www.instagram.com/_mellamocliff_/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon
                    icon={faInstagramSquare}
                    size="3x"
                    color="red"
                  />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/morin-clifford-129888a9"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="3x" color="blue" />
                </a>
              </li>
              <li>
                <a
                  className="github"
                  href="https://github.com/CliffordMorin"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="3x" color="black" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: #272727;
  padding: 45px 0 20px;
  font-size: 15px;
  line-height: 24px;
  color: #5d5b65;

  hr {
    border-top-color: #bbb;
    opacity: 0.5;
  }
  hr.small {
    margin: 20px 0;
  }
  h5 {
    color: #22c68b;
    font-size: 16px;
    text-transform: uppercase;
    margin-top: 5px;
    letter-spacing: 2px;
  }
  a {
    color: #737373;
  }
  a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .footer-links {
    padding-left: 0;
    list-style: none;
  }
  .footer-links li {
    display: block;
  }
  .footer-links a {
    color: #737373;
  }
  .footer-links a:active,
  .footer-links a:focus,
  .footer-links a:hover {
    color: #3366cc;
    text-decoration: none;
  }
  .footer-links.inline li {
    display: inline-block;
  }
  .social-icons {
    text-align: right;
  }
  .social-icons a {
    width: 40px;
    height: 40px;
    line-height: 40px;
    margin-left: 6px;
    margin-right: 0;
    border-radius: 100%;
    background-color: #33353d;
  }
  .social-icons a.instagram {
    border-radius: 5px;
  }
  .social-icons a.linkedin {
    border-radius: 5px;
  }
  .copyright-text {
    margin: 0;
  }
  @media (max-width: 991px) {
    [class^="col-"] {
      margin-bottom: 30px;
    }
  }
  @media (max-width: 767px) {
    padding-bottom: 0;

    .copyright-text,
    .social-icons {
      text-align: center;
    }
  }
  .social-icons {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }
  .social-icons li {
    display: inline-block;
    margin-bottom: 4px;
  }
  .social-icons li.title {
    margin-right: 15px;
    text-transform: uppercase;
    color: #96a2b2;
    font-weight: 700;
    font-size: 13px;
  }
  .social-icons a {
    background-color: #eceeef;
    color: #818a91;
    font-size: 16px;
    display: inline-block;
    line-height: 44px;
    width: 44px;
    height: 44px;
    text-align: center;
    margin-right: 8px;
    border-radius: 100%;
    -webkit-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }
  .social-icons a:active,
  .social-icons a:focus,
  .social-icons a:hover {
    color: #fff;
    background-color: #29aafe;
  }
  .social-icons.size-sm a {
    line-height: 34px;
    height: 34px;
    width: 34px;
    font-size: 14px;
  }

  .social-icons a.facebook:hover {
    background-color: #3b5998;
  }
  .social-icons a.instagram:hover {
    background-color: #00aced;
  }
  .social-icons a.linkedin:hover {
    background-color: #007bb6;
  }
  .social-icons a.github:hover {
    background-color: #ea4c89;
  }
  @media (max-width: 767px) {
    .social-icons li.title {
      display: block;
      margin-right: 0;
      font-weight: 600;
    }
  }
`;

export default Footer;

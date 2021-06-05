import React, { Component } from "react";
import topImage from "../Assets/mobile login2.gif";
import cloudImg from "../Assets/cloud image.png";
import logo from "../Assets/logo.png";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import "../css/PopupAccount.css";
import IconButton from "@material-ui/core/IconButton";
import FacebookIcon from "@material-ui/icons/Facebook";
import fb_icon from "../Assets/fb-img.png";
import g_icon from "../Assets/google-img.png";
import li_icon from "../Assets/linkedin_logo.webp";
export class PopupAccount extends Component {
  render() {
    const img_size = 30;
    return (
      <div className="main">
        <div className="back_hindrence"></div>
        <div className="main_parent">
          <div className="main_child">
            <div className="cloud_main">
              <div class="cloud"></div>
              <div class="cloud"></div>
            </div>
            <div className="head_container">
              <div>
                <img
                  src={logo}
                  className="top_logo"
                  width={img_size - 3}
                  height={img_size - 3}
                />
                <span>Informatsy</span>
              </div>

              <span
                className="cancel"
                style={{ fontSize: "18px", cursor: "pointer" }}
              >
                &times;
              </span>
            </div>
            <div className="img_container">
              <div className="img1">
                <img
                  src={topImage}
                  alt="login"
                  width={img_size + 200}
                  height={img_size + 200}
                />
              </div>
            </div>
            <div className="content_container">
              <div className="content_main">
                <h2 className="content_head">Hello!</h2>
                <p className="content_desc">
                  Welcome to One stop platform for students to be aware of their
                  academic activity.
                </p>
              </div>
              <div className="button_main">
                <Button
                  className="btn_1"
                  id="btn"
                  variant="contained"
                  color="primary"
                  component={Link}
                  to="/login"
                  disableElevation
                >
                  Login
                </Button>
                <Button
                  className="btn_2"
                  id="btn"
                  variant="outlined"
                  color="primary"
                  component={Link}
                  to="/login"
                  disableElevation
                >
                  Sign up
                </Button>
              </div>
              <div className="Bottom_main">
                <p>or via social media</p>
                <div className="social_acc">
                  <IconButton
                    aria-label="facebook"
                    className="btn_sa"
                    component={Link}
                    to="/login"
                  >
                    <img
                      src={fb_icon}
                      alt="facebook"
                      width={img_size}
                      height={img_size}
                    />
                  </IconButton>
                  <IconButton
                    className="btn_sa"
                    aria-label="google"
                    component={Link}
                    to="/login"
                  >
                    <img
                      src={g_icon}
                      alt="google"
                      width={img_size}
                      height={img_size}
                    />
                  </IconButton>
                  <IconButton
                    aria-label="linkedIn"
                    className="btn_sa"
                    component={Link}
                    to="/login"
                  >
                    <img
                      src={li_icon}
                      alt="linkedIn"
                      width={img_size + 3}
                      height={img_size + 3}
                    />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PopupAccount;

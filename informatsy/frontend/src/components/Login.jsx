import React, { Component } from "react";
import logo from "../Assets/logo.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

import Visibility from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import fb_icon from "../Assets/fb-img.png";
import g_icon from "../Assets/google-img.png";
import li_icon from "../Assets/linkedin_logo.webp";
import Input from "../components/Input";
import "../css/Login.css";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { Typography } from "@material-ui/core";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
    };
  }
  render() {
    const img_size = 30;
    const style = { color: "grey", lineHeight: "55px" };

    return (
      <div className="login_main">
        <div className="login_parent">
          <div className="login_side_bar">
            <div className="login_side_p1"></div>

            <div className="login_side_p2"></div>
            <div className="login_side_p3"></div>
            <div className="login_side_p4"></div>
          </div>
          <div className="login_child">
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
            </div>
            <div className="top_tag">
              <h2>Welcome!</h2>
              <p>Sign in to continue</p>
            </div>
            <div className="form_main">
              <div className="forms_content1">
                <Input
                  name="Username or Email"
                  classname="one"
                  type="text"
                  component={<PersonRoundedIcon style={style} />}
                />
              </div>
              <div className="forms_content1">
                <Input
                  name="Password"
                  classname="two"
                  type="password"
                  component={<LockOpenRoundedIcon style={style} />}
                />
              </div>
            </div>
            <Typography
              className="login_forgot_password"
              component={Link}
              to="/forgot"
            >
              Forgot password
            </Typography>
            <div className="button_main">
              <Button
                className="login_btn"
                variant="contained"
                color="primary"
                component={Link}
                to="/login"
                disableElevation
              >
                Login
              </Button>
            </div>

            <div className="login_bottom_main">
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
              <div className="login_to_signup">
                <span>Don't have an account ? </span>
                <Typography
                  className="login_forgot_password"
                  component={Link}
                  to="/forgot"
                >
                  Sign up
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;

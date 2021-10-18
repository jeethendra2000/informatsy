import React, { Component } from "react";
import logo from "../Assets/logo.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import MobileView from "../components/mobile";
import Visibility from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Mvbg from "../Assets/mv-lg-bg.jpg";
import Alert from "../components/AlertBar";
import fb_icon from "../Assets/fb-img.png";
import g_icon from "../Assets/google-img.png";
import li_icon from "../Assets/linkedin_logo.webp";
import Input from "../components/Input";
import "../css/Login.css";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { StepButton, Typography } from "@material-ui/core";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
class FormMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      currentPassword: "",
      currentUsername: "",
      isUsername: false,
      isPass: false,
      isSubmit: false,
      alert: false,
      alertContent: "",
      alertMsg: "",
      buttonData: false,
    };
  }
  setUsername = (childData) => {
    if (!childData.length > 0) {
      this.setState({ isUsername: false });
    } else {
      this.setState({ currentUsername: childData, isUsername: true });
    }
  };
  setPassword = (childData) => {
    if (!childData.length >= 6) {
      this.setState({ isPassword: false });
    } else {
      this.setState({ currentPassword: childData, isPass: true });
    }
  };
  handleSubmit = () => {
    this.setState({
      alert: false,
      alertContent: "",
    });
    if (
      this.state.isUsername &&
      this.state.isPass &&
      (this.state.currentUsername && this.state.currentPassword) !== ""
    ) {
      let data = {
        username: this.state.currentUsername,
        password: this.state.currentPassword,
      };
      this.setState({ buttonData: true });
      axios
        .post(`${process.env.React_App_SERVER_API}/api/token/`, data, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.setState({ buttonData: false });

          Cookies.set("access_token", res.data["access"], {
            expires: 1 / 48,
          });
          Cookies.set("refresh_token", res.data["refresh"], {
            expires: 30,
          });
          this.setState({
            alert: true,
            alertContent: "Successfully logged in redirecting...!",
            alertMsg: "success",
          });

          setTimeout(() => {
            window.location.href = `${process.env.React_App_FRONTEND}`;
          }, 1000);
        })
        .catch((err) => {
          this.setState({ buttonData: false });

          this.setState({
            alert: true,
            alertContent: err.response.data.detail,
            alertMsg: "error",
          });
        });
    } else {
      this.setState({
        isSubmit: false,
      });
    }
  };
  render() {
    const img_size = 30;
    const style = { color: "grey", lineHeight: "55px" };

    return (
      <>
        <Alert
          content={{
            alert: this.state.alert,
            msgStatus: this.state.alertMsg,
            msgContent: this.state.alertContent,
          }}
        />
        <div className="login_child">
          <div className="top_tag">
            <h2>Welcome!</h2>
            <p>Sign in to continue</p>
          </div>
          <div className="form_main">
            <div className="forms_content1">
              <Input
                name="Username"
                classname="one"
                type="text"
                component={<PersonRoundedIcon style={style} />}
                returnValue={this.setUsername}
              />
            </div>
            <div className="forms_content2">
              <Input
                name="Password"
                classname="two"
                type="password"
                component={<LockOpenRoundedIcon style={style} />}
                returnValue={this.setPassword}
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
              disabled={
                !(
                  this.state.isUsername &&
                  this.state.isPass &&
                  !this.state.buttonData
                )
              }
              onClick={this.handleSubmit}
              disableElevation
            >
              {this.state.buttonData ? (
                <CircularProgress size="1.5rem" />
              ) : (
                "Login"
              )}
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
                className="login_signup"
                component={Link}
                to="/signup"
              >
                Sign up
              </Typography>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
    };
  }
  //----------------to update rezing the window--------------
  updateWindowSize = () => {
    this.setState({ width: window.innerWidth });
  };
  //------------browser loads all component------------------
  componentDidMount() {
    window.addEventListener("resize", this.updateWindowSize);
  }
  //----------to remove eventlistener-----------------------
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowSize);
  }

  render() {
    const img_size = 30;
    return (
      <>
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
                <div className="login_logo">
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
                {this.state.width >= 610 ? <FormMain /> : ""}
              </div>
            </div>
          </div>
        </div>
        <div className="mv_login_main">
          <div className="mv_login_parent">
            <div className="mc_login_img-parent">
              <div className="img_overlay-login"></div>
              <img
                id="img_bg_login"
                src={Mvbg}
                alt="bg"
                width="95%"
                height="100%"
                className="login_img-bg"
              />
              <div className="svg-helper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="850 60 1440 320"
                  width="1100.38"
                  height="160.57996"
                  className="svg-img"
                >
                  <path
                    fill="#ffff"
                    fill-opacity="1"
                    d="M0,224L40,202.7C80,181,160,139,240,149.3C320,160,400,224,480,240C560,256,640,224,720,181.3C800,139,880,85,960,69.3C1040,53,1120,75,1200,122.7C1280,171,1360,245,1400,282.7L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="mv-login-logo">
              <div className="mv-login-img-main">
                <img
                  src={logo}
                  className="mv-login-logo-img"
                  width={img_size - 3}
                  height={img_size - 3}
                  alt="logo"
                />
              </div>
            </div>
            <div className="mv-login-form-main">
              <div className="mv-login-form-parent">
                {this.state.width < 610 ? <FormMain /> : ""}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;

import React, { Component } from "react";
import logo from "../Assets/logo.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import MobileView from "../components/mobile";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import Visibility from "@material-ui/icons/Visibility";
import Button from "@material-ui/core/Button";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Mvbg from "../Assets/mv-lg-bg.jpg";
import Checkbox from "@material-ui/core/Checkbox";
import CircleChecked from "@material-ui/icons/CheckCircleOutline";
import CircleCheckedFilled from "@material-ui/icons/CheckCircle";
import CircleUnchecked from "@material-ui/icons/RadioButtonUnchecked";
import IconButton from "@material-ui/core/IconButton";
import fb_icon from "../Assets/fb-img.png";
import g_icon from "../Assets/google-img.png";
import li_icon from "../Assets/linkedin_logo.webp";
import Input from "../components/Input";
import Loader from "../components/Loaders";
import "../css/Login.css";
// import { Snackbar } from "@material-ui/core";
// import MuiAlert from "@material-ui/lab/Alert";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import LockOpenRoundedIcon from "@material-ui/icons/LockOpenRounded";
import { Typography } from "@material-ui/core";
import Alert from "../components/AlertBar";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { LinkedIn } from "react-linkedin-login-oauth2";
import axios from "axios";
class FormMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPassword: false,
      showConfirmPass: false,
      Email: "",
      isEmailTrue: false,
      password: "",
      isPassword: false,
      confirmPassword: "",
      ispassConfirm: false,
      alert: false,
      alertContent: "",
      alertMsg: "",
      ischeck: false,
      alert: false,
      alertContent: "",
      alertMsg: "",
      isSubmit: 1,
    };
  }
  //---------------to check whether all fields are filled-------------

  // ----to get loading functionality by passing some values through this--------
  getLoadFunction(selector, property) {
    document.getElementsByClassName(selector)[0].style.visibility = property;
  }
  // -------------------input loaders settings--------------------------
  setInputStateEmail = (childData) => {
    this.getLoadFunction("mv_sign_up_loader1", "visible");
    var reg =
      /^[A-Z,a-z,0-9,?./""-]+@(gmail|outlook|yahoo|icloud)+[.]+[a-z,A-Z,0-9]+$/;
    if (reg.test(childData)) {
      this.setState({ Email: childData });
      this.setState({ isEmailTrue: true });
    } else {
      this.setState({ isEmailTrue: false });
    }
  };
  setInputStatePassword = (childData) => {
    this.getLoadFunction("mv_sign_up_loader2", "visible");
    // regex for password
    // var passRegex =
    //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/i;
    if (
      childData.match(/[a-z]/g) &&
      childData.match(/[A-Z]/g) &&
      childData.match(/[0-9]/g) &&
      childData.match(/[^a-zA-Z\d]/g) &&
      childData.length >= 6
    ) {
      this.setState({ isPassword: true });
      this.setState({ password: childData });
      this.setInputStateConfirmPass(childData);
      console.log("true");
    } else {
      this.setState({ isPassword: false });
      console.log("false");
    }
  };
  setInputStateConfirmPass = (confirmData) => {
    this.getLoadFunction("mv_sign_up_loader3", "visible");
    this.setState({ confirmPassword: confirmData });
    console.log();
    //----------- regex for password---------------
    if (this.state.password === confirmData) {
      this.setState({ ispassConfirm: true });
      this.setState({ confirmPassword: confirmData });
    } else {
      this.setState({ ispassConfirm: false });
    }
  };
  //--------------this will perform data post to server-----------
  handleSubmitSignup() {
    if (
      this.state.isEmailTrue &&
      this.state.isPassword &&
      this.state.ispassConfirm
    ) {
      const data = {
        userEmail: this.state.Email,
        password: this.state.password,
      };
      axios
        .post("http://127.0.0.1:8000/api/signup/", data)
        .then((res) => {
          this.setState({
            alert: true,
            alertContent: res.statusText,
            alertMsg: "success",
          });
          console.log(res);
        })
        .catch((error) => {
          this.setState({
            alert: true,
            alertContent: error.response.data,
            alertMsg: "error",
            isSubmit: this.state.isSubmit + 1,
            isEmailTrue: false,
            isPassword: false,
          });
        });
    }
  }
  googleResponse(response) {}

  render() {
    console.log(this.state.ischeck);
    const img_size = 30;
    const style = { color: "grey", lineHeight: "55px" };
    const extendedStyles = {
      color: "grey",
      position: "absolute",
      left: "75%",
    };
    const mobileViewStyle = {
      color: "grey",
      position: "absolute",
      left: "70%",
    };

    return (
      <>
        {/* two showing alert  we also specify height where we can be placed that alert*/}
        <Alert
          content={{
            alert: this.state.alert,
            msgStatus: this.state.alertMsg,
            msgContent: this.state.alertContent,
          }}
        />
        <div className="form_main" key={this.state.isSubmit}>
          <div
            className="forms_content1"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Input
              name="Username or Email"
              classname="one"
              type="text"
              component={<PersonRoundedIcon style={style} />}
              returnValue={this.setInputStateEmail}
              // ref={(instance) => (this.child = instance)}
            />
            <div className="mv_indicator">
              <div className="mv_loader mv_sign_up_loader1">
                {this.state.isEmailTrue ? (
                  <DoneAllIcon className="mv_crct_icn" fontSize="small" />
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
          <div
            className="forms_content1"
            onClick={() => {
              this.setState({
                alert: true,
                alertContent:
                  "password should min six length and one Uppercase,lowercase,special character and number",
                alertMsg: "info",
              });
            }}
            onBlur={() => {
              this.setState({ alert: false });
            }}
          >
            <Input
              name="Password"
              classname="two"
              type={this.state.showPassword ? "text" : "password"}
              component={<LockOpenRoundedIcon style={style} />}
              returnValue={this.setInputStatePassword}
              // ref={(instance) => (this.child = instance)}
            />
            <IconButton
              aria-label="lock"
              style={extendedStyles}
              onClick={() => {
                this.setState({
                  showPassword: !this.state.showPassword,
                });
              }}
            >
              {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            <div className="mv_indicator">
              <div className="mv_loader mv_sign_up_loader2">
                {this.state.isPassword ? (
                  <DoneAllIcon className="mv_crct_icn" fontSize="small" />
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
          <div className="forms_content1">
            <Input
              name="Confirm password"
              classname="three"
              type={this.state.showConfirmPass ? "text" : "password"}
              component={<LockOpenRoundedIcon style={style} />}
              returnValue={this.setInputStateConfirmPass}
              // ref={(instance) => (this.child = instance)}
            />
            <IconButton
              aria-label="lock"
              style={extendedStyles}
              onClick={() => {
                this.setState({
                  showConfirmPass: !this.state.showConfirmPass,
                });
              }}
            >
              {this.state.showConfirmPass ? <VisibilityOff /> : <Visibility />}
            </IconButton>
            <div className="mv_indicator">
              <div className="mv_loader mv_sign_up_loader3">
                {this.state.ispassConfirm ? (
                  <DoneAllIcon className="mv_crct_icn" fontSize="small" />
                ) : (
                  <Loader />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="termsandcondition">
          <Checkbox
            icon={<CircleUnchecked />}
            checkedIcon={<CircleCheckedFilled />}
            size="small"
            checked={this.state.ischeck}
            onClick={() => {
              this.setState({ ischeck: !this.state.ischeck });
            }}
          />
          <div className="login-main-via">
            <span>I agree with &nbsp;</span>
            <Typography
              className="terms_condition_link"
              variant="inherit"
              component={Link}
              to="/forgot"
            >
              Privacy policy
            </Typography>
          </div>
        </div>

        <div className="button_main">
          <Button
            className="login_btn"
            variant="contained"
            color="primary"
            onClick={this.handleSubmitSignup.bind(this)}
            disabled={
              !(
                this.state.isEmailTrue &&
                this.state.isPassword &&
                this.state.ispassConfirm &&
                this.state.ischeck
              )
            }
          >
            Create my account
          </Button>
        </div>

        <div className="login_bottom_main">
          <p>or via social media</p>
          <div className="social_acc">
            <IconButton aria-label="facebook" className="btn_sa">
              <FacebookLogin
                appId="527430968405690"
                fields="name,email,picture"
                onClick={(res) => console.log(res)}
                callback={(res) => console.log(res)}
                render={(renderProps) => (
                  <img
                    src={fb_icon}
                    alt="facebook"
                    width={img_size}
                    height={img_size}
                    onClick={renderProps.onClick}
                  />
                )}
              />
            </IconButton>
            <IconButton className="btn_sa" aria-label="google">
              {/* <GoogleLogin
                clientId="688835578616-ck9sorb0vsutu23g1ghc6mmu6g6d8cdd.apps.googleusercontent.com"
                buttonText="LOGIN WITH GOOGLE"
                onSuccess={this.responseGoogle}
                onFailure={this.responseGoogle}
              /> */}
              <GoogleLogin
                clientId="688835578616-ck9sorb0vsutu23g1ghc6mmu6g6d8cdd.apps.googleusercontent.com"
                render={(renderProps) => (
                  <img
                    src={g_icon}
                    alt="google"
                    width={img_size}
                    height={img_size}
                    onClick={renderProps.onClick}
                  />
                )}
                onSuccess={(response) => {
                  console.log(response);
                }}
                onFailure={(response) => {
                  console.log(response);
                }}
                cookiePolicy={"single_host_origin"}
              />
            </IconButton>
            <IconButton
              aria-label="linkedIn"
              className="btn_sa"
              component={Link}
              to="/login"
            >
              <LinkedIn
                clientId="86xee9zpkumiiy"
                onFailure={(res) => console.log(res)}
                onSuccess={(res) => console.log(res)}
                redirectUri="http://localhost:3000/linkedin"
                renderElement={({ onClick, disabled }) => (
                  <img
                    src={li_icon}
                    alt="linkedIn"
                    width={img_size + 3}
                    height={img_size + 3}
                    onClick={onClick}
                    disabled={disabled}
                  />
                )}
              />
            </IconButton>
          </div>
          <div className="login_to_signup">
            <span>Already have account ? </span>
            <Typography variant="inherit" component={Link} to="/forgot">
              Sign in
            </Typography>
          </div>
        </div>
      </>
    );
  }
}
export class Signup extends Component {
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
              <div className="top_tag">
                <h2>Hola!</h2>
                <p>Create a new account</p>
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
              <p className="mv-login-logo-head">Informatsy</p>
            </div>
            <div className="mv-login-form-main">
              <div className="mv-login-form-parent">
                <h2 className="mv-login-heading">Create Account</h2>
                {this.state.width < 610 ? <FormMain /> : ""}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Signup;

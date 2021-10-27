<div className="mv-login-form-main">
  <div className="mv-login-form-parent">
    <h2 className="mv-login-heading">Create Account</h2>
    <div className="mv-login-form-body">
      <div className="my-signup-form-input">
        <div
          onBlur={() => this.getLoadFunction("mv_sign_up_loader1", "hidden")}
        >
          <Input
            name="Enter valid email"
            classname="mv-login-form-text"
            type="text"
            component={<PersonRoundedIcon style={style} />}
            returnValue={this.setInputStateEmail}
          />
          <div className="mv_indicator">
            <div className="mv_loader mv_sign_up_loader1">
              {this.state.isEmailTrue ? (
                <DoneAllIcon className="mv_crct_icn" />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
        <div
          style={{ position: "relative" }}
          onClick={() => {
            this.setState({ alert: true });
          }}
          onBlur={() => {
            this.setState({ alert: false });
            this.getLoadFunction("mv_sign_up_loader2", "hidden");
          }}
        >
          <Input
            name="Password"
            type={this.state.showPassword ? "text" : "password"}
            classname="mv-login-form-pass"
            component={<LockOpenRoundedIcon style={style} />}
            returnValue={this.setInputStatePassword}
          />
          <IconButton
            aria-label="lock"
            style={mobileViewStyle}
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
                <DoneAllIcon className="mv_crct_icn" />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>

        <div
          style={{ position: "relative" }}
          onBlur={() => this.getLoadFunction("mv_sign_up_loader2", "hidden")}
        >
          <Input
            name="Confirm password"
            classname="mv-login-form-confirmPass"
            type={this.state.showConfirmPass ? "text" : "password"}
            component={<LockOpenRoundedIcon style={style} />}
            returnValue={this.setInputStateConfirmPass}
          />
          <IconButton
            aria-label="lock"
            style={mobileViewStyle}
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
                <DoneAllIcon className="mv_crct_icn" />
              ) : (
                <Loader />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: "-1em 0 0 1em",
        }}
      >
        <Checkbox
          icon={<CircleUnchecked />}
          checkedIcon={<CircleCheckedFilled />}
        />
        <div className="login-main-via">
          <span className="">I agree with &nbsp;</span>
          <Typography className="login-main-via" component={Link} to="/forgot">
            Privacy policy
          </Typography>
        </div>
      </div>

      <div className="button_main">
        <Button
          className="login_btn"
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
        >
          Create account
        </Button>
      </div>
      <div className="login_bottom_main">
        <p className="login-main-via">or via social media</p>
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
            <img src={g_icon} alt="google" width={img_size} height={img_size} />
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
        <div className="login-main-via">
          <span className="">Don't have an account ?</span>
          <Typography className="login-main-via" component={Link} to="/forgot">
            Sign up
          </Typography>
        </div>
      </div>
    </div>
  </div>
</div>;

import React, { Component } from "react";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import "../css/Input.css";
export class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const style = {
      color: "grey",
      lineHeight: "55px",
      padding: "0px 5px 0px 5px",
    };
    return (
      <div className="input_parent">
        <fieldset className="input_main">
          <PersonRoundedIcon style={style} className="icon" />
          <div
            className="input_lb"
            onClick={() => {
              var ele = document.getElementById("lab");
              var main = document.getElementsByClassName("input_main")[0];
              var input = document.getElementsByClassName("input_cls")[0];
              input.focus();
              main.style.transition = "0.2s ease-in-out";
              var pos = 25;
              var font = 14;
              var id = setInterval(() => {
                if (pos <= -22) {
                  clearInterval(id);
                  ele.style.top = "-22%";
                } else {
                  pos = pos - 5;
                  font = font - 0.2;
                  ele.style.top = pos + "%";
                  ele.style.fontSize = font + "px";
                }
              }, 10);

              ele.style.backgroundColor = "white";
              main.style.border = "2px blue solid";
            }}
          >
            <input
              type="text"
              className="input_cls"
              onBlur={() => {
                var ele = document.getElementById("lab");
                var main = document.getElementsByClassName("input_main")[0];
                var input = document.getElementsByClassName("input_cls")[0];
                if (input.value === "") {
                  var pos = -21;
                  var font = 12;
                  var id = setInterval(() => {
                    if (pos >= 20) {
                      clearInterval(id);
                      ele.style.top = "20%";
                    } else {
                      pos = pos + 5;
                      font = font + 0.2;
                      ele.style.top = pos + "%";
                      ele.style.fontSize = font + "px";
                    }
                  }, 10);
                  ele.style.backgroundColor = "inherit";
                  main.style.border = "2px solid #f0f0f0";
                }
              }}
            />

            <legend className="lab" id="lab">
              Username or Email
            </legend>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Input;

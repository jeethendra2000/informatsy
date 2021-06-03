import React, { Component } from "react";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import "../css/Input.css";
export class Input extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const name = this.props.name;
    const type = this.props.type;
    const img = this.props.component;
    const classname = this.props.classname;
    return (
      <div className={classname}>
        <fieldset className="input_main">
          {img}
          <div
            className="input_lb"
            onClick={() => {
              var ele = document.querySelector("." + classname + " .lab");
              var main = document.querySelector(
                "." + classname + " .input_main"
              );
              var input = document.querySelector(
                "." + classname + " .input_cls"
              );
              input.focus();
              main.style.transition = "0.2s ease-in-out";
              var pos = 25;
              var font = 14;
              var id = setInterval(() => {
                if (pos <= -21) {
                  clearInterval(id);
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
              type={type}
              className="input_cls"
              onBlur={() => {
                var ele = document.querySelector("." + classname + " .lab");
                var main = document.querySelector(
                  "." + classname + " .input_main"
                );
                var input = document.querySelector(
                  "." + classname + " .input_cls"
                );
                if (input.value === "") {
                  var pos = -21;
                  var font = 12;
                  var id = setInterval(() => {
                    if (pos >= 20) {
                      clearInterval(id);
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

            <legend className="lab">{name}</legend>
          </div>
        </fieldset>
      </div>
    );
  }
}

export default Input;

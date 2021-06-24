import React, { Component } from "react";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import "../css/Input.css";
export class Input extends Component {
  constructor(props) {
    super(props);
  }
  returnValue = (e) => {
    this.props.returnValue(e.target.value);
  };
  // clear() {
  //   this.main.value = "";
  // }
  //to return values to the parent

  render() {
    const name = this.props.name;
    const type = this.props.type;
    const img = this.props.component;
    const classname = this.props.classname;
    return (
      <div className="input_component_main">
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
                ele.style.color = "blue";
              }}
            >
              <input
                type={type}
                ref={(ref) => (this.main = ref)}
                className="input_cls"
                onKeyUp={this.returnValue}
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
                    ele.style.color = "gray";
                  }
                }}
              />

              <legend className="lab">{name}</legend>
            </div>
          </fieldset>
        </div>
      </div>
    );
  }
}

export default Input;

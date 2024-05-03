import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { ACCESS_TOKEN } from "auth/constants";

class OAuth2RedirectHandler extends Component {
  getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");

    var results = regex.exec(this.props.location.search);
    console.log(this.props.location.search);
    return results === null
      ? ""
      : decodeURIComponent(results[1].replace(/\+/g, " "));
  }

  render() {
    const token = this.getUrlParameter("token");
    const error = this.getUrlParameter("error");

    console.log("Token:", token);
    console.log("Error:", error);

    if (token) {
      // Lưu token vào localStorage
      localStorage.setItem(ACCESS_TOKEN, token);
      // Chuyển hướng đến trang /user/default
      return (
        <Redirect
          to={{
            pathname: "/user/default",
            state: { from: this.props.location },
          }}
        />
      );
    } else {
      // Xử lý khi có lỗi xảy ra
      return (
        <Redirect
          to={{
            pathname: "/auth/signin",
            state: {
              from: this.props.location,
              error: error,
            },
          }}
        />
      );
    }
  }
}

export default OAuth2RedirectHandler;

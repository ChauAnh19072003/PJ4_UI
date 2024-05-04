import React, { useEffect } from "react";

const OAuth2RedirectHandler = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jwtResponseJson = urlParams.get("jwtResponse");
    if (jwtResponseJson) {
      const jwtResponse = JSON.parse(decodeURIComponent(jwtResponseJson));
      localStorage.setItem("user", JSON.stringify(jwtResponse));
      window.location.href = "/user/default";
    }
  }, []);

  return (
    <div>
      {/* Add any loading indicator or message if needed */}
      Loading...
    </div>
  );
};

export default OAuth2RedirectHandler;

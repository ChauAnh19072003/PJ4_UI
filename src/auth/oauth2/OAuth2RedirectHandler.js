import { Center, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const OAuth2RedirectHandler = () => {
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const jwtResponseJson = urlParams.get("jwtResponse");
    if (jwtResponseJson) {
      const jwtResponse = JSON.parse(decodeURIComponent(jwtResponseJson));
      localStorage.setItem("user", JSON.stringify(jwtResponse));
      history.push("/user/default");
    } else {
      const errorParam = urlParams.get("error");
      if (errorParam) {
        setError(errorParam);
      } else {
        setError("Unknown error occurred");
      }
    }
  }, [history]);

  return (
    <>
      <Center p={10}>
        <Spinner />
      </Center>
    </>
  );
};

export default OAuth2RedirectHandler;

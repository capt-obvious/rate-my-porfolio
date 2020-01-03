import React, { Component, useState, useEffect } from "react";

import axios from "axios";

const Register = () => {
  const [creds, setCreds] = React.useState({});

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    });
  };
};

const handleSubmit = (e) => {
  e.preventDefault(); 
  axios.
}

// rectangular card, username, pic, text activity or text comment

import React from "react";

const Post = props => {
  return (
    <div>
      <div className="textContainer">
        <img src="" />
        <p class="username">{props.username}</p>
        <p>{props.comment}</p>
      </div>
      <p className="date">{props.date}</p>
    </div>
  );
};

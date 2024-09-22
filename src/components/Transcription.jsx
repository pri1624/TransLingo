import React from "react";

const Transcription = ({ textElement }) => {
  return(
  <div>
    {typeof textElement === "string" ? textElement : ""}
  </div>);
};

export default Transcription;

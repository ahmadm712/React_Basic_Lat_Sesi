import React from "react";

function Notification({ status }) {
  switch (status) {
    case "warning":
      return <p>Warning Atuh Bro</p>;
    case "succes":
      return <p>Sukses Atuh Bro</p>;
    case "error":
      return <p>Error Atuh Bro</p>;
    default:
      return <p>Aman Atuh Bro</p>;
  }
}

export default Notification;

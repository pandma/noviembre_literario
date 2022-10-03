import React from "react";
import Link from "next/link";
import { MDBFooter } from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter
      className="text-center text-white"
      style={{ backgroundColor: "#f1f1f1", marginTop: "2%" }}
    >
      <div
        className="text-center text-dark p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Develop By:
        <a
          className="text-dark"
          href="https://www.linkedin.com/in/pablo-andreu-martin/"
        >
          <span> Pandma ❤</span>
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;

import React from "react";
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer(){
  const year = new Date().getFullYear();
  return (<div className="footer">Copyright <CopyrightIcon fontSize="small"/> {year}</div>);
}

export default Footer;

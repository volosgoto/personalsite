
// Convert Contact to class component


import React from 'react'

export default function Contact(props) {


  // function navbarCollapse() {
  //   var x = document.getElementById("navbar");
  //   if (x.className.indexOf("w3-show") == -1) {
  //       x.className += " w3-show";
  //   } else { 
  //       x.className = x.className.replace(" w3-show", "");
  //   }
  // }






  return (
    <div className="container">
      <div className="style-container">
        <div className="style-box-1"><h3>ANDRII VOLOSOVYCH</h3></div>
        <div className="style-box-1">
          <p id="contacts">Phone: +38 (063) 871-51-51</p>
          {/* <a onClick="{location.href = 'mailto:office@synproeng.com'}" href="#">E-mail: volosovich@i.ua</a> */}
          <p></p>
          <a href="https://join.skype.com/invite/bXprd7VcNmnf">Skype: volosovich82</a>
          <p>Address: Kyiv, Ukraine</p>
          <p>Phone: +38 (063) 871-51-51</p>

        </div>
      </div>

      <div className="style-box-1">

        <iframe id="google_map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5082.447956365541!2d30.3780815!3d50.4369286!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cb87efca634b%3A0xe934b78f305f2489!2zNTDCsDI2JzExLjAiTiAzMMKwMjInNTcuMCJF!5e0!3m2!1sru!2sua!4v1540384556782" width="595" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
      </div>

    </div>
  )
}

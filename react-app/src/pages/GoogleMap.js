import React from "react";

export default function GoofleMap() {
  return (
    <div className='w3-container'>
      <iframe
        title='GoogleMap'
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3801.3577644770653!2d30.380068290875826!3d50.43632703173621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1550585068822"
        width="100%"
        height="450"
        frameBorder="0"
        // style="border:0"
        allowFullScreen
      />
    </div>
  );
}

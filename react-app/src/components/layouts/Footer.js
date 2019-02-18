import React from 'react'

export default function Footer() {
  return (
    <footer>
      <div className="w3-black footer-container">
        <div className="footer-box">
          <p>
            <a className="w3-button w3-center" href="https://github.com/volosgoto?tab=repositories" target="_blank">
              <i className="fab fa-github fa-lg"></i>&nbsp;More&nbsp;app&nbsp;on&nbsp;GitHub</a>
          </p>
        </div>
        <div className="footer-box copywrite">
          <p>Design &copy; 2018</p>
        </div>
      </div>
    </footer>
  )
}

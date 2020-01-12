import React from "react";
import ContactCard from "./ContactCard";

export default function Resume() {
  return (
    <div className="w3-container">
      <div className="container resume-bg w3-card-4 w3-margin-top">
        <div className="w3-padding-16">
          <ContactCard />
        </div>

        <div className="style-box-1">
          <h3>Objective</h3>
        </div>
        <div className="style-box-2">
          <ul>
            <li>Front-End developer</li>
          </ul>
        </div>
        <div className="style-box-1">
          <h3>Summary Skills</h3>
        </div>
        <div className="style-box-2">
          <p className="padding-left">
            <i>Professional skills:</i>
          </p>
          <ul>
            <li>
              Experience in HTML, CSS, Javascript, JQuery, React, Redux, PHP,
              Yii 2, WordPress, Magento
            </li>
            <li>Validation and verification of technical documentation</li>
            <li>Understanding of Software Development Life Cycle</li>
            <li>
              Experience in different types of testing: Black box, Gray box,
              Usability, Functional, Ad-hoc, Regression, GUI testing, Smoke.
              Testing of Web­based software and Windows applications
            </li>
            <li>Skills in Test Cases writing and Bug Reporting</li>
            <li>Experience in bug tracking using Jira</li>
            <li>
              Installation and configuration of operating systems, virtual
              machines, drivers, etc.
            </li>
            <li>Scrum/Agile experience</li>
            <li>
              Strong team player with ability to work productively in a team as
              well as individually
            </li>
            <li>Focused on the result</li>
            <li>
              Proven organizational, analytical, and communication skills
              (verbal and written)
            </li>
            <li>
              Excellent time management skills, strong work ethic and the
              ability to take on multiple roles to be successful
            </li>
            <li>
              bility to learn new technologies and challenging concepts quickly
              and implement them
            </li>
            <li>
              Problem solving, customer issues satisfaction. Motivated
              to develop yourself and solve complex tasks
            </li>
          </ul>
          <p className="padding-left">
            <i>Technical skills:</i>
          </p>
          <ul>
            <li>
              Programming: JavaScript, JQuery, React, Redux, Bootstrap, W3.CSS
              framework, React, JQuery, PHP 7, OOP, Yii 2, Webpack, NPM, Yarn,
              Composer, SQL, HTML, CSS(Sass, FlexBox, Responsive Design), Git
            </li>
            <li>RDBMS: MySQL, phpMyAdmin</li>
            <li>Test Automation: PHPUnit, Chai, Mocha</li>
            <li>Bug Tracking: Jira </li>
            <li>Web Testing Tools: Firebug, Chrome DevTools </li>
            <li>
              Other: Install and configure Apache web-server, Composer, Git,
              PHPBB, SMF, Joomla CMS, WordPress, MS Office, PhotoShop
            </li>
            <li>Platforms: Mac OS, Linux Ubuntu, Windows</li>
          </ul>
          <p className="padding-left">
            <i>Languages:</i>
          </p>
          <ul>
            <li>English – upper-intermediate</li>
            <li>Russian – native</li>
            <li>Ukrainian – native</li>
          </ul>
        </div>
        <div className="style-box-1">
          <h3>Work Experience</h3>
        </div>
        <div className="style-box-2">
          <ul>
            <li>
              <p>
                June 2019 - present. Skynix LLC, Front-end developer{" "}
                <a href="https://skynix.co/">Skynix LLC</a>
              </p>
            </li>

            <li>
              <p>
                March 2018, Frelanser{" "}
                <a href="https://www.upwork.com/o/profiles/users/_~01eae4a4ffe0236259/">
                  - Upwork profile
                </a>
              </p>
            </li>

            <li>
              <p>
                GitHub profile{" "}
                <a href="https://github.com/volosgoto">
                  - github.com/volosgoto
                </a>
              </p>
            </li>
            <li>
              <p>
                Own MVC Framework{" "}
                <a href="https://github.com/volosgoto/myphpcms.loc">
                  - github.com/volosgoto/myphpcms.loc
                </a>
              </p>
            </li>
          </ul>
        </div>
        <div className="style-box-1">
          <h3>Education</h3>
        </div>
        <div className="style-box-2">
          <ul>
            <li>
              2018. Fullstack develoder. PHP Academy, Kyiv Ukraine
              (https://php-academy.kiev.ua)
            </li>
            <li>
              2015. Software QA Engineer, Software Testing Course. Center
              "Contact" NTUU "KPI". Kyiv, Ukraine
            </li>
            <li>
              2015. Software Testers School. Portnov Computer School, online
              courses
            </li>
            <li>
              2005. National Aviation University. Technical operation of
              transport, refueling, storage and quality control of fuels and
              lubricants. Technology of fuel production, Kyiv, Ukraine
            </li>
          </ul>
        </div>
        <div className="style-box-1">
          <h3>Trainings</h3>
        </div>
        <div className="style-box-2">
          <ul>
            <li>
              2002. National Aviation University, Operator of gas station. Kyiv,
              Ukraine
            </li>
          </ul>
        </div>
        <div className="style-box-1">
          <h3>Other</h3>
        </div>
        <div className="style-box-2">
          <ul>
            <li>Married, child, driver license</li>
            <br />
          </ul>
        </div>
      </div>
    </div>
  );
}

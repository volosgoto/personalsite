import React from "react";
import Mailto from "react-protected-mailto";

export default function Resume() {
  return (
    <div className="container">
      <div className="style-box-1">
        <h3>ANDRII VOLOSOVYCH</h3>
      </div>
      <div className="style-box-1">
        <p id="contacts">Phone: +38 (063) 871-51-51</p>

        <p>
          Email:{" "}
          <Mailto
            email="volosovich@i.ua"
            headers={
              ({ subject: "Question from Volosovich A. personal website" },
                { cc: "" })
            }
          />
        </p>

        <a href="https://join.skype.com/invite/bXprd7VcNmnf" target="_blank">
          <i className="fab fa-skype"></i> volosovich82
          </a>
        <p>Address: Kyiv, Ukraine</p>
        <p>Phone: +38 (063) 871-51-51</p>
      </div>
      <div className="style-box-1">
        <h3>Objective</h3>
      </div>
      <div className="style-box-2">
        <ul>
          <li>
            <i className="icon-ok" />
            WEB developer
            </li>
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
            <i className="icon-ok" />
            Experience in PHP, Yii 2.
            </li>
          <li>
            <i className="icon-ok" />
            Validation and verification of technical documentation
            </li>
          <li>
            <i className="icon-ok" />
            Experience in different types of testing: Black box, Gray box,
            Usability, Functional, Ad-hoc, Regression, GUI testing, Smoke.
            Testing of Web­based software and Windows applications
            </li>
          <li>
            <i className="icon-ok" />
            Skills in Test Cases writing and Bug Reporting
            </li>
          <li>
            <i className="icon-ok" />
            Experience in bug tracking using most popular Bug Tracking Systems
            </li>
          <li>
            <i className="icon-ok" />
            Understanding of Software Development Life Cycle
            </li>
          <li>
            <i className="icon-ok" />
            Installation and configuration of operating systems, virtual
            machines, drivers, etc.
            </li>
          <li>
            <i className="icon-ok" />
            Scrum/Agile experience
            </li>
          <li>
            <i className="icon-ok" />
            Strong team player with ability to work productively in a team as
            well as individually
            </li>
          <li>
            <i className="icon-ok" />
            Focused on the result
            </li>
          <li>
            <i className="icon-ok" />
            Proven organizational, analytical, and communication skills
            (verbal and written)
            </li>
          <li>
            <i className="icon-ok" />
            Excellent time management skills, strong work ethic and the
            ability to take on multiple roles to be successful
            </li>
          <li>
            <i className="icon-ok" />
            bility to learn new technologies and challenging concepts quickly
            and implement them
            </li>
          <li>
            <i className="icon-ok" />
            Problem solving, customer issues satisfaction. Motivated
            to develop yourself and solve complex tasks.
            </li>
        </ul>
        <p className="padding-left">
          <i>Technical skills:</i>
        </p>
        <ul>
          <li>
            <i className="icon-ok" />
            Platforms: Ubuntu, Windows
            </li>
          <li>
            <i className="icon-ok" />
            Browsers: Chrome, Firefox, Internet Explorer, Safari, Opera
            </li>
          <li>
            <i className="icon-ok" />
            Programming: JavaScript, React, JQuery, PHP 7, OOP, Yii 2,
            Webpack, NPM, Composer, SQL, HTML, CSS, Git
            </li>
          <li>
            <i className="icon-ok" />
            RDBMS: MySQL, phpMyAdmin
            </li>
          <li>
            <i className="icon-ok" />
            Test Automation: PHPUnit, Chai, Mocha
            </li>
          <li>
            <i className="icon-ok" />
            Bug Tracking: Jira{" "}
          </li>
          <li>
            <i className="icon-ok" />
            Web Testing Tools: Firebug, Chrome DevTools{" "}
          </li>
          <li>
            <i className="icon-ok" />
            Other: Install and configure Apache web-server, Git, Adobe
            Dreamweaver, PHPBB, SMF, Joomla CMS, WordPress, MS Office,
            PhotoShop, Power Point, MatchCad, AutoCAD, Aspen HYSYS
            </li>
        </ul>
        <p className="padding-left">
          <i>Languages:</i>
        </p>
        <ul>
          <li>
            <i className="icon-ok" />
            English – upper-intermediate
            </li>
          <li>
            <i className="icon-ok" />
            Russian – native
            </li>
          <li>
            <i className="icon-ok" />
            Ukrainian – native
            </li>
        </ul>
      </div>
      <div className="style-box-1">
        <h3>Experience</h3>
      </div>
      <div className="style-box-2">
        <ul>
          <li>
            <i className="icon-ok" />
            <a href="https://github.com/volosgoto">github.com/volosgoto</a>
            <p>GitHub profile</p>
          </li>
          <li>
            <i className="icon-ok" />
            <a href="http://infokus.org.ua">infokus.org.ua</a>
            <p>Yii2, framework based online shop</p>
          </li>
          <li>
            <i className="icon-ok" />
            <a href="http://blog.infokus.org.ua">blog.infokus.org.ua</a>
            <p>Yii2, framework based blog</p>
          </li>
          <li>
            <i className="icon-ok" />
            <a href="https://github.com/volosgoto/myphpcms.loc">
              github.com/volosgoto/myphpcms.loc
              </a>
            <p>Own MVC Framework</p>
          </li>
          <li>
            <i className="icon-ok" />
            Resume Builder project
            </li>
          <ul>
            <li>
              Performed manual black box testing from Beta­version to the
              final release
              </li>
            <li>
              Performed validation and verification of the specification
              </li>
            <li>
              Wrote high­quality test cases based on technical documentation
              </li>
            <li>Executed test cases and reported found bugs via Jira</li>
            <li>
              Tested software in different environment using a Virtual Machine
              </li>
            <li>
              Validated application’s GUI for compliance with Usability
              guidelines published by Microsoft
              </li>
            <li>
              Participated in cross­platform (Windows 8/7/Vista/XP) testing
              </li>
            <li>
              Executed Ad-hoc and exploratory test procedures at all the
              stages of SDLC
              </li>
          </ul>

          <li>
            <i className="icon-ok" />
            Energy Telecom project
            </li>
          <ul>
            <li>
              Tested web­based application created for collecting data about
              contact information and telecommunication/energy services needs
              of a person (household)
              </li>
            <li>
              Validated and verified a technical documentation for
              contradictions, ambiguities and incompleteness
              </li>
            <li>
              Developed test cases for functional testing of the application
              (Black box)
              </li>
            <li>
              Validated application’s GUI for compliance with Usability
              guidelines published by US Department of Health and Human
              Services
              </li>
            <li>
              Researched software anomalies and defects to minimize number of
              steps to reproduce the problem.
              </li>
            <li>
              Wrote easy­to­reproduce bug reports and reported them via Jira
              </li>
            <li>
              Researched the saving of user data in the emailed sales lead
              </li>
            <li>
              Made cross­browser (Chrome, MSIE, Firefox, Opera, Safari)
              testing
              </li>
          </ul>
          <li>
            <i className="icon-ok" />
            Web testing
            </li>
          <ul>
            <li>http://knifoman.com</li>
            <li>http://testpo2.cleardesign.com.ua</li>
            <li>http://biz-gid.ru</li>
          </ul>
        </ul>
      </div>
      <div className="style-box-1">
        <h3>Education</h3>
      </div>
      <div className="style-box-2">
        <ul>
          <li>
            <i className="icon-ok" />
            2018. Fullstack develoder. PHP Academy, Kyiv Ukraine
            (https://php-academy.kiev.ua)
            </li>
          <li>
            <i className="icon-ok" />
            2015. Software QA Engineer, Software Testing Course. Center
            "Contact" NTUU "KPI". Kyiv, Ukraine
            </li>
          <li>
            <i className="icon-ok" />
            2015. Software Testers School. Portnov Computer School, online
            courses
            </li>
          <li>
            <i className="icon-ok" />
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
            <i className="icon-ok" />
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
          <li>
            <i className="icon-ok" />
            Married, child, driver license
            </li>
        </ul>
      </div>
    </div>
  );
}

<template>
  <div class="main-container">
    <div class="left-container">
      <div class="photo-container">
        <img
          class="photo"
          src="../public/miniMe2.jpg"
          alt="Tamas Horvath">
      </div>
      <div class="name">Tamás Horváth</div>
      <div class="date-of-birth">22 December 1984</div>
      <div class="personal-data">
        <div class="pers-data-header">Contact</div>
        <hr class="hr-line">
        <div class="data-container">
          <div class="data">
            <span class="key"><i class="fa fa-envelope"></i></span><span>horvathtamas22@gmail.com</span>
          </div>
          <div class="data">
            <span class="key"><i class="fa fa-phone"></i></span><span>+36 30 395 7279</span>
          </div>
          <div class="data">
            <span class="key"><i class="fa fa-github"></i></span><span>github.com/tamasHorvath22</span>
          </div>
          <div class="data">
            <span class="key"><i class="fa fa-linkedin"></i></span><span>linkedin.com/in/tamás-horváth-00505714b</span>
          </div>
        </div>
      </div>
      <div class="skills-container">
        <div class="pers-data-header">Experience</div>
        <hr class="hr-line">
        <div class="skills-columns">
          <div class="skills set-center">
            <div class="more-less">More</div>
            <div>Javascript</div>
            <div>Typescript</div>
            <div>HTML5</div>
            <div>CSS</div>
            <div>Angular 6+</div>
            <div>Vue.js</div>
            <div>Git</div>
            <div>Java 8</div>
          </div>
          <div class="skills set-center">
            <div class="more-less">Less</div>
            <div>Python</div>
            <div>Spring boot</div>
            <div>SCSS</div>
            <div>Node js</div>
            <div>SQL</div>
          </div>
        </div>
      </div>
      <div class="skills-container">
        <div class="pers-data-header">Languages</div>
        <hr class="hr-line">
        <div class="skills">

          <div class="lang-item">
            <img src="../public/united-kingdom.png" class="flag">Engilsh (upper-intermediate/actice)
          </div>
          <div class="lang-item">
            <img src="../public/germany.png" class="flag">German (basic/passive)
          </div>
        </div>
      </div>
      <div class="skills-container">
        <div class="pers-data-header">Hobbies</div>
        <hr class="hr-line">
        <ul>
          <li>Play the bass gitar</li>
          <li>Travel, discover other cultures, meet interesting people</li>
        </ul>
      </div>
    </div>
    <div class="right-container">
      <div class="education-container">
        <div class="header">Education</div>
        <hr class="hr-line-right">
        <div class="edu-inner-cont">
          <div class="edu-years">2017 - 2018</div>
          <div class="school">Codecool - sofware developer</div>
        </div>
        <div class="edu-inner-cont">
          <div class="edu-years">2003 - 2006</div>
          <div class="school">Pannon University - environmental science (not finished)</div>
        </div>
        <div class="edu-inner-cont">
          <div class="edu-years">1997 - 2003</div>
          <div class="school">Kölcsey Ferenc High School Zalaegerszeg - graduation</div>
        </div>
      </div>

      <div class="prof-container">
        <div class="header">Professional experience</div>
        <hr class="hr-line-right">
        <div class="company">Company: ITware Kft. (2018 august - now)</div>
        <ul>
          <li>
            <div class="exp-title">SQMS (2019 September – now, outsorced to Telekom)</div>
            <div class="m-b-5">SQMS is an inner application for Telekom. It is for tracking all services.</div>
            <div class="exp-task-cont">
              <div class="exp-title">Tasks: </div>
              <div>Frontend development</div>
            </div>
            <div class="exp-task-cont">
              <div class="bold exp-title">Tech stack: </div>
              <div>Angular 7, Typescript, HTML5, SCSS , MsSQL, Git</div>
            </div>
          </li>
          <li>
            <div class="exp-title">Smart Commerce (2019 May – 2019 September)</div>
            <div class="m-b-5">This is a webshop for FLEETware fleet tracking service.</div>
            <div class="exp-task-cont">
              <div class="exp-title">Tasks: </div>
              <div>Frontend development</div>
            </div>
            <div class="exp-task-cont">
              <div class="bold exp-title">Tech stack: </div>
              <div>Vue JS, JavaScript, Vuex, HTML5, SCSS, Git</div>
            </div>
          </li>
          <li>
            <div class="exp-title">FLEETware (2018 December – 2019 May)</div>
            <div class="m-b-5">FLEETware is a fleet tracking application, it collects live
                information about the vehicles.</div>
            <div class="exp-task-cont">
              <div class="exp-title">Tasks: </div>
              <div>Plan and build the frontend of statistics feature for
                  the app. Beside this feature I had several minor tasks,
                  including some backend development.</div>
            </div>
            <div class="exp-task-cont">
              <div class="bold exp-title">Tech stack: </div>
              <div>Angular 6, RxJs, chart.js, Java 8, HTML5, SCSS, Git</div>
            </div>
          </li>
          <li>
              <div class="exp-title">Lambda project (2018 Aug – 2018 Dec)</div>
              <div class="m-b-5">A Credit Management system to enhance and automate the
                  current workflow of the company with Profit & Bisnode
                  integration</div>
              <div class="exp-task-cont">
                <div class="exp-title">Tasks: </div>
                <div>Full-stack development</div>
              </div>
              <div class="exp-task-cont">
                <div class="bold exp-title">Tech stack: </div>
                <div>Java EE, Angular 6, RxJS, Angular
                    Material, HTML5, SCSS, MySql, Flyway, Git</div>
              </div>
            </li>
        </ul>

        <div class="company">Company: Codecool developer school (2017 september - 2018 august)</div>
        <div class="codecool-cont">
          <div class="exp-title">Several studying projects:</div>
          <div class="m-b-5">Mostly web applications. (webshops, task manager, question-answer site,
              online booking system)</div>
          <div class="exp-task-cont">
            <div class="exp-title">Tasks: </div>
            <div>Full-stack development</div>
          </div>
          <div class="exp-task-cont">
            <div class="bold">Tech stack: </div>
            <div>HTML, CSS, JavaScript, Java8, Spring
                Boot, Thymeleaf, REST API, JPA, Git</div>
          </div>
        </div>

        <div class="company">Company: Oakwood Distribution LTD Bolton (2012 august - 2013 august)</div>
        <div class="codecool-cont">
          <div class="exp-task-cont">
            <div class="exp-title">Tasks:</div>
            <div>forklift truck driving, different warehouse tasks</div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
.main-container {
    display: flex;
}
.left-container {
    background-color: rgb(221, 221, 221);
    width: 250px;
}
.right-container {
    background-color: rgb(245, 245, 245);
    width: calc(100% - 360px);
    padding: 20px;
    font-size: 10pt;
}
.hr-line {
    margin: auto;
    width: 95%;
    margin-bottom: 5px;
}
.hr-line-right {
    margin: auto;
    width: 100%;
    margin-bottom: 5px;
}
.photo {
    width: 160px;
    height: 160px;
    border-radius: 50%;
}
.photo-container {
    padding: 20px 45px;
}
.name {
    font-weight: bold;
    font-size: 22pt;
    color: black;
    text-align: center;
}
.personal-data {
    margin-top: 30px;
    color: rgb(30, 4, 51);
}
.pers-data-header {
    text-align: center;
    /* color: white; */
    font-size: 20pt;
    margin-bottom: 10px;
}
.data-container {
    margin: 0px 0px 20px 15px;
    /* color: white; */
    font-size: 10pt;
}
.data {
    padding-bottom: 5px;
    display: flex;
}
.key {
    width: 20px;
}
.linkedin {
    display: block;
}
.linkedin-cont {
    text-align: left;
}
.edu-inner-cont {
    display: flex;
}
.edu-years {
    width: 100px;
}
.header {
    font-size: 14pt;
    font-weight: bold;
    margin-bottom: 10px;
    color: blue;
}
.education-container {
    margin-bottom: 20px;
}
.exp-title{
    font-weight: bold;
    margin-bottom: 5px;
    margin-right: 5px;
}
.exp-task-cont {
    display: flex;
}
.bold {
    font-weight: bold;
}
li {
    margin-bottom: 10px;
}
.codecool-cont {
    margin: 10px 0px 10px 38px;
}
.school {
    margin-bottom: 5px;
}
.skills-columns {
    margin-left: 15px;
    display: flex;
}
.more-less {
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
    font-size: 14pt;
}
.skills {
    width: 50%;
}
.skills-container {
    color: rgb(30, 4, 51);
}
.company {
    font-size: 14pt;
}
.m-b-5 {
    margin-bottom: 5px;
}
.skills-container {
    margin-top: 20px;
}
.date-of-birth {
    text-align: center;
}
.flag {
    width: 20px;
    height: 20px;
    margin-right: 10px;
}
.lang-item {
    display: flex;
    align-items: center;
    margin-left: 15px;
}
.set-center {
    text-align: center;
}
</style>

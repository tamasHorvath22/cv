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
          <div v-for="contact of contacts" :key="contact.icon" class="data">
            <span class="key"><i :class="contact.icon"></i></span><span>{{ contact.label }}</span>
          </div>
          <div class="data">
            <span class="key"><img src="../public/hackerrank.svg" class="hackerrank"></span><span>hackerrank.com/horvathtamas22</span>
          </div>
        </div>
      </div>
      <div class="skills-container">
        <div class="pers-data-header">Experience</div>
        <hr class="hr-line">
        <div class="skills-columns">
          <div class="skills set-center left-skills">
            <div class="more-less">More</div>
            <div v-for="skill of moreSkills" :key="skill">{{ skill }}</div>
          </div>
          <div class="skills set-center">
            <div class="more-less">Less</div>
            <div v-for="skill of lessSkills" :key="skill">{{ skill }}</div>
          </div>
        </div>
      </div>
      <div class="skills-container">
        <div class="pers-data-header">Languages</div>
        <hr class="hr-line">
        <div class="skills">

          <div class="lang-item">
            <img src="../public/united-kingdom.png" class="flag">English (upper-intermediate/active)
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
        <div v-for="school of education" :key="school.year" class="edu-inner-cont">
          <div class="edu-years">{{ school.year }}</div>
          <div class="school">{{ school.label }}</div>
        </div>
      </div>

      <div class="prof-container">
        <div class="header">Professional experience</div>
        <hr class="hr-line-right">

        <div class="legend">
          <div class="legend-element">
            <div class="legend-color company-color"></div>
            <div>Full-time employment</div>
          </div>
          <div class="legend-element">
            <div class="legend-color freelance-color"></div>
            <div>Freelancer projects</div>
          </div>
          <div class="legend-element">
            <div class="legend-color pet-color"></div>
            <div>Pet projects</div>
          </div>
        </div>

        <div v-for="company of companies" :key="company.name" class="company-container" :class="company.colorClass">
          <div class="company">{{ company.name }}</div>
          <ul>
            <li v-for="project of company.projects" :key="project.title">
              <div class="exp-title">{{ project.title }}</div>
              <div class="m-b-5">{{ project.description }}</div>
              <div class="exp-task-cont">
                <div class="exp-title">Tasks: </div>
                <div>{{ project.tasks }}</div>
              </div>
              <div class="exp-task-cont">
                <div class="bold exp-title">Tech stack: </div>
                <div>{{ project.techStack }}</div>
              </div>
              <div v-if="company.footballFighter" class="football-fighter">
                <div class="bold exp-title">Project URL:</div>
                <div>{{ company.footballFighter }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      contacts: [
        {
          icon: 'fa fa-envelope',
          label: 'horvathtamas22@gmail.com'
        },
        {
          icon: 'fa fa-phone',
          label: '+36 20 489 7554'
        },
        {
          icon: 'fa fa-github',
          label: 'github.com/tamasHorvath22'
        },
        {
          icon: 'fa fa-linkedin',
          label: 'linkedin.com/in/tamás-horváth-00505714b'
        }
      ],
      moreSkills: [
        'Javascript',
        'Typescript',
        'Angular',
        'RxJs',
        'NgRx',
        'Node js',
        'HTML5',
        'CSS',
        'SCSS',
        'Vue.js',
        'Git',
        'MongoDB'
      ],
      lessSkills: [
        'Python',
        'Java',
        'Jira',
        'Spring boot',
        'SQL',
        'Azure devops'
      ],
      education: [
        {
          year: '2017 - 2018',
          label: 'Codecool - fullstack software developer'
        },
        {
          year: '2003 - 2006',
          label: 'Pannon University - environmental science (not finished)'
        },
        {
          year: '1997 - 2003',
          label: 'Kölcsey Ferenc High School Zalaegerszeg - graduation'
        }
      ],
      companies: [
        {
          name: 'Company: Betsson (2022 april - now)',
          projects: [
            {
              title: 'Sportsbook (2020 june - now)',
              description: 'I was part of the sportsbook team, I performed tasks connected to the online sportsbook system, such as smaller fixes, and building new features also.',
              tasks: 'Frontend development',
              techStack: 'Angular 13, Typescript, RxJs, NgRx, HTML5, SCSS, Git'
            }
          ],
          colorClass: 'company-color'
        },
        {
          name: 'Freelancer at Contum Kft.',
          projects: [
            {
              title: 'E-sign',
              description: 'This is a document e-sign application.',
              tasks: 'Frontend development',
              techStack: 'Angular 8, rxjs, HTML5, SCSS, Git, Rest API'
            },
            {
              title: 'ontum portal',
              description: 'This is the main application of Contum Kft. This handles the user authentication, and allows the user to select application.',
              tasks: 'Frontend development',
              techStack: 'Quasar, Vue js 2, HTML5, SCSS, Git, Rest API'
            }
          ],
          colorClass: 'freelance-color'
        },
        {
          name: 'Freelancer at Greenformatics Kft.',
          projects: [
            {
              title: 'E-sign',
              description: 'This is a document e-sign application.',
              tasks: 'Frontend development',
              techStack: 'Angular 8, rxjs, HTML5, SCSS, Git, Rest API'
            },
            {
              title: 'Budapest Bank BUPA (2021 june  - 2021 july)',
              description: 'This application is a blog page, it displays articles.',
              tasks: 'Frontend development, my task was to create the connetion between the frontend and the backend',
              techStack: 'Angular 12, HTML5, SCSS, Git'
            }
          ],
          colorClass: 'freelance-color'
        },
        {
          name: 'Company: EPAM (2021 april - now)',
          projects: [
            {
              title: 'Opportunity Accessor (2020 june - now)',
              description: 'This is a geological tool for oil companies. Based on drilling data, the app helps to find the best places for producing oil and gas.',
              tasks: 'Frontend development',
              techStack: 'Angular 11, RxJs, Typescript, HTML5, SCSS, Git, Azrure Devops'
            }
          ],
          colorClass: 'company-color'
        },
        {
          name: 'Freelancer independent project',
          projects: [
            {
              title: 'Caerusia (2020 november  - 2021 april)',
              description: 'This is a gamification tool for an english teacher, with role play thematics.',
              tasks: 'Architetcure planning, Backend development, Frontend development, Deployment',
              techStack: 'Node js, Nest js, Angular 13, RxJs, NgRx, MongoDB, Angular material, HTML5, SCSS, Git, Auth0'
            }
          ],
          colorClass: 'freelance-color'
        },
        {
          name: 'Pet project',
          projects: [
            {
              title: 'NFL game - Football Fighter (2020 june  - 2020 august)',
              description: 'This is a game, where the users can play with their friends. They can guess the winner of a game, they collect points, and at the end of the season the user who collected the most points, wins.',
              tasks: 'Architetcure planning, Backend development, Frontend development, Deployment',
              techStack: 'Node js, Typescript, typedi, Angular, Rxjs, NgRx, Angular material, MongoDB, Auth0 google authentication, HTML5, SCSS, Git, NFL data API integration'
            }
          ],
          colorClass: 'pet-color',
          footballFighter: 'https://football-fighter.herokuapp.com'
        },
        {
          name: 'Company: Accenture (2020 february - 2021 march)',
          projects: [
            {
              title: 'Qatar airways Discovery (2020 august - 2021 march)',
              description: 'Discovery provides up-to-date information about destinations COVID situation and regulations, by this helps the passangers to select the safest destination',
              tasks: 'Architetcure planning, Frontend development',
              techStack: 'Angular 8, RxJs, Angular material Typescript, HTML5, SCSS, Git, Azrure Devops'
            },
            {
              title: 'Kunden focus (2020 march - 2020 july)',
              description: 'This application was built for customers to help them handling tax cases',
              tasks: 'Frontend development',
              techStack: 'Angular 8, RxJs, Angular material Typescript, HTML5, SCSS, Git'
            }
          ],
          colorClass: 'company-color'
        },
        {
          name: 'Company: ITware Kft. (2018 august - 2020 january)',
          projects: [
            {
              title: 'SQMS (2019 September – now, outsorced to Telekom)',
              description: 'SQMS is an inner application for Telekom. It is for tracking all services.',
              tasks: 'Frontend development',
              techStack: 'Angular 7, Typescript, HTML5, SCSS , MsSQL, Git'
            },
            {
              title: 'Smart Commerce (2019 May – 2019 September)',
              description: 'This is a webshop for FLEETware fleet tracking service.',
              tasks: 'Frontend development',
              techStack: 'Vue.js, JavaScript, Vuex, HTML5, SCSS, Git'
            },
            {
              title: 'FLEETware (2018 December – 2019 May)',
              description: 'FLEETware is a fleet tracking application, it collects live information about the vehicles.',
              tasks: 'Plan and build the frontend of statistics feature for the app. Beside this feature I had several minor tasks, including some backend development.',
              techStack: 'Angular 6, RxJs, chart.js, Java 8, HTML5, SCSS, Git'
            },
            {
              title: 'Lambda project (2018 Aug – 2018 Dec)',
              description: 'A Credit Management system to enhance and automate the current workflow of the company with Profit & Bisnode integration',
              tasks: 'Full-stack development',
              techStack: 'Java EE, Angular 6, RxJS, Angular Material, HTML5, SCSS, MySql, Flyway, Git'
            }
          ],
          colorClass: 'company-color'
        },
        {
          name: 'Company: Codecool developer school (2017 september - 2018 august)',
          projects: [
            {
              title: 'Several studying projects:',
              description: 'Mostly web applications. (webshops, task manager, question-answer site, online booking system)',
              tasks: 'Full-stack development',
              techStack: 'HTML, CSS, JavaScript, Java8, Spring Boot, Thymeleaf, REST API, JPA, Git'
            }
          ],
          colorClass: 'company-color'
        }
      ]
    }
  }
}
</script>

<style>
.main-container {
  display: flex;
  justify-content: center;
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
  font-size: 20pt;
  margin-bottom: 10px;
}
.data-container {
  margin: 0px 0px 20px 15px;
  font-size: 10pt;
}
.data {
  padding-bottom: 5px;
  display: flex;
}
.key {
  width: 20px;
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
.left-skills {
  border-right: 1px solid rgb(30, 4, 51);
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
.hackerrank {
  width: 14px;
  height: 14px;
}
.space-h-70 {
  height: 70px;
  width: 100%;
}
.space-h-130 {
  height: 280px;
  width: 100%;
}
.freelance-container {
  padding: 8px;
  margin: 4px 0;
}
.freelance-color {
  background-color: #e8fbe8;
}
.company-container {
  padding: 8px;
  margin: 4px 0;
}
.company-color {
  background-color: #e7f4fd;
}
.pet-container {
  padding: 8px;
  background-color: #e8fbe8;
}
.pet-color {
  background-color: #f8f0fb;
}
.legend {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px 4px;
  margin-bottom: 8px;
  background-color: #e7e7e7;
}
.legend-color {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 8px;
}
.legend-element {
  display: flex;
  align-items: center;
}
.football-fighter {
  display: flex;
}
</style>

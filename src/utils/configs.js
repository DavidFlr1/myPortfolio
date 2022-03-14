import icv from '../static/David-Ricardo-Flores-Tena-CV-2021.pdf'
import ifullPortrait from '../images/stock/about-me.jpeg'
import ismallPortrait from '../images/stock/about-me.jpeg'

export const cv = icv
export const fullPortrait = ifullPortrait
export const smallPortrait = ismallPortrait

export const navbar = [
  {
    name: 'Home',
    icon: 'AiOutlineHome',
    link: '/',
  },
  {
    name: 'About Me',
    icon: 'AiOutlinePlusCircle',
    link: '/about',
  },
  {
    name: 'Experience',
    icon: 'AiOutlineCode',
    link: '/experience',
  },
  {
    name: 'My work',
    icon: 'AiOutlineContainer',
    link: '/portfolio',
  },
]

export const jobs = [
  {
    duration: '2021 - Current',
    position: 'Front End Web Developer',
    company: {
      name: 'Divelement',
      link: 'https://divelement.io',
      visualize: '',
      github: '',
    },
    description: 'Software consulting with international clients in which I perform multiple tasks as a front end web and mobile developer, attending to customer needs such as web design, maintenance, incorporation of functionalities, API consumption, migrations, optimization, etc. You can also reach me at dflores@divelement.io',
    rawDescription: '<p>Software consulting with international clients in which I perform multiple tasks as a front end web and mobile developer, attending to customer needs such as web design, maintenance, incorporation of functionalities, API consumption, migrations, optimization, etc. </p><p>You can also reach me at <a href="mailto:dflores@divelement.io">dflores@divelement.io</a></p>',
  },
  {
    duration: '2019 - 2021',
    position: 'Front End and Business analyst',
    company: {
      name: 'Allency',
      link: 'https://allency.com.mx',
      visualize: '',
      github: '',
    },
    description: 'Advertising agency where I designed custom websites for customers, incorporating APIs from different services to create sites like landing pages, eCommerce and blogs.',
    rawDescription: '<p>Advertising agency where I designed custom websites for customers, incorporating APIs from different services to create sites like landing pages, eCommerce and blogs. </p>',
  },
  {
    duration: '2018 - 2019',
    position: 'QA Intern',
    company: {
      name: 'EPICOR',
      link: 'https://www.epicor.com/en-us/',
      visualize: '',
      github: '',
    },
    description: 'Design and execution of functional test cases under the SCRUM framework for the ERP enhancement.',
    rawDescription: '<p>Design and execution of functional test cases under the SCRUM framework for the ERP enhancement.</p>',
  },
]
export const projects = [
  {
    duration: 'Freelancer',
    position: 'Web Developer',
    company: {
      name: 'Allency',
      link: 'https://allency.com.mx',
      visualize: '',
      github: '',
    },
    description: 'Design of the main website',
    rawDescription: '<p>Design of the main website</p>',
  },
  {
    duration: 'Freelancer',
    position: 'Web Developer',
    company: {
      name: 'Run Santa Run',
      link: 'https://runsantarun.mx',
      visualize: '',
      github: '',
    },
    description: 'Design of the landing page',
    rawDescription: '<p>Design of the landing page</p>',
  },
  {
    duration: 'Freelancer',
    position: 'Project Leader',
    company: {
      name: 'LionPOS',
      link: '',
      visualize: '',
      github: '',
    },
    description: 'Planing and development of a Point of Sale web app for the management of restaurant',
    rawDescription: '<p>Planing and development of a Point of Sale web app for the management of restaurant</p>',
  },
]
export const courses = [
  {
    duration: '2022',
    position: 'React Native',
    company: {
      name: 'Codewithmosh',
      link: 'https://codewithmosh.com/p/the-ultimate-react-native-course',
      visualize: 'https://codewithmosh.com/p/the-ultimate-react-native-course',
      github: '',
    },
    description: 'Serial no: cert_f8hzd7qt  -  React Native is an open-source UI software framework that is used to develop applications for Android, iOS, Web, Windows and more, by enabling developers to use the React framework along with native platform capabilities.',
    rawDescription: '<p><span style="font-family: Graphik-Medium">Serial no: cert_f8hzd7qt</span> - React Native is an open-source UI software framework that is used to develop applications for Android, iOS, Web, Windows and more, by enabling developers to use the React framework along with native platform capabilities.</p>',
  },
  {
    duration: 'In progress',
    position: 'AWS Cloud Practitioner Essentials',
    company: {
      name: 'AWS',
      link: '',
      visualize: '/',
      github: '/',
    },
    description: 'Learn fundamentals of the AWS Cloud',
    rawDescription: '<p>Learn fundamentals of the AWS Cloud</p>',
  },
]

// https://aws.amazon.com/es/training/digital/aws-cloud-practitioner-essentials/?cp=sec&sec=prep
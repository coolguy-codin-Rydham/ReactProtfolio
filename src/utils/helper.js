import {
  FaDiagramProject,
  FaEnvelope,
  FaFacebookF,
  FaGithub,
  FaHouse,
  FaInstagram,
  FaLinkedinIn,
  FaRenren,
  FaUser,
} from "react-icons/fa6";
import {
  ChatApp,
  CodePenClone,
  FreshJuiceUI,
  ImageSharing,
  OpenAI,
  PixabayClone,
  PortfolioFirebase,
  RestaurantClone,
  SocialMedia,
} from "../assets";

import {
  P1,
  P2,
  P3,
  P4,
  P5,
  P6,
  P7,
  P8,
  P9,
  P10,
  P11,
  P12,
  P13,
  P14,
  P15,
} from "../assets"

export const Socials = [
  {
    id: `facebook-${Date.now()}`,
    Icon: FaFacebookF,
    uril: "https://www.facebook.com/rydham.gindra/",
    color: "#1877F2",
  },
  {
    id: `linkedin-${Date.now()}`,
    Icon: FaLinkedinIn,
    uril: "https://www.linkedin.com/in/rydhampreet-singh-gindra-36a246262/",
    color: "#0072b1",
  },
  {
    id: `github-${Date.now()}`,
    Icon: FaGithub,
    uril: "https://github.com/coolguy-codin-Rydham",
    color: "#fff",
  },
  {
    id: `instagram-${Date.now()}`,
    Icon: FaInstagram,
    uril: "https://www.instagram.com/rydham.jsx/",
    color: "#ff0000",
  },

];

export const Menus = [
  {
    id: `home-${Date.now()}`,
    Icon: FaHouse,
    uri: "#home",
    name: "Home",
  },
  {
    id: `about-${Date.now()}`,
    Icon: FaUser,
    uri: "#about",
    name: "About",
  },
  {
    id: `skills-${Date.now()}`,
    Icon: FaRenren,
    uri: "#skills",
    name: "Skills",
  },
  {
    id: `projects-${Date.now()}`,
    Icon: FaDiagramProject,
    uri: "#projects",
    name: "Projects",
  },
  {
    id: `contact-${Date.now()}`,
    Icon: FaEnvelope,
    uri: "#contact",
    name: "Contact",
  },
];


export const ProjectsMain = [
  {
    id:`p11-${Date.now()}`,
    name:"Parallax Effect",
    imgSrc:P11,
    gitURL:"https://github.com/coolguy-codin-Rydham/Parallax-Website",
  },
  {
    id:`p1-${Date.now()}`,
    name:"Blogs By Elites",
    imgSrc:P1,
    gitURL:"https://github.com/coolguy-codin-Rydham/Blogs-By-Elites"
  },
  {
    id:`p10-${Date.now()}`,
    name:"Nike Home Page",
    imgSrc:P10,
    gitURL:"https://github.com/coolguy-codin-Rydham/Nike-Landing-Page",
  },
  {
    id:`p2-${Date.now()}`,
    name:"Portfolio with Tailwind",
    imgSrc:P2,
    gitURL:"https://github.com/coolguy-codin-Rydham/Personal-Portfolio",
  },
  {
    id:`p3-${Date.now()}`,
    name:"Dice Roll",
    imgSrc:P3,
    gitURL:"https://github.com/coolguy-codin-Rydham/DiceRollGameUsingJS",
  },
  {
    id:`p9-${Date.now()}`,
    name:"Nike Landing Page",
    imgSrc:P9,
    gitURL:"https://github.com/coolguy-codin-Rydham/NikePageNew",
  },
  {
    id:`p13-${Date.now()}`,
    name:"TodoList",
    imgSrc:P13,
    gitURL:"https://github.com/coolguy-codin-Rydham/To-Do-List-Again",
  },
  {
    id:`p8-${Date.now()}`,
    name:"Random Joke",
    imgSrc:P8,
    gitURL:"https://github.com/coolguy-codin-Rydham/Joke-Project-Using-API",
  },

  {
    id:`p4-${Date.now()}`,
    name:"Dictionary",
    imgSrc:P4,
    gitURL:"https://github.com/coolguy-codin-Rydham/Dictionary-API",
  },
  
  {
    id:`p6-${Date.now()}`,
    name:"Flappy Birds",
    imgSrc:P6,
    gitURL:"https://github.com/coolguy-codin-Rydham/Flappy-Birds-JS",
  },
  {
    id:`p5-${Date.now()}`,
    name:"Excuser",
    imgSrc:P5,
    gitURL:"https://github.com/coolguy-codin-Rydham/Excuser",
  },
  
  {
    id:`p12-${Date.now()}`,
    name:"TodoListUsingReact",
    imgSrc:P12,
    gitURL:"https://github.com/coolguy-codin-Rydham/TodoListUsingReact",
  },
  
  {
    id:`p14-${Date.now()}`,
    name:"Social Media",
    imgSrc:P14,
    gitURL:"https://github.com/coolguy-codin-Rydham/SocialMedia",  
  },

  {
    id:`p7-${Date.now()}`,
    name:"HooBank",
    imgSrc:P7,
    gitURL:"https://github.com/coolguy-codin-Rydham/Modern-bank-app",
  },



  {
    id:`p15-${Date.now()}`,
    name:"Quiz",
    imgSrc:P15,
    gitURL:"https://github.com/coolguy-codin-Rydham/QuizApp",  
  }
]

export const ProjectsData = [
  {
    id: `food-${Date.now()}`,
    name: "Single Food Restaurant",
    imgSrc: RestaurantClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `codepen-${Date.now()}`,
    name: "CodePen Clone",
    imgSrc: CodePenClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `openai-${Date.now()}`,
    name: "OpenAI",
    imgSrc: OpenAI,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `chatapp-${Date.now()}`,
    name: "Chat App Build",
    imgSrc: ChatApp,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `imageSharing-${Date.now()}`,
    name: "Image Sharing App",
    imgSrc: ImageSharing,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `pixabayclone-${Date.now()}`,
    name: "Pixabay Clone 2.0",
    imgSrc: PixabayClone,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `freshjuiceui-${Date.now()}`,
    name: "Fresh Juice UI Build",
    imgSrc: FreshJuiceUI,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `socialmedia-${Date.now()}`,
    name: "Social Media App",
    imgSrc: SocialMedia,
    gitURL: "https://github.com/Vetrivel-VP",
  },
  {
    id: `portfoliofirebase-${Date.now()}`,
    name: "Portfolio UI Fireabse",
    imgSrc: PortfolioFirebase,
    gitURL: "https://github.com/Vetrivel-VP",
  },
];


export const ServiceData = [
  
  {
    count:"10+",
    text:"Happy Customers",
  },
  {
    count:"10+",
    text:"Front-End Projects",
  },
  {
    count:"10+",
    text:"Public Projects",
  },
  
]

export const SkillArr = [{
  index:1,
  skill: "HTML5",
  percentage: "95%",
  color:"#FF3F3F",
  move:false
},{
  index:2,
  skill: "CSS3",
  percentage: "90%",
  color:"#008fff",
  move:true
},{
  index:3,
  skill:"Javascript",
  percentage:"70%",
  color:"#14DB00",
  move:false
},{
  index:4,
  skill:"React",
  percentage:"80%",
  color:"#00FFF3",
  move:true
}];
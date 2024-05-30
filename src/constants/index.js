import { BlendModeNode } from "three/examples/jsm/nodes/Nodes.js";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  artyfact,
  aimedis,
  sdlccorp,
  Artyfact_Main,
  Amica_main,
  Aimedis_main,
  UnrealEngine,
  CPP,
  Blender,
  MySQL,
  Steam,
  EPicGame,
  AWS,
  RestAPI,
  MappleStory,
  PUBG,
  nextjs,
  reactnative,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Design  Principles",
    icon: web,
  },
  {
    title: "Debugging and Troubleshooting",
    icon: mobile,
  },
  {
    title: "RESTFUL API Development",
    icon: backend,
  },
  {
    title: "Database Management with MongoDB",
    icon: creator,
  },
];

const technologies = [
  {
    name: "C++",
    icon: CPP,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySQL",
    icon: MySQL,
  },

  {
    name: "AWS",
    icon: AWS,
  },

  {
    name: "RestAPI",
    icon: RestAPI,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "react",
    icon: reactjs,
  },
  {
    name: "react",
    icon: redux,
  },
  {
    name: "react native",
    icon: reactnative,
  },
  {
    name: "react native",
    icon: nextjs,
  },
];

const experiences = [
  {
    title: "Mern Stack Developer",
    company_name: "SDLC Corp",
    icon: sdlccorp,
    iconBg: "#095e8b",
    date: "April 2022 - Present",
    points: [
      "Developing and maintaining web applications using MERN (MongoDB, Express.js, React.js, Node.js) stack.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-platform compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Faculty Cum System Administrator",
    company_name: "Jawahar Navodaya Vidhyalaya",
    icon: aimedis,
    iconBg: "#0f5029",
    date: "July 2019 - March 2022",
    points: [
      "Overseeing the maintenance and upkeep of computer labs, ensuring availability of necessary hardware, software, and peripherals for instructional purposes.",
      "Integrating educational technology tools and resources into teaching practices, including interactive whiteboards, educational software, and online learning platforms.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "The Snus Life",
    description:
      "The project aims to enhance the online retail presence of The Snus Life, the leading retailer of snus and nicopods in the UK. With a focus on customer satisfaction and product diversity, the project seeks to amplify brand recognition, streamline customer experience, and expand product offerings.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: Artyfact_Main,
    source_code_link: "https://github.com/",
  },
  {
    name: "Stardust",
    description:
      "Stardust is a groundbreaking metaverse dedicated to entertainment, blending creativity, technology, and human connection. Our platform leverages virtual world building and blockchain to create a vibrant ecosystem where artists share their work.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Amica_main,
    source_code_link: "https://github.com/",
  },
  {
    name: "Patang",
    description:
      "Patang is a Global logistics Platform that provides end-to-end supply chain solutions and is also into Blockchain services. We are focused on digitizing the logistics industry by creating more customer-connected applications and bringing end-to-end automated processes.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Aimedis_main,
    source_code_link: "https://github.com/",
  },
];

const PresnolWork = [
  {
    name: "Shopping Site Management",
    description:
      " In this project user create a account on shopping site and after that all the information of user is save in mongo database. If user add to cart a anyproduct than product save in db .there are various component is used in it that is Signup Page, Login Page, Add to Cart etc. In this project I used a private component also .",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "React-Redux",
        color: "pink-text-gradient",
      },
    ],
    image: PUBG,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather Management App",
    description:
      "In this project user create a account on a weather app and all the information is saved on db and than direct into weather app page where if they enter any city name and show the weather conditions of city .We also use signin and signup functionlity in this. In this user intrectivity is good. Also used redux functionlity in this.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "NodeJs",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: MappleStory,
    source_code_link: "https://github.com/",
  },
];
export { services, technologies, experiences, projects, PresnolWork };

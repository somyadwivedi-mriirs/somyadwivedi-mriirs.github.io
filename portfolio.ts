import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Somya Dwivedi',
  title: "Hello! I'm Somya Dwivedi",
  description:
    "A passionate Full Stack Developer with expertise in React, Java SpringBoot, and a deep interest in product management. I am driven by a desire to create impactful software solutions that drive business success.",
  resumeLink:
    'https://docs.google.com/document/d/1Y97XI2-EDcnYhZ7myhe_0-qxtZNeqlH8/edit?usp=sharing&ouid=101203128306965406017&rtpof=true&sd=true',
};

export const openSource = {
  githubUserName: 'somyadwivedi-mriirs',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://somyadwivedi-mriirs.github.io/',
  linkedin: 'https://www.linkedin.com/in/somyadwivedi/',
  github: 'https://github.com/somyadwivedi-mriirs',
  // instagram: 'https://www.instagram.com/__hanzla100',
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Building responsive static websites using React.js'),
        emoji('⚡ Building RESTful APIs in Java & SpringBoot Framework'),
        emoji('⚡ Solving real world problems by creating utility tools in Python'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          iconifyTag: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          iconifyTag: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          iconifyTag: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          iconifyTag: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Java',
          iconifyTag: 'logos:java',
        },
        {
          skillName: 'Python',
          iconifyTag: 'logos:python',
        },
        {
          skillName: 'NPM',
          iconifyTag: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          iconifyTag: 'logos:yarn',
        },
      ],
    },
    // {
    //   title: 'Cloud Infra-Architecture',
    //   lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji('⚡ Experience of working on multiple cloud platforms'),
    //     emoji(
    //       '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
    //     ),
    //     emoji(
    //       '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
    //     ),
    //   ],
    //   softwareSkills: [
    //     // ? Check README To get icon details
    //     {
    //       skillName: 'AWS',
    //       iconifyTag: 'logos:aws',
    //     },
    //     {
    //       skillName: 'Azure',
    //       iconifyTag: 'logos:microsoft-azure',
    //     },
    //     {
    //       skillName: 'Heroku',
    //       iconifyTag: 'logos:heroku-icon',
    //     },
    //     {
    //       skillName: 'PostgreSQL',
    //       iconifyTag: 'logos:postgresql',
    //     },
    //     {
    //       skillName: 'Github',
    //       iconifyTag: 'akar-icons:github-fill',
    //     },
    //     {
    //       skillName: 'Docker',
    //       iconifyTag: 'logos:docker-icon',
    //     },
    //     {
    //       skillName: 'Github Actions',
    //       iconifyTag: 'logos:github-actions',
    //     },
    //     {
    //       skillName: 'Cloudinary',
    //       iconifyTag: 'logos:cloudinary',
    //     },
    //     {
    //       skillName: 'Nginx',
    //       iconifyTag: 'logos:nginx',
    //     },
    //     {
    //       skillName: 'Sentry',
    //       iconifyTag: 'logos:sentry-icon',
    //     },
    //   ],
    // },
    // {
    //   title: 'Blockchain',
    //   lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
    //   skills: [
    //     emoji(
    //       '⚡ Experience in developing Smart Contract using Solidity & Ethereum'
    //     ),
    //     emoji(
    //       '⚡ Building Scripts for automated testing & deployment of Smart Contracts using Brownie & Infura'
    //     ),
    //     emoji(
    //       '⚡ Experience of using Openzeppelin Smart Contract Standards & Chainlink Oracles'
    //     ),
    //     emoji('⚡ Developing NFT Smart Contracts using ERC-721 Token Standard'),
    //     emoji(
    //       '⚡ Building Dapps with React.js & Solidity using Web3.js, Moralis & IPFS'
    //     ),
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: 'Ethereum',
    //       iconifyTag: 'logos:ethereum',
    //     },
    //     {
    //       skillName: 'Solidity',
    //       iconifyTag: 'logos:solidity',
    //     },
    //     {
    //       skillName: 'Web3js',
    //       iconifyTag: 'logos:web3js',
    //     },
    //     {
    //       skillName: 'Metamask',
    //       iconifyTag: 'logos:metamask-icon',
    //     },
    //     {
    //       skillName: 'Ganache',
    //       iconifyTag: 'logos:ganache-icon',
    //     },
    //   ],
    // },
  ],
};

// export const SkillBars: SkillBarsType[] = [
//   {
//     Stack: 'Frontend/Design', //Insert stack or technology you have experience in
//     progressPercentage: '90', //Insert relative proficiency in percentage
//   },
//   {
//     Stack: 'Backend',
//     progressPercentage: '70',
//   },
//   {
//     Stack: 'Programming',
//     progressPercentage: '60',
//   },
// ];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Manav Rachna International Institute Of Research And Studies, Faridabad',
    subHeader: 'B.Tech CSE (BAO)',
    duration: 'July 2016 - July 2020',
    // desc: 'Participated in the research of XXX and published 3 papers.',
    grade: '89%',
    descBullets: [
      // 'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
      // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Senior Software Engineer',
    company: 'HSBC Technology, Pune',
    companyLogo: '/img/hsbc.png',
    date: 'Sept 2022 – Present',
    desc: 'Led the UI and API POD as a full-stack developer, contributing to the development of an asset management portal within Wealth and Private Banking. Utilized React for frontend development and Spring Boot for the backend. Improved querying time by 10 times by optimizing PostgreSQL usage. Significantly reduced external vendor costs by 100 times through the development of in-house APIs.',
  },
  {
    role: 'Scholar',
    company: 'TalentSprint, Hyderabad supported by Google',
    companyLogo: '/img/talentSprint.png',
    date: 'Jun 2019 – Jun 2020',
    desc: 'Implemented a Dynamic Monument Identification Model using Convolutional Neural Networks with Keras. Enhanced model accuracy by incorporating the VGG16 pre-trained model.',
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: 'Virtual Engineering Trainee',
    company: 'JP Tokyo, Tokyo',
    companyLogo: '/img/jp.jpg',
    date: 'Sept 2018 - Feb 2019',
    desc: 'Developed a REST API-based data model using Elasticsearch and automated the catalog import pipeline with Python. Successfully coordinated remote work, resulting in the timely delivery of a high-quality product.',
  },
  {
    role: 'Research Fellow',
    company: 'RCC, MRIIRS, Faridabad',
    companyLogo: '/img/manavRachna.png',
    date: 'July 2017 - Dec 2017',
    desc: 'Designed a web repository for personal documents with features for uploading and accessing the source code for various projects. Provided access to general users on a request basis.',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Monument Identification Model',
    desc: 'Applied Convolutional Neural Networks with Keras to train a model for monument identification in input images. Utilized the VGG16 pre-trained model for improved accuracy.',
    github: 'https://github.com/somyadwivedi-mriirs/Monument-Identification',
    // link: 'https://developer-portfolio-1hanzla100.vercel.app/',
  },
  {
    name: 'Apparel Recommend System',
    desc: 'Developed an e-commerce product recommendation system using text mining, Bag-of-Words, TF-IDF, Average Word2Vec, and CNN (VGG16) algorithms.',
    github: 'https://github.com/somyadwivedi-mriirs/Projects',
  },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
  // {
  //   name: 'John Smith',
  //   feedback:
  //     'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, vel illo. Eum magnam beatae ratione eos natus accusamus unde pariatur fugiat at facilis, modi molestiae? Labore odio sit eligendi. Tenetur.',
  // },
];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Somya Dwivedi',
  description:
    'Senior Software Engineer at HSBC | #IamRemarkable facilitator | WTEF at Google',
  author: 'Somya Dwivedi',
  image: 'https://media.licdn.com/dms/image/C5103AQGBXaLCf5UI-w/profile-displayphoto-shrink_400_400/0/1550155236600?e=1697673600&v=beta&t=dofmANXLgPfAy9rhT_UovptigvrQihvUiKhgo4eudNk',
  url: 'https://somyadwivedi-mriirs.github.io/',
  keywords: [
    'Somya',
    'Somya Dwivedi',
    '@somyadwivedi-mriirs',
    'somyadwivedi-mriirs',
    'Portfolio',
    'Somya Portfolio ',
    'Somya Dwivedi Portfolio',
  ],
};

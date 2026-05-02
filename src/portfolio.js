import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: false,
  animation: splashAnimation,
  duration: 1500
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Akshay Kumar LR",
  title: "Hi, I'm Akshay",
  subTitle: emoji(
    "Senior Software Engineer with 8+ years of experience building scalable, conversion-focused frontend systems and reliable backend integrations across insurance and ed-tech platforms."
  ),
  resumeLink: "resume.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Akshay-47",
  linkedin: "",
  gmail: "akshay.lokray@gmail.com",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  display: true
};

const skillsSection = {
  title: "What I Work On",
  subTitle:
    "I design and ship product journeys that balance user experience, engineering quality, and business impact.",
  skills: [
    emoji(
      "⚡ Build scalable frontend systems in React, TypeScript, and modern JavaScript for high-traffic products"
    ),
    emoji(
      "⚡ Architect Backend-for-Frontend and API integration layers with Node.js, Express, and microservice ecosystems"
    ),
    emoji(
      "⚡ Improve conversion, performance, and reliability through experimentation, testing, and production-grade delivery practices"
    )
  ],
  softwareSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "React",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Vue.js",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "MySQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Gokaraju Rangaraju Institute of Engineering and Technology",
      logo: null,
      subHeader: "Bachelor of Technology, Computer Science Engineering",
      duration: "August 2013 - May 2017",
      desc: "Graduated with Grade A.",
      descBullets: [
        "Coursework included Data Structures and Algorithms, Operating Systems, Computer Security, and Software Tools.",
        "Participated in IEEE Society and extracurricular activities including basketball, carrom, and chess."
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend Engineering",
      progressPercentage: "95%"
    },
    {
      Stack: "Backend Integrations",
      progressPercentage: "85%"
    },
    {
      Stack: "System Design & Delivery",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "UI Engineer 2",
      company: "ACKO Insurance",
      companylogo: null,
      date: "2022 - Present",
      desc: "Own and architect conversion-focused journeys across insurance products used daily by thousands of users.",
      descBullets: [
        "Led and mentored a team of 5 engineers to build a Backend-for-Frontend layer using Node.js and TypeScript for frontend-to-microservice communication.",
        "Owned end-to-end delivery of the Health Insurance Flow and Policy Analyzer V2 in collaboration with product, design, and backend teams.",
        "Improved payment conversion by 18% through flexible payment options and handling 70+ edge cases across critical flows.",
        "Designed a state-driven chatbot system for real-time UI updates and smoother user journeys."
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "BYJU'S Future School",
      companylogo: null,
      date: "2020 - 2022",
      desc: "Built high-scale growth and classroom products across consumer learning platforms.",
      descBullets: [
        "Developed A/B testing systems, low/no-code campaign tools, and student-sharing infrastructure for rapid experimentation.",
        "Built an AI-driven personalized video system with Rephrase.ai that improved trial class conversions by more than 45%.",
        "Contributed to 32% growth in organic traffic through SEO and performance improvements on high-traffic web properties.",
        "Designed a real-time classroom interaction system using React and Agora, and helped migrate legacy AngularJS/jQuery systems to React."
      ]
    },
    {
      role: "UI Engineer",
      company: "Sureify Labs",
      companylogo: null,
      date: "2020",
      desc: "Focused on scalable frontend architecture and internal product tooling.",
      descBullets: [
        "Architected a Server-Driven UI system in React for faster product iteration.",
        "Led development of a reusable React component library for stronger consistency and developer velocity.",
        "Built an analytics dashboard with React, Redux, and MySQL that reduced analysis time by 10x."
      ]
    },
    {
      role: "Software Engineer",
      company: "TechAspect Solutions",
      companylogo: null,
      date: "2018 - 2020",
      desc: "Delivered web experiences and CMS-driven solutions for product and content teams.",
      descBullets: [
        "Built e-commerce and automotive web applications using JavaScript, Vue.js, and jQuery.",
        "Developed integrations with AEM and Sitecore to support dynamic content delivery.",
        "Improved maintainability and onboarding through stronger engineering practices and documentation."
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "false",
  display: false
};

const bigProjects = {
  title: "Selected Work",
  subtitle: "A few high-impact systems and journeys I have helped deliver",
  projects: [
    {
      image: null,
      projectName: "Health Insurance Flow",
      projectDesc:
        "Owned the end-to-end user journey for a live insurance purchase flow, improving conversion and reliability across complex payment scenarios."
    },
    {
      image: null,
      projectName: "Policy Analyzer V2",
      projectDesc:
        "Delivered a production-ready policy analysis experience with close collaboration across product, design, and backend teams."
    },
    {
      image: null,
      projectName: "Personalized Video Conversion System",
      projectDesc:
        "Built an AI-assisted personalized video experience that increased trial class conversion by more than 45%."
    },
    {
      image: null,
      projectName: "Real-Time Classroom Interactions",
      projectDesc:
        "Designed synchronized teacher-student interactions with React and Agora to improve engagement in live learning sessions."
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Certifications & Highlights 🏆"),
  subtitle:
    "A snapshot of certifications and strengths that support my engineering work.",
  achievementsCards: [
    {
      title: "HackerRank - Problem Solving (Intermediate)",
      subtitle:
        "Validated problem-solving fundamentals and coding proficiency through HackerRank certification.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "HackerRank certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/950e626f958d"
        }
      ]
    },
    {
      title: "HackerRank - Problem Solving (Advanced)",
      subtitle:
        "Advanced certification demonstrating stronger algorithmic thinking and implementation depth.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "HackerRank advanced certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.hackerrank.com/certificates/7218a0f8680c"
        }
      ]
    },
    {
      title: "Udemy - Node.js",
      subtitle:
        "Structured backend learning focused on practical Node.js application development.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "Udemy Node.js certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.udemy.com/certificate/UC-fcad749e-e384-42e1-896d-a6d0b221b6ec/"
        }
      ]
    }
  ],
  display: true
};

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "Talks",
  subtitle: "",
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Resume",
  subtitle: "Download my latest resume",
  display: true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "If you're building thoughtful products and need a strong frontend and full-stack engineering partner, let's connect.",
  number: "+91 7981755311",
  email_address: "akshay.lokray@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};

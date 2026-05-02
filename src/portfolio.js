import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";
import ackoLogo from "./assets/images/company-logos/acko.png";
import byjusLogo from "./assets/images/company-logos/byjus.jpg";
import sureifyLogo from "./assets/images/company-logos/sureify.png";
import techaspectLogo from "./assets/images/company-logos/techaspect.jpg";

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
  linkedin: "https://www.linkedin.com/in/akshay-lokray/",
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
      skillName: "Next.js",
      fontAwesomeClassname: "fas fa-forward"
    },
    {
      skillName: "Redux",
      fontAwesomeClassname: "fas fa-project-diagram"
    },
    {
      skillName: "Zustand",
      fontAwesomeClassname: "fas fa-layer-group"
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
      skillName: "Express",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "WebSockets",
      fontAwesomeClassname: "fas fa-plug"
    },
    {
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fas fa-wind"
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
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
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
    },
    {
      schoolName: "I Class Junior College, Hyderabad",
      logo: null,
      subHeader: "Intermediate / Junior College",
      duration: "June 2011 - May 2013",
      desc: "Maths, Physics & Chemistry",
      descBullets: ["Scored 90% distinction."]
    },
    {
      schoolName: "St. Joseph's High School",
      logo: null,
      subHeader: "S.S.C / 10th Standard",
      duration: "June 2010 - May 2011",
      desc: "Telangana State Board",
      descBullets: ["Scored 90% distinction."]
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
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "System Design & Delivery",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false
};

const interestSection = {
  display: true,
  title: "Financial Markets Enthusiasm",
  titleIcon: "fas fa-coins",
  badge: "Personal Interest, Not Professional Advice",
  badgeIcon: "fas fa-shield-halved",
  paragraphs: [
    {
      icon: "fas fa-magnifying-glass-chart",
      text: "I enjoy understanding how markets move over full cycles and how investor psychology shapes short-term volatility. In my personal learning time, I follow equities, mutual funds, and macroeconomic signals with a long-term lens."
    },
    {
      icon: "fas fa-calculator",
      text: "An engineering mindset helps me stay structured: focus on risk-adjusted returns, avoid noise-driven decisions, and evaluate opportunities with clear assumptions instead of impulse."
    },
    {
      icon: "fas fa-seedling",
      text: "I am especially interested in compounding and disciplined allocation, where consistency and patience generally matter more than chasing short-lived trends."
    }
  ],
  highlights: [
    {
      icon: "fas fa-chart-pie",
      title: "Portfolio Thinking",
      description:
        "Allocation, diversification, and downside-aware decision making."
    },
    {
      icon: "fas fa-newspaper",
      title: "Market Tracking",
      description:
        "Following business quality, policy updates, and macro developments."
    },
    {
      icon: "fas fa-chart-line",
      title: "Long-term Planning",
      description:
        "Compounding-focused habits built for durable long-term outcomes."
    }
  ]
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "UI Engineer 2",
      company: "ACKO Insurance",
      companylogo: ackoLogo,
      date: "2022 - Present",
      desc: "Own and architect conversion-focused journeys across insurance products used daily by thousands of users.",
      detailTitle:
        "Built high-stakes insurance journeys with strong product and engineering ownership.",
      impactStats: [
        "18% payment conversion improvement",
        "5 engineers mentored",
        "70+ edge cases handled"
      ],
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "BFF",
        "Microservices",
        "Jest"
      ],
      proofLinks: [
        {
          name: "Health Insurance Flow",
          url: "https://www.acko.com/gi/p/health/new/landingPage/intro?utm_source=direct&utm_medium=web"
        },
        {
          name: "Policy Analyzer V2",
          url: "https://www.acko.com/policy-analyzer/home?seo=&hide_app_bar=true&input_data_id=2de2b3b7-ee32-4e77-92d8-68dd4c260001"
        }
      ],
      descBullets: [
        "Led and mentored a team of 5 engineers to build a Backend-for-Frontend layer using Node.js and TypeScript for frontend-to-microservice communication.",
        "Owned end-to-end delivery of the Health Insurance Flow and Policy Analyzer V2 in collaboration with product, design, and backend teams.",
        "Improved payment conversion by 18% through flexible payment options and handling 70+ edge cases across critical flows.",
        "Designed a state-driven chatbot system for real-time UI updates and smoother user journeys."
      ],
      detailedSections: [
        {
          title: "Architecture & Ownership",
          items: [
            "Drove the technical direction for critical insurance purchase journeys with a focus on reliability, clarity, and conversion.",
            "Designed and built a Backend-for-Frontend layer to simplify frontend integration with multiple downstream microservices.",
            "Worked closely with product, design, and backend stakeholders to take ideas from requirement stage to production rollout."
          ]
        },
        {
          title: "Product Impact",
          items: [
            "Improved payment conversion by addressing failure paths, introducing more flexible payment handling, and smoothing friction across checkout scenarios.",
            "Owned the Health Insurance Flow and Policy Analyzer V2 as core user-facing experiences with measurable business impact.",
            "Created a state-driven chatbot experience to support richer real-time journeys and better user guidance."
          ]
        }
      ]
    },
    {
      role: "Senior Software Engineer",
      company: "BYJU'S Future School",
      companylogo: byjusLogo,
      date: "2020 - 2022",
      desc: "Built high-scale growth and classroom products across consumer learning platforms.",
      detailTitle:
        "Shipped growth, experimentation, and real-time classroom experiences at scale.",
      impactStats: [
        "45%+ trial conversion uplift",
        "32% SEO traffic growth",
        "Millions of requests processed"
      ],
      technologies: [
        "React",
        "Agora",
        "A/B Testing",
        "SEO",
        "Performance",
        "REST APIs"
      ],
      descBullets: [
        "Developed A/B testing systems, low/no-code campaign tools, and student-sharing infrastructure for rapid experimentation.",
        "Built an AI-driven personalized video system with Rephrase.ai that improved trial class conversions by more than 45%.",
        "Contributed to 32% growth in organic traffic through SEO and performance improvements on high-traffic web properties.",
        "Designed a real-time classroom interaction system using React and Agora, and helped migrate legacy AngularJS/jQuery systems to React."
      ],
      detailedSections: [
        {
          title: "Growth Systems",
          items: [
            "Built internal platforms for experimentation, campaign management, and sharing workflows that helped product teams move faster.",
            "Contributed to SEO and performance initiatives across high-traffic web properties, leading to significant organic growth.",
            "Designed data flows and REST integrations to handle high request volumes efficiently."
          ]
        },
        {
          title: "Engagement & Conversion",
          items: [
            "Built a personalized video journey using Rephrase.ai that improved trial class conversion by more than 45%.",
            "Created real-time classroom interaction capabilities with React and Agora to improve teacher-student engagement.",
            "Supported migration from older AngularJS and jQuery systems into maintainable React-based experiences."
          ]
        }
      ]
    },
    {
      role: "UI Engineer",
      company: "Sureify Labs",
      companylogo: sureifyLogo,
      date: "2020",
      desc: "Focused on scalable frontend architecture and internal product tooling.",
      detailTitle:
        "Improved frontend flexibility with reusable systems and data-rich tooling.",
      impactStats: [
        "10x faster analysis workflows",
        "Reusable React design system",
        "Server-driven UI foundation"
      ],
      technologies: ["React", "Redux", "MySQL", "Component Library", "SDUI"],
      descBullets: [
        "Architected a Server-Driven UI system in React for faster product iteration.",
        "Led development of a reusable React component library for stronger consistency and developer velocity.",
        "Built an analytics dashboard with React, Redux, and MySQL that reduced analysis time by 10x."
      ],
      detailedSections: [
        {
          title: "Frontend Platform Work",
          items: [
            "Architected a Server-Driven UI pattern that enabled faster changes without tightly coupling every product variation to static frontend code.",
            "Built reusable components and patterns that improved consistency across screens and reduced repeated implementation effort.",
            "Partnered across teams to align frontend structure with evolving backend capabilities."
          ]
        },
        {
          title: "Internal Productivity",
          items: [
            "Built an analytics dashboard using React, Redux, and MySQL that reduced analysis time by roughly 10x.",
            "Focused on maintainability and extensibility so new product work could move faster with lower UI fragmentation."
          ]
        }
      ]
    },
    {
      role: "Software Engineer",
      company: "TechAspect Solutions",
      companylogo: techaspectLogo,
      date: "2018 - 2020",
      desc: "Delivered web experiences and CMS-driven solutions for product and content teams.",
      detailTitle:
        "Built adaptable web solutions across product, content, and commerce experiences.",
      impactStats: [
        "Multiple CMS integrations",
        "Vue.js and jQuery delivery",
        "Stronger onboarding and maintainability"
      ],
      technologies: ["JavaScript", "Vue.js", "jQuery", "AEM", "Sitecore"],
      descBullets: [
        "Built e-commerce and automotive web applications using JavaScript, Vue.js, and jQuery.",
        "Developed integrations with AEM and Sitecore to support dynamic content delivery.",
        "Improved maintainability and onboarding through stronger engineering practices and documentation."
      ],
      detailedSections: [
        {
          title: "Delivery Scope",
          items: [
            "Worked on consumer-facing web applications in domains including e-commerce and automotive.",
            "Built features using JavaScript, Vue.js, and jQuery in collaboration with broader delivery teams.",
            "Integrated with enterprise CMS platforms such as AEM and Sitecore to power dynamic content delivery."
          ]
        },
        {
          title: "Engineering Practices",
          items: [
            "Improved maintainability through better structure, documentation, and team-facing engineering practices.",
            "Helped reduce onboarding friction by making project conventions and implementation patterns easier to follow."
          ]
        }
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
  interestSection,
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

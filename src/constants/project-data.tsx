import { projectData } from "./types";
/**
 * Data for all Projects
 */
export const allProjectData: projectData[] = [
  {
    id: "portfolio",
    title: "My Portfolio",
    tags: ["Live Website"],
    img: "/visuals/portfolio-3d.svg",
    description:
      "This website - from concept to code - was fully created by me. Crafted using Figma and Blender, developed with React and Next.js, and deployed on Vercel for all to see!",
    projectDetails: {
      deliverables: [
        "Present a curated collection of my work and projects in a way that effectively communicates my skills, background, and accomplishments.",
        "Build a responsive website that clearly reflects my capabilities as both a developer and a designer, demonstrating both my technical proficiency and creative thinking.",
        "Design a clean, mobile-friendly interface that is easy to navigate and enjoyable to interact with, emphasizing usability and visual clarity.",
      ],
      date: "June 2025",
      role: "Lead Designer & Developer",
      techStack: [
        "React",
        "Three.js",
        "Next.JS",
        "TypeScript",
       
        "Figma",
        "Blender",
         "Vercel",
      ],
      images: [
        {
          title: "Fun Fact: This is Actually My Second Portfolio",
          src: "/projects/houseme/hm1.svg",
          description:
            "This version builds on my original portfolio—you can still view it here! While the first iteration had a solid foundation, it lacked clarity and interactivity. I wanted to push things further by integrating more visual storytelling, which led me to explore 3D design and bring a bit more artistic flair into the experience.",
        },
        {
          title: "The Challenge: Building the 3D Desk Model",
          src: "/projects/houseme/hm2.svg",
          description:
            "The most complex part of this project was creating the interactive 3D desk model. It involved learning Blender from the ground up, designing a model polished enough to export, and then converting it into a functional JSX component with custom interactions. Finding the right export settings was its own adventure—but once I cracked that, everything clicked into place. Curious about the process? Feel free to reach out—I’d love to walk you through it!",
        },
        {
          title: "Bringing It All Together",
          src: "/projects/houseme/hm3.svg",
          description:
            "After completing the 3D model, I revisited my original design and reimagined it to match this more immersive direction. While the underlying site is technically simple, the creative and iterative process behind it turned it into something I’m genuinely proud of. It’s a reflection of both my development skills and design sensibilities, and I’m excited for you to explore and interact with it.",
        },
      ],
    },

    more: {
      description:
        "This project is up and running (you’re reading this aren’t you :P)  - if you want to get a more in depth look at my work, check out the source!",
      links: [
        {
          title: "Github Repo",
          img: "/visuals/github.png",
          link: "https://github.com/kwigant/portfolio",
        },
        {
          title: "Figma Designs",
          img: "/visuals/figma-light-blue.png",
          link: "https://www.figma.com/design/0zuA4h6uzyohgGciMdN91q/Kirsten-Wigant-Portfolio?node-id=527-6060&t=lFg0rMl2PVAA93jq-0",
        },
        {
          title: "Figma Prototype",
          img: "/visuals/figma-orange.png",
          link: "https://www.figma.com/proto/0zuA4h6uzyohgGciMdN91q/Kirsten-Wigant-Portfolio?node-id=527-7250&t=lFg0rMl2PVAA93jq-0&scaling=min-zoom&content-scaling=fixed&page-id=143%3A2&hide-ui=1",
        },
      ],
    },
    imgs: [
      "/project-page-images/portfolio-1.svg",
      "/project-page-images/portfolio-2.svg",
    ],
  },
  {
    id: "zen-tank",
    title: "Zen Tank",
    img: "/visuals/zen-tank.svg",
    tags: ["Demo Ready"],
    description:
      "A React Native App designed to help plan and visualize a healthy aquarium ecosystem for your fish tank!",
    projectDetails: {
      deliverables: [
        "An app designed to help users explore a wide range of aquarium fish and plants, and build a customized tank based on their selections. Users can browse a curated database, add species to their virtual tank, and get tailored care instructions based on their unique setup.",
        "Stretch Goal: integrate AR so user can fully visualize their tank in their space!",
        "Includes the following features:",
      ],
      subDeliverables: [
        "User authentication and personalized account storage",
        "Full CRUD functionality for creating, editing, and managing custom tanks",
        "Detailed fish and plant profiles with the ability to add or remove items from tanks",
        "Care recommendations based on selected species and tank configuration",
      ],
      date: "November 2024 - February 2025",
      role: "Lead Designer & Developer",
      techStack: ["React Native", "Supabase", "Figma", "Blender"],
      images: [
        {
          title: "Getting Back Into React Native + Mobile Development",
          src: "/projects/zen-tank/zt1.svg",
          description:
            "I took on this project to brush up on my React Native and mobile design skills after a few years away from app development. I started by researching the 30 most common aquarium fish and plants, then designed a clean, user-friendly UI in Figma. I tried to focus on clarity over the colorful, icon-heavy approach I’d seen in similar apps. I’m happy with how it came together!",
        },
        {
          title: "Building with Supabase",
          src: "/projects/zen-tank/zt2.svg",
          description:
            "I chose Supabase for its seamless handling of user authentication and database management—plus, I had prior experience working with it. This project required a variety of API calls, so I focused on building efficient GET / POST / UPDATE / DELETE  methods and ensuring that each custom tank is updated correctly in real time.",
        },
        {
          title: "Laying the Foundation for AR",
          src: "/projects/houseme/hm3.svg",
          description:
            "With the API connected to the front end, my next step was optimizing performance and refining the user experience. At this stage, Zen Tank has a solid foundation, and I'm excited to move into the next phase: integrating AR. That means modeling a lot of fish—so wish me luck as I dive into the 3D side of things!",
        },
      ],
    },

    more: {
      description:
        "This project is a work in progress, check it out how far I’ve gotten! You can view my project code on github as well as click around the figma designs and prototype! We still have yet to crack the AR but everything else (user account creation, tank CRD operations, add / remove fish and plants) is up and running. If you’re interested in the project, be sure to check back in as I post more updates in the upcoming weeks!",
      links: [
        {
          title: "GitHub Repo",
          img: "/visuals/github.png",
          link: "https://github.com/kwigant/zen-tank",
        },
        {
          title: "Figma Designs",
          img: "/visuals/figma-light-blue.png",
          link: "https://www.figma.com/design/G4FR3Lj8VHHdyGtuQoDHiJ/Zen-Tank?node-id=0-1&t=quZhKHtwLCoEjNEL-1",
        },
        {
          title: "Figma Prototype",
          img: "/visuals/figma-orange.png",
          link: "https://www.figma.com/proto/G4FR3Lj8VHHdyGtuQoDHiJ/Zen-Tank?node-id=49-1763&t=quZhKHtwLCoEjNEL-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=49%3A1763&show-proto-sidebar=1",
        },
      ],
    },
    imgs: [
      "/project-page-images/zen-tank-1.svg",
      "/project-page-images/zen-tank-2.svg",
    ],
  },
  {
    id: "tarot-ai",
    title: "Tarot AI",
    tags: ["AI in Training"],
    img: "/visuals/tarot-ai.svg",
    description:
      "A proof-of-concept React Native app that uses AI to identify any tarot card and provide its most likely associated meaning. ",
    projectDetails: {
      deliverables: [
        "Train an AI model using TeachableMachine to detect which tarot card is which and return the name of the card",
        "Create a server that hosts the trained AI model and handles API request calls to the model",
        "Create a React Native app that allows users to take a picture of a tarot card and get a the name of the most likely tarot card from the model",
      ],
      date: "February 2025 - Present",
      role: "Lead Interaction Designer & Developer",
      techStack: [
        "Node.js + Express",
        "Teachable Machine + TensorFlow.js",
        "React Native",
      ],
      designStack: ["Figma", "Blender"],
      images: [
        {
          title: "Experimenting with AI Training",
          src: "/projects/houseme/hm1.svg",
          description:
            "I created this project to gain hands-on experience with training an AI model—and was pleasantly surprised by how straightforward it was to get started. I began with five tarot cards, collecting around 100 images of each, and used Teachable Machine to train the model. It worked… just not very consistently. 😅",
        },
        {
          title: "Lessons in Image Recognition",
          src: "/projects/houseme/hm2.svg",
          description:
            "Because tarot cards often feature highly stylized, detailed illustrations—especially of people—the model requires a much larger dataset to reliably distinguish between cards. It turns out that a few hundred images isn’t quite enough; to achieve high accuracy, I’d need thousands. So for now, expanding the model is on hold (finding that many quality images is no small task!), but the core concept is solid and promising.",
        },
        {
          title: "Building the Backend + App Integration",
          src: "/projects/houseme/hm3.svg",
          description:
            "Once the model was trained, I exported it and set up a standalone Node.js server that receives an image from the React Native app, runs it through the model, and returns the most likely result. While there's still more to do—like styling the app and adding support for additional cards—I’m happy to have the core functionality working end-to-end. It’s a great foundation for future improvements.",
        },
      ],
    },
    more: {
      description:
        "I'm still early in the development of this project and I will be updating this page with more project links soon. The AI is being trained and designs are being iterated on as we speak so be sure to check back in a few days to see how much progress I made!",
      links: [],
    },
    imgs: [
      "/project-page-images/tarot-ai-1.svg",
      "/project-page-images/tarot-ai-2.svg",
    ],
  },

  {
    id: "cx-px-cloud",
    title: "Cisco | CX & PX Cloud",
    tags: ["Cisco Owned"],
    img: "/visuals/cisco-logo.svg",
    description:
      "An interface for Cisco customers / partners to gather insights across Cisco’s entire product portfolio. Featured enhanced analytics throughout the product’s lifecycle as well as permission based information access across clearance levels.",
    projectDetails: {
      deliverables: [
        "Collaborated with cross-functional teams to develop a design-accurate prototype for customer(CX) and partner(PX) portal demos; Usually under tight 1-3 month deadlines.",
        "Delivered 4-6 new web flow prototypes yearly, showcased to 16,000 in-person and 1M online attendees at Cisco Live (Cisco’s annual convention), receiving highly positive feedback.",
        "Implemented and aided in the task management of the front-end development and back-end API integration, collaborating with 12 designers and developers using SCRUM/agile methodologies.",
      ],
      date: "September 2020 - June 2024",
      role: "UX Engineer; XDI Team Member",
      techStack: [
        "Angular",
        "TypeScript",
        "REST APIs",
        "Nodejs",
      ],
      images: [],
    },

    more: {
      description:
        "This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!",
    },
    imgs: [],
  },
  {
    id: "xdstudio",
    title: "Cisco | XDStudio & CMS",
    tags: ["Cisco Owned"],
    img: "/visuals/cisco-logo.svg",
    description:
      "An internal site intended to monitor of the various changes and updates within CX / PX Cloud. Powered by our own Content Management System (CMS) and Data Asset Management System (DAM), allowing designers and other admins to update XDStudio (and eventually other sites) as they see fit.",
    projectDetails: {
      deliverables: ["With a small team of 3, the goal was to:"],
      subDeliverables: [
        "Build a scalable CMS with React and AWS allowing for the creation and maintenance of internal sites.",
        "Build a scalable Data Asset Management System which handles the storage of any media for the sites built using the CMS.",
        "Using the CMS and DAM, create an internal blog site, based on given design specs, to keep track of updates on the customer and partner portals.",
      ],
      date: "January 2022 - December 2023",
      role: "UX Engineer; XDI Team Member",
      techStack: ["React", "TypeScript", "AWS", "REST APIs"],
      images: [],
    },

    more: {
      description:
        "This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!",
    },
    imgs: [],
  },
  {
    id: "cx-platform",
    title: "Cisco | CX Platform",
    tags: ["Cisco Owned"],
    img: "/visuals/cisco-logo.svg",
    description:
      "A platform for both Cisco customers and partners to access information about all their Cisco products and services throughout Cisco’s portfolio. It included insights through data visualization, modular dashboard layouts, and AI assisted search functionality",
    projectDetails: {
      deliverables: [
        "Within the team, we were given 1 month to deliver a clickable prototype with the following features:",
      ],
      subDeliverables: [
        "Create a dashboard providing customers/ partners with product insights and AI-powered search (specs provided).",
        "Allow users to access information specific to their products across the whole Cisco portfolio",
      ],
      date: "August 2024 - September 2024",
      role: "UX Engineer; XDI Team Member",
      techStack: ["React", "TypeScript", "GraphQL"],
      images: [],
    },

    more: {
      description:
        "This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!",
    },
    imgs: [],
  },
  {
    id: "houseme",
    title: "HouseMe Network LLC",
    tags: ["My Startup"],
    img: "/visuals/houseme-logo.svg",
    description:
      "An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.",
    projectDetails: {
      deliverables: [
        "Potential Tenants can search (either in a group or individually) for their future listing, apply, and hear back all on the site",
        "Landlord and Tenant dedicated portals to help specific user types fulfill their needs",
        "Tenants and landlords can each view their current rental and manage any household chores / notifications / messages between housing group and/or landlord",
        "Stretch Goal: referral system for tenants to recommend other tenants to a property with hopes of mitigating landlord struggle of filling a place quickly",
      ],
      date: "April 2019 - March 2024",
      role: "CEO, Co-Founder, Lead Frontend Engineer & Designer, Head of Finance & Business Operations, Recruiter & Trainer",
      techStack: ["React", "NextJS", "GraphQL", "Axios", "mySQL"],
      images: [
        {
          title: "",
          src: "/projects/houseme/hm1.svg",
          description:
            "An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.",
        },
        {
          title: "",
          src: "/projects/houseme/hm2.svg",
          description:
            "An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.",
        },
        {
          title: "",
          src: "/projects/houseme/hm3.svg",
          description:
            "An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.",
        },
      ],
    },

    more: {
      description:
        "Since this company is no longer active and our servers are no longer up and running, it’s a little difficult to give a live demo of the product. Our designs and research are rather large so I would want to give a proper walk through of the findings if interested. Let’s connect if you would like to discuss HouseMe with me more!",
    },
    imgs: [
      "/project-page-images/houseme-1.svg",
      "/project-page-images/houseme-2.svg",
    ],
  },
];

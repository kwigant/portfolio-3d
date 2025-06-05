import { projectData } from "./types";
/**
 * Data for all Projects
 */
export const allProjectData: projectData[] = [
  {
    id: "zen-tank",
    title: "Zen Tank",
    img: "/project-header-image/zen-tank.png",
    tags: ["Demo Ready"],
    description:
      "A recent personal project of mine that allows you to visualize an ecosystem for your fish! Inspired by my want to own a fish paired with my lack of knowledge on how to properly care for one.  This app helps you build an AR model of your fish tank and figure out optimal communal tank additions and conditions",
    // projectDetails: {
    //   deliverables:
    //     "<p>Create an app that allows users to visualize their own fish tank by browsing a database of aquarium fish and plants and adding what they think suits their tank best.</p><p>Includes the following features: </p> <br/> <ul><li>CRUD operations on the tanks</li><li>Basic user account sign in / storage</li><li>Fish / plant profiles that can be added / removed from tank</li><li>Care instructions for personalized tank</li><ul><br/><p>Stretch Goal: integrate AR so user can fully visualize their tank in their space!</p>",
    //   date: "November 2024 - Present",
    //   role: "Lead Designer & Developer",
    //   techStack: [
    //     "React Native",
    //     "Supabase",
    //     "React Native Paper Library (Components & Theme)",
    //   ],
    //   designStack: ["Figma", "Blender"],
    // },
    // approach: [
    //   {
    //     title: "Research",
    //     description:
    //       "<p>The idea for this app came about because I learned about “aquascapes” (fish tank ecosystems) online and wanted to build one myself.</p><br/><p>Of course to do that correctly, I wanted to research the fish and plants for my tank. I noticed that, while there were other apps similar to this, they felt rather clunky to use and I thought it would be a fun project to try to build myself.</p>",
    //   },
    //   {
    //     title: "Design",
    //     description:
    //       "<p>I tried to not overthink the design, I would have a lot of content so I had to focus on grouping things in a way that wasn’t overwhelming. I was going for a sleeker, clean feel - something to further differentiate from the overuse of color and icons often found in competitor apps.</p><br/><p>I used Figma to mock up ideas and after a few days had some high fidelity specs ready to be built.</p>",
    //   },
    //   {
    //     title: "Develop",
    //     description:
    //       "<p>I wanted to refresh myself with React Native which was one of my personal goals for this project.</p><br/><p>The other personal goal was to keep everything as organized as possible. When working alone there’s always the temptation to take shortcuts, but I plan on putting this on the app store eventually so it has to be production level.</p>",
    //   },
    // ],
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
    imgs: ["/project-page-images/zen-tank-1.svg", "/project-page-images/zen-tank-2.svg"],
  },
  {
    id: "tarot-ai",
    title: "Tarot AI",
    tags: ["AI in Training"],
    img: "/project-header-image/tarot-ai.png",
    description:
      "A personal project that allows you to identify any tarot card and get it’s associated meaning through AI image detection and text generation. Also includes a stretch goal of integrating AR to demonstrate your reading visually.",
    // projectDetails: {
    //   deliverables:
    //     "<p>Use AI image detection to correctly obtain the name and description of the current tarot card  in the user’s phone camera.</p><br/><p>If multiple tarot cards are captured in the camera, use AI to generate a reading that builds off the descriptions of the cards</p><br/><p>Package it all in a usable and enjoyable UI!</p><br/><p>Stretch Goal: Generate an AR image that visualizes your card / reading.</p>",
    //   date: "February 2025 - Present",
    //   role: "Lead Interaction Designer & Developer",
    //   techStack: ["iOS - Swift", "Supabase", "Apple CoreML (AI Library)"],
    //   designStack: ["Figma", "Blender"],
    // },
    // approach: [
    //   {
    //     title: "Plan",
    //     description:
    //       "<p>I've had this idea for a few years now but it wasn’t until recently that AI technologies could make this possible for a personal project such as this so first thing I had to do was research the best way to train an AI model.</p><br/><p>I decided on Xcode because I wanted a Swift refresher as well as chance to play with the Apple Core ML kits.</p>",
    //   },
    //   {
    //     title: "Train AI",
    //     description:
    //       "<p>While training the AI to recognize tarot cards seemed like a really daunting task, I knew that there were libraries out there for doing it. In fact Apple has their very own AI that you can train a subset of - perfect!</p><br/><p>It requires a lot of labeling of tarot cards, but after some helpful youtube videos (and a LOT of pictures of tarot cards) I am able to get it up and running! It’s still new though so there’s still a bit more training it needs to be put through for it to be accurate. </p>",
    //   },
    //   {
    //     title: "Make it Pretty",
    //     description:
    //       "<p>The AI will be doing most of the heavy lifting, once that’s handled it’s basically a matter of displaying text and an image. So even though there’s not as much UI I still need to take some time to figure out the layout of everything. I’m working on Figma to create the design specs. If you’re interested in this project, be sure to check back in a few days for any updates I post!</p>",
    //   },
    // ],
    more: {
      description:
        "I'm still early in the development of this project and I will be updating this page with more project links soon. The AI is being trained and designs are being iterated on as we speak so be sure to check back in a few days to see how much progress I made!",
      links: [],
    },
    imgs: ["/project-page-images/tarot-ai-1.svg", "/project-page-images/tarot-ai-2.svg"],
  },
  {
    id: "portfolio",
    title: "My Portfolio",
    tags: ["Live Website"],
    img: "/project-header-image/portfolio.png",
    description:
      "The website you are currently on has been designed and built by me! Designed through figma, built on React and hosted on Vercel for everyone in the world to view and get to know more about ~yours truly~",
    // projectDetails: {
    //   deliverables:
    //     "<p>Have a responsive website available to the public that demonstrates who I am as both a developer and a designer.</p><br/><p>Showcase all my professional work over the years effectively and concisely as well as give an idea about who I am as a person.</p><br/><p>Display everything in a clean, usable, and enjoyable UI that is also mobile friendly</p>",
    //   date: "December 2024 - January 2025 ",
    //   role: "Lead Designer & Developer",
    //   techStack: ["React", "NextJS", "TypeScript", "Vercel"],
    //   designStack: ["Figma"],
    // },
    // approach: [
    //   {
    //     title: "Design",
    //     description:
    //       "<p>Of all my projects, this is the one I had the most pressure around. I’ve never had my own website and I wanted it to make a lasting impression. I took it slow with the design process taking the bulk of my time - reiterating designs on Figma with the goal of really trying to consider multiple layouts and ideas in order to get the best result.</p>",
    //   },
    //   {
    //     title: "Iterate",
    //     description:
    //       "<p>It was a lot of the detail work that required the most iteration. The page layouts came to me relatively easily but the visuals took me months to make. Every visual you see was created by me with exception of a few icons I used in their construction. </p>",
    //   },
    //   {
    //     title: "Launch",
    //     description:
    //       "<p>After all that design iteration, the development ended up being the easiest part! The website itself is technically very simple, being a static React website hosted on Vercel. But the goal was really to focus on my fundamentals and get something out to the public that I am proud of - and I’m glad to say that I am!</p>",
    //   },
    // ],
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
    imgs: ["/project-page-images/portfolio-1.svg", "/project-page-images/portfolio-2.svg"],
  },
  {
    id: "poliscope",
    title: "PoliScope",
    tags: ["User Case Study"],
    img: "/project-header-image/poliscope.png",
    description:
      "A UX research case study focused on designing a responsive website that helps users easily find their state and federal government representatives based on their location. The project prioritized simplicity, cleanliness, and accessibility, incorporating features like language translation and text-to-speech to ensure accessibility for its large audience (the US Voting population)",
    // projectDetails: {
    //   deliverables:
    //     "<p>Full case study that encompasses user research, competitive analysis, user profiles and stories, as well as a map of the wire-frames to high fidelity designs</p><br/><p>Focus on accessibility features and simplicity.  Features like language translation, text-to-speech / speech-to-text, and geo-location will be integral in creating a truly accessible platform</p><br/><p>Stretch Goal: Get someone to help me build this project! I am looking for a primarily backend engineer who can help me collect and manage all of the political data that I would need for this project (there is a lot). </p>",
    //   date: "December 2024",
    //   role: "Lead Researcher & Designer",
    //   techStack: ["To Be Determined"],
    //   designStack: ["Figma"],
    // },
    // approach: [
    //   {
    //     title: "Research",
    //     description:
    //       "<p>This idea came about as a part of my Google UX Design Course, being a prompt that I was interested in. </p><br/><p>While researching other solutions, I found that accessibility and simplicity were two aspects that tend to be missing from competitors. These sites are generally very cluttered and hard to read. As well as filled with ads or outside links that don’t really pertain to the goal of the user experience. </p><br/><p>I wanted to make sure my solution would be as straightforward as possible and mitigate the common pain points for the user.</p>",
    //   },
    //   {
    //     title: "Design",
    //     description:
    //       "<p>This was my first design that truly embodied the product development lifecycle process. Since I was following a course, I was given a lot more structure than in previous designs. And it’s something that I have applied to my other projects moving forward. </p><br/><p>This project deals with a lot more data than the other projects I have dealt with. Not only is it a lot of data but it needs to be up to date and accurate.</p><br/><p>While designing I had to always be aware of the content I was balancing. The goal was simplicity so I had to be very deliberate with my layout and the data I would display.</p>",
    //   },
    //   {
    //     title: "Test & Iterate",
    //     description:
    //       "<p>This product has been going through a lot of usability testing and iteration. Currently it is still in a low - fidelity design state, however user feedback is being gathered on it as we speak. </p> <br/> <p>This design is unique in that it caters to a very large and diverse audience (the general US voting population). As such I am making a very conscious effort to put it through more usability studies in order to work out as many design and accessibility flaws as possible. </p>",
    //   },
    // ],
    more: {
      description:
        "This project is currently on pause as I have more feedback that I need to go through and organize. If you are interested in this project be sure to check back in as I post more links and updates in the coming weeks!",
      links: [],
    },
    imgs: ["/project-page-images/poliscope-1.svg", "/project-page-images/poliscope-2.svg"],
  },
  {
    id: "cx-px-cloud",
    title: "CX & PX Cloud",
    tags: ["Cisco Owned"],
    img: "/project-header-image/cisco.png",
    description:
      "An interface for Cisco customers / partners to gather insights across Cisco’s entire product portfolio. Featured enhanced analytics throughout the product’s lifecycle as well as permission based information access across clearance levels.",
    // projectDetails: {
    //   deliverables:
    //     "<p>Collaborated with cross-functional teams to develop a design-accurate prototype for customer(CX) and partner(PX) portal demos; Usually under tight 1-3 month deadlines.</p><br/><p>Delivered 4-6 new web flow prototypes yearly, showcased to 16,000 in-person and 1M online attendees at Cisco Live (Cisco’s annual convention), receiving highly positive feedback.</p><br/><p>Implemented and aided in the task management of the front-end development and back-end API integration, collaborating with 12 designers and developers using SCRUM/agile methodologies.</p>",
    //   date: "September 2020 - June 2024",
    //   role: "UX Engineer; XDI Team Member",
    //   techStack: [
    //     "Angular",
    //     "TypeScript",
    //     "REST APIs",
    //     "Nodejs",
    //     "In-House Component Library",
    //     "D3.js Data Visualizations",
    //   ],
    // },
    // approach: [
    //   {
    //     title: "Get Design Specs",
    //     description:
    //       "<p>Our responsibility was to maintain the prototype for future customer and stakeholder demonstrations.</p><br/><p> Throughout the year, we received new feature requests and identified bugs, often pointed out by the design team for us to address. These updates were communicated through Figma specifications, and we were tasked with implementing them efficiently.</p>",
    //   },
    //   {
    //     title: "Divide & Conquer",
    //     description:
    //       "<p>My team consisted of 12 members, though we were frequently divided into smaller groups to manage other concurrent projects.</p><br/><p> When new specifications arrived, 4-6 of us would take on the tasks by breaking down the Figma files into smaller, manageable components that were then prioritized and assigned to individual team members. </p><br/><p> This structured approach was essential in meeting our tight 1-3 month deadlines.</p>",
    //   },
    //   {
    //     title: "Deliver Prototype",
    //     description:
    //       "<p>Before delivering new features, we would confirm the details with the designers several times to ensure everything was accurate.</p><br/><p> Once finalized, the features were made public in our demo product and presented to customers and stakeholders for feedback. Meanwhile, my team would return focus to maintaining the prototype, ready to implement the next set of features.</p>",
    //   },
    // ],
    more: {
      description:
        "This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!",
    },
    imgs: [],
  },
  {
    id: "xdstudio",
    title: "XDStudio & CMS",
    tags: ["Cisco Owned"],
    img: "/project-header-image/cisco.png",
    description:
      "An internal site intended to monitor of the various changes and updates within CX / PX Cloud. Powered by our own Content Management System (CMS) and Data Asset Management System (DAM), allowing designers and other admins to update XDStudio (and eventually other sites) as they see fit.",
    // projectDetails: {
    //   deliverables:
    //     "<p>With a small team of 3, the goal was to: </p><br/><ul><li>Build a scalable CMS with React and AWS allowing for the creation and maintenance of internal sites.</li><li>Build a scalable Data Asset Management System which handles the storage of any media for the sites built using the CMS.</li><li>Using the CMS and DAM, create an internal blog site, based on given design specs, to keep track of updates on the customer and partner portals.</li></ul>",
    //   date: "January 2022 - December 2023",
    //   role: "UX Engineer; XDI Team Member",
    //   techStack: ["React", "TypeScript", "AWS", "REST APIs"],
    // },
    // approach: [
    //   {
    //     title: "Determine Priorities",
    //     description:
    //       "<p>This was a new internal tool that we were building with a small subset of the design team. As a result, specifications would change from time to time.</p><br/><p> It was our job as developers to pick the tasks that were core to the functionality and not get too caught up with the design and any sudden changes associated.</p>",
    //   },
    //   {
    //     title: "Divide & Conquer",
    //     description:
    //       "<p>Since there were 3 of us, we ended up having one engineer focus on the CMS, one on the DAM, and the last focused on assisting whichever engineer needed more help. I was the one who would go back and forth and assist. </p><br/><p>Most of my time was spent helping create components for the CMS, though I also got to try my hand with more back-end related tasks - the largest of which being implementing a functional prototype of the CMS’ global search using AWS Cloudfront.</p>",
    //   },
    //   {
    //     title: "Launch & Maintain",
    //     description:
    //       "<p>Once the CMS and DAM were stable, we were able to create and host our new blog site! We got the functionality to the point where users could create their own page and customize / update it all on their own. </p><br/><p>After launching, all that was left was general maintenance for the site - something I personally did not oversee.</p>",
    //   },
    // ],
    more: {
      description:
        "This project is owned by Cisco and as a result I can’t show any code or visuals associated with this product. However if you would like to chat more about my experience at Cisco and this project in particular then let’s connect!",
    },
    imgs: [],
  },
  {
    id: "cx-platform",
    title: "CX Platform",
    tags: ["Cisco Owned"],
    img: "/project-header-image/cisco.png",
    description:
      "A platform for both Cisco customers and partners to access information about all their Cisco products and services throughout Cisco’s portfolio. It included insights through data visualization, modular dashboard layouts, and AI assisted search functionality",
    // projectDetails: {
    //   deliverables:
    //     "<p>Within the team, we were given 1 month to deliver a clickable prototype with the following features: </p><ul><li>Create a dashboard providing customers/ partners with product insights and AI-powered search (specs provided).</li><li>Allow users to access information specific to their products across the whole Cisco portfolio.</li></ul>",
    //   date: "August 2024 - September 2024",
    //   role: "UX Engineer; XDI Team Member",
    //   techStack: ["React", "TypeScript", "GraphQL"],
    // },
    // approach: [
    //   {
    //     title: "Get Specs",
    //     description:
    //       "<p>This was a new project that we had to work on while the designs were still being finalized so it was extremely important for the team to stay connected with the design team members and make sure that if any changes did occur we would know about it.</p>",
    //   },
    //   {
    //     title: "Divide & Conquer",
    //     description:
    //       "<p>We got to start from scratch for this project so we went with React and Graphql for the internals. Since I was one of the more experienced React team members, I was able to scaffold a lot of the key sections of the dashboard such as the navigation and the main dashboard landing. </p>",
    //   },
    //   {
    //     title: "Deliver Prototype",
    //     description:
    //       "<p>The deadline was tight but we had enough hands on deck that we were able to meet demands. The dashboard was functional and we were able to pass it off to the designers for it’s intended demo and eventually be added to in the future. </p>",
    //   },
    // ],
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
    img: "/project-header-image/houseme.png",
    description:
      "An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.",
    // projectDetails: {
    //   deliverables:
    //     "<p>Potential Tenants can search (either in a group or individually) for their future listing, apply, and hear back all on the site.</p><br/><p>Landlord and Tenant dedicated portals to help specific user types fulfill their needs.</p><br/><p>Tenants and landlords can each view their current rental and manage any household chores / notifications / messages between housing group and/or landlord.</p><br/><p>Stretch Goal: referral system for tenants to recommend other tenants to a property with hopes of mitigating landlord struggle of filling a place quickly.</p>",
    //   date: "April 2019 - March 2024",
    //   role: "CEO, Co-Founder, Lead Frontend Engineer & Designer, Head of Finance & Business Operations, Recruiter & Trainer",
    //   techStack: ["React", "TypeScript", "GraphQL"],
    // },
    // approach: [
    //   {
    //     title: "Ideate",
    //     description:
    //       "<p>The idea for HouseMe came from my co-founder and I struggling to find affordable housing as college juniors. Frustrated by the challenges in our town, we decided to create a platform to solve the problem.</p><br/><p> We spent countless hours brainstorming, how to tackle the issues we faced. While the vision was clear, our approach constantly evolved as we learned more.</p><br/><p>Fortunately, finding help was relatively easy at first. Many in our college community sympathized. Though even with help the task was still daunting.</p>",
    //   },
    //   {
    //     title: "Learn & Iterate",
    //     description:
    //       "<p>We quickly realized the scale of the challenge. </p><br/><p>I had just switched my major to computer science  and have never built something this big. Google and YouTube became our go-to teachers as we juggled coursework and life.</p><br/><p>Progress was slow, but every win felt monumental. Our small team grew stronger, and we constantly improved the project. </p><br/><p>Even after graduation and the pandemic, we remained committed to making it work.</p>",
    //   },
    //   {
    //     title: "Test",
    //     description:
    //       "<p>Over 4+ years, we developed multiple prototypes—Android, React Native, and web—and secured $20k in investments. Each prototype went through usability studies, allowing us to get further insights for our product.</p><br/><p>In hindsight, we could have been a lot more efficient. We started with an app idea but ended up with a website. Expertise was limited, and we had to become our own experts.</p><br/><p>Even though we didn’t end up fully launching, I’m still really proud of what we accomplished! It gave me the confidence to take on any project and a deeper understanding and respect of startup culture.</p>",
    //   },
    // ],
    more: {
      description:
        "Since this company is no longer active and our servers are no longer up and running, it’s a little difficult to give a live demo of the product. Our designs and research are rather large so I would want to give a proper walk through of the findings if interested. Let’s connect if you would like to discuss HouseMe with me more!",
    },
    imgs: ["/project-page-images/houseme-1.svg", "/project-page-images/houseme-2.svg"],
  },
];

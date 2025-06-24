import { projectList } from "@/constants/types";

export const devData: projectList[] = [
    {
        title: "Most Recent Projects",
        list: [
              {
                id: 'portfolio',
                path: '/projects/portfolio',
                title: 'My Portfolio',
                img: '/visuals/portfolio-3d.svg',
                description: 'This website - from concept to code - was fully created by me. Crafted using Figma and Blender, developed with React and Next.js, and deployed on Vercel for all to see!',
               
                subtitle: 'The website you are currently on has been designed and built by me! Designed through figma, built on React and hosted on Vercel for everyone in the world to view and get to know more about ~yours truly~',

                tags: [
                    'React', 'NextJS', 'TypeScript', 'Three.js'
                ]
            },
            {   
                id: 'tarot-ai',
                path: '/projects/tarot-ai',
                title: 'Tarot AI',
                subtitle: 'A proof-of-concept React Native app that uses AI to identify any tarot card and provide its most likely associated meaning.',
                img: '/visuals/tarot-ai.svg',
                description: 'An iOS app that allows you to identify any tarot card and get it’s associated meaning through AI image detection and text generation, with the ultimate goal of integrating AR to demonstrate your reading visually.',
                tags: [
                    'React Native', 'TensorFlow.js', 'TeachableMachine', 'Node.js', 
                ]
            },
            {
                id: 'zen-tank',
                path: '/projects/zen-tank',
                title: 'Zen Tank',
                img: '/visuals/zen-tank.svg',
                subtitle: 'A React Native App designed to help plan and visualize a healthy aquarium ecosystem for your fish tank!',
                description: 'An iOS and Android app that allows you to visualize an ecosystem for your fish! Build an AR model of your fish tank and figure out optimal communal tank additions and conditions for your own custom aquascape.',
                tags: [
                    'React Native', 'Supabase', 'Figma'
                ]
            },
            
        ]
    },
    {
        title: "My Work at Cisco",
        list: [
            {   id: 'cx-px-cloud',
                path: '/projects/cx-px-cloud',
                title: 'CX & PX Cloud',
                img: '/visuals/cisco-logo.svg',
                subtitle: 'An interface for Cisco Customers and Partners alike to gather insights across Cisco’s entire product portfolio. ',
                description: 'Featured enhanced analytics throughout the product’s lifecycle as well as permission based information access across clearance levels.',
                tags: [
                    'Angular', 'REST APIs', 'Node.js'
                ]
            },
            {
                id: 'xdstudio',
                path: '/projects/xdstudio',
                title: 'XDStudio & CMS',
                img: '/visuals/cisco-logo.svg',
                subtitle: 'An internal site intended to monitor of the various changes and updates within CX / PX Cloud, powered by our own Content Management System (CMS) and Data Asset Management System (DAM).',
                description: 'Improved efficiency for admins and designers through streamlined content updates, saving time and money.',
                tags: [
                    'React', 'AWS CloudFront'
                ]
            },
            {   
                id: 'cx-platform',
                path: '/projects/cx-platform',
                title: 'CX Platform',
                img: '/visuals/cisco-logo.svg',
                subtitle: 'A platform for both Cisco customers and partners to access information about all their Cisco products and services throughout Cisco’s portfolio. ',
                description: 'It included insights through data visualization, modular dashboard layouts, and AI assisted search functionality',
                tags: [
                    'React', 'GraphQL'
                ]
            },
        ]
    }, 
    {
        title: "My Previous Business",
        list: [
            {   
                id: 'houseme',
                path: '/projects/houseme',
                title: 'HouseMe Networks LLC',
                subtitle: 'An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.',
                img: '/visuals/houseme-logo.svg',
                description: 'An ambitious personal project turned start-up - a social network dedicated to helping you with all your rental needs! From search, to sign, and beyond we are a platform dedicated to helping both renters and landlords throughout every step of the process.',
                tags: [
                    "React", "NextJS", "GraphQL", "Axios", "mySQL"
                ]
            }
        ]
    }
]
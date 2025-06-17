export type project = {
    title: string,
    img: string,
    subtitle?: string,
    description: string,
    tags: string[],
    id: string,
    path: string,
}

export type projectList = {
    title: string,
    list: project[]
}

export type projectData = {
    id: string;
    title: string;
    tags: string[];
    img: string;
    description: string;
    projectDetails: projectDetails;
    // approach: approach[];
    more: more;
    imgs: string[]
}

export type projectLink = {
    title: string;
    img: string;
    link: string;
}

export type projectDetails = {
    deliverables: string[];
    subDeliverables?: string[];
    date: string;
    role: string;
    techStack: string[];
    designStack?: string[];
};


type more = {
    description: string;
    links?: projectLink[]
}
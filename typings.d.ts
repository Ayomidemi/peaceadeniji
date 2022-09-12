interface Projects {
    title: string
    backgroundImg: string
    tech: string
    projectUrl: string
    githubUrl: string
}

interface IToastNotificationProps {
    type: string
    text: string
    icon: any
    onclick: () => void;
}
import '@/styles/projects.scss';

type developmentStack = {
    name: string,
    bg: string,
}

export default function DevelopmentStackItem({ name, bg }: developmentStack) {
    return (
        <span className="development-stack-name font-semibold border-radus p-3 mt-2 mr-2"
            style={{ background: bg }}
        >{name}</span>
    );
}
import '@/styles/projects.scss';

export default function DevelopmentStackItem({ name, bg }) {
    return (
        <span className="development-stack-name font-semibold border-radus p-3 mt-2 mr-2"
            style={{ background: bg }}
        >{name}</span>
    );
}
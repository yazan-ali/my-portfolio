import './projects.scss';

export default function DevelopmentStackItem({ name, bg }: developmentStack) {
    return (
        <span className="development-stack-name font-semibold text-sm md:text-base border-radus p-3 mt-2 mr-2"
            style={{ background: bg }}
        >{name}</span>
    );
}
import "@/styles/aboutMe.scss";

export default function AboutMe() {
    return (
        <section id="about-me" className="about-me relative text-center md:text-start">
            <div className="container flex flex-col-reverse md:flex-row justify-center lg:w-4/5 items-center gap-11 h-full pt-4">
                <div className="flex-1">
                    <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
                    <p className="text-lg">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </p>
                    <a href="#skills" className="btn btn-primary mt-3">Know More</a>
                </div>
                <img src="/images/example-12.svg" className="flex-1" alt="" role="presentation" />
            </div>
        </section>
    )
}

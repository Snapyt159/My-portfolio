export default function HeroSection() {
    return <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
            <div className="hero--section--content">
                <p className="section--title">Hey, I'm Fernando</p>
                <h1 className="hero--section--title">
                    <span className="hero--section--title--color">
                        FrontEnd
                    </span>{" "}
                    <br />
                    Developer
                </h1>
                <p className="hero--section-description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima dignissimos alias corporis libero quis deserunt omnis obcaecati est laudantium, veritatis voluptate rem adipisci! Nesciunt placeat quis animi fuga voluptas nemo?
                    <br /> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem vero fugiat dolorum!
                </p>
            </div>
            <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
            <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
    </section>;
    
}
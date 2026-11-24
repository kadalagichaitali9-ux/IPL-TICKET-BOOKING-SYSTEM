function Hero() {
    return (
        <section className="hero" id="home" aria-labelledby="hero-title">
            <div className="container hero-content">
                <p className="hero-kicker">IPL 2026 · The season is calling</p>
                <h1 id="hero-title">Experience the stadium <span>energy live.</span></h1>
                <p className="hero-copy">
                    Big shots, roaring crowds, unforgettable nights. Find your match and make it a matchday to remember.
                </p>
                <a className="button" href="#matches">Explore matches</a>
            </div>
        </section>
    );
}

export default Hero;

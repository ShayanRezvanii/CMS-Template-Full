import About from "./About";
import Blog from "./Blog";
import Footer from "./Footer";
import Hero from "./Hero";
import Menu from "./Menu";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section id="خانه">
          <Hero />
        </section>
        <section className="درباره ما">
          <About />
        </section>
        <section id="منو">
          <Menu />
        </section>
        <section id="وبلاگ">
          <Blog />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

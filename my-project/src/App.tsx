import Header from "./Componetnt/header";
import Banner from "./Componetnt/banner";
import Events from "./Componetnt/event";
import BlogPost from "./Componetnt/blog";
import Customer from "./Componetnt/customer";
import Organize from "./Componetnt/organize ";
import Footer from "./Componetnt/footer";
import "./App.css";
function Section() {
  return (
    <>
      <header className="header-section">
        <Header />
      </header>
      <section>
        <Banner />
      </section>
      <section className="main-event-section">
        <Events />
      </section>
      <section className="main-blog-section">
        <BlogPost />
      </section>
      <section className="main-customer-section">
        <Customer />
      </section>
      <section className="main-organize-form">
        <Organize />
      </section>
      <footer className="main-footer-section">
        <Footer />
      </footer>
    </>
  );
}
export default Section;

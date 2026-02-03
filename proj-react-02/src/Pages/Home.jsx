import Header from "../components/Header";
import Hero from "../components/Hero";
import Post from "../components/Post";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />

      <section style={{ padding: "40px" }}>
        <h2>Últimas do blog</h2>

        <Post title="5 dicas para sua carreira profissional" />
        <Post title="5 dicas para sua carreira profissional" />
        <Post title="5 dicas para sua carreira profissional" />

        <a href="#" style={{ color: "#2f5c8f" }}>
          Ver tudo
        </a>
      </section>
    </>
  );
};

export default Home;

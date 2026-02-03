const Hero = () => {
  return (
    <section style={styles.hero}>
      <img
        src="https://i.imgur.com/0y8Ftya.png"
        alt="Perfil"
        style={styles.image}
      />
      <div>
        <h1>Halina Amorim</h1>
        <p>
          Graduada em Engenharia Ambiental e Sanitária, Pedagoga e estudante em Análise e 
         Desenvolvimento de Sistemas e Técnico em Informática. E sempre em busca de novos conhecimentos.
        </p>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    backgroundColor: "#2f5c8f",
    color: "white",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
    justifyContent: "center"
  },
  image: {
    width: "120px",
    borderRadius: "50%"
  }
};

export default Hero;

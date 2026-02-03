const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <a href="#">Blog</a>
        <a href="#">Sobre</a>
        <a href="#">Descrição</a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#2f5c8f",
    padding: "20px"
  },
  nav: {
    display: "flex",
    gap: "20px",
    justifyContent: "center"
  }
};

export default Header;

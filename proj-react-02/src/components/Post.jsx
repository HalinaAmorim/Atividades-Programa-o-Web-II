const Post = ({ title }) => {
  return (
    <div style={styles.post}>
      <h3>{title}</h3>
      <p>
        Confira algumas dicas que podem ajudar a alavancar sua carreira como
        desenvolvedor front-end.
      </p>
    </div>
  );
};

const styles = {
  post: {
    marginBottom: "20px"
  }
};

export default Post;


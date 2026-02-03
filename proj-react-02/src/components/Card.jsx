const Card = ({ item }) => {
  return (
    <div>
      <h3>{item.nome}</h3>
      <p>{item.descricao}</p>
    </div>
  );
};

export default Card;

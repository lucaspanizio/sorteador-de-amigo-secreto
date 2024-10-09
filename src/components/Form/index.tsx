export const Form = () => {
  return (
    <form>
      <input type="text" placeholder="Insira os nomes dos participantes" />
      <button type="submit" disabled={true}>
        Adicionar
      </button>
    </form>
  );
};

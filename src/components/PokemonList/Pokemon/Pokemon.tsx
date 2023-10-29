function Pokemon({ name = 'Name', height = 'height', weight = 'weight' }) {
  return (
    <>
      <div>{name}</div>
      <div>{height}</div>
      <div>{weight}</div>
    </>
  );
}

export default Pokemon;

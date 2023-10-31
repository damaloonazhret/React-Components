const filterResults = (results, searchTerm): Array<object> => {
  return results.filter((result) =>
    result.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
};

export default filterResults;

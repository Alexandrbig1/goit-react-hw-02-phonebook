const Filter = () => {
  return (
    <div className="filter">
      <label htmlFor="search">Find contacts by name</label>
      <input type="text" name="search" placeholder="John Doe" />
    </div>
  );
};

export default Filter;

export default function Filter({ onInputHandler }) {
  return (
    <div className="filter">
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        name="search"
        placeholder="John Doe"
        onChange={(e) => {
          onInputHandler(e.target.value);
        }}
      />
    </div>
  );
}

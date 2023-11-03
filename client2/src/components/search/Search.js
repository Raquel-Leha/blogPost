import "./Search.css"


export const Search = ({ setValueFilter }) => {
  function handleOnChange(ev) {
    setValueFilter(ev.target.value);
  }

  return (
    <div className="div-input">
      <input
        className="style-input"
        placeholder="Encuentra tu receta aquí"
        onChange={handleOnChange}
      ></input>
    </div>
  );
};

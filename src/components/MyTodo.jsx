import { brands, colors } from "../constants";
function MyTodo() {
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
    console.log(
      result.get("Username"),
      result.get("brands"),
      result.get("colors")
    );
  }
  return (
    <div className="flex">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto w-1/3 gap-2"
      >
        <h2 className="text-black text-xl mt-5 pb-5">Malumot qo'shish</h2>

        <input
          name="Username"
          type="text"
          placeholder="Ismingizni kiriting..."
          className="input input-bordered w-full "
          required
        />
        <select
          name="brands"
          className="select select-bordered w-full "
          defaultValue="Mashinangizni nomini kiriting*"
          required
        >
          <option disabled>Mashinangizni nomini kiriting*</option>
          {brands.length > 0 &&
            brands.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
        </select>

        <select
          name="colors"
          className="select select-bordered w-full "
          defaultValue="Mashinangizni rangini kiriting*"
          required
        >
          <option disabled>Mashinangizni rangini kiriting*</option>
          {colors.length > 0 &&
            colors.map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              );
            })}
        </select>
        <button type="onSubmit" className="btn btn-neutral">
          Saqlash
        </button>
      </form>
    </div>
  );
}

export default MyTodo;

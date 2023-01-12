import Books from "../assets/libros.jpg";
export const Wellcome = () => {
  return (
    <div>
      <h1 className="display-1">Bienvenidos</h1>
      <div>
        <img src={Books}></img>
      </div>
    </div>
  );
};

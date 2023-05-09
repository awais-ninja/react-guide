import { Navbar, Footer } from "../components";

function Default(props) {
  return (
    <div>
      <Navbar />
      {props.children}
      <Footer />
    </div>
  );
}

export default Default;

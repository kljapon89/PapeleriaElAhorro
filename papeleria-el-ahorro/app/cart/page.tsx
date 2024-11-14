import { getCurrentUser } from "../../actions/getCurrentUser";
import Container from "../components/Container";
import CartClient from "../cart/CartClient";

const Cart = async () => {
  let currentUser = null;
  let loading = true; // Agregamos un estado de carga

  try {
    currentUser = await getCurrentUser();
  } catch (error) {
    console.error("Error fetching current user:", error);
  } finally {
    loading = false; // Cambiamos el estado de carga al final
  }

  return (
    <div className="pt-6">
      <Container>
        {loading ? ( // Renderiza un mensaje de carga
          <div>Loading...</div>
        ) : currentUser ? (
          <CartClient currentUser={currentUser} /> // Renderiza CartClient si hay un usuario
        ) : (
          <div>Please log in to view your cart.</div> // Mensaje si no hay usuario
        )}
      </Container>
    </div>
  );
};

export default Cart;


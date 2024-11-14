
import Summary from "./Summary";
import getUsers from "../../actions/getUsers";
import Container from "../../app/components/Container";
import getProducts from "../../actions/getProducts";

const Admin = async () => {
  const products = await getProducts({ category: null });
  const users = await getUsers();

  return (
    <div className="pt-8">
      <Container>
        <Summary  users={users} products={products} />
      </Container>
    </div>
  );
};

export default Admin;

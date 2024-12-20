import Container from "../../components/Container";
import ManageProductsClient from "./ManageProductsClient";
import getProducts from "../../../actions/getProducts";
import { getCurrentUser } from "../../../actions/getCurrentUser";
import NullData from "../../../app/components/NullData";

const MangeProducts = async() => {
  const products = await getProducts({category:null})
  const currentUser= await getCurrentUser()

  if(!currentUser||currentUser.role !== "ADMIN"){
    return <NullData title="Oops! Access denied"/>
  }
  return (
    <Container>
      <ManageProductsClient products={products}/>
    </Container>
  );
};

export default MangeProducts;

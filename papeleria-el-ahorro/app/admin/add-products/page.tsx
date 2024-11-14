import { getCurrentUser } from "../../../actions/getCurrentUser";
import Container from "../../components/Container";
import NullData from "../../components/NullData";
import AddProductForm from "../add-products/AddProductForm";

const AddProducts =async () => {

  const currentUser = await getCurrentUser(); 
  
  if (!currentUser||currentUser.role !=='ADMIN'){
    return <NullData title="Oops Access denied"/>;
  }
  return (
    <div className="p-2">
      <Container>
       
          <AddProductForm />
      
      </Container>
    </div>
  );
};

export default AddProducts;

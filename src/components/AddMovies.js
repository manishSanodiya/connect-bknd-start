import { Row,Col,Form,Button } from "react-bootstrap";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


const AddMovies = () => {
  const onSubmitHandler=(e)=>{
    e.preventDefault();
    const enteredValue={
        title:document.getElementById("formGridEmail").value,
        Release:document.getElementById("formGridAddress1").value,
        Id:document.getElementById("formGridPassword").value,
        OpeningText:document.getElementById("formGridAddress2").value,
    }
      
   
    console.log(enteredValue);

  }

  return (
   <div className="FormDiv"> <Form onSubmit={onSubmitHandler}>
   <Row className="mb-3">
     <Form.Group as={Col} controlId="formGridEmail">
       <Form.Label>Movie Title</Form.Label>
       <Form.Control type="text" placeholder="enter title"  />
     </Form.Group>

     <Form.Group as={Col} controlId="formGridPassword">
       <Form.Label>Movie id</Form.Label>
       <Form.Control type="text" placeholder="enter id" />
     </Form.Group>
   </Row>

   <Form.Group className="mb-3" controlId="formGridAddress1">
     <Form.Label>Release Date</Form.Label>
     <Form.Control type="date" placeholder="10/10/2002"  />
   </Form.Group>

   <Form.Group className="mb-3" controlId="formGridAddress2">
     <Form.Label>Opening text</Form.Label>
     <Form.Control type="text" placeholder="Opening Text"  />
   </Form.Group>



   <Button variant="primary" type="submit">
     Add Movies
   </Button>
 </Form></div>
  )
}

export default AddMovies

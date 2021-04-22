import React from 'react'
import {useState, useEffect} from 'react'
import {Row , Col , Card , Button, Container} from 'react-bootstrap'
const HomePage = () => {
    const [books, setBooks]= useState ([]);
   
    useEffect(() => {
        const fetchData = async () => {
            const totalPageNum = 10;
            const limit = 10;
            const url="http://localhost:5000"
            const apiUrl=`${url}/books?_page=${totalPageNum}&_limit=${limit}`
          const respo =await fetch(apiUrl);
          const json=await respo.json();
         setBooks(json);
        };
        fetchData();
      }, []);
    return (
       <Container>
        <Row className="justify-content-md-center">
           
            {books.map((j)=>
            <Card class="m-3" style={{ width: '20rem'}} >
  <Card.Img variant="top" src={'http://localhost:5000/'+ j.imageLink}/>
  <Card.Body>
    <Card.Title>{j.title}</Card.Title>
    <Card.Text>
     {j.author}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
)}
        </Row></Container>
    )
}

export default HomePage

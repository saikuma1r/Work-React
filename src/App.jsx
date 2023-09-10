import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
//import { Router, Route } from 'react-router-dom';
import "./App.css";
import { firestore } from "./firebase";
import { useState,useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [data, setData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message);
  

    
   firestore.collection("messages")
    .add({
      name,
      email,
      message})
      .then(()=>{
        setName(""),
        setEmail(""),
        setMessage("")
      })
      .catch((error)=>console.error("message",error));
  };
  useEffect(() => {
    // Get all the messages from Firestore
    firestore
      .collection("messages")
      .get()
      .then((snapshot) => {
        setData(snapshot.docs.map((doc) => ({
          name: doc.data().name,
          email: doc.data().email,
          message: doc.data().message,
        })));
      });
  }, []);
  

  return (
    <>
    
    <div className="Form">
    <Form  onSubmit={handleSubmit}>
            <h2> ADD USER </h2>
            <label>Name</label>
            <br></br>
              <input type="text" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}>
              </input>
              <br></br>
      
              <label>Username</label>
              <br></br>
              <input type="text" placeholder="Username" value={email} onChange={(e)=>setEmail(e.target.value)}>
              </input>
              <br></br>
              <label>Email</label>
              <br></br>
              <input type="email" placeholder="Email" value={message} onChange={(e)=>setMessage(e.target.value)}>
              </input>
              <br></br>
            
              
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <center class="list">
          <ul >
            {data.map((message) => (
              <li key={message.name}>{message.name} - {message.email} - {message.message}</li>
            ))}
          </ul>
      
          </center>
          
    </div>
        
      
    </>
  );
}

export default App;

import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import { getDocs, collection, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore" 

function App() {
  const [newName, setName] = useState("");
  const [newAge, setAge] = useState("0");
  const [newGender, setGender] = useState("")
  const [users, setUsers] = useState([])
  const usersColectionsRef = collection(db, "users");

  const updateUser = async (id, age) => { 
    const userDoc = doc(db, "users", id);
    const newFields = {age: Number(age+1)};
    await updateDoc(userDoc, newFields);

  }

  const decUser = async (id, age) => { 
    const userDoc = doc(db, "users", id);
    const newFields = {age: Number(age-1)};
    await updateDoc(userDoc, newFields);

  }


  const createUser = async () => {
      await addDoc(usersColectionsRef, {name: newName, age: newAge, gender: newGender});
  }

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc)
  }

useEffect(()=>{

  const getUsers = async () => {
    const data = await getDocs(usersColectionsRef);
    
    setUsers(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
    }
    getUsers();
    },[]);

  return (
    <div>

      <input placeholder='Enter Name...' onChange={(event)=>{
        setName(event.target.value);
      }} />
      <input placeholder='Enter Age...' type="number" onChange={(event)=>{
        setAge(event.target.value);
      }} />
      <input placeholder='Enter Gender...'  onChange={(event)=>{
        setGender(event.target.value);
      }} />
      <button onClick={createUser}>Click for adding</button>
      <h1>RUNNING</h1>
      {users.map((user)=>{
        return (
          <div>
            {"  "}
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <button onClick={() =>{updateUser(user.id, user.age)}}>Increament</button>
            <button onClick={() =>{decUser(user.id, user.age)}}>Decreament</button>
            <br></br>
            <button onClick={() =>{deleteUser(user.id)}}>Delete User</button>
            <h1>Gender: {user.gender}</h1>


          </div>
        );
      })
    }


    </div>
  );
}


export default App;

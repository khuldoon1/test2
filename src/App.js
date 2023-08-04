
import { useState,useEffect } from 'react';
import './App.css';
import FooterNavigation from './Components/Navigation/FooterNavigation';
import HeaderNavigation from './Components/Navigation/HeaderNavigation';
import Table from './Components/Table/Table';
import axios from 'axios';

function App() {
  const [users,setUsers]=useState([])


  useEffect(() => {
fetchUsers()
  }, [])
  
const fetchUsers=async()=>{
  try{
    await axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
    setUsers(response.data);
    })
      }catch(error){
        alert(error)
      
      }
}
  return (
    <div className="">

<HeaderNavigation></HeaderNavigation>



<Table  users={users}></Table>

<FooterNavigation></FooterNavigation>
    </div>
  );
}

export default App;

import './App.css';
import { useCallback, useEffect, useState } from 'react';
import UserRow from './userRow';
import UserDetails from './UserDetails';

function App() {
  const [users, setUsers]=useState([]);
  const [selectedUser, setSelectedUser]=useState();
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(response => {
      setUsers(response)
    })
  }, []);
  const saveUserDetails = useCallback((userDetails, selectedUserId) => {
    if(selectedUserId === undefined)
    {setUsers(usrs => {return [...usrs, userDetails]})}
    else{
      setUsers(usrs => usrs.map((u) => {
        if(u.id === selectedUserId){
          return{...u, ...userDetails};
        }
        return u;
      }))
    }
  }, []);
  const onRowSelection = useCallback((user)=>{
    setSelectedUser(user);
    // console.log(user)
  }, []);
  return (
    <div className="App">
      <h3>User Management</h3>
      <hr/>
      <div className="table">
        <div className="tr">
          <div className="th">Name</div>
          <div className="th">Username</div>
          <div className="th">Email</div>
          <div className="th">Phone</div>
        </div>
        {users.map((user, index) => (
          <UserRow user={user} key={index} onClick={onRowSelection}/>
        ))}
      </div>
      <UserDetails selectedUser={selectedUser} save={saveUserDetails}/>
    </div>
  );
}

export default App;

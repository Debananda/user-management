import React, { useEffect, useState } from "react";

const UserDetails = ({selectedUser, save}) => {
    const [name, setName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    useEffect(()=>{
        console.log(selectedUser);
        if(selectedUser !== undefined){
          setName(selectedUser.name)
          setUserName(selectedUser.username)
          setEmail(selectedUser.email)
          setPhoneNumber(selectedUser.phone)
        }
    }, [selectedUser]);
    const saveUserDetails = (event) => {
        event.preventDefault();
        save({
                name:name, 
                username: userName, 
                email:email, 
                phone: phoneNumber
            }, selectedUser ? selectedUser.id: undefined);
        resetUserDetails();
    }
    const changeName = (event) => {
        setName(event.target.value);
    }
    const changeUserName = (event) => {
        setUserName(event.target.value);
    }
    const changeEmail = (event) => {
        setEmail(event.target.value);
    }
    const changePhoneNumber = (event) => {
        setPhoneNumber(event.target.value);
    }
    const resetUserDetails = () => {
        setName('');
        setEmail('');
        setUserName('');
        setPhoneNumber('');
    }
    
    return (
    <div className="card mt-1">
        <div className="card-header">User Details</div>
        <div className="card-body">
          <form onSubmit={saveUserDetails}>
            <div className="form-group">
              <label className="form-label">Name</label>
              <input type="text" value={name} onChange={changeName} className='form-control'/>
            </div>
            <div className="form-group">
              <label className="form-label">Username</label>
              <input type="text" value={userName} onChange={changeUserName} className='form-control'/>
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input type="email" value={email} onChange={changeEmail} className='form-control'/>
            </div>
            <div className="form-group">
              <label className="form-label">Phone</label>
              <input type="tel" value={phoneNumber} onChange={changePhoneNumber} className='form-control'/>
            </div>
            <button type="submit">Save</button>
            <button type="button" className="secondary ml-1" onClick={resetUserDetails}>Cancel</button>
          </form>
        </div>
      </div>
    )
}

export default React.memo(UserDetails);
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css'
import { registerUser } from '../redux/authSlice';
import { Link } from 'react-router-dom';
const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age,setAge]=useState();
  const [gender,setGender]=useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const auth = useSelector((state) => state.auth);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !age || !gender || !email || !password || !profileImage) {
      alert("All fields are required");
      return;
    }
    const formData = new FormData();
    formData.append('name', name);
    formData.append('age',age);
    formData.append('gender',gender);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('profileImage', profileImage);

    dispatch(registerUser(formData));
  };

  return (
    <div className='container'>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Age</label>
          <input type="Number" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <label>Gender</label>
          <input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
        </div>
        <div>

          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>Profile Image</label>
          <input type="file" onChange={(e) => setProfileImage(e.target.files[0])} />
        </div>
        <button type="submit"><Link to='/dashboard'>Register</Link></button>
      </form>
      {auth.error && <p>{auth.error}</p>}
    </div>
  );
};

export default Register;

import React, { useState } from 'react';

function LoginForm() {
  const [inputData, setInputData] = useState({ username: '', password: '' });
  const [submittedData,setSubmittedData]=useState([null]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     setSubmittedData(inputData)
    //alert(`username:${inputData.username},password:${inputData.password}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            name="username"
            value={inputData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={inputData.password}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Login</button>
        {submittedData && (<div>
            <h1>submitted DATA</h1>
            <p>{submittedData.username}</p>
            <p>{submittedData.password}</p>
        </div>)}
      </form>
    </>
  );
}
export default LoginForm;

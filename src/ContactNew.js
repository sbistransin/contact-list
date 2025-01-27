import React, { useState} from 'react';
import { useNavigate, Link } from "react-router-dom";

const ContactNew = (props) => {

  let navigate = useNavigate();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [image_url, setImage_url] = useState('')

  const handleSubmitContactClick = () => {
    
    props.addContact({
      id: randomIdGenerator(),
      name,
      email,
      phone,
      image_url
    })
    
    navigate("/");
  }

  const randomIdGenerator = () => Math.round(Math.random() * 100000000);


  return (

    <div className="col-md-5 offset-md-3">
      <div className="row">
        <Link to='/'>Back</Link>
        <form onSubmit={handleSubmitContactClick}>
          <div className="form-group">
            <label htmlFor="nameInput">Full Name</label>
            <input type="text" className="form-control" id="nameInput" placeholder="John Doe" 
              onChange={event => setName(event.target.value)} required/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input type="email" className="form-control" id="emailInput" placeholder="John@email.com" 
              onChange={event => setEmail(event.target.value)} required/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="phoneInput">Phone Number</label>
            <input type="tel" className="form-control" id="phoneInput" placeholder="111-111-1111" 
              onChange={event => setPhone(event.target.value)} required/>
          </div>
          <br/>
          <div className="form-group">
            <label htmlFor="imageInput">Image Url</label>
            <input type="text" className="form-control" id="imageInput" placeholder="Image Url" 
              onChange={event => setImage_url(event.target.value)}/>
          </div>
          <br/>
          <button type="submit" className="btn btn-primary">Add Contact</button>
        </form> 
      </div>
    </div>
  )
};

export default ContactNew
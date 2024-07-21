import React, {useState} from 'react'
import axios from 'axios'

export default function Home() {
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit =async (e)=>{
    e.preventDefault()
    try {
      const response  = await axios.post('http://localhost:5713/login',{
        phone: phone,
        password: password
      })
      const {jwt,role} = response.data
      localStorage.setItem('jwt',jwt)
      localStorage.setItem('role',role)
      if(role==='manager') window.location.href = '/manager'
      else window.location.href = '/tenant'
    } catch (error) {
      
    }
}
  return (
    <div class="d-flex justify-content-evenly align-items-center" style={{height:'100vh', width:'100vw'}}>
      <img src='images/image.png' class="img-thumbnail" alt="..."></img>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">So dien thoai</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            onChange = {e => setPhone(e.target.value)} required
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mat khau</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
            onChange = {e => setPassword(e.target.value)} required
            />
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Nho dang nhap</label>
        </div>
        <button type="submit" class="btn btn-primary" onclick='loginForm'>Submit</button>
      </form>
    </div>

  )
}
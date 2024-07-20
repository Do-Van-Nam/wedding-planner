


export default function Home() {
  return (
    <div class="d-flex justify-content-evenly align-items-center" style={{height:'100vh', width:'100vw'}}>
      <img src='images/image.png' class="img-thumbnail" alt="..."></img>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">So dien thoai</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Mat khau</label>
          <input type="password" class="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
            <label class="form-check-label" for="exampleCheck1">Nho dang nhap</label>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>

  )
}
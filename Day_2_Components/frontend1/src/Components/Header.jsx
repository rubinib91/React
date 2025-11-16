const Header=()=>{
  return(
    <>
    <div>
      <header>
      <h1>This is intro</h1>
      <a href="">Logo</a>
      <a href="">Home</a>
      </header>
      </div>
      <section>
        <div>
      <a href="">services</a>
      </div>
      </section>
    </>
  )
}

export default Header;

export const Button=()=>{
  const data="register"
  return(
    <>
    <button>{data}</button>
    </>
  )
}
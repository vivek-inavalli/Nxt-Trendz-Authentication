import './index.css'

const Home = () => {
  return (
    <div className="mainDiv">
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="img"
        />
      </div>
      <div className="second">
        <ul className="third">
          <li className="list">Home</li>
          <li className="list">Products</li>
          <li className="list">Cart</li>
        </ul>
        <button className="btn">logout</button>
      </div>
    </div>
  )
}

export default Home

import './index.css'

const Header = () => {
  return (
    <div className="mainDiv">
      <div className="innerDiv">
        <h1>Clothes That Get YOU Noticed</h1>
        <p className="p">
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <button className="btn2">Shop Now</button>
      </div>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          className="imgHome"
          alt="clothes that get you noticed"
        />
      </div>
    </div>
  )
}

export default Header

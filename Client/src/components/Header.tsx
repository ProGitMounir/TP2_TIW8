import './component.css'
import Banner from '../assets/carsbanners.jpeg'

function Header() {
    return (
        <>
        <div>
          <img src={Banner} className="carsBanners" alt="car banner" />
        </div>
        <h1>::: TP1 TIW8_2025 :::</h1>
        </>
    )
}

export default Header
import './features.css';

const features = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/max500/685293.jpg?k=799ffc96a5a78c6ed25a9f622dd64617e54e27219c54a828d1830cb3055560db&o=" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Colombo</h1>
                    <h2>654 Properties</h2>
                </div>
        </div>

        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/max500/685330.jpg?k=ee4ac422e47649d2d04a9759dc81fa51f138f477796a8043557e864517ae6f5f&o=" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Kandy</h1>
                    <h2>287 Properties</h2>
                </div>
        </div>

        <div className="featuredItem">
            <img src="https://t-cf.bstatic.com/xdata/images/city/max500/620029.jpg?k=2b3fb39970f71c5190270e70dd344cac77a2cd8b17c2f25f1a394d1c6e23ecc1&o=" alt="" className="featuredImg" />
                <div className="featuredTitle">
                    <h1>Gampha</h1>
                    <h2>421 Properties</h2>
                </div>
        </div>
    </div>
  )
}

export default features
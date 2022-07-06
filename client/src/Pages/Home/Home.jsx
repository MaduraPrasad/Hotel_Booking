import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from "../../components/Header/Header";
import Featured from "../../components/features/features"


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />
      </div>
    </div>

  )
}

export default Home
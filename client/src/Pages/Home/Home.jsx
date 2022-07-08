import "./home.css";
import Navbar from '../../components/navbar/Navbar';
import Header from "../../components/Header/Header";
import Featured from "../../components/features/features";
import PropertyList from "../../components/propertyL/propertyList";
import FeaturedPropertie from "../../components/featuredProperties/featuredPropertie"

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />

      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle">Browe by property type</h1>
        <PropertyList />
        <h1 className="homeTitle">Homes guest love</h1>
        <FeaturedPropertie />
      </div>
    </div>

  )
}

export default Home
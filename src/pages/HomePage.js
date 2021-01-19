import HeroSection from '../containers/HeroSection'
import Home from '../containers/Home'
import ProductsListHome from '../containers/ProductsListHome'
import Layout from '../containers/Layout'


const HomePage = () =>{

    return(
    <>
    <Layout/>
    <HeroSection/>
    <Home/>
    <ProductsListHome/>
    </>
    )
}
export default HomePage;
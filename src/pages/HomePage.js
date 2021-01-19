import HeroSection from '../containers/HeroSection'
import Home from '../containers/Home'
import ProductsListHome from '../containers/ProductsListHome'
import Layout from '../containers/Layout'
import {data} from '../components/Data'


const HomePage = () =>{
    return(
    <>
    <Layout/>
    <HeroSection/>
    <Home/>
    <ProductsListHome items={data}/>
    </>
    )
}
export default HomePage;
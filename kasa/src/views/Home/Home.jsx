import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import LocationList from '../../components/List/List.jsx'
import './Home.css'
import Footer from '../../components/Footer/Footer.jsx'






export default function Home() {
    return (
        <div>
            <div className='home'>
                <Header />
                <Banner />
                <LocationList />
                <Footer/>
            </div>
        </div>
    )
}
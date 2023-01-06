import Header from '../../components/Header/Header.jsx'
import Banner from '../../components/Banner/Banner.jsx'
import LocationList from '../../components/List/List.jsx'
import './Home.css'
// import LocationList from '../../components/Locations/LocationsList'





export default function Home() {
    return (
        <div>
            <div className='home'>
                <Header />
                <Banner />
                <LocationList />
            </div>
        </div>
    )
}
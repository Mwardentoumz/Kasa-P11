import Header from '../../components/header/Header'
import Banner from '../../components/Banner/Banner'
import './Home.css'
import LocationList from '../../components/Locations/LocationsList'

export default function Home(){
    return (
        <div className='home'>
            <Header/>
            <Banner/>
            <LocationList/>
        </div>
    )
}
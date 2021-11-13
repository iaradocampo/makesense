import Footer from '../Footer/Footer';
import Foro from '../Foro/Foro';
import HoldUp from '../HoldUp/HoldUp';
import NavBar from '../NavBar/NavBar';
import Start from '../Start/Start';
import Hero from './Hero/Hero'

const Home = () => {
    return<>
        <NavBar />
        <Hero />
        <HoldUp />
        <Start />
        <Foro />
        <Footer />
    </>
}

export default Home;
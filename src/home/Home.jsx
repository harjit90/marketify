import web from "../assets/digital-marketting.png";
import Common from '../components/Common';

const Home = () => {
    return (
        <>
            <Common
                heading="Grow your business with"
                highlightedText="Digital Marketting"
                subHeading="Dominate the digital world with us"
                imgsrc={web}
                visit="/service"
                btname="Get Started"
            />
        </>
    );
};

export default Home;
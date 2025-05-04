import './Home.css'
import IconParagraph from './IconParagraph';
import IntroductionSection from './IntroductionSection';
import ServicesTo from './ServicesTo';
import Slider from './Slider';

function Home(){

    return(
        <div>
            <Slider/>
            <IntroductionSection/>
            <IconParagraph/>
            <ServicesTo/>
        </div>
    )
}
export default Home;
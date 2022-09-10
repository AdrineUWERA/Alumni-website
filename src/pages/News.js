import UpcomingEvents from "../components/Events/UpcomingEvents";
import NewsList from "../components/News/NewsList";
import Gallery from "../components/Gallery/Gallery";
import { GalleryData } from "../components/Gallery/GalleryData";
import GallerySlider from "../components/Gallery/GallerySlider";
import Header from "../components/Header/Header";
import NewsStyles from "./News.scss";

function News(props) {
        return (
        <div> 
            <div className="page_introduction ">
                <h1>NEWS</h1> 
                <div className="underline"></div>
                <p>See what our ALUmni are up to <span>Everything you need to know to get hooked to our ALUmni.</span> </p>
            </div>
            <div className="news ">
                <NewsList/>
            </div>
            <div className="gallery items-center"> 
                <GallerySlider slides = {GalleryData}/>
            </div>
            <div className="upcoming-events">
                <UpcomingEvents/>
            </div>
        </div>
    )

}

export default News;


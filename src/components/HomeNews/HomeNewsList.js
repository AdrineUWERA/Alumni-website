// import { Link } from "react-router-dom";
import news_style from "./HomeNewsList.scss"

const NewsList = ({news}) => {
    return (  
        <div className="home-news-highlights">
            <h1>News</h1>
            <div className="news-list">
                
                {news.map((news_highlight) => (
                    <div className="home-news-preview" key={news_highlight.id}>
                        {news_highlight.id % 2 !== 0 ?
                        <div className="news-odd">
                            <div className="news-content">
                                {/* <Link to={`/news/${news_highlight.id}`}>
                                    <h2 className="news-title">{news_highlight.title}</h2>
                                </Link> */}
                                <h3 className="news-title">{news_highlight.title}</h3>
                                <p className="news-summary">{news_highlight.summary}</p>
                                <a href="/"><button>Read more</button></a>
                            </div>
                            <div className="news-cover">
                                <img src={ news_highlight.image } className="news_cover" alt="news cover"/>
                            </div>
                        </div>: 
                        <div className="news-even">
                            <div className="news-cover">
                                <img src={ news_highlight.image } className="news_cover" alt="news cover"/>
                            </div>
                            <div className="news-content">
                                {/* <Link to={`/news/${news_highlight.id}`}>
                                    <h2 className="news-title">{news_highlight.title}</h2>
                                </Link> */}
                                <h3 className="news-title">{news_highlight.title}</h3>
                                <p className="news-summary">{news_highlight.summary}</p>
                                <a href="/"><button>Read more</button></a>
                            </div>
                        </div>}
                    </div>

                ))}
            </div>
        </div>
    );
}
 
export default NewsList;
import React from 'react'
import NewsListStyles from "./NewsList.scss";
import newsPhoto from '../../asstes/news.png';
import newsPhoto2 from '../../asstes/news1.png';
import newsPhoto3 from '../../asstes/news2.png';

export const NewsList = () => {
    return (
        <div className="news-feed w-4/5 place-content-center m-auto text-center">
            <h1 className='section-heading text-blue-800 font-bold text-center py-5'>NEWS</h1>
            <div className="news-list flex justify-evenly">
                    <div className="news-preview first mb-10 ">
                        <div className="news-cover">
                            <img src={newsPhoto2} className="news_cover" alt="news cover"/>
                        </div>
                        <div className="news-content text-center border-t-0 border-x-3 border-b-2 rounded-b-3xl object-cover">
                            <h3 className="news-title text-lg pt-4 w-4/5 m-auto font-bold">Melissa Kariuki and Arinze Obiezue were awarded Schwarzman Scholarship</h3>
                            <p className="news-summary hidden">The Schwarzman Scholars Program  is a fully-funded one-year Master’s program in Global Affairs at Schwarzman College, a fully residential college within Tsinghua University in Beijing, China</p>
                            <button className="text-center py-1 px-3 rounded-lg bg-blue-900 ">Read more</button>
                        </div>
                    </div>
                    <div className="news-preview mb-10">
                        <div className="news-cover">
                            <img src={newsPhoto} className="news_cover" alt="news cover"/>
                        </div>
                        <div className="news-content text-center border-t-0 border-x-3 border-b-2 rounded-b-3xl object-cover">
                            <h3 className="news-title text-lg pt-4 w-4/5 m-auto font-bold">Jeremiah Thoronka has been selected the winner of the first Global Student Prize.</h3>
                            <p className="news-summary hidden">Jeremiah from Freetown, Sierra Leone, was chosen from over 3,500 nominations from 94 countries and will receive $100,000.</p>
                            <button className="text-center py-1 px-3 rounded-lg bg-blue-900 ">Read more</button>
                        </div>
                    </div>
                    <div className="news-preview mb-10">
                        <div className="news-cover">
                            <img src={newsPhoto3} className="news_cover" alt="news cover"/>
                        </div>
                        <div className="news-content text-center border-t-0 border-x-3 border-b-2 rounded-b-3xl object-cover">
                            <h3 className="news-title text-lg pt-4 w-4/5 m-auto font-bold">Rita Despicano becomes youngest female CEO to ever launch startup in Gabon.</h3>
                            <p className="news-summary hidden">Rita Despicano becomes youngest female CEO to ever launch startup in Gabon.</p>
                            <button className="text-center py-1 px-3 rounded-lg bg-blue-900 ">Read more</button>
                        </div>
                    </div>
                    

            </div>
            <button className="mt-5 mb-3 text-center py-1 px-3 rounded-lg ">More...</button>
        </div>
    );
}


export default NewsList;

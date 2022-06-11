import React,  { useEffect, useState }  from 'react'
import LoadGif  from "assets/img/loader.gif"

import { Navigation, Pagination, A11y } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

export default function Excerpt() {

    const [cricdictionAds, setAds] = useState([]);

    useEffect(() => {
        let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        headers.append('Origin','https://www.cricdiction.com/');
    
            fetch("https://www.cricdiction.com/wp-json/wp/v2/posts?categories=1513&per_page=6")
            .then(res => res.json())
            .then(
              (result) => {
                setAds(result);
              },
              (error) => {
                console.log(error);
                
              }
            )
    
    
    
        }, [])



    return (
        <div>
                <div className="container mx-auto">

                  <div className="w-full mr-auto ml-auto py-4">
                      <div className="justify-center flex flex-wrap relative">
                      <i></i>
                      </div>
                  </div>

                  <div className={cricdictionAds.length ? 'hidden': '' }>
                    <div className="w-full mr-auto ml-auto py-4">
                        <div className="justify-center flex flex-wrap relative">
                            <img src={LoadGif} alt="gif" ></img>
                        </div>
                    </div>
                    <div className="w-full mr-auto ml-auto">
                        <div className="justify-center flex flex-wrap relative">
                            <i>Loading...</i>
                        </div>
                    </div>
                  </div>


                  <div className="">
                    <div>

                    <Swiper
                    modules={[Navigation, Pagination, A11y]}
                      spaceBetween={20}
                      slidesPerView={4}
                      freeMode = {true}
                      pagination={{ 
                        clickable: true ,
                      
                      }}
    

                      breakpoints={{
                        // when window width is >= 640px
                        0: {
                          width: 0,
                          slidesPerView: 1,
                          pagination:{clickable:true},
                          navigation:{clickable:true},
                        },
                        // when window width is >= 768px
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                      }}
                    >
                      {cricdictionAds.map(sliderItem => (

                       
                          <SwiperSlide key={sliderItem.id}>
                            <div  className="my-4  px-4">
                                  <div className="flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg  bg-lightBlue-500">
                                      <div>
                                          <span  dangerouslySetInnerHTML={{__html: sliderItem.excerpt.rendered}}></span>
                                      </div>
                                  </div>
                              </div>
                          </SwiperSlide>
                      ))}
                  </Swiper>

                    </div>
                  </div>

                </div>


         
        </div>
    )
}

import React from 'react';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import axios from 'axios';
export default function DemoSticky({ store }) {
    const { data } = useInfiniteAPI({
        getAPI: () => `stickyBar/page.json`,
    })

    const [isLoaded, setIsLoaded] = React.useState(false);
    const [lala, setLala] = React.useState();
    console.log(lala);
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2MwNjFjMDc0MWE1ZWNiYmQ3NjYwNTdjODRjZWNjNzBlM2I4YTU1MmRiZDMzMmVjZTFjMWI2ZjBiNGM3MTA0Y2FhYmVjYzU3NzA2YzA4ZDAiLCJpYXQiOjE2Mzg5NDUyNzMuNzE5MTQ3LCJuYmYiOjE2Mzg5NDUyNzMuNzE5MTUxLCJleHAiOjE2NzA0ODEyNzMuNzE1OTQ5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.leVSKK3uMtL-pHsDMvoicE2tC6UcSYG9Tk7iECcPPr4ZH9UNscTR5xvYEA2P4PsCr4IwuXOsUgVZSuXbj1FUpz-rxhfqCgqGcyEgroH9NGu2wncc_IJ5qZZ91_9QwuU7jN8UtkXqoY5l8GJdTnYHRTyjjH1Yf-KTgJPWSChtkumBt2HH89IIPPIqxHEIIiVGVEk0BM63nZv0JMjihKZKUAUP4Gur-G7ouVT0aGuZPX5gEZRWOigldIjSjYYfQKNaRTEPLi-s_8Gr6pQYCNSyCfsiUPWjTBJqsLXnbKNLJMUM0bIUUnXhKy0E7tSqyKEpo6uZfzvS8szMHWBqSB2l88tCkNW0ajXqraTzineIEdYPi_wtGoEDSYw84j8Zgjyp2wtsyMgbH8MGHTUpWAdjvhLhbEeCcAtvCkU9hOiwoLTihoRxvirddcIFrouB5Pk3h6YpC8n-d-McsfMjCr8Xm-lxDD41yoPQI6e9PF1U3qjjgOTbkGUtMfPBsKMOfmwWkZL3Blgls55EtiToP5JsDpUDcvfnGTIPIELB5XjhkSiDEpoF--kUNzVlAW120009mAf81TurM0rzHC4ZB07UK3p7rebBylP0yx0rCVOoj7iBTUu9-jjDv9c40OK687h69a9qg0M7Uq8Fq7P0qHZkoq98eyCMEeg6KRrf4_2w3IU"
            },

        };
        const getData=async()=>{
            try{
                const result = await axios(
                    'http://d9f3-125-234-117-20.ngrok.io/api/landingpage/builder/18',
                  );
                  setLala(result.data.data);
            }catch(er){
                console.log(er);
            }
        }
        getData()
     
    }, [])


    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item, index) => {
                        return (
                            <div onClick={() => {
                                if (lala) {
                                    let a = lala.content;
                                    console.log(a);
                                    store.loadJSON(JSON.parse(a))
                                }
                            }} className="imgTemp" key={index}>
                                <div style={{ backgroundImage: `url('/stickyBar/${item.preview}')`, backgroundPosition: "center", backgroundSize: "contain", backgroundRepeat: "no-repeat", height: "100px", width: "100%" }}>
                                </div>
                            </div>
                        )
                    })
                }
            })
        }
    }


    const settings = {
        dot: false,
        slideToShow: 2,
        SlideToScroll: 1,
        infinite: true,

    }
    return (
        <div className="slickAll">
            <div id="slick-block" style={{ display: "block" }}>
                <Slider {...settings}>
                    {img()}
                    {/* {imgData()} */}
                </Slider>
            </div>
            <div id="slick-none" style={{ display: "none" }}>
                <ImagesGrid
                    shadowEnabled={true}
                    images={data?.map((data) => data.items).flat()}
                    getPreview={(item) => `/stickyBar/${item.preview}`}
                    onSelect={async (item) => {
                        // download selected json
                        const req = await fetch(`/stickyBar/${item.json}`);
                        const json = await req.json();
                        // just inject it into store
                        store.loadJSON(json);

                    }}
                    rowsNumber={2}
                />
            </div>
        </div>


    )
}
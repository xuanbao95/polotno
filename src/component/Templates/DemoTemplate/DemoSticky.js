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
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiOTA0NjJmYzQ4YTk4NGMyMGJhNmNjY2YzMTljZDY5MzYxMDY1MmY5MTIxY2JlMDVjMDRjYjk2NTAzYjRiYmZkOTYyNzMyMjE0ZGNhMDM3ZTMiLCJpYXQiOjE2Mzg3ODQyNjMuMjEzOTM0LCJuYmYiOjE2Mzg3ODQyNjMuMjEzOTQxLCJleHAiOjE2NzAzMjAyNjMuMDU3MDcsInN1YiI6IjEiLCJzY29wZXMiOltdfQ.LawreHVchcLlNdDY98HNpDdiOR5Su6DcrLr70f0uZE7coYTUAhrleRpJ9WP1hhgByh2HP0ulcnBlxRC9GWiDmUrHpjp456VyRO8v7dPk_MfM270hVlaaryH3MI7pCfnoqAU7ylSxx2h3LpqQNJkjlf-TGVfVF8D61GPZqdZ3jR5wxRzfG0saHZPnf1T9WCJgdH4j3Jy4gYj_PsmzfRoxYVl1y__J9UuS-ZxVJRVNvMy42kOptu7uDNf3uchi924OID4ZinuVbgpsClC9J1lz2W6dPCkWxmt1ZQS0Y_BCAoag-4nwC_R9KoB4yJkWkjwA6V1lTwoHo5VWDKab6MaTUdgoGmKpRoFQiPl_K6F0ZRLn0AXseaD-aQ5__LSq54pOIjCUrhND1vbE0bWpHYnoAxqZQKvxTq3sbfgieiahnPXX1LWOqeSw62Cb1nTL6vmKJz97yqpogf-dtVYXZf8SGj7r-r3QhnxNHQXo0p_mflDteK6FMm8vg2ACyfR5Kt0_RzmGFtVI9yaj52lESe8WuA5O5Z-8PyMppN0QkU01UQOWdBrOOxQwUiiWyrwxbqxbTlgDxYrvzU22ARq-UGSggI91f0AHA1-DFo1WGzNR4tfQShH3472odBwtkpPloW75QtJFYkGN7sU90vSjhLhb5LehPlktQLO8cXPVeove6UU"
            },

        };
        const getData=async()=>{
            try{
                const result = await axios(
                    'https://1e93-125-234-117-20.ngrok.io/api/landingpage/builder/18',
                  );
                  setLala(result.data.data);
            }catch(er){
                console.log(er);
            }
        }
        getData()
     
    }, [])
    const handleClick=()=>{
        if(lala){
            console.log(lala);
            store.loadJSON(JSON.parse(lala.content))
        }
    }

    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item, index) => {
                        return (
                            <div onClick={handleClick} className="imgTemp" key={index}>
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
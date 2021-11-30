import React from 'react';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import logo from '../../../logo192.png'
import Image from 'material-ui-image'
export default function DemoSticky({ store }) {
    const { data } = useInfiniteAPI({
        getAPI: () => `hero/page.json`,
    })

    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item) => {
                        return (<img className="imgTemp" src={`/hero/${item.preview}`} onClick={async () => {
                            // download selected json
                            const req = await fetch(`/hero/${item.json}`);

                            const json = await req.json();
                            // just inject it into store
                            store.loadJSON(json);
                            console.log(json);
                        }} />)
                    })
                }
            })
        }
    }
    const handleChangeSlick=()=>{
        document.getElementById("slick-block").style.display="none";
        document.getElementById('slick-none').style.display="block";
    }
    const settings = {
        dot: false,
        slideToShow: 2,
        SlideToScroll: 1,
    }
    return (
        <div className="slickAll">
            <div className="slick_text">
                <span style={{fontSize:'20px'}}>Hero</span>
                <span onClick={handleChangeSlick} style={{cursor:'pointer'}}>More...</span>
            </div>
            <div id="slick-block" style={{display:"block"}}>
                <Slider {...settings}>
                    {img()}
                </Slider>
            </div>
            <div id="slick-none" style={{display:"none"}}>
            <ImagesGrid
            shadowEnabled={true}
            images={data?.map((data) => data.items).flat()}
            getPreview={(item) => `/hero/${item.preview}`}
            onSelect={async (item) => {
              // download selected json
              const req = await fetch(`/hero/${item.json}`);
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
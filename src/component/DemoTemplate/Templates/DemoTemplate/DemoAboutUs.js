import React from 'react';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'material-ui-image'
export default function DemoSticky({ store }) {
    const { data } = useInfiniteAPI({
        getAPI: () => `aboutUs/page.json`,
    })

    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item) => {
                        return (
                        <div className="imgTemp" onClick={async () => {
                            // download selected json
                            const req = await fetch(`/aboutUs/${item.json}`);

                            const json = await req.json();
                            // just inject it into store
                            store.loadJSON(json);
                            console.log(json);
                        }}  >
                            <div style={{backgroundImage:`url('/aboutUs/${item.preview}')`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"100px",width:"100%"}}></div>
                        </div>
                        )
                    })
                }
            })
        }
    }
    const settings = {
        dot: false,
        infinite: true,
        slideToShow: 4,
        SlideToScroll: 4,
    }
    return (
        <div className="slickAll">
            <div id="slick-block" style={{display:"block"}}>
                <Slider {...settings}>
                    {img()}
                </Slider>
            </div>
            <div id="slick-none" style={{display:"none"}}>
            <ImagesGrid
            shadowEnabled={true}
            images={data?.map((data) => data.items).flat()}
            getPreview={(item) => `/aboutUs/${item.preview}`}
            onSelect={async (item) => {
              // download selected json
              const req = await fetch(`/aboutUs/${item.json}`);
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
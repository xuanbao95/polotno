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
        getAPI: () => `stickyBar/page.json`,
    })

    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item) => {
                        return (
                            // <img className="imgTemp" src={`/stickyBar/${item.preview}`} onClick={async () => {
                            //     // download selected json
                            //     const req = await fetch(`/stickyBar/${item.json}`);
    
                            //     const json = await req.json();
                            //     // just inject it into store
                            //     store.loadJSON(json);
                            //     console.log(json);
                            // }} />
                            <div className="imgTemp">
                                <div style={{backgroundImage:`url('/stickyBar/${item.preview}')`,backgroundPosition:"center",backgroundSize:"cover",height:"80px",width:"80px"}}></div>
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
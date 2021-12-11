import React from 'react';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'material-ui-image'
export default function DemoSticky({ store }) {
    const { data } = useInfiniteAPI({
        getAPI: () => `content/page.json`,
    })

    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item) => {
                        return (<div className="imgTemp" >
                        <div onClick={async () => {
                                // download selected json
                                const req = await fetch(`/content/${item.json}`);
    
                                const json = await req.json();
                                // just inject it into store
                                store.loadJSON(json);
                                console.log(json);
                            }} style={{backgroundImage:`url('/content/${item.preview}')`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"100px",width:"100%"}}></div>
                    </div>)
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
        infinite: true,
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
            getPreview={(item) => `/content/${item.preview}`}
            onSelect={async (item) => {
              // download selected json
              const req = await fetch(`/content/${item.json}`);
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
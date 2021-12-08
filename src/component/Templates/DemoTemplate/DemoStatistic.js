import React from 'react';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Image from 'material-ui-image'
export default function DemoSticky({ store }) {
    const { data } = useInfiniteAPI({
        getAPI: () => `statistic/page.json`,
    })
    const [dataImg,setDataImg]=React.useState(localStorage.getItem('example'))
    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item) => {
                        return (<div className="imgTemp" >
                        <div  onClick={() => {
                                if (dataImg) {
                                    let a = dataImg;
                                    if (a) {
                                        store.loadJSON(JSON.parse(a))
                                    }

                                }
                            }} style={{backgroundImage:`url('/statistic/${item.preview}')`,backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:"100px",width:"100%"}}></div>
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
        slideToShow: 2,
        SlideToScroll: 1,
        infinite: true,
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
            getPreview={(item) => `/statistic/${item.preview}`}
            onSelect={async (item) => {
              // download selected json
              const req = await fetch(`/statistic/${item.json}`);
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
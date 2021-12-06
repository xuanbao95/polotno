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
    const [lala,setLala]=React.useState();
    console.log(lala);
    const [isloading,setIsloading]=React.useState(false);
    React.useEffect(() => {
        fetch("https://07b4-125-234-117-20.ngrok.io/api/landingpage/show/2")
          .then(res => res.json())
          .then(
            (result) => {
                setIsloading(true);
                setLala(JSON.parse(result.data.content));
                
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                setIsloading(true);

            }
          )
      }, [])

      const imgData=()=>{
          if(lala){
            return <div onClick={()=>{
                console.log(lala);
              store.loadJSON(lala)
            }}>{img()}</div>
          }
          
      }

    const img = () => {
        if (data) {
            return data.map((data) => {
                if (data.items) {
                    return data.items.map((item,index) => {
                        return (
                            <div className="imgTemp" key={index}>
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
                    {/* {img()} */}
                    {imgData()}
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
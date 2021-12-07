import React from 'react';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
export default function DemoSticky({ store }) {
    const { data } = useInfiniteAPI({
        getAPI: () => `stickyBar/page.json`,
    })
    const [lala,setLala]=React.useState();
    const [isloading,setIsloading]=React.useState(false);
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                  "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmQ5MzZkM2Q5OTk4ZWQ0MDZkZGVhY2Y0NThiOTcxODdlMzUwMDc2NDM5M2VhYjRlZWQ5YzJlZGRiNDM4N2RiMjYwY2RiODllOTdjYWI0NjgiLCJpYXQiOjE2Mzg4NTk1NzguOTEyOTI2LCJuYmYiOjE2Mzg4NTk1NzguOTEyOTMyLCJleHAiOjE2NzAzOTU1NzguNzM0OTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.s2TW2BsBUGuPkc1LnBTHY1ZYAulL_jOhIcjS611Q_5J7L7zrV3e1ZoOqxY93lL2St51vF7S2Jk28fa_r2FSAvmCkn0zZdOkRMMKkq5K-6f2v3mxqomfiGey_7MJ52K_JsU8tgQmcnR53xXlxvq3hmXUm2Cafh-Ho1glj2Ebh74TxY8FNZ3sHCToxrNAQ6yI1UhB3iB78Lw7NGEOcqL4Qe2sj66QbdDMg3fOzr1qvtAS4Z1LNbWZ3xucMNZ43DG7FyzXIdhvlVOlubxKZdLLMAoZt6DFWQh0CISMcXyJUbYB9JUWAnJF1Gtl_1Brb7RDhxt8qOFzcE5q9Hh8KVjeQZJJjxo2hhEnnLVVaNWtwfJG2hGzv9eixzkuOOU9ggnpKUIwVCW1mNiYcepxCjtbXi9MwDLjFQQAV-1VNk4mvFMTEMyztSITwsTc-9t-vVFgf720aQwOs3INrFceu9s6KfExKRhlGr_K0fodOKUxjbd_nz60fJyO12_Qp07b13yxLNITZ2DYSH5RetTQ3iq5sWWTPvqUVYLOwB7R68oihrSlvnZ6bC4AEJsbfnuL5vBIOWHd8Kahke2QFx56ZYvR5Pb3x33FKguSb_44_A9L0KLKyXoKrY9k_KYcMlC5wEp-7onbfD-Lp3RlRQQzAAVsOmlNxctfeo0UTrdJf9udvBgg "
            },
          
        };
        fetch("https://dbd8-125-234-117-20.ngrok.io/api/landingpage/builder/2",requestOptions)
          .then(res => res.json())
          .then(
            (result) => {
                setIsloading(true);
                setLala(JSON.parse(result.data.content));
                
            },
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
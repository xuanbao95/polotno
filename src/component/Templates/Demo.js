import React from 'react'
import { observer } from 'mobx-react-lite';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { SectionTab } from 'polotno/side-panel';
export const Demo=observer(({store})=>{
    //call api or load data
    
    // const{data}=useInfiniteAPI({
    //     getAPI:()=>`demo/File/page.json`,
    // });
    // console.log(data);
    const {img,isLoading}=useInfiniteAPI({
        getAPI:()=>`demo/Preview/preview.json`
    });
    console.log(img);
    return (
        <div style={{ height: '100%' }}>
          <ImagesGrid
            shadowEnabled={true}
            images={img?.map((data)=>data.items).flat()}
            getPreview={(item) => `/demo/Preview/${item.preview}`}
            // getPreview={async(item)=>{
            //   const req=await fetch(`/templates/${item.json}`)
            //   const img=await req.json();
            //   store.loadJSON(img.src);
            // }}
            isLoading={isLoading}
            onSelect={async (item) => {
              // download selected json
              const req = await fetch(`/demo/Preview/${item.json}`);
              const json = await req.json();
              // just inject it into store
              store.loadJSON(json);
            }}
            rowsNumber={2}
          />
        </div>
      );
})

export const DemoSection={
    name:"demo",
    Tab: (props) => (
        <SectionTab name="Demo" {...props}>
          <MdPhotoLibrary />
        </SectionTab>
      ),
      // we need observer to update component automatically on any store changes
      Panel: Demo,
}


import React from 'react'
import { observer } from 'mobx-react-lite';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { SectionTab } from 'polotno/side-panel';
export const CTA=observer(({store})=>{
    //call api or load data
    
    const{data,isLoading}=useInfiniteAPI({
        getAPI:()=>`CTA/page.json`,
    });
    return (
        <div style={{ height: '100%' }}>
          <ImagesGrid
            shadowEnabled={true}
            images={data?.map((data) => data.items).flat()}
            getPreview={(item) => `/CTA/${item.preview}`}
            // getPreview={async(item)=>{
            //   const req=await fetch(`/templates/${item.json}`)
            //   const img=await req.json();
            //   store.loadJSON(img.src);
            // }}
            isLoading={isLoading}
            onSelect={async (item) => {
              // download selected json
              const req = await fetch(`/CTA/${item.json}`);
              const json = await req.json();
              // just inject it into store
              store.loadJSON(json);
              
            }}
            rowsNumber={2}
          />
        </div>
      );
})

export const CTASection={
    name:"cta",
    Tab: (props) => (
        <SectionTab name="CTA" {...props}>
          <MdPhotoLibrary />
        </SectionTab>
      ),
      // we need observer to update component automatically on any store changes
      Panel: CTA,
}



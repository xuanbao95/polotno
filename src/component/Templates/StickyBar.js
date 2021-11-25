import React from 'react'
import { observer } from 'mobx-react-lite';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { SectionTab } from 'polotno/side-panel';
export const StickyBar=observer(({store})=>{
    //call api or load data
    
    const{data,isLoading}=useInfiniteAPI({
        getAPI:({page})=>`stickybar/${page}.json`,
    });
    return (
        <div style={{ height: '100%' }}>
          <ImagesGrid
            shadowEnabled={true}
            images={data?.map((data) => data.items).flat()}
            getPreview={(item) => `/stickybar/${item.preview}`}
            // getPreview={async(item)=>{
            //   const req=await fetch(`/templates/${item.json}`)
            //   const img=await req.json();
            //   store.loadJSON(img.src);
            // }}
            isLoading={isLoading}
            onSelect={async (item) => {
              // download selected json
              const req = await fetch(`/stickybar/${item.json}`);
              const json = await req.json();
              // just inject it into store
              store.loadJSON(json);
              
            }}
            rowsNumber={2}
          />
        </div>
      );
})

export const StickyBarSections={
    name:"sticky",
    Tab: (props) => (
        <SectionTab name="Sticky Bar" {...props}>
          <MdPhotoLibrary />
        </SectionTab>
      ),
      // we need observer to update component automatically on any store changes
      Panel: StickyBar,
}


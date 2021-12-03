import React from 'react';
import { observer } from 'mobx-react-lite';
import FaVideo from "@meronex/icons/fa/FaVideo";
import { SectionTab } from 'polotno/side-panel';
import { unstable_registerShapeModel } from "polotno/config";
import { unstable_registerNextDomDrop } from 'polotno/config';
export const VideoElement = observer(({ store }) => {
    unstable_registerShapeModel({
        type: "video",
        source: "user",
        width: 100,
        height: 100,
        quality: "good",
        x:100,
        y:100,
    });
    return (
        <div >
            <iframe width="200" height="100" src="https://www.youtube.com/embed/N4a9Db9_ijc"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                draggable
                
            ></iframe>

        </div>
    )
})


export const VideoElementSelection = {
    name: "video",
    Tab: (props) => (
        <SectionTab name="Video" {...props}>
            <FaVideo />
        </SectionTab>
    ),
    // we need observer to update component automatically on any store changes
    Panel: VideoElement,
}
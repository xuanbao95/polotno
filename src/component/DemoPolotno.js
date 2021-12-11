import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import Workspace from "polotno/canvas/workspace";
import SidePanel from "polotno/side-panel/side-panel";
import {
  UploadSection,
  ElementsSection,
  BackgroundSection,
  TextSection,
  
} from "polotno/side-panel";
import { CustomTemplateSection } from "./DemoTemplate/DemoTemplate";
import Navbar from "./NavBar/Navbar";
import ZoomButton from "./Toolbar/componentTool/ZoomButton";
import { DemoSection } from './DemoTemplate/Templates/Demo'
import { TestimonialSection } from './DemoTemplate/Templates/Testimonial'
import TextToolbars from './Toolbar/AddLink';
import { StickBarSection } from './DemoTemplate/Templates/StickyBar'
import { StatisticSection } from './DemoTemplate/Templates/Statistic'
import { ImgLink } from './Toolbar/componentTool/ImgLink';
import DemoSticky from "./DemoTemplate/Templates/DemoTemplate/DemoSticky";
function DemoPhoto({ store }) {
  const section = [
    CustomTemplateSection,
    ElementsSection,
    BackgroundSection,
    UploadSection,
    TextSection,
  ];
  // let elements = store.selectedElements[2];
  // for (const property in elements) {
  //   console.log(`${property}: ${elements[property]}`);
  // }
  return (
    <div  style={{ maxWidth: "100vw", height: "100vh"}}>
      <Navbar store={store} />
      <div  style={{ maxWidth: "100vw", height: "92.9vh" }}>
        <PolotnoContainer>
          <SidePanelWrap>
            <SidePanel store={store} sections={section} defaultSection="custom template" />
          </SidePanelWrap>
          <WorkspaceWrap>
            <Toolbar store={store} hideTextEffects={false} downloadButtonEnabled={false} />
            <Workspace store={store} pageControlsEnabled={false} />
            <ZoomButton store={store} />
          </WorkspaceWrap>
        </PolotnoContainer>
      </div>
        
    </div>
  );
}
export default DemoPhoto;

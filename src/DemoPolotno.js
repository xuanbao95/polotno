import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import Save from "./ToolBar_save/Save";
import { loadFile } from "./ReadJson/FileReadJSON";
import Workspace from "polotno/canvas/workspace";
import SidePanel from "polotno/side-panel/side-panel";
import {
  UploadSection,
  ElementsSection,
  BackgroundSection,
  TextSection,
} from "polotno/side-panel";
import { CustomTemplateSection } from "./DemoTemplate/DemoTemplate";
import Navbar from "./component/Navbar";
import ZoomButton from "./component/ZoomButton";
import TextToolbars from './component/AddLink';
import ImgLink from './component/ImgLink';
import { StickyBarSections } from "./component/Templates/StickyBar";
import {DemoSection} from './component/Templates/Demo'
function DemoPhoto({ store }) {
  // const handleDrop = (ev) => {
  //   ev.preventDefault();
  //   let transAndDrop = ev.dataTransFer.items;
  //   let transAndDropFile = ev.dataTransFer.files;
  //   if (transAndDrop) {
  //     for (let i = 0; i < transAndDrop.length; i++) {
  //       if (transAndDrop[i].kind === "file") {
  //         loadFile(transAndDrop[i].getAsFile(), store);
  //       }
  //     }
  //   } else {
  //     for (let i = 0; i < transAndDropFile[i].length; i++) {
  //       loadFile(transAndDropFile[i], store);
  //     }
  //   }
  // };
  const section = [
    CustomTemplateSection,
    ElementsSection,
    BackgroundSection,
    UploadSection,
    TextSection,
  StickyBarSections,
  DemoSection
  ];

  return (
    <div style={{ maxWidth: "100vw", height: "100vh" ,clear:"both" }}>
      <Navbar store={store} />
      <PolotnoContainer
        style={{ maxWidth: "100vw", height: "100vh" }}
      >

        <SidePanelWrap>
          <SidePanel store={store} sections={section} defaultSection="template" />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Save store={store} />
          <Toolbar store={store} downloadButtonEnabled />
          <Workspace store={store} />
          <ZoomButton store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
}
export default DemoPhoto;

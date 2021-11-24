import React from "react";
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno";
import { Toolbar } from "polotno/toolbar/toolbar";
import { ZoomButtons } from "polotno/toolbar/zoom-buttons";
import Save from "./ToolBar_save/Save";
import { loadFile } from "./ReadJson/FileReadJSON";
import Workspace from "polotno/canvas/workspace";
import SidePanel from "polotno/side-panel/side-panel";
import { CustomPhotoSection } from "./DemoPhoto/DemoPhoto";
import {
  TemplatesSection,
  PhotosSection,
  UploadSection,
  TextSection,
  ElementsSection,
  BackgroundSection,
  SizeSection,
} from "polotno/side-panel";
import { CustomTemplateSection } from "./DemoTemplate/DemoTemplate";
import Navbar from "./component/Navbar";
import ZoomButton from "./component/ZoomButton";
import TextToolbars from "./component/AddLink";
import Design from "./component/Design";
function DemoPhoto({ store }) {
  //tạo handle cho user khi click và drop vào element sẽ chạy file hay img
  const handleDrop = (ev) => {
    ev.preventDefault();
    //khi user có click vào element dùng dataTransfer xử lý cho việc drop của user trong polotno
    //datatransfer.item dùng cho user click element và tất cả dử liệu sẽ đổ vào slide panel trong polotno
    let transAndDrop = ev.dataTransFer.items;
    //datatransfer.file là khi user click img hay shape hay text từ slide panel thì sẽ drop tại workspace và itemsex bao gồm file
    let transAndDropFile = ev.dataTransFer.files;
    if (transAndDrop) {
      //duyêt vòng lặp bắt sự kiện user click element và chạ vòng lặp cho từng items nhỏ trong element đó
      for (let i = 0; i < transAndDrop.length; i++) {
        //nếu sự kiện kéo thả cảu user ko phải là file sẽ bỏ qua nó
        //dùng dataTransfer.getAsfile() nếu là file sẽ trả lại dử liệu ko thì sẽ là null
        if (transAndDrop[i].kind === "file") {
          loadFile(transAndDrop[i].getAsFile(), store);
        }
      }
    } else {
      //trong slide panel user drop thả vào workspace
      for (let i = 0; i < transAndDropFile[i].length; i++) {
        loadFile(transAndDropFile[i], store);
      }
    }
  };
  const section = [
    CustomTemplateSection,
    ElementsSection,
    BackgroundSection,
    UploadSection,
    TextSection,
  ];
  
  return (
      <div style={{ maxWidth: "100vw", height: "100vh" }}>
      <Navbar store={store}/>
    <PolotnoContainer
      style={{ maxWidth: "100vw", height: "100vh" }}
      onDrop={handleDrop}
    >
        
      <SidePanelWrap>
        <SidePanel store={store} sections={section} />
      </SidePanelWrap>
      <WorkspaceWrap>
        <Save store={store} />
        <Toolbar store={store} />
          <Workspace store={store} />
          <ZoomButton store={store}/>
      </WorkspaceWrap>
    </PolotnoContainer>
    </div>
  );
}
export default DemoPhoto;

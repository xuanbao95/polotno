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
import { DemoSection } from './component/Templates/Demo'
import { TestimonialSection } from './component/Templates/Testimonial'
import {FAQSection} from './component/Templates/FAQ';
import {TimelineSection} from './component/Templates/TimeLine';
import {OurTeamSection} from './component/Templates/OurTeam';
import {GallerySection} from './component/Templates/Gallery';
import {FormSection} from './component/Templates/Form';
import {PricingSection} from './component/Templates/Pricing';
import {HeroSection} from './component/Templates/Hero';
import {CardSection} from './component/Templates/Card';
import {TrustElementSection} from './component/Templates/TrustElement';
import {PartnerSection} from './component/Templates/Partner';
import {FooterSection} from './component/Templates/Footer';
import {CTASection} from './component/Templates/CTA';
import TextToolbars from './component/AddLink'
import {AboutUs} from './component/Templates/AboutUs'
import {StickBarSection} from './component/Templates/StickyBar'
import {StatisticSection} from './component/Templates/Statistic'
function DemoPhoto({ store }) {
  const section = [
    ElementsSection,
    BackgroundSection,
    UploadSection,
    TextSection,
    CustomTemplateSection,
    
    
  ];

  return (
    <div style={{ maxWidth: "100vw", height: "100vh", clear: "both" }}>
      <Navbar store={store} />
      <PolotnoContainer
        style={{ maxWidth: "100vw", height: "100vh" }}
      >
        <SidePanelWrap>
          <SidePanel store={store} sections={section} defaultSection="template" />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Save store={store} />
          <Toolbar store={store} />
          <Workspace store={store} />
          <ZoomButton store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </div>
  );
}
export default DemoPhoto;

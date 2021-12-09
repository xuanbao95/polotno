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
import { CustomTemplateSection } from "../DemoTemplate/DemoTemplate";
import Navbar from "./Navbar";
import ZoomButton from "./ZoomButton";
import { DemoSection } from './Templates/Demo'
import { TestimonialSection } from './Templates/Testimonial'
import { FAQSection } from './Templates/FAQ';
import { TimelineSection } from './Templates/TimeLine';
import { OurTeamSection } from './Templates/OurTeam';
import { GallerySection } from './Templates/Gallery';
import { FormSection } from './Templates/Form';
import { PricingSection } from './Templates/Pricing';
import { HeroSection } from './Templates/Hero';
import { CardSection } from './Templates/Card';
import { TrustElementSection } from './Templates/TrustElement';
import { PartnerSection } from './Templates/Partner';
import { FooterSection } from './Templates/Footer';
import { CTASection } from './Templates/CTA';
import TextToolbars from './AddLink'
import { AboutUs } from './Templates/AboutUs'
import { StickBarSection } from './Templates/StickyBar'
import { StatisticSection } from './Templates/Statistic'
import { ImgLink } from './ImgLink';
import DemoSticky from "./Templates/DemoTemplate/DemoSticky";
import {VideoElementSelection} from './VideoComponent/VideoElement'
function DemoPhoto({ store }) {
  const section = [
    CustomTemplateSection,
    ElementsSection,
    BackgroundSection,
    UploadSection,
    TextSection,
    VideoElementSelection,
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

import React from 'react'
import { observer } from 'mobx-react-lite';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import { ImagesGrid } from 'polotno/side-panel/images-grid';
import { useInfiniteAPI } from 'polotno/utils/use-api';
import { SectionTab } from 'polotno/side-panel';
import { AboutUs } from '../component/Templates/AboutUs';
import { StickBar } from '../component/Templates/StickyBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Testimonial } from '../component/Templates/Testimonial';
import { FAQ } from '../component/Templates/FAQ';
import { Statistic } from '../component/Templates/Statistic';
import { Timeline } from '../component/Templates/TimeLine';
import { OurTeam } from '../component/Templates/OurTeam';
import { Gallery } from '../component/Templates/Gallery';
import { Form } from '../component/Templates/Form';
import { Pricing } from '../component/Templates/Pricing';
import { Content } from '../component/Templates/Content';
import { Hero } from '../component/Templates/Hero';
import { Card } from '../component/Templates/Card';
import { TrustElement } from '../component/Templates/TrustElement';
import { Partner } from '../component/Templates/Partner';
import { Footer } from '../component/Templates/Footer';
import { CTA } from '../component/Templates/CTA';
import SearchIcon from '@mui/icons-material/Search';
import Search from '@mui/icons-material/Search';
import DemoSticky from '../component/Templates/DemoTemplate/DemoSticky';
import DemoTestimonial from '../component/Templates/DemoTemplate/DemoTestiminal';
import DemoStatistic from '../component/Templates/DemoTemplate/DemoStatistic';
import DemoFAQ from '../component/Templates/DemoTemplate/DemoFAQ';
import DemoTimeLine from '../component/Templates/DemoTemplate/DemoTimeLine';
import DemoOurTeam from '../component/Templates/DemoTemplate/DemoOurTeam';
import DemoGallery from '../component/Templates/DemoTemplate/DemoGallery';
import DemoAboutUs from '../component/Templates/DemoTemplate/DemoAboutUs';
import DemoForm from '../component/Templates/DemoTemplate/DemoForm';
import DemoPricing from '../component/Templates/DemoTemplate/DemoPricing';
import DemoContent from '../component/Templates/DemoTemplate/DemoContent';
import DemoHero from '../component/Templates/DemoTemplate/DemoHero';
import DemoCard from '../component/Templates/DemoTemplate/DemoCard';
import DemoTrustElement from '../component/Templates/DemoTemplate/DemoTrustElement';
import DemoPartner from '../component/Templates/DemoTemplate/DemoPartner';
import DemoFooter from '../component/Templates/DemoTemplate/DemoFooter';
import DemoCTA from '../component/Templates/DemoTemplate/DemoCTA';
export const DemoTemplate = observer(({ store }) => {
  //call api or load data


 
  
  const handleChangeTab = (e, id) => {
    let tabChange = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabChange.length; i++) {
      tabChange[i].style.display = 'none'
    }
    let tabButton = document.getElementsByClassName("tabLink")
    for (let i = 0; i < tabButton.length; i++) {
      tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    document.getElementById("sticky").click();
  }
  var settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4
  };
  return (
    <div style={{ height: '100%' }}>
      <div  className="search" >
        <Search className='icon'/>
        <input type='search' className="inputSearch" placeholder="Search..."/>
      </div>
      <div className="slickTemplate">
        <Slider {...settings}>
         <button onClick={(e) => handleChangeTab(e, 'sticky')} className="tabLink">Sticky</button>
         <button onClick={(e) => handleChangeTab(e, 'testimonial')} className="tabLink">Testimonial</button>
         <button onClick={(e) => handleChangeTab(e, 'statistic')} className="tabLink">Statistic</button>
         <button onClick={(e) => handleChangeTab(e, 'faq')} className="tabLink">FAQ</button>
         <button onClick={(e) => handleChangeTab(e, 'timeLine')} className="tabLink">Time Line</button>
         <button onClick={(e) => handleChangeTab(e, 'ourTeam')} className="tabLink">Our Team</button>
         <button onClick={(e) => handleChangeTab(e, 'gallery')} className="tabLink">Gallery</button>
         <button onClick={(e) => handleChangeTab(e, 'about')} className="tabLink">About</button>
         <button onClick={(e) => handleChangeTab(e, 'form')} className="tabLink">Form</button>
         <button onClick={(e) => handleChangeTab(e, 'pricing')} className="tabLink">Pricing</button>
         <button onClick={(e) => handleChangeTab(e, 'content')} className="tabLink">Content</button>
         <button onClick={(e) => handleChangeTab(e, 'hero')} className="tabLink">Hero</button>
         <button onClick={(e) => handleChangeTab(e, 'card')} className="tabLink">Card</button>
         <button onClick={(e) => handleChangeTab(e, 'trustElement')} className="tabLink">Trust Element</button>
         <button onClick={(e) => handleChangeTab(e, 'partner')} className="tabLink">Partner</button>
         <button onClick={(e) => handleChangeTab(e, 'footer')} className="tabLink">Footer</button>
         <button onClick={(e) => handleChangeTab(e, 'cta')} className="tabLink">CTA</button>
          
        </Slider>

      </div>
      <div id="sticky" className="tabContent" style={{ display: 'none' }} >
        <StickBar store={store} />
      </div>
      <div id="about" className="tabContent" style={{ display: 'none' }}>
        <AboutUs store={store} />
      </div>
      <div id="testimonial" className="tabContent" style={{ display: 'none' }}>
        <Testimonial store={store} />
      </div>
      <div id="faq" className="tabContent" style={{ display: 'none' }}>
        <FAQ store={store} />
      </div>
      <div id="statistic" className="tabContent" style={{ display: 'none' }}>
        <Statistic store={store}/>
      </div>
      <div id="timeLine" className="tabContent" style={{ display: 'none' }}>
        <Timeline store={store}/>
      </div>
      <div id="ourTeam" className="tabContent" style={{ display: 'none' }}>
        <OurTeam store={store}/>
      </div>
      <div id="gallery" className="tabContent" style={{ display: 'none' }}>
        <Gallery store={store}/>
      </div>
      <div id="form" className="tabContent" style={{ display: 'none' }}>
        <Form store={store}/>
      </div>
      <div id="pricing" className="tabContent" style={{ display: 'none' }}>
        <Pricing store={store}/>
      </div>
      <div id="content" className="tabContent" style={{ display: 'none' }}>
        <Content store={store}/>
      </div>
      <div id="hero" className="tabContent" style={{ display: 'none' }}>
        <Hero store={store}/>
      </div>
      <div id="card" className="tabContent" style={{ display: 'none' }}>
        <Card store={store}/>
      </div>
      <div id="trustElement" className="tabContent" style={{ display: 'none' }}>
        <TrustElement store={store}/>
      </div>
      <div id="partner" className="tabContent" style={{ display: 'none' }}>
        <Partner store={store}/>
      </div>
      <div id="footer" className="tabContent" style={{ display: 'none' }}>
        <Footer store={store}/>
      </div>
      <div id="cta" className="tabContent" style={{ display: 'none' }}>
        <CTA store={store}/>
      </div>
    <div id="showAll" className="tabContent" style={{display:'block'}}>
        <DemoSticky store={store}/>
        <DemoTestimonial store={store}/>
        <DemoStatistic store={store}/>
        <DemoFAQ store={store}/>
        <DemoTimeLine store={store}/>
        <DemoOurTeam store={store}/>
        <DemoGallery store={store}/>
        <DemoAboutUs store={store}/>
        <DemoForm store={store}/>
        <DemoPricing store={store}/>
        <DemoContent store={store}/>
        <DemoHero store={store}/>
        <DemoCard store={store}/>
        <DemoTrustElement store={store}/>
        <DemoPartner store={store}/>
        <DemoFooter store={store}/>
        <DemoCTA store={store}/>
    </div>

    </div>
  );
})

export const CustomTemplateSection = {
  name: "custom template",
  Tab: (props) => (
    <SectionTab name="Custom template" {...props}>
      <MdPhotoLibrary />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: DemoTemplate,
}



import React from 'react'
import { observer } from 'mobx-react-lite';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
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

  const [valueSearch, setValueSearch] = React.useState()
  const [template, setTemplate] = React.useState([
    { id: 'sticky', name: 'Sticky' },
    { id: 'testimonial', name: 'Testi monial' },
    { id: 'statistic', name: 'Statistic' },
    { id: 'faq', name: 'FAQ' },
    { id: 'timeLine', name: 'Time Line' },
    { id: 'ourTeam', name: 'Our Team' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'about', name: 'About' },
    { id: 'form', name: 'Form' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'content', name: 'Content' },
    { id: 'hero', name: 'Hero' },
    { id: 'card', name: 'Card' },
    { id: 'trustElement', name: 'Trust Element' },
    { id: 'partner', name: 'Partner' },
    { id: 'footer', name: 'Footer' },
    { id: 'cta', name: 'CTA' },
  ])
  const [componentTemplate, setComponentTemplate] = React.useState([
    { com: <StickBar store={store} />, id: "sticky", name: "sticky bar" },
    { com: <AboutUs store={store} />, id: "about", name: 'about us' },
    { com: <Testimonial store={store} />, id: "testimonial", name: 'testimonial' },
    { com: <FAQ store={store} />, id: "faq", name: 'FAQ' },
    { com: <Statistic store={store} />, id: "statistic", name: 'statistic' },
    { com: <Timeline store={store} />, id: "timeLine", name: 'time line' },
    { com: <OurTeam store={store} />, id: "ourTeam", name: 'ourTeam' },
    { com: <Gallery store={store} />, id: "gallery", name: 'gallery' },
    { com: <Form store={store} />, id: "form", name: 'form' },
    { com: <Pricing store={store} />, id: "pricing", name: 'pricing' },
    { com: <Content store={store} />, id: "content", name: 'content' },
    { com: <Hero store={store} />, id: "hero", name: 'hero' },
    { com: <Card store={store} />, id: "card", name: 'card' },
    { com: <TrustElement store={store} />, id: "trustElement", name: 'trust Element' },
    { com: <Partner store={store} />, id: "partner", name: 'partner' },
    { com: <Footer store={store} />, id: "footer", name: 'footer' },
    { com: <CTA store={store} />, id: "cta", name: 'cta' },
  ])
  const [demoTemplate, setDemoTemplate] = React.useState([
    { demo: <DemoSticky store={store} />, name: 'Sticky Bar', id: "sticky" },
    { demo: <DemoTestimonial store={store} />, name: 'Testimonial', id: "testimonial" },
    { demo: <DemoStatistic store={store} />, name: 'Statistic', id: "statistic" },
    { demo: <DemoFAQ store={store} />, name: 'FAQ', id: "faq" },
    { demo: <DemoTimeLine store={store} />, name: 'Time Line', id: "timeLine" },
    { demo: <DemoOurTeam store={store} />, name: 'Our Team', id: "ourTeam" },
    { demo: <DemoGallery store={store} />, name: 'Gallery', id: "gallery" },
    { demo: <DemoAboutUs store={store} />, name: 'About Us', id: "about" },
    { demo: <DemoForm store={store} />, name: 'Form', id: "form" },
    { demo: <DemoPricing store={store} />, name: 'Pricing', id: "pricing" },
    { demo: <DemoContent store={store} />, name: 'Content', id: "content" },
    { demo: <DemoHero store={store} />, name: 'Hero', id: "hero" },
    { demo: <DemoCard store={store} />, name: 'Card', id: "card" },
    { demo: <DemoTrustElement store={store} />, name: 'Trust Element', id: "trustElement" },
    { demo: <DemoPartner store={store} />, name: 'Partner', id: "partner" },
    { demo: <DemoFooter store={store} />, name: 'Footer', id: "footer" },
    { demo: <DemoCTA store={store} />, name: 'CTA', id: "cta" },
  ])
  const handleChangeLink = (e, id) => {
    let tabChange = document.getElementsByClassName("tabContent");
    for (let i = 0; i < tabChange.length; i++) {
      tabChange[i].style.display = 'none'
    }
    let tabButton = document.getElementsByClassName("spanLink")
    for (let i = 0; i < tabButton.length; i++) {
      tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    document.getElementById(id).style.display = "block";
    let name = document.getElementById(id).getAttribute("name")
    document.getElementById('searchInput').value = name;

  }
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
    setValueSearch(document.getElementById(id).getAttribute("name"))
  }
  const clearInput = () => {
    document.getElementById('searchInput').addEventListener('search', (e) => {
      let tabChange = document.getElementsByClassName("tabContent");
      for (let i = 0; i < tabChange.length; i++) {
        tabChange[i].style.display = 'none'
      }
      document.getElementById('showAll').style.display = 'block'

    })
    document.getElementById('searchInput').value = '';
  }
  const buttonTemplate = () => {
    if (template) {
      return template.map((item) => {
        return (
          <div style={{ margin: "15px" }}>
            <div className="button_template" style={{ width: "100%" }} >
              <button onClick={(e) => handleChangeTab(e, `${item.id}`)} className="tabLink">{item.name}</button>
            </div>
          </div>

        )
      })
    }
  }
  const componentTemplates = () => {
    if (componentTemplate) {
      return componentTemplate.map((item) => {
        return (
          <div id={item.id} name={item.name} className="tabContent" style={{ display: 'none' }} >
            {item.com}
          </div>
        )
      })
    }
  }
  const demoTeamplates = () => {
    if (demoTemplate) {
      return demoTemplate.map((item) => {
        return (
          <div>
            <div className="slick_text" style={{ marginTop: "14px" }}>
              <span style={{ fontSize: '14px' }} className='nameTemplate'>{item.name}</span>
              <span onClick={(e) => handleChangeLink(e, `${item.id}`)} className="spanLink" style={{ cursor: 'pointer', marginRight: "24px", }}>Xem tất cả</span>
            </div>
            {item.demo}
          </div>
        )
      })
    }
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", border: "none",fontSize: "14px",top: "32%",background:"none"}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", border: "none",fontSize: "14px",top: "32%",background:"none"}}
        onClick={onClick}
      />
    );
  }
  var settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div style={{ height: '100%', }} >

      <div className="search">
        <form type='submit'>
          <input type='search' id='searchInput' value={valueSearch} onClick={clearInput} className="inputSearch" placeholder="Search..." />
        </form>
        <div className="slickTemplate">
          <Slider {...settings}>
            {buttonTemplate()}
          </Slider>
        </div>
      </div>

      <div className="search-index" style={{ maxHeight: '90%' }}>
        {componentTemplates()}
        <div id="showAll" className="tabContent" style={{ display: 'block' }}>
          {demoTeamplates()}
        </div>
      </div>
    </div>
  );
})

export const CustomTemplateSection = {
  name: "custom template",
  Tab: (props) => (
    <SectionTab name="Mẫu" {...props}>
      <MdPhotoLibrary />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: DemoTemplate,
}



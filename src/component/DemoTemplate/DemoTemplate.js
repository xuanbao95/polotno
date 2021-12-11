import React from 'react'
import { observer } from 'mobx-react-lite';
import MdPhotoLibrary from '@meronex/icons/md/MdPhotoLibrary';
import { SectionTab } from 'polotno/side-panel';
import { AboutUs } from './Templates/AboutUs';
import { StickBar } from './Templates/StickyBar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Testimonial } from './Templates/Testimonial';
import DemoSticky from './Templates/DemoTemplate/DemoSticky';
import DemoTestimonial from './Templates/DemoTemplate/DemoTestiminal';
import DemoStatistic from './Templates/DemoTemplate/DemoStatistic';
export const DemoTemplate = observer(({ store }) => {
  //call api or load data

  const [valueSearch, setValueSearch] = React.useState()
  const [template, setTemplate] = React.useState([
    { id: 'sticky', name: 'Sticky' },
    { id: 'testimonial', name: 'Testi monial' },
    { id: 'statistic', name: 'Statistic' },
   
  ])
  const [componentTemplate, setComponentTemplate] = React.useState([
    { com: <StickBar store={store} />, id: "sticky", name: "sticky bar" },
    { com: <AboutUs store={store} />, id: "about", name: 'about us' },
    { com: <Testimonial store={store} />, id: "testimonial", name: 'testimonial' },
    
  ])
  const [demoTemplate, setDemoTemplate] = React.useState([
    { demo: <DemoSticky store={store} />, name: 'Sticky Bar', id: "sticky" },
    { demo: <DemoTestimonial store={store} />, name: 'Testimonial', id: "testimonial" },
    { demo: <DemoStatistic store={store} />, name: 'Statistic', id: "statistic" },
   
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



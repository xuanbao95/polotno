import React from 'react';
import { observer } from 'mobx-react-lite';
import LinkImage from '../componentTool/LinkImage';
import { ImageToolbar } from 'polotno/toolbar/image-toolbar';
import { unstable_registerToolbarComponent } from 'polotno/config';
const ImgLink = observer(({ store }) => {
    let elements = store.selectedElements[0];
    const [oldLink, setOldLink] = React.useState([
        { url: 'https://github.com/' },
        { url: 'https://dev-ufala.upos.vn/' },
        { url: 'https://www.figma.com/file/pZFx66WbIqWQAFFLJl2Mt2/Ufala' },
        { url: 'https://www.google.com/' },
        { url: 'https://www.youtube.com/' },
    ]);
    const [newLink, setNewLink] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    let local = JSON.parse(localStorage.getItem(elements));
    const handleAddLink = () => {
        let evalue = document.getElementById('url').value;
        localStorage.setItem(elements, JSON.stringify(evalue));
        setOpen(true)

    }
    const handleDeleteLink = () => {
        localStorage.removeItem(elements);
        setOpen(false);
    }
    const AddNewLink = () => {
        if (!open && local === null) {
            return (
                <div >
                    <div>
                    <h4 style={{marginLeft:"7px"}}>Nhập một link :</h4>
                        <input id='url' className="addInput"/>
                        <button style={{cursor: "pointer"}} className="addLinkButton" onClick={handleAddLink}>Cập nhật link</button>
                    </div>

                </div>
            )
        } else {
            return (
                <div>
                    <h4 style={{marginLeft:"7px"}}>Link :</h4>
                    <div>
                        <input id='url' value={local} className="addInput"/>
                        <button style={{cursor: "pointer"}} className="aButton"><a href={local} target="_blank">Truy cập liên kết</a></button>
                        
                        <button style={{cursor: "pointer"}} onClick={handleDeleteLink}>Xóa link</button>
                    </div>
                </div>
            )
        }
    }
    const handleOnChange = (e) => {
        setNewLink(e.target.value)
    }
    const handleAddNewLink = () => {
        let evalue = document.getElementById('newLink').value;
        localStorage.setItem(elements, JSON.stringify(evalue));
        localStorage.setItem(elements, JSON.stringify(evalue));
        setOpen(true)

    }
    const linkStore = () => {
        return (
            <div>
                    <h4 style={{marginLeft:"7px"}}>Kho link :</h4>
                <div>
                    <select id='newLink' value={oldLink.url} style={{maxWidth:'95%',marginLeft:"7px"}} label='Link' onChange={handleOnChange}  >
                        {oldLink.map((item) => {
                            return (
                                <option value={item.url}>{item.url}</option>
                            )
                        })}
                    </select>
                    <button className='addlink' onClick={handleAddNewLink}>Cập nhật link</button>
                </div>

            </div>

        )
    }
    const handleTabOne = () => {
        document.getElementById('tab-1').style.display = 'block';
        document.getElementById('tab-2').style.display = "none"
    }
    const handleTabTwo = () => {
        document.getElementById('tab-1').style.display = 'none';
        document.getElementById('tab-2').style.display = "block";
    }

    return (
        <div className='imgLink'>
            <ImageToolbar store={store} elements={store.selectedElements}  />
            <div className="lalala" style={{position:"absolute",top:"16px",left:"21rem"}}>
<i style={{cursor: "pointer",color:"#585e62"}} class="fas fa-link" id='modalLinkImg' onClick={() => {
                document.getElementById("modalImg").style.display = 'block';
            }}></i>
            <div id='modalImg' style={{ display: 'none',width:"300px",height:"165px"}}>
                <div className="div_button">
                    <button className="tabButton tabOne" onClick={handleTabOne}>Nhập một Link</button>
                    <button className="tabButton tabTwo" onClick={handleTabTwo}>Chọn một link</button>
                    <i style={{cursor: "pointer"}} class="far fa-window-close" onClick={() => {
                    document.getElementById("modalImg").style.display = 'none';
                }}></i>
                </div>
                <div id='tab-1' style={{ display: 'block' }}>
                    {AddNewLink()}
                </div>
                <div id='tab-2' style={{ display: 'none' }}>
                    {linkStore()}
                </div>
            </div>

        
            </div>
            
            
        </div>
    )
});
export default ImgLink;
unstable_registerToolbarComponent('image', ImgLink)

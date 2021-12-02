import React from "react"
import { observer } from 'mobx-react-lite';
import {
    Button,
    Navbar,
    Alignment,
    AnchorButton,
    Divider,
    Dialog,
    Classes,
    NavbarGroup,
} from '@blueprintjs/core';
import { downloadFile } from 'polotno/utils/download';
import { unstable_registerToolbarComponent } from 'polotno/config';
import styled from 'polotno/utils/styled';
const NavbarContainer = styled('div')`
  @media screen and (max-width: 500px) {
    overflow-x: auto;
    overflow-y: hidden;
    max-width: 100vw;
  }
`;

const NavInner = styled('div')`
  @media screen and (max-width: 500px) {
    display: flex;
  }
`;
const Save = observer(({ store }) => {
    const inputRef = React.useRef();
    return (
        <NavbarContainer>
            <NavInner>
                <Navbar.Group align={Alignment.CENTER}>
                    <Button
                    backgroundColor="3c8b14"
                        icon="new-object"
                        minimal
                        onClick={() => {
                            alert("The page will be deleted");
                            //láy id cho page
                            //vì có nhiều page nên sẽ là 1 arry và .map
                            let id = store.pages.map((item) => item.id)
                            //xóa page củ
                            store.deletePages(id)
                            //có thể xóa trang hiện tại
                            //store.deletePages([store.activePage.id])
                            //mở page mới
                            store.addPage();
                        }}
                    >New </Button>
                    <label>
                        <Button
                            icon="folder-open"
                            minimal
                            onClick={() => {
                                document.querySelector("#load-project").click();
                            }}
                        >
                            Open new One
                        </Button>
                        <input
                            type="file"
                            id="load-project"
                            style={{ width: '180px', display: 'none' }}
                            accept=".json,.polotno"
                            ref={inputRef}
                            onChange={(e) => {
                                //đặt sự kiện thay đổi khi user nhấn 1 file nào đó
                                //tạo object hưng lại sự thay đổi đó
                                let input = e.target
                                //xét đk cho object vừa tạo xác thực có dữ liệu
                                if (!input.files.length) {
                                    return;
                                };
                                //xử lý đọc file JSON
                                let reader = new FileReader();
                                //tạo object json và chuyên file đó thành json
                                reader.onloadend = function () {
                                    let text=reader.result;
                                    let json;
                                    try {
                                        json= JSON.parse(text)
                                    } catch (er) {
                                        // alert("Can not load the project.")
                                        console.log({ ...er });
                                    };

                                    if (json) {
                                        store.loadJSON(json);
                                      }
                                };
                                reader.onerror = function () {
                                    alert("Can not load Polotno project file.")
                                };
                                reader.readAsText(input.files[0])

                            }}
                        />
                    </label>
                    <label>
                        <Button
                            icon="floppy-disk"
                            minimal
                            onClick={()=>{
                                //tạo object lưu trữ json
                                let json=store.toJSON();
                                //xử lý dử liệu url thành JSON
                                let url= 'data:text/json;base64,' +
                                window.btoa(unescape(encodeURIComponent(JSON.stringify(json))));
                              downloadFile(url, 'polotno.json');
                              store.saveAsImage({ fileName: 'polotno.png' });
                             

                            }}
                        >Save to json</Button>
                    </label>
                </Navbar.Group>
            </NavInner>
        </NavbarContainer>
    )
});
export default Save;
// unstable_registerToolbarComponent("button",Save)
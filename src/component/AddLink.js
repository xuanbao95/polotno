import React from 'react';
import { observer } from 'mobx-react-lite';
import { NumericInput, Navbar, Alignment, InputGroup } from '@blueprintjs/core';
import { unstable_registerToolbarComponent } from 'polotno/config';
import Box from '@mui/material/Box';
import {
  FontFamilyInput,
  FontSizeInput,
  FontStyleGroup,
  FontColorInput,
  SpacingInput,
} from 'polotno/toolbar/text-toolbar';
import { Button } from "@blueprintjs/core";
import { Classes, Popover2 } from "@blueprintjs/popover2";
import CustomizedDialogs from './Dialog';
import Design from './Design';
const TextToolbars = observer(({ store }) => {
  const element = store.selectedElements[0];
  // const [valid, setValid] = React.useState(false)
  // const addLink = () => {
  //   return (

  //     !valid ? <Box width="300px" marginLeft="20px" store={store}>
  //       <label>Nhập một liên kết: </label>
  //       <input type="url"
          
  //         value={localStorage.getItem(element)} 
  //         style={{ height: "30px", width: "222px", marginRight: "10px" }} 
  //         id="link" />
  //       <div style={{ marginTop: "10px", marginLeft: "160px" }}>
  //         <button className={Classes.POPOVER2_DISMISS} onClick={() => {
  //           const ev = document.getElementById("link").value;
  //           element.set({ custom: { link: ev } })
  //           localStorage.setItem(element, JSON.stringify(ev))
  //           setValid(true)
  //         }}>add link</button>
  //       </div>

  //     </Box> : <Box width="300px" marginLeft="20px" store={store}>
  //       <input type="text" value={localStorage.getItem(element)} style={{ height: "30px", width: "222px", marginRight: "10px" }} id="link" />
  //       <div style={{ marginTop: "10px", marginLeft: "39px" }}>
  //         <button><a href={localStorage.getItem(element)} target="_blank">Truy Cập liên kết</a></button>
  //         <button style={{ marginLeft: "8px" }} onClick={() => {
  //           localStorage.removeItem(element);
  //           document.getElementById("link").value = ''
  //           setValid(false)
  //         }}>xóa link</button>
  //       </div>

  //     </Box>

  //   )
  // }
  return (
    <Navbar.Group align={Alignment.LEFT}>
      <FontColorInput store={store} elements={store.selectedElements} />
      <FontFamilyInput store={store} elements={store.selectedElements} />
      <FontSizeInput store={store} elements={store.selectedElements} />
      <FontStyleGroup store={store} elements={store.selectedElements} />
      <SpacingInput store={store} elements={store.selectedElements} />
      {/* <CustomizedDialogs store={store}/> */}
      <Design store={store}/>
    </Navbar.Group>
  );
});
export default TextToolbars;
unstable_registerToolbarComponent('text', TextToolbars)

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

  return (
    <Navbar.Group align={Alignment.LEFT}>
      <FontColorInput store={store} elements={store.selectedElements} />
      <FontFamilyInput store={store} elements={store.selectedElements} />
      <FontSizeInput store={store} elements={store.selectedElements} />
      <FontStyleGroup store={store} elements={store.selectedElements} />
      <SpacingInput store={store} elements={store.selectedElements} />
      {/* <CustomizedDialogs store={store}/> */}
      <Design store={store} elements={store.selectedElements}/>
      
    </Navbar.Group>
  );
});
export default TextToolbars;
unstable_registerToolbarComponent('text', TextToolbars)

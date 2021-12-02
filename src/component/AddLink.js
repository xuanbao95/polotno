import React from 'react';
import { observer } from 'mobx-react-lite';
import { Navbar, Alignment } from '@blueprintjs/core';
import { unstable_registerToolbarComponent } from 'polotno/config';
import {
  FontFamilyInput,
  FontStyleGroup,
  FontColorInput,
  SpacingInput,
  TextToolbar
} from 'polotno/toolbar/text-toolbar';
import Design from './Design';
import Uppercase from './UpperCase';
import Numberic from './Numberic';
import { DemoEffect } from './DemoEffect/DemoEffect';
const TextToolbars = observer(({ store }) => {
  return (
    <Navbar.Group align={Alignment.LEFT}>
      <div className="font">
      <FontFamilyInput store={store} elements={store.selectedElements} />
      </div>
      {/*  */}
      <Numberic store={store} elements={store.selectedElements}/>
      <FontColorInput store={store} elements={store.selectedElements} />
      <FontStyleGroup store={store} elements={store.selectedElements} />  
      <SpacingInput store={store} elements={store.selectedElements} />
      <Uppercase store={store} elements={store.selectedElements}/>
      <Design store={store} elements={store.selectedElements}/>
      <DemoEffect store={store} elements={store.selectedElements}/>
    </Navbar.Group>
  );
});
export default TextToolbars;
unstable_registerToolbarComponent('text', TextToolbars);

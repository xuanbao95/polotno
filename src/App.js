import logo from './logo.svg';
import './App.css';
import { loadFile } from './ReadJson/FileReadJSON';
import Workspace from 'polotno/canvas/workspace';
import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import Toolbar from 'polotno/toolbar/toolbar';
import SidePanel from 'polotno/side-panel/side-panel';
import { DEFAULT_SECTIONS } from 'polotno/side-panel/side-panel';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import Save from './ToolBar_save/Save';
import DemoPhoto from './DemoPolotno';
function App({ store,element }) {
 
  return (
    <div>
      <DemoPhoto store={store}/>
     
    </div>
    

  );
}

export default App;

import React from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import ColorPicker from 'polotno/toolbar/color-picker';
import { NumericInput} from '@blueprintjs/core';
export const DemoEffect = observer(({ store }) => {
    let elements = store.selectedElements[0];
    const [valid, setValid] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [openBright,setOpenBright]=React.useState(false);
    const[openStroke,setOpenStroke]=React.useState(false)
    for (const property in elements) {
        console.log(`${property}: ${elements[property]}`);
    }
    /**
     * blur-done
     * brightness-done
     * seia-not done yet
     * greyscale
     * text stroke
     * shadow
     * 
     */
    const handleChangeBlur = (e) => {
        let eValue = e.target.value;
        elements.set({ blurEnabled: valid })
        elements.set({ blurRadius: eValue * 0.1 })

    }
    const handleChangeBright=(e)=>{
        let eValue = e.target.value;
        elements.set({ brightnessEnabled: valid });
        elements.set({ brightness: eValue * 0.1});
    }
    const handleChangeOpenBright=()=>{
        if (valid === false) {
            setValid(true)
        } else {
            setValid(false)
        }
        if (openBright === false) {
            setOpenBright(true)
        } else {
            setOpenBright(false)
        }
        elements.set({ brightnessEnabled: valid });
        elements.set({ brightness: 0});
    }
    const handleChangeValid = () => {
        if (valid === false) {
            setValid(true)
        } else {
            setValid(false)
        }
        if (open === false) {
            setOpen(true)
        } else {
            setOpen(false)
        }
        elements.set({ blurEnabled: valid });
        elements.set({ blurRadius: 0});
        
    }
    const handleChangeSepia=()=>{
        if(valid===false){
            setValid(true)
            elements.set({sepiaEnabled:true})
        }else{
            setValid(false)
            elements.set({sepiaEnabled:false})
        }
    }
    const handleChangeGreyScale=()=>{
        if(valid===false){
            setValid(true)
            elements.set({grayscaleEnabled:true})
        }else{
            setValid(false)
            elements.set({grayscaleEnabled:false})
        }
    }
    const handleChangeStroke=()=>{
        if (valid === false) {
            setValid(true)
        } else {
            setValid(false)
        }
        if (openStroke === false) {
            setOpenStroke(true)
        } else {
            setOpenStroke(false)
        }
        elements.set({ strokeWidth: 0 });
        elements.set({ stroke: "black"});
    }
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    const showBlur = () => {
        if (open === true) {
            return (
                <div style={{ display: "block" }}>
                    <Slider

                        id="blr"
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => handleChangeBlur(e)}
                    />
                </div>
            )

        } else {
            return (
                <div style={{ display: "none" }}>
                    <Slider
                        id="blr"
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => handleChangeBlur(e)}
                    />
                </div>
            )
        }
    }
    const showBrightness=()=>{
        if (openBright === true) {
            return (
                <div style={{ display: "block" }}>
                    <Slider

                        id="blr"
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => handleChangeBright(e)}
                    />
                </div>
            )

        } else {
            return (
                <div style={{ display: "none" }}>
                    <Slider
                        id="blr"
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => handleChangeBright(e)}
                    />
                </div>
            )
        }
    }
    const showTextStroke=()=>{
        if(openStroke===true){
            return(
                <div style={{display:'block'}}>
                    <ColorPicker
        value={elements.stroke}
        onChange={(stroke) =>
          elements.set({
            stroke,
          })
        }
        store={store}
      />
      <NumericInput
        onValueChange={(fontSize) => {
          elements.set({ strokeWidth: fontSize });
        }}
        value={elements.strokeWidth}
        style={{ width: '50px', marginLeft: '10px' }}
        min={1}
        max={40}
      />
                </div>
            )
        }else{
            return(
                <div style={{display:'none'}}>
                    <ColorPicker
        value={elements.stroke}
        onChange={(stroke) =>
          elements.set({
            stroke,
          })
        }
        store={store}
      />
      <NumericInput
        onValueChange={(fontSize) => {
          elements.set({ strokeWidth: fontSize });
        }}
        value={elements.fontSize}
        style={{ width: '50px', marginLeft: '10px' }}
        min={1}
        max={40}
      />
                </div>
            )
        }
        
    }
    return (
        <div>
            <div>
                <span>Effect</span>
            </div>
            <div>
                <Box width={150}>
                    <label>Blur</label>
                    <Switch {...label} onChange={handleChangeValid} />
                        {showBlur()}
                </Box>
                <Box width={150}>
                    <label>Brightness</label>
                    <Switch {...label} onChange={handleChangeOpenBright} />
                        {showBrightness()}
                </Box>
                <Box width={150}>
                    <label>Sepia</label>
                    <Switch {...label} onChange={handleChangeSepia} />
                </Box>
                <Box width={150}>
                    <label>GreyScale</label>
                    <Switch {...label} onChange={handleChangeGreyScale} />
                </Box>
                <Box width={150}>
                    <label>Text stroke</label>
                    <Switch {...label} onChange={handleChangeStroke} />
                    {showTextStroke()}
                </Box>
            
            </div>

        </div>
    )
})

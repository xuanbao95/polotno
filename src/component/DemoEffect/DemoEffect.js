import React from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
export const DemoEffect = observer(({ store }) => {
    let elements = store.selectedElements[0];
    const [valid, setValid] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    // for (const property in elements) {
    //     console.log(`${property}: ${elements[property]}`);
    // }
    /**
     * blur-done
     * brightness
     * seia
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
        elements.set({ blurEnabled: valid })
        elements.set({ blurRadius: 0})
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
                    <Switch {...label} onChange={handleChangeValid} />
                        {showBlur()}
                </Box>
            
            </div>

        </div>
    )
})

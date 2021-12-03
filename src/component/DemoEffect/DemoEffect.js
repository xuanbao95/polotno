import React from 'react';
import { observer } from 'mobx-react-lite';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';
import ColorPicker from 'polotno/toolbar/color-picker';
import { NumericInput } from '@blueprintjs/core';
import { display } from '@mui/system';
export const DemoEffect = observer(({ store }) => {
    let elements = store.selectedElements[0];
    const [openEffect, setOpenEffect] = React.useState(false)
    const [valid, setValid] = React.useState(false)
    const [open, setOpen] = React.useState(false);
    const [openBright, setOpenBright] = React.useState(false);
    const [openStroke, setOpenStroke] = React.useState(false);
    const [openShadow, setOpenShadow] = React.useState(false);

    /**
     * blur-done
     * brightness-done
     * seia-not done yet
     * greyscale-done
     * text stroke-done
     * shadow
     * 
     */
    const handleChangeBlur = (e) => {
        let eValue = e.target.value;
        elements.set({ blurEnabled: valid })
        elements.set({ blurRadius: eValue * 0.1 })

    }
    const handleChangeBright = (e) => {
        let eValue = e.target.value;
        elements.set({ brightnessEnabled: valid });
        elements.set({ brightness: eValue * 0.1 });
    }
    const handleChangeOpenBright = () => {
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
        elements.set({ brightness: 0 });
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
        elements.set({ blurRadius: 0 });

    }
    const handleChangeSepia = () => {
        if (valid === false) {
            setValid(true)
            elements.set({ sepiaEnabled: true })
        } else {
            setValid(false)
            elements.set({ sepiaEnabled: false })
        }
    }
    const handleChangeGreyScale = () => {
        if (valid === false) {
            setValid(true)
            elements.set({ grayscaleEnabled: true })
        } else {
            setValid(false)
            elements.set({ grayscaleEnabled: false })
        }
    }
    const handleChangeStroke = () => {
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
        elements.set({ stroke: "black" });
    }
    const handleChangeShadowBlur = (e) => {
        let eValue = e.target.value;
        elements.set({ shadowEnabled: valid });
        elements.set({ shadowBlur: eValue * 2 });
    }
    const handleChangeShadow = () => {
        if (valid === false) {
            setValid(true)
        } else {
            setValid(false)
        }
        if (openShadow === false) {
            setOpenShadow(true)
        } else {
            setOpenShadow(false)
        }
        elements.set({ shadowEnabled: valid });
        elements.set({ shadowBlur: 0 });
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
    const showBrightness = () => {
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
    const showTextStroke = () => {
        if (openStroke === true) {
            return (
                <div className="strokeEffect">
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
        } else {
            return (
                <div className="strokeEffect"  style={{ display: 'none' }}>
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
    const showShadow = () => {
        if (openShadow === true) {
            return (
                <div style={{ display: "block" }}>
                    <Slider

                        id="blr"
                        size="small"
                        defaultValue={0}
                        aria-label="Small"
                        valueLabelDisplay="auto"
                        onChange={(e) => handleChangeShadowBlur(e)}
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
                        onChange={(e) => handleChangeShadowBlur(e)}
                    />
                </div>
            )
        }
    }
    const handleOpenEffect = () => {
        if (openEffect === false) {
            setOpenEffect(true)
        } else {
            setOpenEffect(false)
        }
    }
    return (
        <div className="classEffect">
            <div className="textEffect">
                <span onClick={handleOpenEffect}>Effect</span>
            </div>
            <div className="boxEffect" style={{ display: (openEffect === false) ? "none" : "block" }}>
                <Box width={150}>
                    <div className="boxEffect_2">
                        <label>Blur</label>
                        <Switch className="switchEffect" {...label} onChange={handleChangeValid} />
                    </div>
                    {showBlur()}
                </Box>
                <Box width={150}>
                    <div className="boxEffect_2">
                        <label>Brightness</label>
                        <Switch className="switchEffect" {...label} onChange={handleChangeOpenBright} />
                    </div>

                    {showBrightness()}
                </Box>
                <Box width={150}>
                    <div className="boxEffect_2">
                        <label>Sepia</label>
                        <Switch className="switchEffect" {...label} onChange={handleChangeSepia} />
                    </div>

                </Box>
                <Box width={150}>
                    <div className="boxEffect_2">
                        <label>GreyScale</label>
                        <Switch className="switchEffect" {...label} onChange={handleChangeGreyScale} />
                    </div>

                </Box>
                <Box width={150}>
                    <div className="boxEffect_2">
                        <label>Text stroke</label>
                        <Switch className="switchEffect" {...label} onChange={handleChangeStroke} />
                    </div>

                    {showTextStroke()}
                </Box>
                <Box width={150}>
                    <div className="boxEffect_2">
                        <label>Shadow</label>
                        <Switch className="switchEffect" {...label} onChange={handleChangeShadow} />
                    </div>


                    {showShadow()}
                </Box>

            </div>

        </div>
    )
})

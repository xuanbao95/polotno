import React from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { makeStyles } from '@mui/styles';
import { observer } from 'mobx-react-lite';
const useStyles=makeStyles({
    root:{
        position:"absolute",
        bottom:"10px",
        right:"50px",
        color:"black"
    }
})

const ZoomButton=observer(({store})=> {
    const classes=useStyles();
    
    return (
        <Box width={150} className={classes.root}>
        <Slider size="small" defaultValue={0} onChange={(e)=>{
            let ev=e.target.value;
            if(ev==0){
                store.setSize(430,739,true)
            }else{
                store.setScale((ev*0.01)/0.5)
            }
            
        }} aria-label="Default" valueLabelDisplay="auto" />
      </Box>
    )
})
export default ZoomButton;

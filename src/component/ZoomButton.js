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
    
    const handleChange=(e)=>{
        let min =e.target.value;
        let max=100;
        if(min==0){
            store.setScale(0);
        }else if(min++){
            store.setScale(store.scale++)
        }else{
            store.setScale(max)
        }
    }
    return (
        <Box width={150} className={classes.root}>
        <Slider size="small" defaultValue={0} onChange={handleChange} aria-label="Default" valueLabelDisplay="on" />
      </Box>
    )
})
export default ZoomButton;

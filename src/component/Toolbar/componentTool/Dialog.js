import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/material/styles';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs({ store, props }) {
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState('1');
    const [selectLink, setSelectLink] = React.useState();
    const [addLink, setAddLink] = React.useState();
    const [valid,setValid]=React.useState(false)
    const [linkStore, setLinkStore] = React.useState([
        { title: "Link 1", url: "http://localhost:3000/" },
        { title: "Link 2", url: "https://www.figma.com/file/pZFx66WbIqWQAFFLJl2Mt2/Ufala?node-id=3%3A7960" },
        { title: "Link 3", url: "https://dev-ufala.upos.vn/" },
        { title: "Link 4", url: "https://github.com/" },
        { title: "Link 5", url: "https://www.google.com/" },
        { title: "Link 6", url: "https://dev-ufala.upos.vn/" },
        { title: "Link ", url: "https://www.youtube.com/" },
    ]);

    const handleChangeLink = (event) => {
        setSelectLink(event.target.value);

    };
    const element = store.selectedElements[0];
    for (const property in element) {
        console.log(`${property}: ${element[property]}`);
      }
      element.set({custom:{url:'',title:''}})
      let link=element.custom;
      console.log(typeof link);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClickOpen = () => {
        console.log(element);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickSelect = () => {
        setLinkStore([...linkStore, selectLink]);
      
        
    };
  const tabOpen=()=>{
    if(link.url===''){
        return(
            <div>
                <input id="url"/>
                <button onClick={()=>{
                    const eValue=document.getElementById("url").value;
                    link.url=eValue
                    console.log(link.url);
                }}>cập nhật link</button>
            </div>
        )
    }else if(link.url) {
        <div>
            <input id="url" value={link.url}/>
            <a href={link.url}>truy cạp link</a>
            <button onClick={()=>{
                link.set({url:'',title:''})
            }}>xóa link</button>
        </div>
    }
        
      }
       
            
      
  
    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}

            >
                <BootstrapDialogTitle id="customized-dialog-title">
                    Nhập Link mới
                </BootstrapDialogTitle>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value} style={{maxWidth:"300px"}}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Add new Link" value="1" />
                                <Tab label="Link Store" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {tabOpen()}
                        </TabPanel>
                        <TabPanel value="2">
                            <Box style={{ width: "300px" }}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" >Link</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-link"
                                        value={selectLink}
                                        label="Link"
                                        onChange={handleChangeLink}
                                    >
                                        {linkStore.map((item) => {
                                            return (
                                                <MenuItem value={item}>{item.title}</MenuItem>
                                            )
                                        })}

                                    </Select>
                                </FormControl>
                                <button onClick={handleClickSelect} style={{marginTop:"10px",marginLeft:"202px"}}>Cập nhật Link</button>
                            </Box>
                        </TabPanel>
                    </TabContext>
                </Box>
            </BootstrapDialog>
        </div>
    );
}

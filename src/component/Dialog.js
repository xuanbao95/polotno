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
    const [isOpen, setIsOpen] = React.useState(true);
    const[selectLink,setSelectLink]=React.useState();
    console.log(selectLink);

    const [linkStore, setLinkStore] = React.useState([
        { title: "Link 1", url: "http://localhost:3000/" },
        { title: "Link 2", url: "https://www.figma.com/file/pZFx66WbIqWQAFFLJl2Mt2/Ufala?node-id=3%3A7960" },
        {  title: "Link 3", url: "https://dev-ufala.upos.vn/" },
        {  title: "Link 4", url: "https://github.com/" },
        {  title: "Link 5", url: "https://www.google.com/" },
        {  title: "Link 6", url: "https://dev-ufala.upos.vn/" },
    ]);
    const handleChangeLink = (event) => {
        setSelectLink(event.target.value);
        
    };
    const element = store.selectedElements[0];
   
    element.set({custom:{url:"",title:""}});
               
    console.log(typeof element);
    for (const property in element) {
        console.log(`${property}: ${element[property]}`);
      }
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleClickSelect = () => {
        setLinkStore([...linkStore,selectLink]);
        element.set({custom:{url:selectLink.url,title:selectLink.title}})
        console.log(element.custom.url);
        console.log(element.custom.title );
    };
    const TabOne = () => {
        return (

        (!isOpen)?<Box width="300px" marginLeft="20px" store={store}>
            <p>Nhập tên liên kết: </p>
            <input type="text"
              style={{ height: "30px", width: "222px", marginRight: "10px" }} 
              id="title" />
            <p>Nhập một liên kết: </p>
            <input type="url"
              style={{ height: "30px", width: "222px", marginRight: "10px" }} 
              id="link" />
            <div style={{ marginTop: "10px", marginLeft: "160px" }}>
              <button onClick={() => {
                const ev = document.getElementById("link").value;
                const titleLink = document.getElementById("title").value;
                element.set({custom:{url:ev,title:titleLink}})
                console.log(element.custom.url);
                console.log(element.custom.title );
                setIsOpen(true)
              }}>add link</button>
            </div>
    
          </Box> :<Box width="300px" marginLeft="20px" store={store}>
            <p>liên kết: </p>
            <input type="url"
              
              style={{ height: "30px", width: "222px", marginRight: "10px" }} 
              id="link" />
            <div style={{ marginTop: "10px", marginLeft: "160px" }}>
                <a href={element.custom.url} >truy cập </a>
              <button onClick={() => {
                const ev = document.getElementById("link").value;
                element.set({custom:{url:''}})
                console.log(element.custom.url);
                setIsOpen(false)
              }}>xóa link</button>
            </div>
    
          </Box>
        )
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
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add URL
                </BootstrapDialogTitle>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Add new Link" value="1" />
                                <Tab label="Link Store" value="2" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {TabOne()}
                        </TabPanel>
                        <TabPanel value="2">                            
                               <Box sx={{ minWidth: 120 }}>
                               <FormControl fullWidth>
                                   <InputLabel id="demo-simple-select-label">Link</InputLabel>
                                   <Select
                                       labelId="demo-simple-select-label"
                                       id="demo-link"
                                       value={selectLink}
                                       label="Link"
                                       onChange={handleChangeLink}
                                   >
                                      {linkStore.map((item)=>{
                                          return(
                                              <MenuItem value={item}>{item.title}</MenuItem>
                                          )
                                      })}
                                       
                                   </Select>
                               </FormControl>
                           </Box>                            
                            <button onClick={handleClickSelect}>Cập nhật Link</button>
                        </TabPanel>
                    </TabContext>
                </Box>
            </BootstrapDialog>
        </div>
    );
}

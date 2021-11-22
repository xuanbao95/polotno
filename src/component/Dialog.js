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
    const [isOpen, setIsOpen] = React.useState(false);
    const[selectLink,setSelectLink]=React.useState();
    console.log(selectLink);

    const [linkStore, setLinkStore] = React.useState([
        { id: "1", title: "Link 1", link: "http://localhost:3000/" },
        { id: "2", title: "Link 2", link: "https://www.figma.com/file/pZFx66WbIqWQAFFLJl2Mt2/Ufala?node-id=3%3A7960" },
        { id: "3", title: "Link 3", link: "https://dev-ufala.upos.vn/" },
    ]);
    const handleChangeLink = (event) => {
        setSelectLink(event.target.value);
        
    };
    const element = store.selectedElements[0];
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
        localStorage.setItem(element,JSON.stringify(setLinkStore([...linkStore,selectLink])))
       
    };
    const TabOne = () => {
        return (

            !isOpen ? <Box width="300px" marginLeft="20px" store={store}>
                {/* <p>Nhập tên liên kết: </p>
                <input type="text"
                    value={localStorage.getItem(element)}
                    style={{ height: "30px", width: "222px", marginRight: "10px" }}
                    id="titleLink" /> */}
                <p>Nhập một liên kết: </p>
                <input type="url"
                    style={{ height: "30px", width: "222px", marginRight: "10px" }}
                    id="link" />

                <div style={{ marginTop: "10px", marginLeft: "160px" }}>
                    <button onClick={() => {
                        const ev = document.getElementById("link").value;
                        console.log(ev);
                        element.set({ custom: { link: ev } })
                        localStorage.setItem(element, JSON.stringify(ev))
                        setIsOpen(true)
                    }}>add link</button>
                </div>

            </Box> : <Box width="300px" marginLeft="20px" store={store}>
                {/* <p>Tên liên kết: </p>
                <input type="text"
                    value={localStorage.getItem(element)}
                    style={{ height: "30px", width: "222px", marginRight: "10px" }}
                    id="titleLink" /> */}
                <p>Liên kết: </p>
                <input type="url"
                    value={localStorage.getItem(element)}
                    style={{ height: "30px", width: "222px", marginRight: "10px" }}
                    id="link" />
                <div style={{ marginTop: "10px", marginLeft: "39px" }}>
                    <button><a href={localStorage.getItem(element)} target="_blank">Truy Cập liên kết</a></button>
                    <button style={{ marginLeft: "8px" }} onClick={() => {
                        localStorage.removeItem(element);
                        document.getElementById("link").value = ''
                        
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

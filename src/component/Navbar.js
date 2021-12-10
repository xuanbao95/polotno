import React from "react";
import { makeStyles } from "@mui/styles";
import { Link, useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Box } from "@mui/system";
const useStyles = makeStyles({
  root: {
    height: "56px",
    background: "linear-gradient(90deg,#33cccc 0%,#0085FF 100%)",
    maxWidth: "100%",
    color: "#ffffff",
    padding: "11px",

  },

  span_back: {
    marginLeft: "13px",
  },
  span_text: {
    marginLeft: "28rem",
    fontSize: "16px",
    fontStyle: "italic",
  },
  span_a: {
    cursor: "pointer",
    textDecoration: "underline",
    color: "#e6ebef",
    fontWeight: 700,

  },
  button_one: {
    width: "146px",
    height: "40px",
    border: "1px solid #ffffff",
    borderRadius: "40px",
    marginLeft: "11px",
    boxSizing: "border-box",
    background: "none",
    cursor: "pointer",
  },
  button_two: {
    width: "146px",
    height: "40px",
    border: "1px solid #ffffff",
    borderRadius: "40px",
    background: "#ffffff",
    color: "black",
    marginLeft: "9px",
    cursor: "pointer",
  },
});

export default function Navbar({ store }) {
  const [img,setImg]=React.useState();

  const [open,setOpen]=useState(false)
  const navigate=useNavigate()
  const handleClick = async () => {
    let json=store.toJSON()
     
         axios.post('https://1e93-125-234-117-20.ngrok.io/api/landingpage/builder',{landingpage:json})
          .then(function (response) {
            navigate(`/landing/${response.data.data.id}`)
            setImg(response.data.data.id)
          })
          .catch(function (error) {
            console.log(error);
          });
          
    }
    const handleOpen=()=>{
      if(open===false){
        setOpen(true)
        document.getElementById("modalPop").style.display = 'block'
      }else{
        setOpen(false);
        document.getElementById("modalPop").style.display="none"
      }
    }
    const showPopUp=()=>{
      return(
        <div id="modalPop" style={{display:'none'}}>
          <div className="setlink" style={{background:'white'}}>
              <h3>Thiết lập link</h3>
              <div className="buttonTab">
                  <button>Xuất bản</button>
                  <button>Mã chuyển đổi</button>
              </div>
              <div className="exportLink">
                  <h1>Chúc mừng bạn đã xuất bản thành công!</h1>
                  <Box>
                      <p>Tên trang</p>
                      <input type='text' />
                  </Box>
                  <Box>
                      <p>Link trang Landing Page của bạn, đã được tự động rút gọn link</p>
                      <input type='text' />
                  </Box>
                  <button>Xuất bản lại</button>
              </div>
          </div>
      </div>
      )
    }
      
  

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <span>
        <a href="https://dev-ufala.upos.vn/" className={classes.span_a} style={{ textDecoration: "none", fontWeight: "150" }}>
          <i class="fas fa-chevron-left" style={{ marginLeft: "30px" }}></i>
          <span className={classes.span_back}>Trở về trang chủ</span>
        </a>

      </span>

      <span className={classes.span_text}>
        Để lưu Landing Page của bạn, hãy{" "}
        <a href="#" className={classes.span_a}>
          Đăng Ký
        </a>{" "}
        hoặc{" "}
        <a href="#" className={classes.span_a}>
          Đăng Nhập
        </a>
      </span>
      <i
        class="fas fa-desktop"
        onClick={() => {
          store.setSize(430, 700, true)
        }}
        style={{
          marginLeft: "9px",
          border: "1px solid #ffffff",
          borderRadius: "16px",
          width: "21px",
          height: "21px",
          paddingLeft: "4px",
          paddingTop: "5px",
          cursor: "pointer",
          fontSize: "10px"
        }}
      ></i>
      <i
        class="fas fa-mobile-alt"
        onClick={() => {
          store.setSize(380, 2000, true)
        }}
        style={{
          marginLeft: "9px",
          border: "1px solid #ffffff",
          borderRadius: "16px",
          width: "21px",
          height: "21px",
          paddingLeft: "5px",
          paddingTop: "4px",
          cursor: "pointer",
          fontSize: "12px"
        }}
      ></i>
      <button className={classes.button_one} onClick={()=>{
          navigate(`/landing/${img}`)
      }}> Xem trước</button>
      <button id="buttonExport" className={classes.button_two} onClick={handleClick} >Xuất bản</button>
      
    </div>
  );
}

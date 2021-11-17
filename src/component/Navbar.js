import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    height: "56px",
    background: "linear-gradient(90deg,#33cccc,0%,#0085ff 100%)",
    maxWidth: "100%",
    color: "#ffffff",
    paddingTop: "28px",
  },
  span_hover:{
      cursor:"pointer",
      transition:"0.5s",
      '&:hover':{
        color:"green"
    }
  },
  span_back: {
    marginLeft: "13px",
  },
  span_text: {
    marginLeft: "14rem",
    fontSize: "16px",
    fontStyle: "italic",
  },
  span_a: {
    cursor: "pointer",
    textDecoration: "underline",
    color: "#ffffff",
    fontWeight: 700,
    
  },
    button_one:{
        width:"146px",
        height:"40px",
        border:"1px solid #ffffff",
        borderRadius:"40px",
        marginLeft:"11px",
        boxSizing:"border-box",
        background:"none",
        cursor:"pointer",
    },
    button_two:{
        width:"146px",
        height:"40px",
        border:"1px solid #ffffff",
        borderRadius:"40px",
        background:"#ffffff",
        color:"black",
        marginLeft:"11px",
        cursor:"pointer",
    },
});

export default function Navbar({ store }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
        <span className={classes.span_hover}>
        <i class="fas fa-chevron-left" style={{ marginLeft: "30px" }}></i>
      <span className={classes.span_back}>Trở về trang chủ</span>
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
        onClick={()=>{
        store.setSize(430,700,true)
        }}
        style={{
          marginLeft: "11px",
          border: "1px solid #ffffff",
          borderRadius: "16px",
          width: "18px",
          height: "18px",
          paddingLeft: "4px",
          paddingTop: "7px",
          cursor:"pointer",
        }}
      ></i>
      <i
        class="fas fa-mobile-alt"
        onClick={()=>{
          store.setSize(380,2000,true)
          }}
        style={{
          marginLeft: "8px",
          border: "1px solid #ffffff",
          borderRadius: "16px",
          width: "18px",
          height: "18px",
          paddingLeft: "4px",
          paddingTop: "7px",
          cursor:"pointer",
        }}
      ></i>
      <button className={classes.button_one}>Xem trước</button>
      <button className={classes.button_two}>Xuất bản</button>
    </div>
  );
}

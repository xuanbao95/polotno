import React from "react";
import { makeStyles } from "@mui/styles";
import { Link ,useParams} from 'react-router-dom';

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
 const[data,setData]=React.useState({
  id: 2,
  name: "test",
  width: 430,
  height: 700,
  updated_at: "2021-12-06T03:33:29.000000Z",
    created_at: "2021-12-06T03:33:29.000000Z",
    user_id: 0,
    deleted_at: null
 })
 
  // const handleSave=()=>{
  //   let json = store.toJSON();
  //   const requestOptions = {
  //     method: 'POST',
  //     headers: { 
  //         'Content-Type': 'application/json',
  //           // "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmQ5MzZkM2Q5OTk4ZWQ0MDZkZGVhY2Y0NThiOTcxODdlMzUwMDc2NDM5M2VhYjRlZWQ5YzJlZGRiNDM4N2RiMjYwY2RiODllOTdjYWI0NjgiLCJpYXQiOjE2Mzg4NTk1NzguOTEyOTI2LCJuYmYiOjE2Mzg4NTk1NzguOTEyOTMyLCJleHAiOjE2NzAzOTU1NzguNzM0OTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.s2TW2BsBUGuPkc1LnBTHY1ZYAulL_jOhIcjS611Q_5J7L7zrV3e1ZoOqxY93lL2St51vF7S2Jk28fa_r2FSAvmCkn0zZdOkRMMKkq5K-6f2v3mxqomfiGey_7MJ52K_JsU8tgQmcnR53xXlxvq3hmXUm2Cafh-Ho1glj2Ebh74TxY8FNZ3sHCToxrNAQ6yI1UhB3iB78Lw7NGEOcqL4Qe2sj66QbdDMg3fOzr1qvtAS4Z1LNbWZ3xucMNZ43DG7FyzXIdhvlVOlubxKZdLLMAoZt6DFWQh0CISMcXyJUbYB9JUWAnJF1Gtl_1Brb7RDhxt8qOFzcE5q9Hh8KVjeQZJJjxo2hhEnnLVVaNWtwfJG2hGzv9eixzkuOOU9ggnpKUIwVCW1mNiYcepxCjtbXi9MwDLjFQQAV-1VNk4mvFMTEMyztSITwsTc-9t-vVFgf720aQwOs3INrFceu9s6KfExKRhlGr_K0fodOKUxjbd_nz60fJyO12_Qp07b13yxLNITZ2DYSH5RetTQ3iq5sWWTPvqUVYLOwB7R68oihrSlvnZ6bC4AEJsbfnuL5vBIOWHd8Kahke2QFx56ZYvR5Pb3x33FKguSb_44_A9L0KLKyXoKrY9k_KYcMlC5wEp-7onbfD-Lp3RlRQQzAAVsOmlNxctfeo0UTrdJf9udvBgg "
  //     },
    
  //     body: JSON.stringify({ landingpage: json })
  // };
    
  //     fetch(`saveJson.json`,requestOptions)
  //       .then(res => res.json())
  //       .then(
  //         (result) => {
  //             console.log(result);

  //         },
         
  //       )
       
  // }
  const handleClick=()=>{
    let json=store.toJSON()
    console.log(JSON.stringify(json));
    
    console.log(setData({...data,content:json}));
    // localStorage.setItem("example",JSON.stringify(json))
  
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
      <button className={classes.button_one}> <Link to='landing' style={{color:"white"}}>Xem trước</Link></button>
      <button className={classes.button_two} onClick={handleClick} >Xuất bản</button>
    </div>
  );
}

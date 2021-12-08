import React from "react";
import { Link, useParams } from 'react-router-dom';

export default function LandingPage({ store }) {
    const [dataImg, setDataImg] = React.useState()
    console.log(dataImg)
    // React.useEffect(() => {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json',
    //             "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmQ5MzZkM2Q5OTk4ZWQ0MDZkZGVhY2Y0NThiOTcxODdlMzUwMDc2NDM5M2VhYjRlZWQ5YzJlZGRiNDM4N2RiMjYwY2RiODllOTdjYWI0NjgiLCJpYXQiOjE2Mzg4NTk1NzguOTEyOTI2LCJuYmYiOjE2Mzg4NTk1NzguOTEyOTMyLCJleHAiOjE2NzAzOTU1NzguNzM0OTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.s2TW2BsBUGuPkc1LnBTHY1ZYAulL_jOhIcjS611Q_5J7L7zrV3e1ZoOqxY93lL2St51vF7S2Jk28fa_r2FSAvmCkn0zZdOkRMMKkq5K-6f2v3mxqomfiGey_7MJ52K_JsU8tgQmcnR53xXlxvq3hmXUm2Cafh-Ho1glj2Ebh74TxY8FNZ3sHCToxrNAQ6yI1UhB3iB78Lw7NGEOcqL4Qe2sj66QbdDMg3fOzr1qvtAS4Z1LNbWZ3xucMNZ43DG7FyzXIdhvlVOlubxKZdLLMAoZt6DFWQh0CISMcXyJUbYB9JUWAnJF1Gtl_1Brb7RDhxt8qOFzcE5q9Hh8KVjeQZJJjxo2hhEnnLVVaNWtwfJG2hGzv9eixzkuOOU9ggnpKUIwVCW1mNiYcepxCjtbXi9MwDLjFQQAV-1VNk4mvFMTEMyztSITwsTc-9t-vVFgf720aQwOs3INrFceu9s6KfExKRhlGr_K0fodOKUxjbd_nz60fJyO12_Qp07b13yxLNITZ2DYSH5RetTQ3iq5sWWTPvqUVYLOwB7R68oihrSlvnZ6bC4AEJsbfnuL5vBIOWHd8Kahke2QFx56ZYvR5Pb3x33FKguSb_44_A9L0KLKyXoKrY9k_KYcMlC5wEp-7onbfD-Lp3RlRQQzAAVsOmlNxctfeo0UTrdJf9udvBgg "
    //         },

    //     };
    //     fetch(`http://6a8f-125-234-117-20.ngrok.io/api/landingpage/builder/68`, requestOptions).then(res => res.json())
    //         .then(
    //             (result) => {
    //                 setIsloading(true);
    //                 setDataImg(JSON.parse(result.data.content));

    //             },
    //             (error) => {
    //                 setIsloading(true);

    //             }
    //         )
    // }, [])
    React.useEffect(() => {
        // const requestOptions = {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json',
        //         // "Authorization":"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiY2MwNjFjMDc0MWE1ZWNiYmQ3NjYwNTdjODRjZWNjNzBlM2I4YTU1MmRiZDMzMmVjZTFjMWI2ZjBiNGM3MTA0Y2FhYmVjYzU3NzA2YzA4ZDAiLCJpYXQiOjE2Mzg5NDUyNzMuNzE5MTQ3LCJuYmYiOjE2Mzg5NDUyNzMuNzE5MTUxLCJleHAiOjE2NzA0ODEyNzMuNzE1OTQ5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.leVSKK3uMtL-pHsDMvoicE2tC6UcSYG9Tk7iECcPPr4ZH9UNscTR5xvYEA2P4PsCr4IwuXOsUgVZSuXbj1FUpz-rxhfqCgqGcyEgroH9NGu2wncc_IJ5qZZ91_9QwuU7jN8UtkXqoY5l8GJdTnYHRTyjjH1Yf-KTgJPWSChtkumBt2HH89IIPPIqxHEIIiVGVEk0BM63nZv0JMjihKZKUAUP4Gur-G7ouVT0aGuZPX5gEZRWOigldIjSjYYfQKNaRTEPLi-s_8Gr6pQYCNSyCfsiUPWjTBJqsLXnbKNLJMUM0bIUUnXhKy0E7tSqyKEpo6uZfzvS8szMHWBqSB2l88tCkNW0ajXqraTzineIEdYPi_wtGoEDSYw84j8Zgjyp2wtsyMgbH8MGHTUpWAdjvhLhbEeCcAtvCkU9hOiwoLTihoRxvirddcIFrouB5Pk3h6YpC8n-d-McsfMjCr8Xm-lxDD41yoPQI6e9PF1U3qjjgOTbkGUtMfPBsKMOfmwWkZL3Blgls55EtiToP5JsDpUDcvfnGTIPIELB5XjhkSiDEpoF--kUNzVlAW120009mAf81TurM0rzHC4ZB07UK3p7rebBylP0yx0rCVOoj7iBTUu9-jjDv9c40OK687h69a9qg0M7Uq8Fq7P0qHZkoq98eyCMEeg6KRrf4_2w3IU"
        //     },

        // };
        const getData = async () => {
            try {
                const req = await fetch(`data.json`)
                const data = await req.json()
                setDataImg(data)
            } catch (er) {
                console.log(er);
            }

        }
        getData()
    }, [])
    const imgData = () => {
        if (dataImg) {
            let a = dataImg.content;
            if (a) {
                console.log(JSON.parse(a));
            }
            return <div>{store.loadJSON(JSON.parse(a))}</div>
        }
    }
 
    return (
        <div>
            <Link to="/">Polotno</Link>
                {imgData()}
        </div>
    )
}
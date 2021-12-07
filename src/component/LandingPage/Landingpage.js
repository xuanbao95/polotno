import React from "react";
import { Link, useParams } from 'react-router-dom';

export default function LandingPage({ store }) {
    const [isloading, setIsloading] = React.useState(false)
    const [dataImg, setDataImg] = React.useState()
console.log(dataImg)
    React.useEffect(() => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiYmQ5MzZkM2Q5OTk4ZWQ0MDZkZGVhY2Y0NThiOTcxODdlMzUwMDc2NDM5M2VhYjRlZWQ5YzJlZGRiNDM4N2RiMjYwY2RiODllOTdjYWI0NjgiLCJpYXQiOjE2Mzg4NTk1NzguOTEyOTI2LCJuYmYiOjE2Mzg4NTk1NzguOTEyOTMyLCJleHAiOjE2NzAzOTU1NzguNzM0OTE3LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.s2TW2BsBUGuPkc1LnBTHY1ZYAulL_jOhIcjS611Q_5J7L7zrV3e1ZoOqxY93lL2St51vF7S2Jk28fa_r2FSAvmCkn0zZdOkRMMKkq5K-6f2v3mxqomfiGey_7MJ52K_JsU8tgQmcnR53xXlxvq3hmXUm2Cafh-Ho1glj2Ebh74TxY8FNZ3sHCToxrNAQ6yI1UhB3iB78Lw7NGEOcqL4Qe2sj66QbdDMg3fOzr1qvtAS4Z1LNbWZ3xucMNZ43DG7FyzXIdhvlVOlubxKZdLLMAoZt6DFWQh0CISMcXyJUbYB9JUWAnJF1Gtl_1Brb7RDhxt8qOFzcE5q9Hh8KVjeQZJJjxo2hhEnnLVVaNWtwfJG2hGzv9eixzkuOOU9ggnpKUIwVCW1mNiYcepxCjtbXi9MwDLjFQQAV-1VNk4mvFMTEMyztSITwsTc-9t-vVFgf720aQwOs3INrFceu9s6KfExKRhlGr_K0fodOKUxjbd_nz60fJyO12_Qp07b13yxLNITZ2DYSH5RetTQ3iq5sWWTPvqUVYLOwB7R68oihrSlvnZ6bC4AEJsbfnuL5vBIOWHd8Kahke2QFx56ZYvR5Pb3x33FKguSb_44_A9L0KLKyXoKrY9k_KYcMlC5wEp-7onbfD-Lp3RlRQQzAAVsOmlNxctfeo0UTrdJf9udvBgg "
            },

        };
        fetch(`https://dbd8-125-234-117-20.ngrok.io/api/landingpage/builder/68`, requestOptions).then(res => res.json())
            .then(
                (result) => {
                    setIsloading(true);
                    setDataImg(JSON.parse(result.data.content));

                },
                (error) => {
                    setIsloading(true);

                }
            )
    }, [])


    return (
        <div>
            <Link to="/">Polotno</Link>
           
        </div>
    )
}
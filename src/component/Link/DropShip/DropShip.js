import React, { useState } from 'react';
import { useNavigate } from 'react-router';


export default function DropShip({ store }) {
    let elements = store.selectedElements[0];
    const [open, setOpen] = useState(false);
    const local = localStorage.getItem(elements);
    const navigate = useNavigate();
    for (const property in elements) {
        console.log(`${property}: ${elements[property]}`);
    }
    const [listProduct, setListProduct] = React.useState();
    console.log(listProduct);
    React.useEffect(() => {
        const callAPI = async () => {
            const res = await fetch('http://d9f3-125-234-117-20.ngrok.io/api/dropshipping/pr', {
                method: 'GET', headers: {
                    'Accept': 'application/json'
                }
            }).then(res => res.json()).then(result => setListProduct(result.data.data))

        }
        callAPI()
    }, [])
    const show = () => {
        if (listProduct) {
            return listProduct.map((item) => {
                return (
                    <div style={{ marginLeft: '10px' }} onClick={() => {
                        document.getElementById('link').value = item.name;

                        // elements.set({custom:{url:eValue}})
                        // navigate(`/landing/${item.id}`)
                    }}>
                        <div>
                            <img src="https://picsum.photos/100/50" atl="123" />
                        </div>
                        <span dangerouslySetInnerHTML={{ __html: item.name }} style={{ fontSize: '10px', textAlign: 'center', width: '50px', height: "50px" }} />
                    </div>
                )
            })
        }
    }
    const handleAddLink = () => {
        let linkValue = document.getElementById('link').value;
        elements.set({ custom: { url: linkValue } });
        localStorage.setItem(elements, JSON.stringify(linkValue))
        console.log(typeof elements.set({ custom: { url: linkValue } }));
    }
    const AddNewLink = () => {
        if (local === null) {
            return (
                <div >
                    <div>
                        <h4 style={{ marginLeft: "7px" }}>Nhập một link :</h4>
                        <input id="link" type='text' />
                        <button onClick={handleAddLink}>Nhập link</button>
                    </div>

                </div>
            )
        } else {
            return (
                <div>
                    <h4 style={{ marginLeft: "7px" }}>Link :</h4>
                    <div>
                        <input id="link" type='text' value={local} />
                        <button onClick={handleAddLink}>Nhập link</button>
                    </div>
                </div>
            )
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', width: '150px', margin: '10px' }}>
                {show()}
            </div>
            <div>
               {AddNewLink()}
            </div>
        </div>

    )
}
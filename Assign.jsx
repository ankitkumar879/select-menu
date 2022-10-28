import React from 'react'
import { useState } from 'react'
import Data from '../components/db.json'
const Assign = () => {
    const [data, setData] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    const handlechange = (e) => {
        e.preventDefault();
        setData(e.target.value);
    }
    const handlechange2 = (e) => {
        e.preventDefault();
        setData2(e.target.value);
    }
    const handlechange3 = (e) => {
        e.preventDefault();
        setData3(e.target.value);
    }

    return (
        <>
            <div className='' style={{ display: "flex", alignItems: "center" }}>
                <label htmlFor="name" >Name :</label>
                <select name="name" id="name" style={{ width: "300px", paddin: "20px", margin: "20px", height: "30px" }} value={data} onChange={handlechange}>
                    {
                        Data.map((item) => {
                            return (<>

                                <option style={{ fontSize: "20px" }} key={item.id}>{item.name}</option>


                            </>)
                        })
                    }
                </select>
                <label htmlFor="">Batter :</label>
                <select name="" id="" style={{ width: "300px", paddin: "20px", margin: "20px", height: "30px" }} value={data2} onChange={handlechange2}>
                    {
                        Data.map((item1) => {
                            return (<>
                                {item1.batters.batter.map((items) => {
                                    return (<>
                                        <option style={{ fontSize: "20px" }} key={items.id}>{items.type}</option>
                                    </>)
                                })}


                            </>)
                        })
                    }
                </select>
                <label htmlFor="">Flavor :</label>
                <select name="" id="" style={{ width: "300px", paddin: "20px", margin: "20px", height: "30px" }} value={data3} onChange={handlechange3}>
                    {
                        Data.map((item) => {
                            return (<>

                                {item.topping.map((item) => {
                                    return (<>

                                        <option style={{ fontSize: "20px" }} key={item.id}>{item.type}</option></>)
                                })}
                            </>)
                        })
                    }
                </select>

            </div>
            <div>
                <p>{data}</p>
                <p>{data2}</p>
                <p>{data3}</p>
            </div>
        </>
    )
}

export default Assign


import { useState, useEffect } from "react";

function DataFetcher(){
    const [getData, setData] = useState([])

    useEffect(()=>{
        async function fetchData(){
            try{
                const response = await fetch('https://api.coincap.io/v2/assets')
                const jsonData = await response.json()
                setData(jsonData.data);
            }
            catch(error){
                console.error('unable to fetch data', error);
            }
        }
        fetchData()
    }, []);

    return(
        <div className="container">
            <h2>Display Data</h2>
            {getData.map((item,index)=> (
                <ul className="style" key = {index}>
                    <li>{item.name}</li>
                    <li>{item.symbol}</li>
                    <li>{item.priceUsd}</li>
                </ul>
            ))}
        </div>
    )
}
export default DataFetcher;
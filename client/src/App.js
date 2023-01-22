import './App.css';
import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowDown, faArrowUp} from '@fortawesome/free-solid-svg-icons'

function App() {
  //Declares a state variable called stockData and a function setStockData to update the stockData.
  const [stockData, setStockData] = useState([])
  //Declares a function convert2DP which takes a parameter num and returns the given number rounded to 2 decimal places.
  const convert2DP = (num) => (Math.round(num * 100) / 100).toFixed(2);

  //useEffect hook is used to fetch data from the API when the component is rendered.
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/stock');
        const data = await response.json();
        setStockData(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

return (
  stockData.length > 0 ? <div className='Stock-container'>
        {stockData.map(stock => (
                <div key={stock.symbol}>
                    <div className='flex_horz'>
                        <div className='Stock-logo'><img className={stock.symbol === 'GOOG' ? 'GOOG-logo' : 'Stock-img'} src = {stock.stockImage} alt = 'new'/></div>
                        <div className='Stock-symbolcompany'>
                            <div className='Stock-symbol'>{stock.symbol}</div>
                            <div className='Stock-company'>{stock.companyName.length > 19 ? `${stock.companyName.substring(0, 19)}...` : stock.companyName}</div>
                        </div>
                        <div>
                            <div className='Stock-latestprice'>{'$' + convert2DP(stock.latestPrice)}</div>
                            <div className='flex_horz'>
                                <div className='flex_horz'>
                                    <div className='ArrowDirection'><FontAwesomeIcon icon={stock.change < 0 ? faArrowDown : faArrowUp} /></div>
                                    <div className='Stock-change'>{convert2DP(stock.change)}</div>
                                </div>
                                <div className='Stock-changepercent'>{convert2DP(stock.changePercent * 100) + '%'}</div>
                            </div>
                        </div>
                      </div>
                    <div><hr className='horz_line'></hr></div>
                 </div>
            ))}
    </div> : <div>Loading...</div>
);
}

export default App;

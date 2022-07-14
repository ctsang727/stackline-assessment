import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataThunk } from '../../store/chart'
import './chart.css'

function Chart() {
    const dataState = useSelector(state => state.data)
    const data = Object.values(dataState)
    const preview = data[0]?.sales.slice(0, 15)

    const [showMore, setShowMore] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataThunk())
    }, [dispatch])

    const showAll = () => {
        setShowMore(!showMore)
    }

    return (

        <div id='chart'>
            {!showMore &&
                <>
                    <div id='inner-chart'>
                        <div id='week-ending'>
                            <h3>WEEK ENDING</h3>
                            {preview?.map(sale => {
                                return <li key={preview.indexOf(sale)}>{sale.weekEnding}</li>
                            })}
                        </div>
                        <div id='retail-sales'>
                            <h3>Retail Sales</h3>
                            {preview?.map(sale => {
                                return <li key={preview.indexOf(sale)}>${sale.retailSales}</li>
                            })}
                        </div>
                        <div id='wholesale-sales'>
                            <h3>Wholesale Sales</h3>
                            {preview?.map(sale => {
                                return <li key={preview.indexOf(sale)}>${sale.wholesaleSales}</li>
                            })}
                        </div>
                        <div id='units-sold'>
                            <h3>Units Sold</h3>
                            {preview?.map(sale => {
                                return <li key={preview.indexOf(sale)}>{sale.unitsSold}</li>
                            })}
                        </div>
                        <div id='retailer-margin'>
                            <h3>Retailer Margin</h3>
                            {preview?.map(sale => {
                                return <li key={preview.indexOf(sale)}>${sale.retailerMargin}</li>
                            })}

                        </div>

                    </div>
                    <div id='showButton' onClick={showAll}>
                        Show All &#9660;
                    </div>
                </>}
            {/* show all  */}
            {showMore &&
                <>
                    <div id='inner-chart'>
                        <div id='week-ending'>
                            <h3>WEEK ENDING</h3>
                            {data[0]?.sales.map(sale => {
                                return <li>{sale.weekEnding}</li>
                            })}
                        </div>
                        <div id='retail-sales'>
                            <h3>Retail Sales</h3>
                            {data[0]?.sales.map(sale => {
                                return <li>${sale.retailSales}</li>
                            })}
                        </div>
                        <div id='wholesale-sales'>
                            <h3>Wholesale Sales</h3>
                            {data[0]?.sales.map(sale => {
                                return <li>${sale.wholesaleSales}</li>
                            })}
                        </div>
                        <div id='units-sold'>
                            <h3>Units Sold</h3>
                            {data[0]?.sales.map(sale => {
                                return <li>{sale.unitsSold}</li>
                            })}
                        </div>
                        <div id='retailer-margin'>
                            <h3>Retailer Margin</h3>
                            {data[0]?.sales.map(sale => {
                                return <li>${sale.retailerMargin}</li>
                            })}
                        </div>
                    </div>
                    <div id='showLessButton' onClick={showAll}>
                        Show less &#9650;
                    </div>
                </>}


        </div>


    )
}

export default Chart
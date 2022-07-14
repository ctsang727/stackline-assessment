import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataThunk } from '../../store/chart'
import './chart.css'

function Chart() {
    const testState = useSelector(state => state.data)
    const test2 = Object.values(testState)
    //console.log('2222', test2[0]?.sales)

    //console.log('state', testState)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDataThunk())
    }, [dispatch])





    return (

        <div id='chart'>
            <div id='week-ending'>
                <h3>WEEK ENDING</h3>
                {test2[0]?.sales.map(sale => {
                    return <li>{sale.weekEnding}</li>
                })}
            </div>
            <div id='retail-sales'>
                <h3>Retail Sales</h3>
                {test2[0]?.sales.map(sale => {
                    return <li>{sale.retailSales}</li>
                })}
            </div>
            <div id='wholesale-sales'>
                <h3>Wholesale Sales</h3>
                {test2[0]?.sales.map(sale => {
                    return <li>{sale.wholesaleSales}</li>
                })}
            </div>
            <div id='units-sold'>
                <h3>Units Sold</h3>
                {test2[0]?.sales.map(sale => {
                    return <li>{sale.unitsSold}</li>
                })}
            </div>
            <div id='retailer-margin'>
                <h3>Retailer Margin</h3>
                {test2[0]?.sales.map(sale => {
                    return <li>{sale.retailerMargin}</li>
                })}
            </div>
        </div>


    )
}

export default Chart
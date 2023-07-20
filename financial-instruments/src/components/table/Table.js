import React, { useState } from "react";
import { financialInstrumentList } from "../../serverdata/data";
import TableBody from "./TableBody";
import TableHead from "./TableHead";
import './Table.css'

const Table = () => {
    const [tableData, setTableData] = useState(financialInstrumentList);
    const [sortOrder, setSortOrder] = useState('asc')
    const [ticketOrder, setTicketOrder] = useState('asc')
    console.log("tabledata", tableData)

    const columns = [
        { label: "Ticket", dataKey: "ticker" },
        { label: "Price", dataKey: "price" },
        { label: "Asset Class", dataKey: "assetClass" },
    ];

    /**
     * Method to sort price
     */
    const sortPrice = () => {
        let newData = []
        if (sortOrder === 'asc') {
            setSortOrder('dsc')
            newData = tableData.sort((a, b) => { return a?.price - b?.price })
        } else {
            setSortOrder('asc')
            newData = tableData.sort((a, b) => { return b?.price - a?.price })
        }
        setTableData(newData)
    }
    /**
     * Method to sort Ticket
     */
    const sortTicket = () => {     
        let newData = tableData.sort((a, b) => {
                    if (a?.ticker > b?.ticker)
                        return 1
                    if (a?.ticker < b?.ticker)
                        return -1
                    return 0
                })
        setTableData(newData)
        
    }

/**
 * Methos to sort asset class in order Equity , Macro and credit
 */

const sortAssetClass = () => {
    let equitiesArray = []
    let creditArray =[]
    let MacroArray = []
    tableData.forEach(data=> {
        if(data?.assetClass==='Equities'){
            equitiesArray.push(data)
        }else if(data?.assetClass==='Credit'){
            creditArray.push(data)
        }else{
            MacroArray.push(data)
        }
    })

    const resultData = equitiesArray.concat(MacroArray,creditArray)
    setTableData(resultData)

}
    const handleSorting = (dataKey) => {
        if (dataKey === 'price') {
            sortPrice()
        } else if (dataKey === 'ticker') {
            sortTicket()
        }else{
            sortAssetClass()
        }
    }

    return (
        <>
            <table className="table">
                <caption>
                    Financial instruments Table List
                </caption>
                <TableHead columns={columns} handleSort={handleSorting} />
                <TableBody columns={columns} tableData={tableData} />
            </table>
        </>
    );
};

export default Table;
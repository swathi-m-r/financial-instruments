import React from 'react'
import { getClassName , getClassNameForPrice} from './tableUtil';

const TableBody = ({ tableData, columns }) => {
    
    return (
     <tbody>
      {tableData.map((data) => {
        const styleColor = getClassName(data);
       return (
        <tr className={styleColor} key={data?.ticker}>
         {columns.map(({ dataKey }) => {
          const tData = data[dataKey] ? data[dataKey] : "——";
          const classNameForPrice = getClassNameForPrice(data, dataKey)
          return <td className={classNameForPrice} key={dataKey}>{tData}</td>;
         })}
        </tr>
       );
      })}
     </tbody>
    );
   };
   
export default TableBody
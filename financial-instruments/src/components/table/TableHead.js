import React from 'react'

const TableHead = ({ columns , handleSort}) => {
    return (
     <thead>
      <tr>
       {columns.map(({ label, dataKey }) => {
        return <th key={dataKey} onClick={()=>handleSort(dataKey) }>{label}</th>;
       })}
      </tr>
     </thead>
    );
   };

   export default TableHead
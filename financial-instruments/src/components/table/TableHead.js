import React from 'react'
import SortImg from '../../images/sort.png'

const TableHead = ({ columns, handleSort }) => {
    return (
        <thead>
            <tr>
                {columns.map(({ label, dataKey }) => {
                    return <th classNamekey={dataKey} onClick={() => handleSort(dataKey)}>
                        <div className='header-content'>
                            {label}
                            <img className={'sorting-icon'} src={SortImg} alt="sorting image" />
                        </div>
                    </th>
                })}
            </tr>
        </thead>
    );
};

export default TableHead
import React from 'react';

const ZipList =(props)=>{
    return(
        <div className="zip-list-container">
            <h1>list of zip codes</h1>
            {props.zipcodes.map(zip =>(
                <div key={zip} className="zip-container">
                    <h2>{zip}</h2>
                </div>
            ))}
        </div>
    )
}

export default ZipList;
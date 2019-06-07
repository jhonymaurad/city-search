import React from 'react';

const ZipList =(props)=>{
    return(
        <div>
            <h1>list of zip codes</h1>
            {props.zipcodes.map(zip =>(
                <div key={zip}>
                    <h2>{zip}</h2>
                </div>
            ))}

        </div>
    )
        

    // props.zipcodes.map()

}

export default ZipList;
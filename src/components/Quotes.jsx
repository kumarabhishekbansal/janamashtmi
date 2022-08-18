import React from 'react';
import Data from './data';
const Quotes=()=>{
    return (
        <>
        <div className='container mt-5  p-5 d-flex flex-wrap'>
            {
                Data.map((val,ind,Data)=>{
                    return (
                        <>
                        <div className='w-100 border border-warning p-5 '>
                        <h2 className='text-info text-center lh-lg fst-italic fw-bolder'>
                            {Data[ind].q}
                        </h2>
                        </div>
                        </>
                    )
                })
            }
        </div>
        </>
    )
}
export default Quotes
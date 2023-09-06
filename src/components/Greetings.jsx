import React from 'react';
const Greetings=(props)=>{
    return(
        <>
            <div className='text-center mt-5'>
                <h1 className='text-primary'>
                आप सभी को कृष्ण जन्माष्टमी की बहुत बहुत शुबकामनाएं <span className='text-warning'>{props.vals || 'Abhishek'}</span> की तरफ से
                </h1>
            </div>
        </>
    )
}
export default Greetings
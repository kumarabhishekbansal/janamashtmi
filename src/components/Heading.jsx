import React,{useState} from 'react';
import Greetings from './Greetings';
const Heading=()=>{
    const [inval, setinval] = useState("");
    const [outval, setoutval] = useState("मेरी");
    const inputval=(e)=>{
        setinval(e.target.value);
    }
    const addval=()=>{
        setoutval(inval);
    }
    return(
        <>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-primary mb-2 text-center'>
                    Happy Krishna Janmashtami
                </h1>
                
            <input type="text" className='mt-4 container text-center btn btn-outline-success'
                onChange={inputval}
                value={inval}
            />
            <h3 className='text-warning mt-4'>Type Your Name</h3>
            <button className='btn btn-lg btn-info mt-4'
            onClick={addval}
            >Submit</button>
            <Greetings vals={outval} />
            </div>
        </>
    )
}
export default Heading
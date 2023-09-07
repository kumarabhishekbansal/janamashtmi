import React,{useState,useRef} from 'react';
import Greetings from './Greetings';
import emailjs from '@emailjs/browser';
const Heading=()=>{
    const form = useRef();
    const [inval, setinval] = useState("");
    const [outval, setoutval] = useState("Abhishek");
    const inputval=(e)=>{
        setinval(e.target.value);
    }
    const addval=()=>{
        setoutval(inval);
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_4ov6e0r', 'template_beg3gub', form.current, 'TFWfjgTvAqBIwaG9j')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return(
        <>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='text-primary mb-2 text-center'>
                    Happy Krishna Janmashtami
                </h1>
            <form className='w-100 text-center' ref={form} onSubmit={sendEmail}>
            <input type="text" className='mt-4 container text-bold text-center btn btn-outline-success'
                onChange={inputval}
                value={inval}
                name="from_name"
                placeholder='ENTER YOUR NAME'
                required
            />
            <h3 className='text-warning mt-4'>Type Your Name</h3>
            <button className='btn btn-lg btn-info mt-4'
            onClick={addval}
            >Submit</button>
            <Greetings vals={outval} />
            </form>
            </div>
        </>
    )
}
export default Heading
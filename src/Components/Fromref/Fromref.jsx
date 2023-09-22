import { useRef } from "react";

const Fromref = () => {
    const nameref = useRef();
    const emailref = useRef();                                          
    const passwordref = useRef(); 

    const handlSubmit = e =>{
        e.preventDefault();
        if(passwordref.length < 6){
            console.log('ami nai')
        }
        else{
            console.log(nameref.current.value, emailref.current.value, passwordref.current.value);
        }
    }
    
    return (
        <div>
            <form onSubmit={handlSubmit}>
                <input
                ref={nameref}
                type="text" name="text"/>
                <br />
                <input
                ref={emailref}
                type="email" name="email" />
                <br />
                <input 
                ref={passwordref}
                type="password" name="password" required/>
                <br />
                <input type="submit" name="submit" value="submit" />
                {/* {
                    error && <p>{error}</p>
                } */}
            </form> 
        </div>
    );
};

export default Fromref;
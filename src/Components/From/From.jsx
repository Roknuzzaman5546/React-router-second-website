import { useState } from "react";
const From = () => {
    const[text, setText] = useState(null);
    const [email, setEmail] = useState(null);
    const[passward, setpassward] = useState(null);
    const[error, seterror] = useState('');
 
    const handlSubmit = e =>{
        e.preventDefault();
        if(passward.length < 6){
            seterror('Please provide more 6 carrecter')
        }
        else{
            seterror('');
            console.log(text, email, passward)
        }
    }
    const handleTextchange = e =>{
        setText(e.target.value)
    }
    const handleEmailchange = e =>{
        setEmail(e.target.value)
    }
    const handlePasswordchange = e =>{
        setpassward(e.target.value)
    }
    return (
        <div>
            <form onSubmit={handlSubmit}>
                <input
                onChange={handleTextchange} 
                type="text" name="text"/>
                <br />
                <input
                onChange={handleEmailchange} 
                type="email" name="email" />
                <br />
                <input 
                onChange={handlePasswordchange}
                type="password" name="password" required/>
                <br />
                <input type="submit" name="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>            
        </div>
    );
};

export default From;
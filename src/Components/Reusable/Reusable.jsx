const Reusable = ({fromtittle ,fromsubmitbtn, handlSubmit, children}) => {

    const handlLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handlSubmit(data)
    }
    return (
        <div>
            <h2>{children}</h2>
            <form onSubmit={handlLocalSubmit}>
                <input
                type="text" name="text"/>
                <br />
                <input
                type="email" name="email" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" name="submit" value={fromsubmitbtn}/>
            </form> 
        </div>
    );
};

export default Reusable;
import useInputstate from "./hook";

const Hookfrom = () => {
    const [name, handleChange] = useInputstate();

    const handlSubmit = e => {
        console.log('shamol kanto', name)
        e.preventDefault();
    }
    
    return (
        <div>
            <form onSubmit={handlSubmit}>
                <input
                type="text" name="text"/>
                <br />
                <input
                
                type="email" name="email" />
                <br />
                <input 
                onChange={handleChange}
                value={name} 
                type="password" name="password" />
                <br />
                <input type="submit" name="submit" value="submit" />
            </form> 
               
        </div>
    );
};

export default Hookfrom;
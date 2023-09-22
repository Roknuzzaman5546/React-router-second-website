import { useContext } from "react";
import { Mycontext } from "../Grandpa/Grandpa";

const Spachial = () => {
    const gift = useContext(Mycontext); 
    return (
        <div>
            <h2>Spachal</h2>
            <h3>{gift}</h3>
        </div>
    );
};

export default Spachial;
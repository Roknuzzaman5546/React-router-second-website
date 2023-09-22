import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { Mycontext } from "../Grandpa/Grandpa";

const Anty = () => {
    const mytext = useContext(Mycontext);
    return (
        <div>
            <h2>Anty</h2>
            <section className="flex">
                <Cousin name={'sohana'} mytext={mytext}></Cousin>
                <Cousin name={'sobuj'}></Cousin>
            </section>
        </div>
    );
};

export default Anty;
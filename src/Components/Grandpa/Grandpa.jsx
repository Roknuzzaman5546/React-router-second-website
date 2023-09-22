import { createContext } from "react";
import Anty from "../Anty/Anty";
import Dad from "../Dad/dad";
import Uncle from "../Uncle/Uncle";
import './grandpa.css';

export const Mycontext = createContext('gold')

const Grandpa = () => {
    const asset = 'diomond'
    return (
        <div className="grandpa">
            <h2>Grandpa</h2>
            <Mycontext.Provider value="gold">
            <section className="flex">
            <Dad asset={asset}></Dad>
            <Uncle asset={asset}></Uncle>
            <Anty></Anty>
            </section>
            </Mycontext.Provider>
        </div>
    );
};

export default Grandpa;
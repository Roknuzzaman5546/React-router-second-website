import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
            <Cousin name={'roksana'}></Cousin>
            <Cousin name={'rahat'} asset={asset}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;
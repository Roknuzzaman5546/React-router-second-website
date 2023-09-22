const Cousin = ({name, asset, mytext}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>has: {asset}</h3>
            <h3>{mytext}</h3>
        </div>
    );
};

export default Cousin;
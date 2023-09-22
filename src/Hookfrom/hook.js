import { useState } from "react"

const useInputstate = (defaultvalue = null) =>{
    const [value, setvalue] = useState(defaultvalue);

    const handleChange = e =>{
        setvalue(e.target.value);
    }

    return [value, handleChange]
}

export default useInputstate;
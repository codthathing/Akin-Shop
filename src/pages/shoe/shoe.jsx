import React, {useContext} from "react";
import { NavigateContext } from "../../services/providers/ContextProvider";
import Template from "../template";

const Shoe = () => {
    const { shoeItems, setShoeItems } = useContext(NavigateContext);
    return <Template itemsArray={shoeItems} setItemsArray={setShoeItems} />
};
export default Shoe;
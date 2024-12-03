import React, { useContext } from "react";
import { NavigateContext } from "../../services/providers/ContextProvider";
import Template from "../template";

const Cloth = () => {
    const { clothItems, setClothItems } = useContext(NavigateContext);
    return <Template itemsArray={clothItems} setItemsArray={setClothItems} />
};

export default Cloth;
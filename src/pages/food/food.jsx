import React, { useContext } from "react";
import { NavigateContext } from "../../services/providers/ContextProvider";
import Template from "../template";

const Food = () => {
    const { foodItems, setFoodItems } = useContext(NavigateContext);
    return <Template itemsArray={foodItems} setItemsArray={setFoodItems} />
};
export default Food;
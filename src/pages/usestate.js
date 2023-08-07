import { useState } from "react";

export const useItem = () => {
    let [item, setItem] = useState(0)
    return {item, setItem}
} 
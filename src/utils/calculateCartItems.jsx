import { useContext, useMemo } from "react";
import { NavigateContext } from "../services/providers/ContextProvider";

export const calculateCartItems = () => {
  const { cartItems } = useContext(NavigateContext);

  const total = useMemo(() => {
    return cartItems.reduce((sum, { price, item }) => sum + (price * item), 0);
  }, [cartItems]);

  return total;
}; 
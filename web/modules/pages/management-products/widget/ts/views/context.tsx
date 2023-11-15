import { createContext, useContext, Context } from "react";
import { Manager } from "../manager";

type IValue = {
    manager: Manager | undefined,
    texts: any,
}
export const UserContext: Context<IValue> = createContext({
    manager: undefined,
    texts: undefined,
});
export const useUserContext: () => IValue = (): IValue =>
    useContext(UserContext);

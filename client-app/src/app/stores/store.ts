import { createContext, useContext } from "react";
import HutbaStore from "./hutbaStore";

interface Store {
    hutbaStore: HutbaStore
}

export const store: Store = {
    hutbaStore: new HutbaStore()
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext)
}
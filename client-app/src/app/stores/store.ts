import { createContext, useContext } from "react";
import HutbaStore from "./hutbaStore";
import VijestStore from "./vijestStore";

interface Store {
    hutbaStore: HutbaStore;
    vijestStore: VijestStore;
}

export const store: Store = {
    hutbaStore: new HutbaStore(),
    vijestStore: new VijestStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext)
}
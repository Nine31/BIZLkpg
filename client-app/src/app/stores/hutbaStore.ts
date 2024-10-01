import { makeAutoObservable, runInAction } from "mobx";
import { Hutba } from "../models/hutba";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';

export default class HutbaStore {
    hutbaRegistry = new Map<string, Hutba>();
    selectedHutba?: Hutba | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = true;

    constructor() {
        makeAutoObservable(this)
    }

    get hutbeByDate() {
        return Array.from(this.hutbaRegistry.values()).sort((a, b) => Date.parse(a.postedDate) - Date.parse(b.postedDate));
    }

    loadHutbe = async () => {
        try {
            const hutbe = await agent.Hutbe.list();
                hutbe.forEach(hutba => {
                    hutba.postedDate = hutba.postedDate.split('T')[0];
                    this.hutbaRegistry.set(hutba.id, hutba);
                })
                this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    selectHutba = (id: string) => {
        this.selectedHutba = this.hutbaRegistry.get(id);
    }

    cancelSelectHutba = () => {
        this.selectedHutba = undefined;
    }

    openForm= (id?: string) => {
        id ? this.selectHutba(id) : this.cancelSelectHutba();
        this.editMode = true;
    }

    closeForm = () => {
        this.editMode = false;
    }

    createHutba = async (hutba: Hutba) => {
        this.loading = true;
        hutba.id = uuid();
        try {
            await agent.Hutbe.create(hutba);
            runInAction(() => {
                this.hutbaRegistry.set(hutba.id, hutba);
                this.selectedHutba = hutba;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    updateHutba = async (hutba: Hutba) => {
        this.loading = true;
        try {
            await agent.Hutbe.update(hutba);
            runInAction(() => {
                this.hutbaRegistry.set(hutba.id, hutba);
                this.selectedHutba = hutba;
                this.editMode = false;
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    deleteHutba = async (id: string) => {
        this.loading = true;
        try {
            await agent.Hutbe.delete(id);
            runInAction(() => {
                this.hutbaRegistry.delete(id);
                if (this.selectedHutba?.id === id) this.cancelSelectHutba();
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }
}
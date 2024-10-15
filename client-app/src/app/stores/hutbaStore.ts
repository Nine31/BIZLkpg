import { makeAutoObservable, runInAction } from "mobx";
import { Hutba } from "../models/hutba";
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';

export default class HutbaStore {
    hutbaRegistry = new Map<string, Hutba>();
    selectedHutba: Hutba | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    get hutbeByDate() {
        return Array.from(this.hutbaRegistry.values()).sort((a, b) => 
            new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        );
    }

    loadLatestHutbe = () => {
        return this.hutbeByDate.slice(0, 3);
    }

    // get hutbeByDate() {
    //     return Array.from(this.hutbaRegistry.values()).sort((a, b) => Date.parse(a.postedDate) - Date.parse(b.postedDate));
    // }

    // get groupedHutbe() {
    //     return Object.entries(
    //         this.hutbeByDate.reduce((hutbe, hutba) => {
    //             const postedDate = hutba.postedDate
    //             hutbe[postedDate] = hutbe[postedDate] ? [...hutbe[postedDate], hutba] : [hutba];
    //             return hutbe;
    //         }, {} as {[key: string]: Hutba[]})
    //     )
    // }

    loadHutbe = async () => {
        this.setLoadingInitial(true);
        try {
            const hutbe = await agent.Hutbe.list();
                hutbe.forEach(hutba => {
                    this.sethutba(hutba);
                })
                this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadHutba = async (id: string) => {
        let hutba = this.getHutba(id);
        if (hutba) {
            this.selectedHutba = hutba;
            return hutba;
        }
        else {
            this.setLoadingInitial(true);
            try {
                hutba = await agent.Hutbe.details(id);
                this.sethutba(hutba);
                runInAction(() => this.selectedHutba = hutba);
                this.setLoadingInitial(false);
                return hutba;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
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
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    private sethutba = (hutba: Hutba) => {
        hutba.postedDate = hutba.postedDate.split('T') [0];
        this.hutbaRegistry.set(hutba.id, hutba);
    }

    private getHutba = (id: string) => {
        return this.hutbaRegistry.get(id);
    }
}
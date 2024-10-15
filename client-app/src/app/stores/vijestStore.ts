import { makeAutoObservable, runInAction } from "mobx"
import { Vijest } from "../models/vijest"
import agent from "../api/agent";
import { v4 as uuid } from 'uuid';

export default class VijestStore {
    vijest: Vijest[] = [];
    kategorije: string[] = [];
    vijestRegistry = new Map<string, Vijest>();
    selectedVijest: Vijest | undefined = undefined;
    editMode = false;
    loading = false;
    loadingInitial = false;

    constructor() {
        makeAutoObservable(this);
    }

    get vijestiByDate() {
        return Array.from(this.vijestRegistry.values()).sort((a, b) => 
            new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
        );
    }

    loadLatestVijesti = () => {
        return this.vijestiByDate.slice(0, 3);
    }

    // get vijestiByDate() {
    //     return Array.from(this.vijestRegistry.values()).sort((a, b) => 
    //         Date.parse(a.publishedDate) - Date.parse(b.publishedDate));
    // }

    // get groupedVijesti() {
    //     return Object.entries(
    //         this.vijestiByDate.reduce((vijesti, vijest) => {
    //             const publishedDate = vijest.publishedDate;
    //             vijesti[publishedDate] = vijesti[publishedDate] ? [...vijesti[publishedDate], vijest] : [vijest];
    //             return vijesti;
    //         }, {} as {[key: string]: Vijest[]})
    //     )
    // }

    loadVijesti = async () => {
        this.setLoadingInitial(true);
        try {
            const vijesti = await agent.Vijesti.list();
                vijesti.forEach(vijest => {
                    this.setVijest(vijest);
            })
            this.loadKategorije();
            this.setLoadingInitial(false);
        } catch (error) {
            console.log(error);
            this.setLoadingInitial(false);
        }
    }

    loadVijest = async (id: string) => {
        let vijest = this.getVijest(id);
        if (vijest) {
            this.selectedVijest = vijest;
            return vijest;
        }
        else {
            this.setLoadingInitial(true);
            try {
                vijest = await agent.Vijesti.details(id);
                this.setVijest(vijest);
                runInAction(() => this.selectedVijest = vijest);
                this.setLoadingInitial(false);
                return vijest;
            } catch (error) {
                console.log(error);
                this.setLoadingInitial(false);
            }
        }
    }

    loadKategorije() {
        const uniqueCategories = new Set<string>();
        this.vijestRegistry.forEach(vijest => {
            if (vijest.category) {
                uniqueCategories.add(vijest.category);
            }
        });
        this.kategorije = Array.from(uniqueCategories);
    }
    

    setLoadingInitial = (state: boolean) => {
        this.loadingInitial = state;
    }

    createVijest = async (vijest: Vijest) => {
        this.loading = true;
        vijest.id = uuid();
        try {
            await agent.Vijesti.create(vijest);
            runInAction(() => {
                this.vijestRegistry.set(vijest.id, vijest);
                this.selectedVijest = vijest;
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

    updateVijest = async (vijest: Vijest) => {
        this.loading = true;
        try {
            await agent.Vijesti.update(vijest);
            runInAction(() => {
                this.vijestRegistry.set(vijest.id, vijest);
                this.selectedVijest = vijest;
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

    deleteVijest = async (id: string) => {
        this.loading = true;
        try {
            await agent.Vijesti.delete(id);
            runInAction(() => {
                this.vijestRegistry.delete(id);
                this.loading = false;
            })
        } catch (error) {
            console.log(error);
            runInAction(() => {
                this.loading = false;
            })
        }
    }

    private setVijest = (vijest: Vijest) => {
        vijest.publishedDate = vijest.publishedDate.split('T') [0];
        this.vijestRegistry.set(vijest.id, vijest);
    }

    private getVijest = (id: string) => {
        return this.vijestRegistry.get(id);
    }
}
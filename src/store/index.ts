import ICategory from "@/interfaces/ICategory";
import IProject from "@/interfaces/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
    projects: IProject[]
    categories: ICategory[]
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({

    state: {

        projects: [],

        categories: []
    },

    mutations: {

        'CREATE_PROJECT'(state, projectName: string) {

            const newProject = {

                id: new Date().toISOString(),
                name: projectName
            } as IProject

            state.projects.push(newProject)
        },

        
        'CREATE_CATEGORY'(state, categoryName: string) {

            const newCategory = {

                id: new Date().toISOString(),
                name: categoryName
            } as ICategory

            state.categories.push(newCategory)
        }
    }
})

export function useStore(): Store<State> {

    return vuexUseStore(key)
}
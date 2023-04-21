import { defineStore } from 'pinia';

interface Store {
    enabledFullscreen: boolean,
}

export const usePersonFeature = defineStore('personFeature', {
    state: (): Store =>( {
        enabledFullscreen: false, 
    }),
    actions: {
        setFullscreen(value: boolean) {
            this.enabledFullscreen = true
      }
    }
})
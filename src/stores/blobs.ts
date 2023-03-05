import { defineStore } from 'pinia';

interface Store {
    visibleBlobs: boolean,
}

export const useBlobsStore = defineStore('blobs', {
    state: (): Store =>( {
        visibleBlobs: !!localStorage.getItem('blobs'), 
    }),
    actions: {
        setVisibleBlobs(value: boolean) {
            if(value) {
                this.visibleBlobs = true
                localStorage.setItem('blobs', 'true')
            } else {
                this.visibleBlobs = false
                localStorage.removeItem('blobs')
            }
      }
    }
})
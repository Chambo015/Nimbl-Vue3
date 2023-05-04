import { defineStore } from 'pinia';

interface Store {
    score: number;
    scoreBuffer: number;
    rank: number
}

export const useRankStore = defineStore('rank', {
    state: (): Store => ({
        score: 5,
        scoreBuffer: 0,
        rank: 0
    }),
    actions: {
        incrementScore() {
            this.score = this.score + 1;
        },
        addScoreBuffer(n: number) {
            this.scoreBuffer = this.scoreBuffer + n
        }
    },
});

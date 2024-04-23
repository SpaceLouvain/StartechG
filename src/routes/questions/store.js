import { writable } from 'svelte/store';

export const score = writable(0);

export const status = writable('not-started');


score.subscribe($score => {
    if ($score < 9) {
        status.set('not-finished');
    } else {
        status.set('completed');
    }
});
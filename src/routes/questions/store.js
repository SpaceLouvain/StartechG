import { writable } from 'svelte/store';


export const score = writable(0);
export const score1 = writable(0);
export const score2 = writable(0);


export const status = writable('not-started');
export const status1 = writable('not-started');
export const status2 = writable('not-started');

export const succeeded = writable(0); // Nouveau store pour les réussites
export const failed = writable(0); // Nouveau store pour les échecs

score.subscribe($score => {
    
    if ($score < 9 && $score > 0) {
        status.set('not-finished');
    } 
    
    if ($score === 9) {
        status.set('completed');
    }
});

score1.subscribe($score1 => {
    if ($score1 < 9 && $score1 > 0) {
        status.set('not-finished');
    } 
    
    if ($score1 === 9) {
        status.set('completed');
    }
});

score2.subscribe($score2 => {
    if ($score2 < 9 && $score2 > 0) {
        status.set('not-finished');
    } 
    
    if ($score2 === 9) {
        status.set('completed');
    }
});
// Fonctions pour incrémenter les réussites et les échecs
export function success() {
    succeeded.update(n => n + 1);
}

export function fail() {
    failed.update(n => n + 1);
}
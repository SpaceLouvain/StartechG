import { writable } from 'svelte/store';

export const score = writable(0);
export const status = writable('not-started');
export const succeeded = writable(0); // Nouveau store pour les réussites
export const failed = writable(0); // Nouveau store pour les échecs

score.subscribe($score => {
    if ($score < 9) {
        status.set('not-finished');
    } else {
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
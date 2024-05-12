<script>
    import { score, status } from './store.js';

    let tests = [
        { title: "chimie2023", score: null, status: null, progress: 0 },
        { title: "math2023", score: null, status: null, progress: 0 },
        { title: "bio2023", score: null, status: null, progress: 0}
    ];

let showButton = true;

function handleClick() {
    showButton = false;
}
</script>

<style>
    .progress-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
    }

    .progress-container label {
        width: 100px;
        text-align: right;
        margin-right: 1em;
    }

    .progress-container progress {
        flex-grow: 1;
    }

    .progress-container span {
        width: 20px;
        text-align: right;
        margin-left: 1em;
    }

    .completed {
        background-color: lightgreen;
    }

    .not-started {
        background-color: lightgray;
    }

    .not-finished {
        background-color: inherit;
    }

    table {
        margin-left: auto;
        margin-right: auto;
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        padding: 8px;
        text-align: left;
        border-bottom: 1px solid #ddd;
    }

    th {
        background-color: #f2f2f2;
    }

    a {
        text-decoration: none;
        color: #007bff;
    }
    .primary-button {
        width: 200px;
        height: 50px;
        border: none;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: #fff;
        background-color: #007bff;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
        transition: background-color 0.3s ease;
    }

    .primary-button:hover,
    .primary-button:focus {
        background-color: #0056b3;
    }

    .button-content {
        width: 100%;
        text-align: center;
        text-decoration: none;
        font-size: 16px;
    }
</style>

<table>
    <thead>
        <tr>
            <th>Titre</th>
            <th>Statut</th>
            <th>Résultat</th>
        </tr>
    </thead>
    <tbody>
        {#each tests as test (test.title)}
            <tr class={$status.toLowerCase().replace(" ", "-")}>
                <td><a href={`/test/${test.title}`}>{test.title}</a></td>                
                <td>{$status}</td>
                <td>
                    <div class="progress-container">
                        <progress id="{test.title}-progress" value={$score / 10 * 100} max="100"></progress>
                        <span>{Math.round($score / 10 * 100)}%</span>
                    </div>
                </td>
            </tr>
        {/each}
    </tbody>
</table>



{#if showButton}
    <br>
    <br>
    <br>
    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdw-BzsYMQruFQQVhdZhyTHh7a9F7JS9uXjqKcV9y--fiTnjg/viewform?usp=sf_link" target="_blank">
        <button class="primary-button" on:click={handleClick}>
            <div class="button-content">
                On a besoin de votre avis !
            </div>
        </button>
    </a>
{/if}

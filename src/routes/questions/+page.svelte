<script>
    import { score, status } from './store.js';

    let tests = [
        { title: "chimie2023", score: null, status: null, progress: 0 },
        { title: "math2023", score: null, status: null, progress: 0 },
        { title: "physique2023", score: null, status: null, progress: 0}
    ];
</script>

<style>
    .progress-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1em;
    }

    .progress-container label {
        width: 100px; /* adjust this to change the width of the labels */
        text-align: right;
        margin-right: 1em;
    }

    .progress-container progress {
        flex-grow: 1; /* make the progress bars take up the remaining space */
    }

    .progress-container span {
        width: 20px; /* adjust this to change the width of the percentages */
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
        background-color: inherit; /* Change this to the color you want */
    }

    table {
        margin-left: auto;
        margin-right: auto;
    }
</style>

<table>
    <thead>
        <tr>
            <th>Title</th>
            <th>Status</th>
            <th>Score</th>
        </tr>
    </thead>
    <tbody>
        {#each tests as test (test.title)}
            <tr class={$status.toLowerCase().replace(" ", "-")}>
                <td><a href={`/test/${test.title}`}>{test.title}</a></td>                
                <td>{$status}</td>
                <td>{$score !== null ? $score : "N/A"}</td>
                <div class="progress-container">
                    <label for="{test.title}-progress">{test.title}:</label>
                    <progress id="{test.title}-progress" value={$score / 9 * 100} max="100"></progress>
                    <span>{Math.round($score / 9 * 100)}%</span>
                </div>
            </tr>
        {/each}
    </tbody>
    
</table>
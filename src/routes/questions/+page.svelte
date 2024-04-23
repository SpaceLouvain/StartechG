<script>
    import { score } from './store.js';



    let tests = [
        { title: "chimie2023", score: null, status: "Not Started" },
   ];
</script>

<style>
    .completed {
        background-color: lightgreen;
    }

    .not-started {
        background-color: lightgray;
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
            <tr class={test.status.toLowerCase().replace(" ", "-")}>
                <td><a href={`/test/${test.title}`}>{test.title}</a></td>                
                <td>{test.status}</td>
                <td>{$score !== null ? $score : "N/A"}</td>            </tr>
        {/each}
    </tbody>
</table>
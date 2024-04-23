<script>
    
    
    import { score, status } from './store.js';



    let tests = [
        { title: "chimie2023", score: null, status: null },
   ];
</script>

<style>
    .completed {
        background-color: lightgreen;
    }

    .not-started {
        background-color: lightgray;
    }
    .not-finished {
        background-color: red;
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
                <td>{$score !== null ? $score : "N/A"}</td>            </tr>
        {/each}
    </tbody>
</table>
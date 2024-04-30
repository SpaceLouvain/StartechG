<script>
  let message = "Nous n'avons pas encore de synthèse à proposer. C'est pour bientôt !";
  let isLoading = false;

  // Simulate an API call to fetch the synthesis data
  setTimeout(() => {
    isLoading = false;
  }, 1000);
</script>

<main>
  {#if isLoading}
    <p>Loading...</p>
  {:else}
    <h1>{message}</h1>
  {/if}
</main>


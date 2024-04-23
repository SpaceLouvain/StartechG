<script>
  /**
   * @type {import('./$types').PageData}
   */
	export let form  = { error: null };
</script>

<div id="login">
    <h1>Login <img src="\flamme.jpg" alt="Person"></h1>
    {#if form.error}
        <div class="error">
            <p>Wrong username/password</p>
        </div>
    {/if}
    <form action="/login?/verify" method="POST">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <label for="password">Password</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
    </form>
</div>

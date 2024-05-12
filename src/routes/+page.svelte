<script>
	/**
	 </div>* @type {import('./$types').PageData}
	 */
	export let data;
</script>
<style>
    body, html {
        height: 100%;
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Arial, sans-serif;
        background-color: #f2f2f2;
    }

    #login {
        text-align: center;
        border: 2px solid #ccc;
        padding: 20px;
        max-width: 400px;
        width: 100%;
        box-sizing: border-box;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    form {
        margin-top: 20px;
    }

    form label {
        display: block;
        margin-bottom: 10px;
        font-weight: bold;
    }

    input[type="email"],
    input[type="password"] {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 3px;
    }

    button[type="submit"] {
        background-color: #4CAF50;
        color: white;
        padding: 10px 20px;
        border: none;
        border-radius: 3px;
        cursor: pointer;
    }

    a {
        color: #007bff;
        text-decoration: none;
        margin-top: 10px;
        display: block;
    }

    .error {
        color: red;
        margin-top: 10px;
    }

    .person-image {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .login-text {
        font-size: 24px;
    }

    /* New styles for professional look */
    #login {
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .person-image img {
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .login-text {
        font-size: 32px;
        font-weight: bold;
        margin-top: 20px;
    }

    .error {
        font-size: 14px;
        margin-top: 20px;
    }

    form label {
        font-size: 16px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    input[type="email"],
    input[type="password"] {
        font-size: 16px;
        padding: 12px;
        margin-bottom: 16px;
    }

    button[type="submit"] {
        font-size: 16px;
        padding: 12px 24px;
        border-radius: 4px;
    }

    a {
        font-size: 14px;
        margin-top: 16px;
    }
</style>

<div id="login">
    <h1 class="person-image"><img src="personne.png" alt="Person" width="90"></h1>
    <h1 class="login-text">Se connecter</h1>
    {#if data.error}
        <div class="error">
            <p>Mauvais nom d'utilisateur/mot de passe</p>
        </div>
    {/if}
    <form action="/login?/verify" method="POST">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" /><br>
        <label for="password">Mot de passe</label>
        <input type="password" name="password" id="password" /><br>
        <button type="submit">Se connecter</button>
    </form>
    <a href="/register">Créer un compte</a>
    <a href="/forgot-password">Mot de passe oublié ?</a>
</div>

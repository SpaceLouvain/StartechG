<script>
	/**
	 * @type {import('./$types').PageData}
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
    }

    #login {
        text-align: center;
        border: 2px solid #ccc; /* Ajouter une bordure de 2px solide avec couleur #ccc */
        padding: 20px; /* Ajouter un padding de 20px à l'intérieur du cadre */
        max-width: 400px; /* Définir une largeur maximale de 400px */
        width: 100%; /* Rendre le cadre responsive */
        box-sizing: border-box; /* Inclure le padding et la bordure dans la largeur totale */
        margin: 0 auto; /* Centrer horizontalement */
    }

    /* Ajouter un style pour les éléments du formulaire */
    form {
        margin-top: 20px; /* Ajouter un espace de 20px au-dessus du formulaire */
    }

    /* Ajouter un style pour les éléments du formulaire */
    form label {
        display: block; /* Afficher les labels sur une nouvelle ligne */
        margin-bottom: 10px; /* Ajouter un espace de 10px en bas des labels */
    }
</style>

<div id="login">
    <h1><img src="personne.png" alt="Person" width="90"><br>Login</h1>
    {#if data.error}
        <div class="error">
            <p>Wrong username/password</p>
        </div>
    {/if}
    <form action="/login?/verify" method="POST">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" /><br> <!-- Placer le champ email suivi d'un saut de ligne -->
        <label for="password">Password</label>
        <input type="password" name="password" id="password" /><br> <!-- Placer le champ password suivi d'un saut de ligne -->
        <button type="submit">Login</button>
    </form>
    <a href="/register">Créer un compte</a>
    <a href="/forgot-password">Mot de passe oublié ?</a>
</div>

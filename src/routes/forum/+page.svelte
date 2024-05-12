<script>
let showButton = true;

function handleClick() {
    showButton = true;
}
</script>

{#if showButton}
    <a href="https://discord.gg/UDkW5Bbm">
        <button class="primary-button" on:click={handleClick}>
            <div class="button-content">
                rejoindre le discord
            </div>
        </button>
    </a>
{/if}

<style>
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
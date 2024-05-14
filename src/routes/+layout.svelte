<script>
  import '../output.css';
  import '../styles/global.css'
  let navItems = [
    { text: 'MENU', logo: 'school.png', href: '/' },
    { text: 'PROFIL', logo: 'user.png', href: '/profil' },
    { text: 'QUESTIONS', logo: 'pencils.png', href: '/questions' },
    { text: 'SYNTHESES', logo:'book.png', href: '/syntheses' },
    { text: 'PROGRESSION', logo: 'roadmap.png', href: '/progression' },
    { text: 'COMMUNAUTE', logo: 'team.png', href: '/forum' },
    { text: 'COACH', logo: 'teachers-day.png', href: '/coach' },
    //{ text: 'PARAMETRES', logo: 'parametres.avif', href: '/parametres' },
  ];
  let message = '';
  let messages = [];
  let expanded = false;
  let isReplying = false; // new variable


  function toggleChatbox() {
    expanded = !expanded;
  }

  async function sendMessage() {
  if (message.trim() !== '') {
    const timestamp = new Date().toLocaleTimeString(); // get the current time
    messages = [...messages, { text: message, type: 'outgoing', timestamp, sender: 'You' }];
    isReplying = true; // start replying

    // Send an automatic reply after a message is sent
    await new Promise(resolve => setTimeout(resolve, 2000));
    isReplying = false; // stop replying


    const replyTimestamp = new Date().toLocaleTimeString();
    messages = [...messages, { text: "Haploïde signifie qu'une cellule ou un organisme ne possède qu'un seul jeu de chromosomes. Chez les humains, seules les cellules reproductrices comme les ovules et les spermatozoïdes sont haploïdes, contenant 23 chromosomes uniques, contrairement aux cellules diploïdes qui en ont 23 paires", type: 'incoming', timestamp: replyTimestamp, sender: 'Coach AI' }];

    message = '';
  }
}


  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      toggleChatbox();
    }
  }

  const timestamp = new Date().toLocaleTimeString(); // get the current time
  messages.push({ text: 'Bonjour, je suis ton coach virtuel.', type: 'incoming', timestamp, sender: 'Coach AI' });
  messages.push({ text: "Comment puis-je t'aider aujourd'hui ?", type: 'incoming', timestamp, sender:'Coach AI' });
</script>
{#if isReplying}
  <p>...</p>
{/if}
<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f8f8f8;
  }

  main {
    max-width: 960px;
    margin: 150px auto 20px;
  }

  footer {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f8f8f8;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  .chatbox {
    position: fixed;
    right: 5px;
    top: 140px;
    width: 200px;
    height: 50px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease, height 0.3s ease;
    overflow-y: auto;
  }

  .chatbox.expanded {
    width: 400px;
    height: 550px;
  }

  .chatbox-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    background-color: #08086652;
    cursor: pointer;
  }

  .shrink-button {
    background-color: #f00;
    color: #fff;
    border: none;
    cursor: pointer;
  }

  .shrink-button,
  .expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .shrink-button {
    background-color: #0505506a;
    color: #fff;
  }

  .expand-button {
    background-color: #0b0ba052;
    color: #fff;
  }

  .shrink-button:hover,
  .expand-button:hover {
    background-color: #333;
  }

  .chatbox-content {
    padding: 10px;
  }

  .chatbox p {
    background-color: #ddd;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
  }

  .chatbox input {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    text-align: right;
  }

  .left-column {
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: 200px;
    overflow: auto;
    padding: 20px;
    background-color: #0b0ba052;
    color: #fff;
  }

  .nav-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  .nav-item img {
    margin-right: 10px;
  }

  .nav-item a {
    color: #fff;
    text-decoration: none;
  }

  footer p {
    margin: 10px 0;
  }

  .chatbox-header span {
    color: #fff;
    font-weight: bold;
  }

  .chatbox-content button {
    background-color: #08086652;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
  }

  .chatbox-content button:hover {
    background-color: #080866;
  }

  .chatbox-content input:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }

  .left-column a:hover {
    text-decoration: underline;
  }
</style>

<header>
  <div>
    <img src="eduhub1.png" alt="Person" width="150">
  </div>
</header>

<main>
  <slot></slot>
</main>

<footer>
  <p>"Slogan du jour : 'Le succès n'est pas final, l'échec n'est pas fatal : c'est le courage de continuer qui compte.' - Winston Churchill"</p>
  <p>&nbsp;</p>
  <p>© EduHub Formation</p>
</footer>

<div class="left-column">
  {#each navItems as item (item.text)}
    <div class="nav-item">
      <img src={item.logo} alt="Logo" width="24" height="24">
      <a href={item.href}>{item.text}</a>
    </div>
  {/each}
</div>

<div class="chatbox" class:expanded>
  <div class="chatbox-header" role="button" tabindex="0" on:click={toggleChatbox} on:keydown={handleKeyDown}>
    <span>{#if expanded}Chat{:else}Chat{/if}</span>
    {#if expanded}
      <button class="shrink-button" on:click|stopPropagation={toggleChatbox}>-</button>
    {:else}
      <button class="expand-button" on:click|stopPropagation={toggleChatbox}>+</button>
    {/if}
  </div>
  <div class="chatbox-content">
    {#each messages as msg (msg.text)}
      <p class={msg.type}>
        <span class="timestamp">{msg.timestamp}</span> <span class="sender">{msg.sender}:</span> {msg.text}
      </p>
    {/each}
    <input type="text" bind:value={message} placeholder="Pose ta question ...">
    <button on:click|stopPropagation={sendMessage}>Send</button>
  </div>
</div>
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

  function toggleChatbox() {
    expanded = !expanded;
    
  }
  function expandChatbox() {
    expanded = true;
  }

  function shrinkChatbox() {
    expanded = false;
  }

  function sendMessage() {
    if (message.trim() !== '') {
      const timestamp = new Date().toLocaleTimeString(); // get the current time
      messages = [...messages, { text: message, type: 'outgoing', timestamp, sender: 'You' }];
      message = '';
    }
  }
  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      expandChatbox();
    }
  }
  const timestamp = new Date().toLocaleTimeString(); // get the current time
  messages.push({ text: 'Salut!', type: 'incoming', timestamp, sender: 'Coach Antoine' });
  messages.push({ text: 'Comment puis je t aider feur', type: 'incoming', timestamp, sender:'Coach Antoine' });
</script>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  header {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: #f8f8f8;
  }

  main {
    max-width: 960px;
    margin: 20px auto;
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
    right: 20px;
    bottom: 240px;
    width: 300px;
    height: 200px;
    background-color: #f8f8f8;
    border: 1px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: width 0.3s ease, height 0.3s ease;
    overflow-y: auto;
  }

  .chatbox.expanded {
    width: 100%;
    height: 100%;
  }

  .chatbox-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    padding: 0 10px;
    background-color: rgb(255, 1, 213);
    cursor: pointer;
  }

  .shrink-button {
    background-color: #f00;
    color: #fff;
    border: none;
    cursor: pointer;
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
    width: 160px;
    overflow: auto;
    padding: 20px;
    background-color: #0b0ba052;
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
  /* Default styles for all sizes */
  /* Default styles for all sizes */


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
  <br>
  <p>© EduHub Formation</p>
</footer>

<div class="chatbox">
  <div class="chatbox-header" role="button" tabindex="0" on:click={toggleChatbox} on:keydown={handleKeyDown}>
    <span>Chat</span>
    {#if expanded}
      <button class="shrink-button" on:click|stopPropagation={shrinkChatbox}>-</button>
    {:else}
      <button class="expand-button" on:click|stopPropagation={expandChatbox}>+</button>
    {/if}
  </div>
  <div class="chatbox-content">
    {#each messages as msg (msg.text)}
      <p class={msg.type}>
        <span class="timestamp">{msg.timestamp}</span> <span class="sender">{msg.sender}:</span> {msg.text}
      </p>
    {/each}
    <input type="text" bind:value={message} placeholder="Type a message...">
    <button on:click|stopPropagation={sendMessage}>Send</button>
  </div>
</div>

<div class="left-column">
  {#each navItems as item (item.text)}
    <div class="nav-item">
      <img src={item.logo} alt="Logo" width="24" height="24">
      <a href={item.href}>{item.text}</a>
    </div>
  {/each}
</div>

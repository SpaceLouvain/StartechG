<style>
  .main-content {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
  }

  .main-content > div {
    box-sizing: border-box;
    padding: 1em;
    border: 1px solid #ccc;
  }

  .box2,
  .box3 {
    width: 50%;
    height: 50%;
  }

  .box1 {
    width: 50%;
    height: 50%;
    display: flex;
    align-items: center;
  }

  .box1 img {
    display: inline-block;
    filter: invert(88%)  hue-rotate(199deg) brightness(100%) contrast(200%);
    width: 30%;
    height: auto;
  }

  .box1 p {
    font-size: 2em;
    margin-left: 1em;
  }

  progress {
    width: 100%;
    height: 2em;
    -webkit-appearance: none;
    appearance: none;
  }

  progress::-webkit-progress-bar {
    background-color: #eee;
  }

  progress::-webkit-progress-value {
    background-color: #4caf50;
  }

  progress::-moz-progress-bar {
    background-color: #4caf50;
  }

  .progress-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1em;
  }

  .progress-container label {
    width: 100px;
    text-align: right;
    margin-right: 1em;
  }

  .progress-container progress {
    flex-grow: 1;
  }

  .progress-container span {
    width: 20px;
    text-align: right;
    margin-left: 1em;
  }
</style>

<script>
      import { score, score1, score2 } from '/src/routes/questions/store.js';

</script>

<div class="main-content">
  <div class="box1">
    <img src="\flamme.jpg" alt="flamme">
    <p>Bravo ! Votre flamme est allumée depuis 3 jours !</p>
  </div>
  <div class="box2">
    <h2>Historique</h2>
    <ul>
      <li>Examen 2023 : Biologie</li>

    </ul>
  </div>
  <div class="box3">
    <div class="progress-container">
      <label for="math-progress">Mathématiques:</label>
      <progress id="math-progress" value={$score2*100} max="100"></progress>
      <span>{$score2*100}%</span>
    </div>
    <div class="progress-container">
      <label for="physics-progress">Physique:</label>
      <progress id="physics-progress" value="0" max="100"></progress>
      <span>0%</span>
    </div>
    <div class="progress-container">
      <label for="chemistry-progress">Chimie:</label>
      <progress id="chemistry-progress" value={$score1*100} max="100"></progress>
      <span>{$score1*100}%</span>
    </div>
    <div class="progress-container">
      <label for="biology-progress">Biologie:</label>
      <progress id="biology-progress" value={$score*10} max="100"></progress>
      <span>{$score*10}%</span>
    </div>
  </div>
</div>
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
    filter: invert(88%) sepia(18%) saturate(886%) hue-rotate(199deg) brightness(100%) contrast(200%);
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
  
</script>

<div class="main-content">
  <div class="box1">
    <img src="\personne.png" alt="flamme">
    <p>Bravo ! Votre flamme est allumée depuis 3 jours !</p>
  </div>
  <div class="box2">
    <h2>Historique</h2>
    <ul>
      <li>Examen 2019 : Mathématiques</li>
      <li>Biologie : ADN</li>
      <li>Biologie : Les cellules</li>
    </ul>
  </div>
  <div class="box3">
    <div class="progress-container">
      <label for="math-progress">Mathématiques:</label>
      <progress id="math-progress" value="70" max="100"></progress>
      <span>70%</span>
    </div>
    <div class="progress-container">
      <label for="physics-progress">Physique:</label>
      <progress id="physics-progress" value="50" max="100"></progress>
      <span>50%</span>
    </div>
    <div class="progress-container">
      <label for="chemistry-progress">Chimie:</label>
      <progress id="chemistry-progress" value="30" max="100"></progress>
      <span>30%</span>
    </div>
    <div class="progress-container">
      <label for="biology-progress">Biologie:</label>
      <progress id="biology-progress" value="90" max="100"></progress>
      <span>90%</span>
    </div>
  </div>
</div>
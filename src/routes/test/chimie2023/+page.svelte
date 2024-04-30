<script>
    import { score } from '/src/routes/questions/store.js';
    import Katex from 'svelte-katex'

    let questions = [
        {
            question: "Question 1. Parmi les propositions suivantes se rapportant à la division des cellules d'un humain mâle, laquelle est correcte?",
            answers: ["A. La mitose concerne uniquement les cellules somatiques.", "B. La méiose produit 4 cellules haploïdes.", "C. La mitose permet de produire 2 cellules haploïdes.", "D. La méiose réductionnelle se déroule au cours de la vie fœtale."],
            correctAnswer: 1, // B
            selectedAnswer: null,
        },
        {
            question: "Question 2. Parmi les propositions suivantes, quelle caractéristique différencie les cellules animales des cellules végétales photosynthétiques?",
            answers: ["A. Les voies d'assimilation du carbone.", "B. L'usage de la glycolyse pour produire de l'ATP.", "C. La capacité à se diviser par mitose.", "D. Le nombre de couches lipidiques de la membrane plasmique."],
            correctAnswer: 0, // A
            selectedAnswer: null,
        },
        {
            question: "Question 3. Le graphique ci-dessous représente l'évolution de la vitesse d'une réaction enzymatique dans des conditions non limitantes. À quel paramètre expérimental correspond l'abscisse?",
            answers: ["A. La concentration en enzyme.", "B. La concentration en substrat.", "C. La température.", "D. Le temps."],
            correctAnswer: 2, // C
            selectedAnswer: null,
        },
        {
            question: "Question 4. Parmi les propositions suivantes, quel est le classement correct par ordre croissant de taille ?",
            answers: ["A. Acide aminé, enzyme, ribosome, virus du SIDA, mitochondrie, ovocyte.", "B. Acide aminé, ribosome, mitochondrie, enzyme, ovocyte, virus du SIDA.", "C. Ribosome, mitochondrie, virus du SIDA, acide aminé, ovocyte, enzyme.", "D. Virus du SIDA, acide aminé, ribosome, enzyme, mitochondrie, ovocyte."],
            correctAnswer: 1, // B
            selectedAnswer: null,
        },
        {
            question: "Question 5. On croise 2 individus diploïdes dont les génotypes pour 4 gènes indépendants, sont respectivement les suivants : Aa Bb cc dd et Aa bb CC DD. Les allèles en majuscules sont dominants et les allèles en minuscules sont récessifs. Quelle sera la fréquence du phénotype [AbCD] chez leurs descendants directs?",
            answers: ["A. 3/4", "B. 3/8", "C. 3/32", "D. 3/64"],
            correctAnswer: 0, // A
            selectedAnswer: null,
        },
        {
            question: "Question 6. La maladie de Huntington est une maladie neurodégénérative monogénique à transmission autosomique dominante. Les symptômes apparaissent en moyenne entre 40 et 50 ans. Un sujet masculin âgé de 25 ans est phénotypiquement sain. Son père et son grand-père paternel sont atteints de la maladie de Huntington. Il n'y a pas d'autre cas décrit dans la famille. Le sujet s'unit avec une femme phénotypiquement saine qui n'a pas d'antécédent génétique. Ils ont 2 fils. Sur base de ces informations, les risques que leur fils aîné et leur fils cadet soient atteints de la maladie de Huntington sont respectivement de...",
            answers: ["A. 1/4 et 1/4", "B. 1/2 et 1/4", "C. 1/2 et 1/2", "D. 1 et 1/2"],
            correctAnswer: 0, // A
            selectedAnswer: null,
        },
        {
            question: "Question 7. Pour tester l'effet de deux antibiotiques (la puromycine et l'actinomycine), on réalise trois cultures de bactéries Bacillus subtilis en présence de phénylalanine radioactive et d'uracile radioactif. Les quantités d'uracile ou de phénylalanine radioactives incorporées dans les molécules bactériennes sont mesurées au cours du temps en l'absence d'antibiotique (culture 1), en présence de puromycine (culture 2) et en présence d'actinomycine (culture 3). Sur base des graphiques repris ci-dessus, quelle proposition est correcte?",
            answers: ["A. La puromycine agit sur la transcription mais pas sur la traduction.", "B. L'actinomycine agit sur la traduction mais pas sur la transcription.", "C. L'actinomycine n'agit ni sur la traduction ni sur la transcription.", "D. La puromycine agit sur la traduction mais pas sur la transcription."],
            correctAnswer: 2, // C
            selectedAnswer: null,
        },
        {
            question: "Question 8. Le calcul de l'empreinte écologique d'une population humaine de taille donnée, exprime...",
            answers: ["A. le nombre de jours avant qu'elle ait épuisé les réserves naturelles disponibles.", "B. la quantité de dioxyde de carbone qu'elle émet.", "C. la superficie biologiquement productive nécessaire pour subvenir à ses besoins.", "D. la quantité de ressources qu'elle consomme et des déchets qu'elle produit."],
            correctAnswer: 3, // D
            selectedAnswer: null,
        },
        {
            question: "Question 9. L'hémophilie A est une maladie monogénique causée par une déficience du facteur VIII de coagulation. L'arbre généalogique ci-dessous est celui d'une famille où sévit cette maladie. La technique du 'Southern Blot' permet de mettre en évidence des séquences spécifiques dans l'ADN génomique d'un sujet. Des généticiens ont utilisé cette technique pour quantifier le nombre de séquences correspondant à l'allèle sauvage et à l'allèle morbide dans l'ADN de quatre individus de la généalogie (Arthur, Chloé, Christian et Marie-France). Le tableau suivant donne le résultat de leurs analyses. A quel prénom correspond chaque lettre du tableau ?",
            answers: ["A. A = Christian; B = Arthur; C = Marie-France; D = Chloé.", "B. A = Arthur; B = Christian; C = Marie-France; D = Chloé.", "C. A = Chloé; B = Marie-France; C = Christian; D = Arthur.", "D. A = Christian; B = Arthur; C = Chloé; D = Marie-France."],
            correctAnswer: 3, // D
            selectedAnswer: null,
        },
        {
            question: "Question 10. L'utilisation abusive d'antibiotiques entraîne un accroissement de la fréquence des souches bactériennes qui y sont résistantes. Lequel des mécanismes suivants est à l'origine de cet accroissement ?",
            answers: ["A. Un processus de sélection naturelle.", "B. L'apparition d'une compétition entre les souches résistantes et sensibles.", "C. La survenue de mutations génétiques induites par les antibiotiques.", "D. Un déséquilibre des relations interspécifiques."],
            correctAnswer: 0, // A
            selectedAnswer: null,
        },
    ];

    
    function selectAnswer(answerIndex) {
        questions[currentQuestion].selectedAnswer = answerIndex;
        if (answerIndex === questions[currentQuestion].correctAnswer) {
            score++;
        }
    }
    function handleAnswerClick(index) {
        questions[currentQuestion].selectedAnswer = index;
    }

    function nextQuestion() {
        if (currentQuestion < questions.length - 1) {
            if (questions[currentQuestion].selectedAnswer === questions[currentQuestion].correctAnswer) {
                score.update(n => n + 1);
            }
            currentQuestion++;
        } else {
            showScore = true;
        }
    }

    function previousQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            if (questions[currentQuestion].selectedAnswer === questions[currentQuestion].correctAnswer) {
                score.update(n => n - 1);
            }
        }
        showScore = false;
    }

</script>
{#if showScore}
    <div>
        <h2>Votre score : {$score} / 10</h2>
        <h3>Questions incorrectes :</h3>
        <ul>
            {#each questions as question, index}
                {#if question.selectedAnswer !== question.correctAnswer}
                    <li>{index + 1}. {question.question}</li>
                {/if}
            {/each}
        </ul>
    </div>
{:else}


<h1 class="title">BIOLOGIE 2023</h1>

<main>
    <div class="center-content">

    {#if currentQuestion < questions.length}
        <h1 class="question"><Katex>{questions[currentQuestion].question}</Katex></h1>
        <div class="answer-container">
            {#each questions[currentQuestion].answers as answer, index}
            <button 
            class="answer-button 
                {questions[currentQuestion].selectedAnswer !== null && index === questions[currentQuestion].correctAnswer ? 'correct' : ''}
                {questions[currentQuestion].selectedAnswer === index && index !== questions[currentQuestion].correctAnswer ? 'incorrect' : ''}"
            on:click={() => handleAnswerClick(index)}
        >
            {answer}
        </button>
{/each}
        </div>
    {:else}
        <h1>Score: {score}/{questions.length}</h1>
    {/if}
</div>
</main>
{/if}
<style>
    .center-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh; /* adjust as needed */
    }
    .answer-container {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    .answer {
        border: 1px solid black;
        background-color: transparent;
        margin-bottom: 10px;
        padding: 10px;
    }
    .answer-button {
        background: transparent;
        border: none;
        font-size: 24px; /* adjust as needed */
    }

    .correct {
        background-color: rgb(6, 214, 6);
    }

    .incorrect {
        background-color: red;
    }
    h1 {
        text-align: center;
    }
    .title {
        margin-bottom: 10px; /* remove the bottom margin from the title */
    }

    .question {
        margin-top: -300px; /* Adjust the top margin as needed */
    }

</style>

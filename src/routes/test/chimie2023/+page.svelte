<script>
    import { score } from '/src/routes/questions/store.js';
    import Katex from 'svelte-katex'

    let questions = [
    {
        questionParts: [
            {
                type: "text",
                content: "Question 1. Quel volume d'une solution aqueuse de sulfate d'hydrogène (50 % en masse, d = 0,980) faut-il prélever pour obtenir 200 mL d'une solution 0,100 mol/L en ce composé ?"
            }
        ],
        answers: ["A. 1,00 mL", "B. 2,00 mL", "C. 4,00 mL", "D. 40,0 mL"],
        correctAnswer: 2,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=Wi3ces6kV1Y",
    },
    {
            questionParts: [
            {
                type: "text",
                content: "Question 2. Considérons le mélange d'acétone "
            },

            {
                type: "katex",
                content: "C_3H_6O"
            },
            {
                type: "text",
                content: " et de disulfure de carbone "
            },
            {
                type: "katex",
                content: "CS_2"
            },
            {
                type: "text",
                content: "suivant: Quelle est la proposition correcte ?"
            }
        ],
        answers: ["A. La fraction molaire de l'acétone est de 0,40", "B. La fraction molaire du disulfure de carbone est de 0,40", "C. La fraction molaire de l'acétone est de 0,67", "D. La fraction molaire du disulfure de carbone est de 0,80"],
        correctAnswer: 0,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=KyzbEmao6vw",
    },
    {
        questionParts: [
            {
                type: "text",
                content: "Question 3. Les variations de température et de pression influencent davantage la masse volumique d'un gaz que celle d'un liquide. Dans les conditions normales de température et de pression, la masse volumique d'un certain gaz vaut 1,50 g/L. Quelle valeur prendrait la masse volumique si on maintenait la pression constante mais qu'on amenait la température à 410 K?"
            }
        ],
        answers: ["A. 1,00 g/L", "B. 1,09 g/L", "C. 1,50 g/L", "D. 2,25 g/L"],
        correctAnswer: 0,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=E_AQ5s8-_ys",
    },
    {
        questionParts: [
            {
                type: "text",
                content: "Question 4. A quel oxyde acide correspond le permanganate d'hydrogène ?"
            }
        ],
        answers: [
    { type: 'katex', content: 'A. \\text{ MnO}_2' },
    { type: 'katex', content: 'B. \\text{ MnO}_4' },
    { type: 'katex', content: 'C. \\text{ Mn}_2\\text{O}_5' },
    { type: 'katex', content: 'D. \\text{ Mn}_2\\text{O}_7' }
],

        correctAnswer: 3,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=EPn85_odwVc",
    },
    {
        questionParts: [
            {
                type: "text",
                content: "Question 5. Parmi les paires de composés ci-dessous, laquelle ne correspond pas à un couple acide/base conjuguée ?"
            }
        ],
        answers: [
        { type: 'katex', content: 'A. \\text{HClO}/\\text{ClO}^{-}' },
        { type: 'katex', content: 'B. \\text{H}_3\\text{O}^+/\\text{OH}^{-}' },
        { type: 'katex', content: 'C. \\text{H}_2\\text{PO}_4^-/\\text{HPO}_4^{2-}' },
        { type: 'katex', content: 'D. \\text{HOOC-CH}_2\\text{NH}_3^+/\\text{OOC-CH}_2\\text{NH}_3^+' }
    ],
        correctAnswer: 1,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=B4MRJPdzt00",
    },
    {
        questionParts: [
            {
                type: "text",
                content: "Question 6. Le mélange de phosphate de sodium et de bromure de strontium en phase aqueuse conduit à la formation de phosphate de strontium et de bromure de sodium. Si on pondère correctement l'équation chimique de cette réaction avec des nombres entiers les plus petits possibles, que vaut la somme de tous les coefficients stœchiométriques?"
            }
        ],
        answers: ["A. 4", "B. 5", "C. 8", "D. 12"],
        correctAnswer: 3,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=8xk9kpzAAek",
    },
    {
        questionParts: [
            {
                type: "text",
                content: "Question 7. La combustion complète du propane en présence de dioxygène produit du dioxyde de carbone et de l'eau. Si 88,0 g de propane et 16,0 g de dioxygène sont mélangés, quel volume de dioxyde de carbone est produit à 0°C sous une pression de 1 atm?"
            }
        ],
        answers: ["A. 6,72 L", "B. 18,7 L", "C. 33,6 L", "D. 134 L"],
        correctAnswer: 0,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=y5fzMeFWQ9o",
    },
    {
        questionParts: [
    {
        type: "text",
        content: "Question 8. Du chlorure de zinc est converti en zinc métallique par réaction avec de l'aluminium selon la réaction dont l'équation chimique est : "
    },
    {
        type: "katex",
        content: "3 ZnCl_2 (aq) + 2 Al (s) \\rightarrow 3 Zn (s) + 2 AlCl_3 (aq)"
    },
    {
        type: "text",
        content: " Au terme de cette réaction, 3,25 g de zinc métallique sont obtenus après mélange de 200 mL d'une solution aqueuse 0,500 mol/L en chlorure de zinc et de 2,70 g d'aluminium. Quel est le rendement de la réaction?"
    }
],

        answers: ["A. 5,00 %", "B. 33,3%", "C. 50,0%", "D. 66,6%"],
        correctAnswer: 2,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=BETiLB19K-4",
    },
    {
        questionParts: [
    {
        type: "text",
        content: "Question 9. Soit la réaction dont l'équation chimique est :"
    },
    {
        type: "katex",
        content: "N_2 (g) + 3 H_2 (g) \\rightleftharpoons 2 NH_3 (g)"
    },
    {
        type: "text",
        content: "Dans un réacteur de 250 mL à 25°C sont introduits 0,350 mol de diazote et 1,00 mol de dihydrogène. Sachant que 0,500 mol d'ammoniac est obtenu à l'équilibre, quelle est la valeur de la constante d'équilibre Kc de cette réaction à 25°C?"
    }
],

        answers: ["A. 5,00", "B. 10,0", "C. 80,0", "D. 160"],
        correctAnswer: 2,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=2b5WDH4cKE4",
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
        if (index === questions[currentQuestion].correctAnswer) {
            message = "Bonne réponse!";
        } else {
            message = "Mauvaise réponse! Appuyez sur l'ampoule pour obtenir de l'aide.";
        }
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
        showVideo = false;
        message = "";
    }
    let showScore = false;

    let currentQuestion = 0;
    let showVideo = false;

    let currentVideoUrl = `https://www.youtube.com/embed/${questions[currentQuestion].lien.split('v=')[1]}`;
    
    function handleImageClick() {
        showVideo = true;

        currentVideoUrl = `https://www.youtube.com/embed/${questions[currentQuestion].lien.split('v=')[1]}`;
    }

    function previousQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            if (questions[currentQuestion].selectedAnswer === questions[currentQuestion].correctAnswer) {
                score.update(n => n - 1);
            }
        }
        showScore = false;
        showVideo = false;
        message = "";
    }

</script>
{#if showScore}
    <div>
        <h2>Votre score : {$score} / 9</h2>
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


<h1 class="title">CHIMIE 2023</h1>


<h1 class="question">
    {#each questions[currentQuestion].questionParts as part}
        {#if part.type === 'text'}
            {part.content}
        {:else if part.type === 'katex'}
            <Katex>{part.content}</Katex>
        {/if}
    {/each}
</h1>






<div  class="ampoule" on:click={handleImageClick}>
    <img src="/./ampoule.png" alt="gay">
</div>

<main>
    <div class="center-content">

    {#if currentQuestion < questions.length}



        {#if currentQuestion === 1} <!-- Ajouter cette condition pour afficher l'image uniquement pour la question 2 -->
            <div class="image_q2">
                <img src="\.\chimq2.png" alt="Description de l'image">
            </div>
        {/if}


        <div class="answer-container">
            {#each questions[currentQuestion].answers as answer, index}
                <button 
                    class="answer-button 
                        {questions[currentQuestion].selectedAnswer !== null && index === questions[currentQuestion].correctAnswer ? 'correct' : ''}
                        {questions[currentQuestion].selectedAnswer === index && index !== questions[currentQuestion].correctAnswer ? 'incorrect' : ''}"
                    on:click={() => handleAnswerClick(index)}
                >
                    {#if typeof answer === 'string'}
                        {answer}
                    {:else}
                        <Katex>{answer.content}</Katex>
                    {/if}
                </button>
            {/each}
        </div>
        
            
{#if showVideo}
<iframe width="560" height="315" src="{currentVideoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
{/if}

<div  class="fleche_next" on:click={nextQuestion}>
    <img src="/./fleche.png" alt="gay">
</div>

<div  class="fleche_previous" on:click={previousQuestion}>
    <img src="/./fleche.png" alt="gay">
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
    .ampoule {
    position: absolute;
    right: 935px;
    bottom: 150px;
    
    }
    .ampoule img {
        width: 50px;
        height: 50px;
    }

        .answer-container {
        display: flex;
        flex-direction: column;
        align-items: start;
        margin-bottom: 600px;
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
    .fleche_next {
        position: absolute;
        right: 300px;
        bottom: 100px;
    }
    .fleche_next img{
        width: 100px;
        margin-top: 100px; /* Ajustez la marge supérieure selon vos préférences */
    }

    .fleche_previous {
        position: absolute;
        left: 300px;
        bottom: 100px;
        transform: rotate(180deg);
        bottom: 100px;
    }
    .fleche_previous img{
        width: 100px;
    }

    .title {
        margin-bottom: 10px; /* remove the bottom margin from the title */
    }

    .question {
    margin-top: 30px; /* Ajustez la marge supérieure selon vos préférences */
    font-size: 30px; /* Ajustez la taille de la police selon vos préférences */

}

    .image_q2 {
        margin-top: 200px;
        justify-content: center;
    }

</style>
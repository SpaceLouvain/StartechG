<script>
    import { score } from '/src/routes/questions/store.js';
    import Katex from 'svelte-katex'

    
    let questions = [
    {
        questionParts :[
            {
                type: 'text',
                content: "Question 1. On considère la fonction f définie pour tout nombre réel x par l'expression : "
            },
            {
                type: "katex",
                content: "f(x) = \\frac{2x^3}{3} - \\frac{7x^2}{2} - 15x + 12"
            },
            {
                type: 'text',
                content: " Sur quelle partie de "
            },
            {
                type: "katex",
                content: "\\mathbb{R}"
            },
            {
                type: 'text',
                content: " cette fonction est-elle strictement croissante ?"
            }
    ],
    answers: [
            { type: 'katex', content: 'A. ]-\\infty ; -\\frac{3}{2}[U]5 ; +\\infty[' },
            { type: 'katex', content: 'B. ]-\\infty ; +\\infty[' },
            { type: 'katex', content: 'C. [-\\frac{7}{2} ; \\frac{2}{3}]\\cap[0 ; 5[' },
            { type: 'katex', content: 'D. [-\\frac{3}{2} ; 5]' }
        ],
    correctAnswer: 0,
    selectedAnswer: null,
    lien: "https://www.youtube.com/watch?v=s7TXMZkxmQg",
    },


    {
        questionParts :[
            {
                type: 'text',
                content: "Question 2. On considère la fonction f définie pour tout nombre réel non nul x par l'expression : "
            },
            {
                type: "katex",
                content: "f(x) = 2 + (x - 1)e^x + \\frac{3}{2}ln(x²)"
            },
            {
                type: 'text',
                content: " Quelle est l'équation de la droite tangente à la courbe d'équation y = f(x) au point d'abscisse x = 1 ?"
            }
        ],
        answers: [
    { type: 'katex', content: "A. y = 2e \\cdot x - 2(e - 1)" },
    { type: 'katex', content: "B. y = (e + 3) \\cdot x + (e + 1)" },
    { type: 'katex', content: "C. y = (e + 3) \\cdot x - (e + 1)" },
    { type: 'katex', content: "D. y = (e + 3) \\cdot x + 2" }
],

        correctAnswer: 2,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=r7eHfQAyzM0",
    },


    {
        questionParts :[
            {
                type: 'text',
                content: "Question 3. Le périmètre d'un losange vaut 80 m et l'amplitude d'un de ses angles vaut 60°. Que vaut l'aire définie par ce losange ?"
            },
            {
                type: "katex",
                content: "f(x) = \\frac{2x^3}{3} - \\frac{7x^2}{2} - 15x + 12"
            }
        ],
        answers: [
    { type: 'katex', content: "A. 200 \\cdot \\sqrt{2} \\, m^2" },
    { type: 'katex', content: "B. 400 \\cdot \\sqrt{2} \\, m^2" },
    { type: 'katex', content: "C. 200 \\cdot \\sqrt{3} \\, m^2" },
    { type: 'katex', content: "D. 400 \\cdot \\sqrt{3} \\, m^2" }
],

        correctAnswer: 2,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=qI1oFzfLwf0",
    },

    {
        questionParts :[
            {
                type: 'text',
                content: "Question 4. Le patron d'une jardinerie a trois types de fertilisant pour le gazon : F1, F2 et F3, contenant respectivement 30%, 20% et 10% d'azote. Il projette de les mélanger pour obtenir 500 kg de fertilisant contenant 15% d'azote et souhaite que ce mélange contienne trois fois moins de fertilisant de type F1 que de type F2. Si on note P1, P2 et P3 les masses respectives en kilogrammes de F1, F2 et F3 intervenant dans ce mélange, que vaut (p1; p2; p3) ?"
            }
        ],
        answers: [
            "A. (45 ; 135 ; 320)",
            "B. (50 ; 150 ; 300)",
            "C. (52 ; 156 ; 292)",
            "D. (60 ; 180 ; 260)"
        ],
        correctAnswer: 1,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=qXdUt23zAcY",
    },


    {
        questionParts :[
            {
                type: 'text',
                content: "Question 5. Voici un graphique représentant le taux d'accès à l'enseignement supérieur des hommes et des femmes ayant obtenu un diplôme de secondaire. Supposons que parmi les personnes ayant obtenu leur diplôme de secondaire, 60% sont des femmes et 40% sont des hommes. Que vaut le taux d'accés (en %) a lenseignement supérieur hors université parmi les personnes ayant obtenu un diplôme en secondaire ?"
            }
        ],
        answers: [
            "A. 43,5%",
            "B. 43,8%",
            "C. 76,0%",
            "D. 87,0%"
        ],
        correctAnswer: 1,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=cvdrzSFlpRY",
    },


    {
        questionParts : [
            {
                type: 'text',
                content: "Question 6. Auparavant, les honoraires pour un traitement chez un dentiste étaient de 50 euros. Le patient ne payait que 22% de ces honoraires, le reste étant payé par l'assurance-maladie. Les honoraires ont désormais augmenté de 10%. Les assurances-maladie font en sorte que les patients paient toujours la méme somme pour que leur traitement qu'avant l'augmentation. Quel est le pourcentage des nouveaux honoraires pris en charge par assurance maladie ?"
            }
        ],
        answers: [
            "A. 78%",
            "B. 80%",
            "C. 85%",
            "D. 88%"
        ],
        correctAnswer: 1,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=Wib8i6n-ybY",
    },


    {
        questionParts : [
            {
                type: 'text',
                content: "Question 7. On considère le système :"
            },
            {
                type: 'katex',
                content: "\\begin{cases} ax + by = c \\\\ -ax + dy = -c \\end{cases}"
            },
            {
                type: 'text',
                content: "où les inconnues x et y sont des nombres réels et où les nombres réels a,b,c et d sont non nuls. Parmi les propositions ci-dessous, laquelle est toujours vraie concernant ce système ?"
            }
        ],
        answers: [
            "A. Il n'admet aucune solution.",
            "B. Il admet au moins une solution.",
            "C. Il admet exactement deux solutions distinctes.",
            "D. Il n'admet qu'une seule solution."
        ],
        correctAnswer: 1,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=Tf6allPKrzk",
    },


    {
        questionParts : [
            {
                type: 'text',
                content: "Question 8. Si x est un angle quelconque, quelle est, parmi les relations suivantes, celle qui est toujours vérifiée ? "
            }
        ],
        answers: [
    { type: 'katex', content: "A. \\cos(x^2) = (\\cos(x))^2 - (\\sin(x))^2" },
    { type: 'katex', content: "B. \\cos(x^2) = 2 \\cos(x) \\sin(x)" },
    { type: 'katex', content: "C. \\cos(x^2) = 2 (\\cos(\\frac{x}{2}))^2 - 1" },
    { type: 'katex', content: "D. \\cos(x^2) = 2 (\\cos(\\frac{x^2}{2}))^2 - 1" }
],

        correctAnswer: 3,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=HAmdNMPwsEM",
    },

    
    {
        questionParts : [
            {
                type: 'text',
                content: "Question 9. Dans un plan muni d'un repére cartésien orthonormé, on considere la droite qui passe par les points (0; 16) et (10,0). On considére également une autre droite passant par l'origine et de pente"
            },
            {
                type: 'katex',
                content: "\\frac{3}{5}"
            },
            {
                type: 'text',
                content: ". Que vaut l'abscisse x du point d'intersection de ces deux droites ?"
            }
        ],
        answers: [
    { type: 'katex', content: "A. \\frac{80}{12}" },
    { type: 'katex', content: "B. \\frac{81}{12}" },
    { type: 'katex', content: "C. \\frac{80}{11}" },
    { type: 'katex', content: "D. \\frac{81}{11}" }
],

        correctAnswer: 2,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=UF_a-zls3r0",
    },


    {
        questionParts : [
            {
                type: 'text',
                content: "Question 10. Le dessin ci-dessous représente le parallélogramme PQRS (les droites PQ et SR sont paralléles et les droites PS et QR sont paralléles). Notons M le milieu du segment [PS] et N le milieu du segment [PQ].Parmi les propositions suivantes, laquelle exprime correctement le vecteur"
            },
            {
                type: 'katex',
                content: "2 \\cdot \\vec{MN}"
            },
            {
                type: 'text',
                content: "comme  combinaison linéaire des vecteurs"
            },
            {
                type: 'katex',
                content: "\\vec{PS}"
            },
            {
                type: 'text',
                content: "et"
            },
            {
                type: 'katex',
                content: "\\vec{RS}"
            },
            {
                type: 'text',
                content: "?"
            }
        ],
        answers: [
    { type: 'katex', content: "A. 2 \\cdot \\vec{MN} = \\vec{PS} + \\vec{RS}" },
    { type: 'katex', content: "B. 2 \\cdot \\vec{MN} = - \\vec{PS} + \\vec{RS}" },
    { type: 'katex', content: "C. 2 \\cdot \\vec{MN} = \\vec{PS} - \\vec{RS}" },
    { type: 'katex', content: "D. 2 \\cdot \\vec{MN} = - \\vec{PS} - \\vec{RS}" }
],

        correctAnswer: 3,
        selectedAnswer: null,
        lien: "https://www.youtube.com/watch?v=CBDIi3tWI_g",
    }
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


<h1 class="title">MATH 2023</h1>


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



        {#if currentQuestion === 4} <!-- Ajouter cette condition pour afficher l'image uniquement pour la question 2 -->
            <div class="image_q5">
                <img src="\.\mathq5.png" alt="Description de l'image">
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
    right: 150px;
    bottom: 150px;
    
    }
    .ampoule img {
        width: 50px;
        height: 50px;
        margin-bottom: 100px;
    }

    .answer-container {
        display: flex;
        flex-direction: column;
        align-items: start;
    }
    /* Add styles for the video */


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
    margin-bottom: -200px;
}

    .image_q5 {
        width: 30%;
        margin-top: 200px;
        justify-content: center;
    }

</style>
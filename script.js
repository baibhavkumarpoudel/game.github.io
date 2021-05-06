// 1 question at a time first
//break it down
//addeventlist
//started with correct answers and turned them into an array for later

const rightAnswers = ['B', 'C', 'B', 'B', 'A', 'A', 'C', 'B', 'A', 'C']
const gaQuiz = document.querySelector('form')
const scoreQuiz = document.querySelector('.score')

gaQuiz.addEventListener('submit', function(evt){
    evt.preventDefault()

    let score =0

    //this looks like the opposite of DRY but i will come back to it once i have time to DRY it a little
    const userAnswer = [
        gaQuiz.question1.value, 
        gaQuiz.question2.value,
        gaQuiz.question3.value,
        gaQuiz.question4.value,
        gaQuiz.question5.value,
        gaQuiz.question6.value,
        gaQuiz.question7.value,
        gaQuiz.question8.value,
        gaQuiz.question9.value,
        gaQuiz.question10.value ]

        const colorChange = [
        gaQuiz.question1.value, 
        gaQuiz.question2.value,
        gaQuiz.question3.value,
        gaQuiz.question4.value,
        gaQuiz.question5.value,
        gaQuiz.question6.value,
        gaQuiz.question7.value,
        gaQuiz.question8.value,
        gaQuiz.question9.value,
        gaQuiz.question10.value
        ]

        // colorChange.forEach(function(answer, array){
        //     if (answer === rightAnswers[array]){
        //         document.body.style.color = 'green'
        //     }
        //     else {
        //         document.querySelector(colorChange[array]).style.color = 'red'
        //     }
        // })

         //https://www.sitepoint.com/simple-javascript-quiz/
        //Margie shared this website which had bunch of .forEach examples and 
        // Casey helped me wrap up pulling the right answers from "rightAnswers" array
        userAnswer.forEach(function(answer, array){
            if(answer === rightAnswers[array]){
                score += 10
            }
//trying to test it out for the first question, Im not sure why it prints out the whole array
//in the console but .textContent "score" gives me what i want
            console.log(score)
        })
   //for loop. im not sure if i should this way or the if statement above. If statement is working for now
//    for(i=0; i<userAnswer.length; i++){
//     if(rightAnswers === userAnswer[i]){
//     score +=10
//    }
        scrollTo(0,0)
        //this part where i had to search for ".classList" to show my score took some time but thank goodness it works
        //this is like a 'double negative makes a postive' situation
        scoreQuiz.classList.remove('hide')
        scoreQuiz.querySelector('.percentage').textContent=`${score}%`
})
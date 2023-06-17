const correctAnswers = ['B','B','B','B']

const form = document.querySelector('.quiz-form')
const result = document.querySelector('.results')
const span = document.querySelector('span')

form.addEventListener('submit',e=>{
    e.preventDefault()
    

    let score = 0;

const useranswers = [form.q1.value ,form.q2.value,form.q3.value,form.q4.value ]


useranswers.forEach((answer,index) => {
    if(answer===correctAnswers[index]){
        score+=25

    }
})
   //result.querySelector('span').textContent=`${score}%`
   //result.classList.remove('d-none')
   scrollTo(0,0)
   result.classList.remove('d-none')
   
   

   let output = 0;
   const timer = setInterval(()=>{
    span.textContent = `${output}%`
    
    if(output === score){
        clearInterval(timer)

    }
    else{
        output++
    }
   },10)
})

/*const name = 'nasir'

const myfunc = callbackfmc=>{
   let value = 50;
   callbackfmc(name)

}
myfunc(name =>{
    console.log(name)
})*/
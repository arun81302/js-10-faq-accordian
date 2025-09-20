let accordian=document.querySelectorAll('.accordian')
accordian.forEach(accordian=>{
      let answer=accordian.querySelector('.answer')
      let icon=accordian.querySelector('.icon')
      accordian.addEventListener('click',()=>{
            answer.classList.toggle('active')
            icon.classList.toggle('active')
            if(icon.classList.contains('active')){
                  icon.src='./assets/images/icon-minus.svg'
            }
            else{
                  icon.src='./assets/images/icon-plus.svg'
            }
      })
})
const nextEl = document.querySelector('.next'),
      prevEl = document.querySelector('.prev'),
      imgContainerEl = document.querySelector('.img-container'),
      imgEl = document.querySelectorAll('img')

    let currentImg = 1,
        timeout

      nextEl.addEventListener('click',()=>{
       currentImg++
       clearTimeout(timeout)
       updateImg()
      })

      prevEl.addEventListener('click',()=>{
       currentImg--
       clearTimeout(timeout)
       updateImg()
      })
      updateImg()
      function updateImg(){
        if(currentImg > imgEl.length){
            currentImg = 1
        }else if(currentImg < 1){
            currentImg = imgEl.length
        }
       imgContainerEl.style.transform = `translateX(-${(currentImg - 1) * 500}px)`
      timeout = setTimeout(()=>{
        currentImg++
        updateImg()
       }, 3000)
      }
bg_img = document.querySelector(".bg-img")
intro = document.querySelector(".section .intro")
s_facts = document.querySelector(".s-facts")

abt = document.querySelector(".about")
skills = document.querySelector(".skills")
interests = document.querySelector(".interests")
blog_section = document.querySelector(".blog-section")

bg_img.classList.add("active")
intro.classList.add("active")





window.addEventListener('scroll',function(){
    val = window.scrollY

    if (val >= 200){
        s_facts.classList.add("fade-up")
    }
    else{
        s_facts.classList.remove("fade-up")
    }
    if (val >= 300){
        abt.classList.add("up")
    }
    else{
        abt.classList.remove("up")
    }
    if (val >= 900){
        skills.classList.add("up")
    }
    else{
        skills.classList.remove("up")
    }
    if(val > 1300){
        interests.classList.add("up")
    }
    else{
        interests.classList.remove("up")
    }
    if(val >= 1500){
        blog_section.classList.add("up")
    }
    else{
        blog_section.classList.remove("up")
    }
})


//blog pop
blog_previews= document.querySelectorAll(".blog-preview")
blogs = document.querySelectorAll(".blogs")
blog_clsbtn = document.querySelectorAll(".blogs #close") 


for (i = 0; i < blog_previews.length; i++){
    blog_previews[i].addEventListener("click", function(){
        console.log(i)
        blogs[i].classList.add("blog-show")
    })
}
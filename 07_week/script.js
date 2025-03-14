const bar = document.getElementById('bar');
const menu = document.getElementById('menu');

if(bar){
    bar.addEventListener('click', () =>{
        menu.classList.toggle('active');
    })}


// scripts for recent job heading
const sortBtns = document.querySelectorAll(".job-id > * ")
// scripts for sorting on click jobs
const sortItems = document.querySelectorAll(".jobs-container > *")

sortBtns.forEach((btn) =>{
    btn.addEventListener('click', () =>{
        sortBtns.forEach((btn) => btn.classList.remove("active"))
        btn.classList.add("active")

        // scripts for sorting on click jobs (delete in css)
        const targetData = btn.getAttribute("data-target")
        sortItems.forEach((item) =>{
            item.classList.add("delete")
            
            if(item.getAttribute("data-item") === 
            targetData || targetData === "all"){
                item.classList.remove("delete");
            }
        })
    })
})
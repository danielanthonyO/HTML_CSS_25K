

// id backToTop
const backToTopbtn = document.querySelector('#backToTop');


window.onscroll = function (){ scrollFunction(); };

    const scrollFunction = () => {

        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopbtn.style.display = "block";
        } else {
            backToTopbtn.style.display = "none";
        }
    }

const backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

backToTop.addEventListner('click', backToTop)







// positioning button
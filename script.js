console.log('Hello!');
let firstindex = 0
    function slides() {
        setInterval(slides, 3000);
        const slide = document.querySelectorAll("img")
        for(let i=0;i< slide.length; i++ ){
            slide[i].style.display="none";
        }
        firstindex++;
        if(firstindex > slide.length){
            firstindex = 1;
        }
        slide[firstindex - 1].style.display="block";

    }

    slides();
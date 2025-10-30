window.addEventListener("scroll", () => {
    
  const b = document.body;
    
    b.classList.remove("s1", "s2", "s3");
  


    const Scry = window.scrollY;
  
    if(Scry > 400){
      if(Scry <= 700){
      b.classList.add("s1");
     } } 



      else if (Scry > 700 ) {
      if(Scry <= 1000){

      b.classList.add("s2");
    } 
  }


    else if(Scry > 1000){

      b.classList.add("s3");

    }
  });

  console.log("JS loaded");
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);  

        if (entry.isIntersecting) {

            entry.target.classList.add('show');
        }

    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hiddenrx, .hiddenyd, .hiddenlx');
hiddenElements.forEach((el) => observer.observe(el));


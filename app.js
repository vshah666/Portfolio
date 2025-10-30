window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const body = document.body;
  
    body.classList.remove("scroll1", "scroll2", "scroll3");
  
    if (scrollY > 400 && scrollY <= 700){

      body.classList.add("s1");
    } 
    else if (scrollY > 700 && scrollY <= 1000) {

      body.classList.add("s2");
    } 
    else if (scrollY > 1000) {

      body.classList.add("s3");

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


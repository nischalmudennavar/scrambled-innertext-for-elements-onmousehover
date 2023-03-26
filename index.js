const buttons = document.querySelectorAll(".scramble");


const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+}{|:?><~`-=[];',./";

let interval = null;

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return event.target.dataset.value[index];
          }

          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iteration > event.target.dataset.value.length) {
        clearInterval(interval);
      }

        iteration += 1/2.5;
        
    }, 30);
  });
});

buttons.forEach((button) => {
    button.addEventListener("mouseleave", (event) => {
      let iteration = 0;

      clearInterval(interval);

      interval = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return event.target.dataset.value[index];
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("");

        if (iteration > event.target.dataset.value.length) {
          clearInterval(interval);
        }

        iteration += 1/2.5;
      }, 30);
    });
    });
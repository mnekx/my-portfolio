let modal = document.querySelector(".modal");
      let openModalBtns = document.querySelectorAll(".open-modal");
      let closeModalSpan = document.querySelector("#modal-closer");

      for(let btn of Array.from(openModalBtns)) {
        btn.addEventListener("click", (e) => {
            modal.classList.add("show");
          });
      }

      closeModalSpan.addEventListener("click", () => {
        modal.classList.remove("show");
      });
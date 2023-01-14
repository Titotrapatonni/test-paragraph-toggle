const textYellow =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem quis, commodi, illo, quos nisi consectetur maxime asperiores necessitatibus totam nesciunt ipsum! Error numquam in quae accusamus. Cupiditate molestias magni laborum?";
const textGreen =
  "Quis aliquid sint vero inventore explicabo molestias fugiat? Consequuntur saepe earum doloribus reiciendis rem sit, quaerat deleniti itaque esse dolor architecto, impedit ipsam veritatis! Nam laborum quae ut fugiat neque, odio deleniti dolorem ea sapiente vitae aliquid suscipit dolore natus nesciunt.";
const markup = `<p class="primary-para" data-paragraph>${textYellow}</p>
<button type="button" class="toggle-btn">Click Me!</button>
<style>
p {
        font-size: 22px;
        border: 1px solid black;
        padding: 15px;
        border-radius: 5px;
        min-height: 100px;
          serif;
        text-align: center;
      }
      .primary-para {
        background-color: yellow; 
      }
      .secondary-para {
                background-color: green;
      }
      .toggle-btn {
        display: block;
        padding: 10px 16px;
        margin-left: auto;
        margin-right: auto;
      }
    </style>`;

document.body.innerHTML = markup;
const paragraph = document.querySelector("[data-paragraph]");
const btnEl = document.querySelector(".toggle-btn");
btnEl.addEventListener("click", onClick);

function onClick() {
  paragraph.classList.toggle("secondary-para");
  paragraph.textContent = textYellow;
  if (paragraph.classList.contains("secondary-para")) {
    paragraph.textContent = textGreen;
  }
}

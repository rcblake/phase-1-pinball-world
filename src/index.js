//challenge 1
//fetch
//return object: keys and values
//style list 'game (manufacturer)' h5 for additional styling

//challenge 2
//on page load, show image name and high-score for first game

//challenge 3
//when user click on a game, display all of the information

//challenge 4
//use form on the to allow entry of high_score
//does not need to persist from reload, but should change the object

//Global
const gameList = document.querySelector(".game-list");
const gameDetails = document.querySelector(".game-details");
const gameImg = document.querySelector("#detail-image");
const h2 = document.querySelector("#detail-title");
const span = document.querySelector("#detail-high-score");
const form = document.querySelector("#high-score-form");
const hsInput = document.querySelector("scoreInput");

//challenge 1
//fetch
//return object: keys and values
//style list 'game (manufacturer)' h5 for additional styling

fetch(`http://localhost:3000/games`)
  .then((res) => res.json())
  .then((games) => {
    renderDetails(games[0]);

    games.forEach((game) => {
      renderGameList(game);
    });
  });

const renderGameList = (game) => {
  const h5 = document.createElement("h5");
  h5.textContent = `${game.name} (${game.manufacturer_name})`;
  gameList.append(h5);
  h5.addEventListener("click", () => renderDetails(game));
};

const renderDetails = (game) => {
  gameImg.src = game.image;
  h2.textContent = game.name;
  span.textContent = game.high_score;
  form.addEventListener("submit", (e) => highScoreSubmit(e));

  const highScoreSubmit = (e) => {
    e.preventDefault();
    span.textContent = e.target.scoreInput.value;
    game.high_score = e.target.scoreInput.value;
    console.log(e.target.scoreInput.value);
    form.reset();
  };
};

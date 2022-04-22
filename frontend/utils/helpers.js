export const updatePostStats = {
  like: function (cardId) {
    console.log(cardId);
    document.querySelector("#likesCount-" + cardId).textContent++;
  },
  dislike: function (cardId) {
    document.querySelector("#likesCount-" + cardId).textContent--;
  },
};

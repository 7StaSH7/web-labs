export const updatePostStats = {
  like: function (cardId) {
    document.querySelector("#likesCount-" + cardId).textContent++;
  },
  dislike: function (cardId) {
    document.querySelector("#likesCount-" + cardId).textContent--;
  },
};

// Function to refresh the score list
const  refreshScores = async() => {
    const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/79XMBnXaUaN1iZAcvRux/scores';
  
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
  
      const scoreList = document.querySelector('.list');
      scoreList.innerHTML = '';
  
      data.result.forEach((score) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${score.user}, Score: ${score.score}`;
        scoreList.appendChild(listItem);
      });
    } catch (error) {
      console.log('Error:', error);
    }
  }
  export default refreshScores;
// Function to add a new score
const  addScore = async(name, score) =>{
    const endpoint = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/79XMBnXaUaN1iZAcvRux/scores';
    const requestBody = JSON.stringify({ user: name, score });
  
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: requestBody,
      });
  
      const data = await response.json();
      console.log('Score added:', data.result);
    } catch (error) {
      console.log('Error:', error);
    }
}

export default addScore;
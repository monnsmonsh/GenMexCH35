// API
const API_ENDPOINT = 'https://yesno.wtf/api';

/**
 * Function to fetch answer from API
 */
async function fetchAnswer() {
    try {
        // Display loading state
        document.getElementById('answer').innerText = 'Loading...';

        // Fetch data from API
        const response = await fetch(API_ENDPOINT);
        const data = await response.json();

        // Output the API's response
        document.getElementById('answer').innerText = data.answer;

        // Clear output after 3 seconds
        setTimeout(() => {
            document.getElementById('answer').innerText = '';
        }, 3000);
    } catch (error) {
        // Display error state
        document.getElementById('answer').innerText = 'Error occurred while fetching data.';
    }
}

/**
 * Attach fetchAnswer to an event listener
 */
document.getElementById('button').addEventListener('click', fetchAnswer);

/**
 * STEPS:
 *
 * 1. Create a fetchAnswer function and call the API
 * 2. Output the API's response
 * 3. Attach fetchAnswer to an event listener
 * 4. Clear output after 3 seconds
 * 5. Optional: add loading/error states
 *
 */

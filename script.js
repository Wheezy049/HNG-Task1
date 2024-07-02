document.addEventListener('DOMContentLoaded', () => {
    const updateTime = () => {
        const now = new Date();
        const utcTime = now.toUTCString();
        const day = now.toLocaleString('en-US', { weekday: 'long' });
        
        document.getElementById('currentTimeUTC').innerText = utcTime;
        document.getElementById('currentDay').innerText = day;
    };

    setInterval(updateTime, 1000);
    updateTime();
});

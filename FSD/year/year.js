function predictYear() {
    const input = document.getElementById('yearInput');
    const result = document.getElementById('result');
    const year = Number(input.value.trim());

    if (!year) {
        showMessage("Years are in numbers, bro... WTF ");
        return;
    }
    showMessage("Damn, the code is complex... WTF ");
    setTimeout(() => showMessage("Analysing this shit...wait vro"), 2000);

    setTimeout(() => {
        let flashCount = 0;
        const flashInterval = setInterval(() => {
            const randomNum = Math.floor(Math.random() * 100000000);
            result.textContent = `${randomNum}`;
            flashCount++;
            if (flashCount >= 100) {
                clearInterval(flashInterval);
                const nextYear = year + 1;
                showMessage(`Next year will be: ${nextYear}`);
            }
        }, 50);
    }, 8000);
}

function showMessage(message) {
    document.getElementById('result').textContent = message;
}
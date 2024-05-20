function calculateTrophies() {
    // Отримати всі елементи <ul> які містять трофеї 1-го місця
    const firstPlaceLists = document.querySelectorAll('.first-places');
    let count = 0;

    // Проходимося по кожному елементу і підраховуємо кількість <li>
    firstPlaceLists.forEach(ul => {
        count += ul.querySelectorAll('li').length;
    });

    // Виводимо результат
    document.getElementById('result').textContent = `Кількість виграних трофеїв: ${count}`;
}

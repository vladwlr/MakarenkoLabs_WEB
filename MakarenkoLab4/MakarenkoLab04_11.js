const items = ['html', 'css', 'html', 'js', 'css', 'react'];
const uniqueItems = [...new Set(items)];
document.getElementById('result').innerHTML = `Було: <strong>${items.join(', ')}</strong><br>Унікальні: <strong>${uniqueItems.join(', ')}</strong>`;
console.log(uniqueItems);

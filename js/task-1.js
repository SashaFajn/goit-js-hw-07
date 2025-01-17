const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories:${categories.length}`);
categories.forEach(item => {
    const itemTitle = item.querySelector('h2').textContent;
    const itemLength = item.querySelectorAll('ul li').length;
    console.log(`Category:${itemTitle}`);
    console.log(`Elements:${itemLength}`);
})


import data from '/api/data.json' assert { type: "json" };

console.log(data);

// const html = await fetch(new URL('./template.html', import.meta.url))
//     .then(res => res.text());

console.log(import.meta.url);
console.log(new URL('./template.html', import.meta.url).href);
console.log(import.meta.resolve('./template.html'));
console.log(typeof import.meta.resolve('./template.html'));
console.log(import.meta.resolve('html'));

async function addHtml(url) {
    const html=await fetch(url).then(res => res.text());
    div.insertAdjacentHTML('beforeend', html );
}

addHtml(new URL('./template.html', import.meta.url));
addHtml(import.meta.resolve('./template.html'));
addHtml(import.meta.resolve('html'));
 
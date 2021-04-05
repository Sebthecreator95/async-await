let favNumber = 1995;
let baseURL = "http://numbersapi.com";

// 1.
async function favNum() {
  let data = await $.getJSON(`${baseURL}/${favNumber}?json`);
  console.log(data);
}
favNum();

// 2.
const favNumbers = [33, 42, 3];
let iterator = favNumbers.values();


async function favNums() {
  const favNumbers = [33, 42, 3];
  let iterator = favNumbers.values();
  for (let value of iterator) {
  let data = await $.getJSON(`${baseURL}/${value}?json`);
  $("body").append(`<p>${data.text}</p>`)
}
}
favNums();


// 3.
async function multipleFacts() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${baseURL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
multipleFacts();

function deleteFizz() {
  let fizz = document.getElementsByClassName('fizz-buzz-item');

  for (let i=0; i < fizz.length; i++) {
    fizz[i].addEventListener( 'click', ( event ) => {
      let currFizz = event.target.id
      console.log(currFizz)
      currFizz.classList.add('hidden')
    })
  }
}

function getFizz() {
  let btn = document.querySelector('.sub');

  btn.addEventListener( 'click', ( event ) => {
    event.preventDefault();

    let input = document.querySelector('.fizzBuzzNumber');
    console.log(input.value);
    if (input.value > 1) {
      let results = document.querySelector('.resultsSection');
      results.innerHTML = ''

      for(num = 1; num <= input.value; num++) {
        if (num % 3 == 0 && num % 5 == 0) {
          results.innerHTML += 
          `
            <div class="fizz-buzz-item fizzbuzz">
            fizzbuzz
            </div>
          `;
        } else if (num % 5 == 0) {
          results.innerHTML += 
          `
            <div class="fizz-buzz-item buzz">
            buzz
            </div>
          `;
        } else if (num % 3 == 0) {
          results.innerHTML += 
          `
            <div class="fizz-buzz-item fizz">
            fizz
            </div>
          `;
        } else {
          results.innerHTML += 
          `
            <div class="fizz-buzz-item">
          ` + num + 
          `
            </div>
          `;
        }
      }
    } else {
      console.log('Positive only')
    }
  })

}

function init() {
  getFizz();
  deleteFizz();
}

init()
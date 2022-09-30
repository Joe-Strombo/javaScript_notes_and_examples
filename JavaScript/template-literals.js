let name = 'bob';
console.log(`hi ${name}`);

//note: those are backticks, above the tilde above tab key

function getReasonCount() { return 1; }

let interpolation = `Give me ${(getReasonCount() == 1)
     ? 'one good reason' : 'a few reasons to try this' }
      to try this.`
      console.log(interpolation);
      //prints Give me one good reason to try this.

     
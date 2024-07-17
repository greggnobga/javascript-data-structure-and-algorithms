export default class Pattern {
  /** Constructor. */
  constructor() {}

  triangle1() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.triangle-1');

    for (let i = 1; i <= n; i++) {
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  triangleHollow1() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hollow-triangle-1');

    for (let i = 1; i <= n; i++) {
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        if (i == n || j == 1 || j == i) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  triangle2() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.triangle-2');

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  triangleHollow2() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hollow-triangle-2');

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= n; j++) {
        if (i == 1 || j == i || j == n) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  triangle3() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.triangle-3');

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  triangleHollow3() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hollow-triangle-3');

    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        if (j == 1 || j == i || i == n) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  triangle4() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.triangle-4');

    for (let i = 1; i <= n; i++) {
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      /** Decreasing triangle. */
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  triangleHollow4() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hollow-triangle-4');

    for (let i = 1; i <= n; i++) {
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      /** Decreasing triangle. */
      for (let j = i; j <= n; j++) {
        if (i == 1 || j == i || j == n) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  square() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.square');

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  squareHollow() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hollow-square');

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i == 1 || j == 1 || i == n || j == n) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  hill() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hill');

    /** External loop. */
    for (let i = 1; i <= n; i++) {
      /** Print space. */
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      for (let j = 1; j < i; j++) {
        DOM.innerHTML += '* ';
      }
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  hillHollow() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hill-hollow');

    /** External loop. */
    for (let i = 1; i <= n; i++) {
      /** Print space. */
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      for (let j = 1; j < i; j++) {
        if (i == n || j == 1) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        if (i == n || j == i) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  hillReverse() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.hill-reverse');

    /** External loop. */
    for (let i = 1; i <= n; i++) {
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      /** Decreasing triangle. */
      for (let j = i; j < n; j++) {
        DOM.innerHTML += '* ';
      }
      /** Decreasing triangle. */
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  arrow() {
    /** Declare variable. */
    let n = 7;

    /** Select DOM. */
    const DOM = document.querySelector('.arrow');

    /** Print star. */
    for (let i = 1; i < n; i++) {
      for (let j = 0; j < i; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
    for (let i = 1; i < n - 1; i++) {
      for (let j = 1; j < n - i; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  parallel() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.parallel');

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  plus() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.plus');

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i == n / 2 + 1 || j == n / 2 + 3) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  cross() {
    /** Declare variable. */
    let n = 10;

    /** Select DOM. */
    const DOM = document.querySelector('.cross');

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (i == j || i + j == n + 1) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }

  diamond() {
    /** Declare variable. */
    let n = 6;

    /** Select DOM. */
    const DOM = document.querySelector('.diamond');

    for (let i = 1; i < n; i++) {
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      for (let j = 1; j < i; j++) {
        DOM.innerHTML += '* ';
      }
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      /** Decreasing triangle. */
      for (let j = i; j < n; j++) {
        DOM.innerHTML += '* ';
      }
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '* ';
      }
      DOM.innerHTML += '<br />';
    }
  }

  diamondHollow() {
    /** Declare variable. */
    let n = 6;

    /** Select DOM. */
    const DOM = document.querySelector('.diamond-hollow');

    for (let i = 1; i < n; i++) {
      for (let j = i; j <= n; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      for (let j = 1; j < i; j++) {
        if (j == 1) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      /** Increasing triangle. */
      for (let j = 1; j <= i; j++) {
        if (j == i) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }

    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < i; j++) {
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
        DOM.innerHTML += '&nbsp;';
      }
      /** Decreasing triangle. */
      for (let j = i; j < n; j++) {
        if (j == i) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      for (let j = i; j <= n; j++) {
        if (j == n) {
          DOM.innerHTML += '* ';
        } else {
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
          DOM.innerHTML += '&nbsp;';
        }
      }
      DOM.innerHTML += '<br />';
    }
  }
}

const pattern = new Pattern();

pattern.triangle1();
pattern.triangleHollow1();
pattern.triangle2();
pattern.triangleHollow2();
pattern.triangle3();
pattern.triangleHollow3();
pattern.triangle4();
pattern.triangleHollow4();
pattern.square();
pattern.squareHollow();
pattern.hill();
pattern.hillReverse();
pattern.hillHollow();
pattern.arrow();
pattern.parallel();
pattern.plus();
pattern.cross();
pattern.diamond();
pattern.diamondHollow();

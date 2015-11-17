(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";

  /**
   * Documentation: http://chancejs.com/.
   */
  
  var defs = {
    "!name": "chancejs",
    "!define": {
      "chanceJsBoolObj": {
        "likelihood": {
          "!type": "number",
          "!url": "http://chancejs.com/#bool",
          "!doc": "Likelihood of success in percents(50 by default)."
        }
      },
      "chanceJsCharacterObj": {
        "pool": {
          "!type": "string",
          "!url": "http://chancejs.com/#character",
          "!doc": "Character will be generated with characters only from that pool."
        },
        "alpha": {
          "!type": "bool",
          "!url": "http://chancejs.com/#character",
          "!doc": "Alphanumeric character."
        },
        "casing": {
          "!type": "string",
          "!url": "http://chancejs.com/#character",
          "!doc": "'upper' or 'lower'(default - both)."
        },
        "symbols": {
          "!type": "bool",
          "!url": "http://chancejs.com/#character",
          "!doc": "Return only symbols."
        }
      },
      "chanceJsFloatingObj": {
        "fixed": {
          "!type": "bool",
          "!url": "http://chancejs.com/#floating",
          "!doc": "Number of fixed digits after the decimal."
        },
        "min": {
          "!type": "number",
          "!url": "http://chancejs.com/#floating",
          "!doc": "Minimum value."
        },
        "max": {
          "!type": "number",
          "!url": "http://chancejs.com/#floating",
          "!doc": "Maximum value."
        }
      },
      "chanceJsIntegerObj": {
        "min": {
          "!type": "number",
          "!url": "http://chancejs.com/#integer",
          "!doc": "Minimum value."
        },
        "max": {
          "!type": "number",
          "!url": "http://chancejs.com/#integer",
          "!doc": "Maximum value."
        }
      },
      "chanceJsNaturalObj": {
        "min": {
          "!type": "number",
          "!url": "http://chancejs.com/#natural",
          "!doc": "Minimum value."
        },
        "max": {
          "!type": "number",
          "!url": "http://chancejs.com/#natural",
          "!doc": "Maximum value."
        }
      },
      "chanceJsStringObj": {
        "length": {
          "!type": "number",
          "!url": "http://chancejs.com/#string",
          "!doc": "String length."
        },
        "pool": {
          "!type": "string",
          "!url": "http://chancejs.com/#string",
          "!doc": "Characters pool."
        }
      },
      "chanceJsParagraphObj": {
        "sentences": {
          "!type": "number",
          "!url": "http://chancejs.com/#paragraph",
          "!doc": "Number of sentences."
        },
      },
      "chanceJsSentenceObj": {
        "words": {
          "!type": "number",
          "!url": "http://chancejs.com/#sentence",
          "!doc": "Number of words."
        },
      },
      "chanceJsWordObj": {
        "length": {
          "!type": "number",
          "!url": "http://chancejs.com/#word",
          "!doc": "Number of syllables."
        },
        "syllables": {
          "!type": "number",
          "!url": "http://chancejs.com/#word",
          "!doc": "Word length."
        },
      },
      "chanceJsHashObj": {
        "length": {
          "!type": "number",
          "!url": "http://chancejs.com/#hash",
          "!doc": "Number of syllables."
        },
        "casing": {
          "!type": "string",
          "!url": "http://chancejs.com/#hash",
          "!doc": "'upper' or 'lower'(default - both)."
        }
      }
    },
    "Chance": {
      "!type": "fn(rnd: ?)",
      "prototype": {
        "bool": {
          "!type": "fn(+chanceJsBoolObj) -> bool",
          "!url": "http://chancejs.com/#bool",
          "!doc": "Return a random boolean value (true or false)."
        },
        "character": {
          "!type": "fn(+chanceJsCharacterObj) -> string",
          "!url": "http://chancejs.com/#character",
          "!doc": "Return a random character."
        },
        "floating": {
          "!type": "fn(+chanceJsFloatingObj) -> number",
          "!url": "http://chancejs.com/#character",
          "!doc": "Return a random floating point number."
        },
        "integer": {
          "!type": "fn(+chanceJsFloatingObj) -> number",
          "!url": "http://chancejs.com/#integer",
          "!doc": "Return a random integer."
        },
        "natural": {
          "!type": "fn(+chanceJsNaturalObj) -> number",
          "!url": "http://chancejs.com/#integer",
          "!doc": "Return a natural number."
        },
        "string": {
          "!type": "fn(+chanceJsStringObj) -> string",
          "!url": "http://chancejs.com/#string",
          "!doc": "Return a random string."
        },
        "paragraph": {
          "!type": "fn(+chanceJsParagraphObj) -> string",
          "!url": "http://chancejs.com/#paragraph",
          "!doc": "Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words."
        },
        "sentence": {
          "!type": "fn(+chanceJsSentenceObj) -> string",
          "!url": "http://chancejs.com/#sentence",
          "!doc": "Return a random sentence populated by semi-pronounceable random (nonsense) words."
        },
        "syllable": {
          "!type": "fn() -> string",
          "!url": "http://chancejs.com/#syllable",
          "!doc": "Return a semi-speakable syllable, 2 or 3 letters."
        },
        "word": {
          "!type": "fn(+chanceJsWordObj) -> string",
          "!url": "http://chancejs.com/#word",
          "!doc": "Return a semi-pronounceable random (nonsense) word."
        },
        "guid": {
          "!type": "fn() -> string",
          "!url": "http://chancejs.com/#guid",
          "!doc": "Return a random guid."
        },
        "hash": {
          "!type": "fn(+chanceJsHashObj) -> string",
          "!url": "http://chancejs.com/#hash",
          "!doc": "Return a random hex hash."
        },
        "unique": {
          "!type": "fn(+Chance, number) -> []",
          "!url": "http://chancejs.com/#unique",
          "!doc": "Provide any function that generates random stuff."
        }
      }
    },
    "chance": {
      "!type": "+Chance"
    }
  };

  tern.registerPlugin("chancejs", function(server, options) {
    return {
      defs : defs
    };
  });
});

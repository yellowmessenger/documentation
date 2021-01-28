---
title: app.ai
sidebar_label: app.ai
---


This object contains methods to access some of the NLP features in the platform to process sentences/words or to train ML models.


Methods
-------

predict
-------

The `app.ai.predict` method accepts a string and returns the prediction to the string.

 Syntax

app.ai.predict(text, context, entityThreshold, source='yellowmessenger')

*parameters*

 text | `string`

A word or sentence to which we want the prediction.

 source | `optional` | `string`

A string representing the source of the message

 Return Value | `Promise`

Returns a promise. Promises resolve an object representing the result of the prediction.

 Example

```javascript
app.ai.predict('what is my ip?')
  .then(result => app.log(reslut));
```
```json  
{
    "core": false,
    "intents": {
        "geo-location": 0.997
    },
    "language_detected": "en",
    "sentiment": "neutral",
    "text": "what is my ip?",
    "parser": {
        "noun_chunks": [
            {
                "dep": "attr",
                "chunk": "what",
                "root_text": "is",
                "tag": "WP",
                "pos": "PRON"
            },
            {
                "dep": "nsubj",
                "chunk": "my ip",
                "root_text": "is",
                "tag": "NN",
                "pos": "NOUN"
            }
        ],
        "lemmas": [
            "what",
            "-PRON-",
            "ip",
            "?"
        ],
        "sentences": [
            "what is my ip?"
        ],
        "tokens": [
            {
                "text": "what",
                "pos": "PRON",
                "lemma": "what"
            },
            {
                "text": "is",
                "pos": "VERB",
                "lemma": "be"
            },
            {
                "text": "my",
                "pos": "DET",
                "lemma": "-PRON-"
            },
            {
                "text": "ip",
                "pos": "NOUN",
                "lemma": "ip"
            },
            {
                "text": "?",
                "pos": "PUNCT",
                "lemma": "?"
            }
        ],
        "entities": [],
        "other_keywords": [
            {
                "text": "what",
                "pos": "PRON",
                "lemma": "what"
            },
            {
                "text": "my",
                "pos": "DET",
                "lemma": "-PRON-"
            },
            {
                "text": "ip",
                "pos": "NOUN",
                "lemma": "ip"
            },
            {
                "text": "?",
                "pos": "PUNCT",
                "lemma": "?"
            }
        ],
        "parsed_tree": [
            {
                "head_pos": 100,
                "dep": "attr",
                "text": "what",
                "pos": "PRON",
                "head_text": "is",
                "children": []
            },
            {
                "head_pos": 100,
                "dep": "ROOT",
                "text": "is",
                "pos": "VERB",
                "head_text": "is",
                "children": [
                    "what",
                    "ip",
                    "?"
                ]
            },
            {
                "head_pos": 92,
                "dep": "poss",
                "text": "my",
                "pos": "DET",
                "head_text": "ip",
                "children": []
            },
            {
                "head_pos": 100,
                "dep": "nsubj",
                "text": "ip",
                "pos": "NOUN",
                "head_text": "is",
                "children": [
                    "my"
                ]
            },
            {
                "head_pos": 100,
                "dep": "punct",
                "text": "?",
                "pos": "PUNCT",
                "head_text": "is",
                "children": []
            }
        ],
        "lemma_list": [
            {
                "lemma": "what",
                "pos": "PRON",
                "text": "what"
            },
            {
                "lemma": "-PRON-",
                "pos": "DET",
                "text": "my"
            },
            {
                "lemma": "ip",
                "pos": "NOUN",
                "text": "ip"
            },
            {
                "lemma": "?",
                "pos": "PUNCT",
                "text": "?"
            }
        ]
    },
    "confidence": 0.997,
    "global_entities": [],
    "synonym_detected": false,
    "intent": "geo-location",
    "global_model": {
        "confidence": 0.8341319561004639,
        "intent": "what"
    }
}
```
* * *

predictMultiple
---------------

The `app.ai.predictMultiple` method accepts a string representing a sentence/words and a list of bot IDs as a second parameter. It returns the prediction of the given sentence/words by each bot.

### Syntax

    app.ai.predictMultiple(text, [botId,...])

### parameters

#### text | `string`

A word or sentence to which we want the prediction.

#### botIds | `Array`

An array representing the list of bot IDs.

### Return Value | `Promise`

Returns a promise. Promises resolve an Array of objects representing each bot prediction.

### Example

```
app.ai.predictMultiple('what is my ip?', ['x123456789', 'x987654321'])
    .then(result => app.log(reslut));

// the output will look like
[
    {
        "core": false,
        "intents": {
            "geo-location": 0.997
        },
        "language_detected": "en",
        "sentiment": "neutral",
        "text": "what is my ip?",
        "parser": {
            "noun_chunks": [
                {
                    "dep": "attr",
                    "chunk": "what",
                    "root_text": "is",
                    "tag": "WP",
                    "pos": "PRON"
                },
                {
                    "dep": "nsubj",
                    "chunk": "my ip",
                    "root_text": "is",
                    "tag": "NN",
                    "pos": "NOUN"
                }
            ],
            "lemmas": [
                "what",
                "-PRON-",
                "ip",
                "?"
            ],
            "sentences": [
                "what is my ip?"
            ],
            "tokens": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "is",
                    "pos": "VERB",
                    "lemma": "be"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "entities": [],
            "other_keywords": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "parsed_tree": [
                {
                    "head_pos": 100,
                    "dep": "attr",
                    "text": "what",
                    "pos": "PRON",
                    "head_text": "is",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "ROOT",
                    "text": "is",
                    "pos": "VERB",
                    "head_text": "is",
                    "children": [
                        "what",
                        "ip",
                        "?"
                    ]
                },
                {
                    "head_pos": 92,
                    "dep": "poss",
                    "text": "my",
                    "pos": "DET",
                    "head_text": "ip",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "nsubj",
                    "text": "ip",
                    "pos": "NOUN",
                    "head_text": "is",
                    "children": [
                        "my"
                    ]
                },
                {
                    "head_pos": 100,
                    "dep": "punct",
                    "text": "?",
                    "pos": "PUNCT",
                    "head_text": "is",
                    "children": []
                }
            ],
            "lemma_list": [
                {
                    "lemma": "what",
                    "pos": "PRON",
                    "text": "what"
                },
                {
                    "lemma": "-PRON-",
                    "pos": "DET",
                    "text": "my"
                },
                {
                    "lemma": "ip",
                    "pos": "NOUN",
                    "text": "ip"
                },
                {
                    "lemma": "?",
                    "pos": "PUNCT",
                    "text": "?"
                }
            ]
        },
        "confidence": 0.997,
        "global_entities": [],
        "synonym_detected": false,
        "intent": "geo-location",
        "global_model": {
            "confidence": 0.8341319561004639,
            "intent": "what"
        }
    },
    {
        "core": false,
        "intents": {
            "geo-location": 0.997
        },
        "language_detected": "en",
        "sentiment": "neutral",
        "text": "what is my ip?",
        "parser": {
            "noun_chunks": [
                {
                    "dep": "attr",
                    "chunk": "what",
                    "root_text": "is",
                    "tag": "WP",
                    "pos": "PRON"
                },
                {
                    "dep": "nsubj",
                    "chunk": "my ip",
                    "root_text": "is",
                    "tag": "NN",
                    "pos": "NOUN"
                }
            ],
            "lemmas": [
                "what",
                "-PRON-",
                "ip",
                "?"
            ],
            "sentences": [
                "what is my ip?"
            ],
            "tokens": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "is",
                    "pos": "VERB",
                    "lemma": "be"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "entities": [],
            "other_keywords": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "parsed_tree": [
                {
                    "head_pos": 100,
                    "dep": "attr",
                    "text": "what",
                    "pos": "PRON",
                    "head_text": "is",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "ROOT",
                    "text": "is",
                    "pos": "VERB",
                    "head_text": "is",
                    "children": [
                        "what",
                        "ip",
                        "?"
                    ]
                },
                {
                    "head_pos": 92,
                    "dep": "poss",
                    "text": "my",
                    "pos": "DET",
                    "head_text": "ip",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "nsubj",
                    "text": "ip",
                    "pos": "NOUN",
                    "head_text": "is",
                    "children": [
                        "my"
                    ]
                },
                {
                    "head_pos": 100,
                    "dep": "punct",
                    "text": "?",
                    "pos": "PUNCT",
                    "head_text": "is",
                    "children": []
                }
            ],
            "lemma_list": [
                {
                    "lemma": "what",
                    "pos": "PRON",
                    "text": "what"
                },
                {
                    "lemma": "-PRON-",
                    "pos": "DET",
                    "text": "my"
                },
                {
                    "lemma": "ip",
                    "pos": "NOUN",
                    "text": "ip"
                },
                {
                    "lemma": "?",
                    "pos": "PUNCT",
                    "text": "?"
                }
            ]
        },
        "confidence": 0.997,
        "global_entities": [],
        "synonym_detected": false,
        "intent": "geo-location",
        "global_model": {
            "confidence": 0.8341319561004639,
            "intent": "what"
        }
    }
]

```

predictHack
-----------

The `app.ai.predictHack` method accepts a string representing a sentence/words and a bot ID as a second parameter. It returns the prediction of the given sentence/words.

### Syntax

    app.ai.predictHack(text, botId)

### parameters

#### text | `string`

A word or sentence to which we want the prediction.

#### botId | `String`

A string representing the list of bot IDs. eg. `x123456789`

### Return Value | `Promise`

Returns a promise. Promises resolve an object representing the result of the prediction.

### Example

```
{
        "core": false,
        "intents": {
            "geo-location": 0.997
        },
        "language_detected": "en",
        "sentiment": "neutral",
        "text": "what is my ip?",
        "parser": {
            "noun_chunks": [
                {
                    "dep": "attr",
                    "chunk": "what",
                    "root_text": "is",
                    "tag": "WP",
                    "pos": "PRON"
                },
                {
                    "dep": "nsubj",
                    "chunk": "my ip",
                    "root_text": "is",
                    "tag": "NN",
                    "pos": "NOUN"
                }
            ],
            "lemmas": [
                "what",
                "-PRON-",
                "ip",
                "?"
            ],
            "sentences": [
                "what is my ip?"
            ],
            "tokens": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "is",
                    "pos": "VERB",
                    "lemma": "be"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "entities": [],
            "other_keywords": [
                {
                    "text": "what",
                    "pos": "PRON",
                    "lemma": "what"
                },
                {
                    "text": "my",
                    "pos": "DET",
                    "lemma": "-PRON-"
                },
                {
                    "text": "ip",
                    "pos": "NOUN",
                    "lemma": "ip"
                },
                {
                    "text": "?",
                    "pos": "PUNCT",
                    "lemma": "?"
                }
            ],
            "parsed_tree": [
                {
                    "head_pos": 100,
                    "dep": "attr",
                    "text": "what",
                    "pos": "PRON",
                    "head_text": "is",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "ROOT",
                    "text": "is",
                    "pos": "VERB",
                    "head_text": "is",
                    "children": [
                        "what",
                        "ip",
                        "?"
                    ]
                },
                {
                    "head_pos": 92,
                    "dep": "poss",
                    "text": "my",
                    "pos": "DET",
                    "head_text": "ip",
                    "children": []
                },
                {
                    "head_pos": 100,
                    "dep": "nsubj",
                    "text": "ip",
                    "pos": "NOUN",
                    "head_text": "is",
                    "children": [
                        "my"
                    ]
                },
                {
                    "head_pos": 100,
                    "dep": "punct",
                    "text": "?",
                    "pos": "PUNCT",
                    "head_text": "is",
                    "children": []
                }
            ],
            "lemma_list": [
                {
                    "lemma": "what",
                    "pos": "PRON",
                    "text": "what"
                },
                {
                    "lemma": "-PRON-",
                    "pos": "DET",
                    "text": "my"
                },
                {
                    "lemma": "ip",
                    "pos": "NOUN",
                    "text": "ip"
                },
                {
                    "lemma": "?",
                    "pos": "PUNCT",
                    "text": "?"
                }
            ]
        },
        "confidence": 0.997,
        "global_entities": [],
        "synonym_detected": false,
        "intent": "geo-location",
        "global_model": {
            "confidence": 0.8341319561004639,
            "intent": "what"
        }
    }

```
nlp
---

The `app.ai.nlp` method accepts a string and returns the processed information of the string by the internal NLP engine.

### Syntax

app.ai.nlp(text)

### parameters

#### text | `string`

A word or sentence to which we want to process with NLP engine.

### Return Value | `Promise`

Returns a promise. Promises resolve an object representing the processed information of the string by the internal NLP engine.

### Example


{
    "noun_chunks": [
        {
            "dep": "attr",
            "chunk": "what",
            "root_text": "is",
            "tag": "WP",
            "pos": "PRON"
        },
        {
            "dep": "nsubj",
            "chunk": "my ip",
            "root_text": "is",
            "tag": "NN",
            "pos": "NOUN"
        }
    ],
    "lemmas": [
        "what",
        "-PRON-",
        "ip",
        "?"
    ],
    "sentences": [
        "what is my ip?"
    ],
    "tokens": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "is",
            "pos": "VERB",
            "lemma": "be"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "entities": [],
    "other_keywords": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "parsed_tree": [
        {
            "head_pos": 100,
            "dep": "attr",
            "text": "what",
            "pos": "PRON",
            "head_text": "is",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "ROOT",
            "text": "is",
            "pos": "VERB",
            "head_text": "is",
            "children": [
                "what",
                "ip",
                "?"
            ]
        },
        {
            "head_pos": 92,
            "dep": "poss",
            "text": "my",
            "pos": "DET",
            "head_text": "ip",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "nsubj",
            "text": "ip",
            "pos": "NOUN",
            "head_text": "is",
            "children": [
                "my"
            ]
        },
        {
            "head_pos": 100,
            "dep": "punct",
            "text": "?",
            "pos": "PUNCT",
            "head_text": "is",
            "children": []
        }
    ],
    "lemma_list": [
        {
            "lemma": "what",
            "pos": "PRON",
            "text": "what"
        },
        {
            "lemma": "-PRON-",
            "pos": "DET",
            "text": "my"
        },
        {
            "lemma": "ip",
            "pos": "NOUN",
            "text": "ip"
        },
        {
            "lemma": "?",
            "pos": "PUNCT",
            "text": "?"
        }
    ]
}

* * *

addTraining
-----------

The `app.ai.addTraining` method accepts text & intent name as parameters and adds the text under the user expressions of the specified intent. it returns an object contains the status and id of the added user expression.

### Syntax

app.ai.addTraining(text, intent)

### parameters

#### text | `string`

A word or sentence to which we want the prediction.

#### intent | `string`

A string representing the intent in the bot to which the current text to be added under user expressions.

### Return Value | `Promise`

Returns a promise. Promises resolve an object representing the status of addition.

### Example


app.ai.addTraining('what is my ip?','ip-list')
  .then(result => app.log(result))
  
// the output will look like

{
    "noun_chunks": [
        {
            "dep": "attr",
            "chunk": "what",
            "root_text": "is",
            "tag": "WP",
            "pos": "PRON"
        },
        {
            "dep": "nsubj",
            "chunk": "my ip",
            "root_text": "is",
            "tag": "NN",
            "pos": "NOUN"
        }
    ],
    "lemmas": [
        "what",
        "-PRON-",
        "ip",
        "?"
    ],
    "sentences": [
        "what is my ip?"
    ],
    "tokens": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "is",
            "pos": "VERB",
            "lemma": "be"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "entities": [],
    "other_keywords": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "parsed_tree": [
        {
            "head_pos": 100,
            "dep": "attr",
            "text": "what",
            "pos": "PRON",
            "head_text": "is",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "ROOT",
            "text": "is",
            "pos": "VERB",
            "head_text": "is",
            "children": [
                "what",
                "ip",
                "?"
            ]
        },
        {
            "head_pos": 92,
            "dep": "poss",
            "text": "my",
            "pos": "DET",
            "head_text": "ip",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "nsubj",
            "text": "ip",
            "pos": "NOUN",
            "head_text": "is",
            "children": [
                "my"
            ]
        },
        {
            "head_pos": 100,
            "dep": "punct",
            "text": "?",
            "pos": "PUNCT",
            "head_text": "is",
            "children": []
        }
    ],
    "lemma_list": [
        {
            "lemma": "what",
            "pos": "PRON",
            "text": "what"
        },
        {
            "lemma": "-PRON-",
            "pos": "DET",
            "text": "my"
        },
        {
            "lemma": "ip",
            "pos": "NOUN",
            "text": "ip"
        },
        {
            "lemma": "?",
            "pos": "PUNCT",
            "text": "?"
        }
    ]
}
addTraining
15 minutes ago
function (text, intent) {
        return new Promise(function (resolve, reject) {
            request.post({
                url: `${bpConfig.urls.ML}/add-training-internal`,
                qs: {
                    bot: bot
                },
                json: {
                    text: text,
                    intent: intent
                }
            }, (err, response, resp) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(resp);
                }
            });
        });
    }
predictHack
15 minutes ago
{
    "noun_chunks": [
        {
            "dep": "attr",
            "chunk": "what",
            "root_text": "is",
            "tag": "WP",
            "pos": "PRON"
        },
        {
            "dep": "nsubj",
            "chunk": "my ip",
            "root_text": "is",
            "tag": "NN",
            "pos": "NOUN"
        }
    ],
    "lemmas": [
        "what",
        "-PRON-",
        "ip",
        "?"
    ],
    "sentences": [
        "what is my ip?"
    ],
    "tokens": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "is",
            "pos": "VERB",
            "lemma": "be"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "entities": [],
    "other_keywords": [
        {
            "text": "what",
            "pos": "PRON",
            "lemma": "what"
        },
        {
            "text": "my",
            "pos": "DET",
            "lemma": "-PRON-"
        },
        {
            "text": "ip",
            "pos": "NOUN",
            "lemma": "ip"
        },
        {
            "text": "?",
            "pos": "PUNCT",
            "lemma": "?"
        }
    ],
    "parsed_tree": [
        {
            "head_pos": 100,
            "dep": "attr",
            "text": "what",
            "pos": "PRON",
            "head_text": "is",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "ROOT",
            "text": "is",
            "pos": "VERB",
            "head_text": "is",
            "children": [
                "what",
                "ip",
                "?"
            ]
        },
        {
            "head_pos": 92,
            "dep": "poss",
            "text": "my",
            "pos": "DET",
            "head_text": "ip",
            "children": []
        },
        {
            "head_pos": 100,
            "dep": "nsubj",
            "text": "ip",
            "pos": "NOUN",
            "head_text": "is",
            "children": [
                "my"
            ]
        },
        {
            "head_pos": 100,
            "dep": "punct",
            "text": "?",
            "pos": "PUNCT",
            "head_text": "is",
            "children": []
        }
    ],
    "lemma_list": [
        {
            "lemma": "what",
            "pos": "PRON",
            "text": "what"
        },
        {
            "lemma": "-PRON-",
            "pos": "DET",
            "text": "my"
        },
        {
            "lemma": "ip",
            "pos": "NOUN",
            "text": "ip"
        },
        {
            "lemma": "?",
            "pos": "PUNCT",
            "text": "?"
        }
    ]
}

* * *

trainIntents
------------

The `app.ai.trainIntents` method trains the ML model with the user expressions added to Journeys

### Syntax

app.ai.trainIntents()

### Return Value | `Promise`

Returns a promise. Promises resolve an object representing the status of the training.

### Example


app.ai.trainIntents()
  .then((status) => {
  app.log(status');})

// the output will look like
{
    "status": "started"
}

* * *

addToUnIdentifiedList
---------------------

The `app.ai.addToUnIdentifiedList` method adds given text to the unidentifed list of words of the current user of the bot. It accepts a text, userId, source, app.profile object and sessionID.

### Syntax

app.ai.addToUnIdentifiedList('praneth kumar reddy', '', app.source, app.profile, sessionId)

### Return Value | `Promise`

Returns a promise. Promises resolve an object representing the status of the addition of given text to the unidentified list.

### Example


app.ai.addToUnIdentifiedList('this is an unknown word', '', app.source, app.profile, sessionId)
 .then((status) => app.log(status));
 
// the output will look like

{
    "status": "success",
    "_id": "5e32a7*********45e"
}

---

title : app.translate
sidebar_label : app.translate

---

This object contains methods for translating a message to the target
language, the methods are `detectLanguageAndTranslate` and `translate`

## Methods

## detectLanguageAndTranslate

This method is used to translate the given message to the target
language specified. It uses google translate API

### Syntax

``` js
app.translate.detectLanguageAndTranslate(message, targetLanguage = 'en')
```

### Parameters

#### message \| `string`

The message to translate into the target language

#### example

 

 

``` java
Hi! How are you?
```

 

 

#### targetLanguage \| `optional`

This is the target language code in which language the message need to
be translated. This is optional. The default value is `en`

------------------------------------------------------------------------

## translate

This method also used to translate the given message to the target
language specified. It uses google translate API

### Syntax


``` js
app.translate.translate(message, language, callback)
```

### Parameters

#### message \| `string`

The message to translate into the target language

#### example


``` java
Hi! How are you?
```

#### language \| `object` or `string`

If `language` is a string, then it takes the source language as `en`,
and targetLanguage as `language` passed to the method.

If `language` is an object, then it takes the `from` as a source
language and `to` as a target language.

#### example


``` js
{
    "from" : "en",
    "to" : "hi"     //hindi code
}
or
"hi" //then default source language is 'en'
```

### Return Value

It returns `error` and `translatedText` via callback passed to the
method

### Example

``` js
let message = `Hi! How are you?`;
// let language= 'hi'; 
let language = {
    "from": "en",
    "to": "hi"
};
app.translate.translate(message, language, function (error, translatedText) {
    if(error){
      //deal with error
    }
    app.log(translatedText, 'Translated Text');
});

------------------------------------------------------------------------

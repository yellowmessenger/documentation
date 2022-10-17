---
title : IVR bots(for app platform)
sidebar_label : IVR (for app)
---

:::note
All the bots created after JULY 2022 operate on cloud. Refer to [this](/docs/platform_concepts/channelConfiguration/Ivr) article for the latest update.
:::


## PRI and SIP numbers

PRI is number used when user wants to call the bot
SIP number has more functionality comes with noise cancellation and can be used when bot calls the use

## Connect BOT to an IVR number

1. Navigate to old platform using link
[botplatform.io](https://app.yellowmessenger.com)
2. Use cookie chrome extensions like EditThisCookie or other to login
3. Copy and paste ym_xid cookie value  and refresh the bot it will login
4. Go to IVR setup and add phone number by prefixing +91 country code

![](https://cdn.yellowmessenger.com/JLKy793wPsAL1612444373769.png)

## Configure bot for IVR bot

The start point of IVR bot is the message “welcome“ which can be captured in the main function through main function :

```js
app.data.message // welcome
```

> It will in app.data.message when the user calls the bot the context of the IVR bot should be cleared since when the user again call the bot should not continue from the last endpoint
> Context can be cleared by this using code in the main function

```js
app.getContext() // get context in main app.context doesn't work in main function
    .then(ctx => {

        if (app.data && app.data.message == "welcome") {
            app.clearContext() //clear context
           }
        });
      
```

## Bot Voice Options 

```js
voiceOptions: {
                    'voice_id': 'male' // for male voice in wavelet, comment out if you want a female voice 
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                }
```

Bot voice options should be sent in app.start as follows -

```js
return app.start({
                voiceOptions: {
                    'voice_id': 'male'// for male voice in wavelet, comment out if you want a female voice
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",
                minConfidence: 0.6
            });
```

**Total Code in Main Function**

```js
app.getContext()
    .then(ctx => {

        if (app.data && app.data.message == "welcome") {
            app.clearContext()
            app.memory.set("otpCount",0)
            return app.start({
                voiceOptions: {
                    'voice_id': 'male',// for male voice in wavelet, comment out if you want a female voice                    'recording_max_duration': 2,
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",// use en if not needed any other language
                minConfidence: 0.6
            });
        }
        else {
            return app.start({
                voiceOptions: {
                    'voice_id': 'male',// for male voice in wavelet, comment out if you want a female voice                    'recording_max_duration': 2,
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",// use en if not needed any other language
                minConfidence: 0.6
            });
        }
    })
```

Train 'welcome' for default/initial journey

![](https://cdn.yellowmessenger.com/6u4HhK6tnD4U1612444738132.png)

## Voice Options 

Bot voice options and voice options are different. Voice options must be sent in app.data.message.

```js
app.sendTextMessage("<message>",
{
    'tts_engine': 'wavenet', // wave is google text to speach
    'text_type': "ssml", 
    'lang': 'en-GB', // language option
    'speed': 0.9,
    "options": { "capture_voice": false },
    "capture_dtmf": true,
    'disconnect': false // to disconnect call make it true
})
```

it can be intialised in main or child function

```js
app.CONNECT = {
    'tts_engine': 'wavenet',
    'text_type': "ssml",
    'lang': 'en-GB',
    'speed': 0.9,
    "options": { "capture_voice": false },
    "capture_dtmf": true,
    'disconnect': false
}
app.DISCONNECT = {
    'tts_engine': 'wavenet',
    'text_type': "ssml",
    'lang': 'en-GB',
    'speed': 0.9,
    "options": { "capture_voice": false },
    "capture_dtmf": true,
    'disconnect': true
}

app.getContext()
    .then(ctx => {

        if (app.data && app.data.message == "welcome") {
            app.clearContext()
            app.memory.set("otpCount",0)
            return app.start({
                voiceOptions: {
                    //'voice_id': 'male'
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",
                minConfidence: 0.6
            });
        }
        else {
            return app.start({
                voiceOptions: {
                    //'voice_id': 'male'
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",
                minConfidence: 0.6
            });
        }
    })
```

Usage in any function 

```js
// connecting call normal message
app.data.message("<message>",app.CONNECT)

// disconnecting call
app.data.message("<message>",app.DISCONNECT)
```

## Change Language

For changing bot speech-language should be passed in both voice options and bot voice options

```js

app.sendTextMessage(“<message>“,

{
    'tts_engine': 'wavenet',
    'text_type': "ssml",
    'lang': 'en-GB',
    'speed': 0.9,
    "options": { "capture_voice": false },
    "capture_dtmf": true,
    'disconnect': false
})

in main function - 

return app.start({
                voiceOptions: {
                    //'voice_id': 'male'
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",
                minConfidence: 0.6
            });

```

Final Main Function - 

```js


app.CONNECT = {
    'tts_engine': 'wavenet',
    'text_type': "ssml",
    'lang': 'en-GB',// send language options
    'speed': 0.9,
    "options": { "capture_voice": false },
    "capture_dtmf": true,
    'disconnect': false
}
app.DISCONNECT = {
    'tts_engine': 'wavenet',
    'text_type': "ssml",
    'lang': 'en-GB',// send language options
    'speed': 0.9,
    "options": { "capture_voice": false },
    "capture_dtmf": true,
    'disconnect': true
}

app.getContext()
    .then(ctx => {

        if (app.data && app.data.message == "welcome") {
            app.clearContext()
            app.memory.set("otpCount",0)
            return app.start({
                voiceOptions: {
                    //'voice_id': 'male'
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",
                minConfidence: 0.6
            });
        }
        else {
            return app.start({
                voiceOptions: {
                    //'voice_id': 'male'
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                },
                targetLanguage: "en-GB",// send language options
                minConfidence: 0.6
            });
        }
    })

app.sendTextMessage("<message>",
{
    'tts_engine': 'wavenet', // wave is google text to speach
    'text_type': "ssml", 
    'lang': 'en-GB', // language option
    'speed': 0.9,
    "options": { "capture_voice": true },
    //"capture_dtmf": true,
    'disconnect': false // to disconnect call make it true
})
```

Use this link to find supported languages and to test samples for code only use (en-code) en-US not en-US-Wavenet-D

https://cloud.google.com/text-to-speech

**NOTE : this segment in link takes some time to load please wait until full page is loaded**

![](https://cdn.yellowmessenger.com/fOnoy41uVvAx1612445154529.png)

## Custom Handler 
It doesn’t work if you use other language.

```js
 app.sendTextMessage("Please enter a valid 4 digit pin", app.CONNECT)
            .then(() => {
                resolve({ success: false }) // use success false
            })
        
```

## API for IVR Bot Testing

```js
curl --location --request POST 'https://app.yellowmessenger.com/integrations/voice/execute' \
--header 'Content-Type: application/json' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "from": "+918328485704",
    "to": "+918068402327",
    "message": "welcome",
    "language": "en"
}'
```

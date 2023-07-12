---
title : IVR for app
sidebar_label : IVR for app
---

:::note
All the bots created after July 2022 operate on the cloud. Refer to [this](/docs/platform_concepts/channelConfiguration/Ivr) article for the latest update.
:::

Interactive Voice Response (IVR) bots are designed to interact with users through the phone using audio instructions. IVR systems use pre-recorded or synthesized voice messages to gather information from callers. IVR bots can be used to collect and analyze data, provide callers with accurate information, and connect calls to relevant live agents.

There are two ways to connect users to a voice bot:

* PRI (Primary Rate Interface) - A PRI is the number used when the user wants to call the bot. Businesses can use PRI numbers to connect their phone system to an IVR bot. The IVR bot responds to incoming calls on the PRI number and instructs users through an automated menu system.

* SIP (Session Initiation Protocol) - A SIP  number has more functionality, comes with noise cancellation, and can be used when a bot calls the user. By configuring a SIP number, an IVR bot can interact with users, respond to incoming calls to collect input, and perform automated tasks.

## Connect bot to an IVR number

To connect a bot to an IVR number, follow these steps:

1. Navigate to
[botplatform.io](https://app.yellowmessenger.com)  platform and use cookie chrome extensions like `EditThisCookie` or other processes to login.
2. Copy and paste the `ym_xid` cookie value and click the refresh icon to login to the bot.
3. Go to IVR setup and add a phone number by prefixing +91 with the country code.

    ![](https://i.imgur.com/XsgcZBt.png)
    
:::note
* IVR setup is available only to Indian phone numbers. 
:::
    
## Configure IVR bot

* Voice bot gets initiated with a **welcome** message that is captured in the main function using `app.data.message`.  This will store the data when a user calls the bot. 

```js
app.data.message // welcome
```
* You can train **welcome** for default or initial flow.

  ![](https://cdn.yellowmessenger.com/6u4HhK6tnD4U1612444738132.png) 
* The same bot user can call the bot multiple times. 
You can choose to clear the data by identifying the previous conversation between the bot and the user by using 'app.clearContext'. 
After adding this, each call will be addressed as a new call. Use the sample code to configure voice bot on app: 

```json
app.getContext() // get context in main app.context doesn't work in main function
    .then(ctx => {

        if (app.data && app.data.message == "welcome") {
            app.clearContext() //clear context
           }
        });
      
```

## Options and customization to configure voice in app

### Bot Options 

```js
voiceOptions: {
                    'voice_id': 'male' // for male voice in wavelet, comment out if you want a female voice 
                    'recording_max_duration': 2,
                    'recording_silence_duration': 2,
                }
```

You need to send the bot's voice options through the app.Start as follows:: 

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

### Voice Options 

Bot voice options and human voice options are different. You need to send Voice options in app.data.message.

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

It can be initialised in the main or child function.

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

#### **Change bot's language**

For changing bot speech language, you need to pass both voice options and bot voice options.

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

Following is the final main function:

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

:::note
* Use this [link](https://cloud.google.com/text-to-speech) to find supported languages and to test samples of code. It is recommended to use only (en-code) en-US, not en-US-Wavenet-D.
* This segment in the link will take some time to load. Ensure that you wait until the full page is loaded.
:::

#### **Add custom handler **

The custom handler does not work if you use other language.

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
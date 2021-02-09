---
title: iOS Chat SDK
sidebar_label: iOS Chat SDK
---
## Setup

Clone the [repository](https://github.com/yellowmessenger/webview-sdk-ios) then add the following files in your xcode project by going to **File>Add Files to < Project-Name >** 

**1. YmSDK.swift**  
**2. YmEvents.swift**  
**3. YmBotPlugin.swift**  

Also add the the icons for mic button and close button in assets.

 

## Example
Example swift code to use the plugin
```js
//Add the following function in ViewController.swift
    func openWebView(_ sender: Any) {
        //Set Configuration data
        let config:[String:String] = ["BotId" : "<BOT-ID>"]

        //Initialize the plugin with config values.
        YmBotPlugin.shared.initPlugin(config: config) //Step 1

        //Set EventListener to handle bot events.
        YmBotPlugin.shared.events.listenTo(eventName: "BotEvent", action: {
            (information:Any?) in
            if let info = information as? Dictionary<String, String> {
                print("Closing Bot")
                //To stop chatbot use the following function
                YmBotPlugin.shared.stopChatBot() //Step 5
                switch info["code"] {
                case "login-user":
                    //Each event has two keys, "code" and "data". Use info["code"] or info["data"] to access the values
                    //The following code restarts the chatbot with different payload values.
                    let payloads:[String:String] = ["UserState":"LoggedIn"]
                    YmBotPlugin.shared.setPayload(payload: payloads)
                    YmBotPlugin.shared.startChatBot(view: self.view)
                //Add other cases acording to need.
                default:
                    print("Unknown Event")
                }
            }
        }) // Step 2
        
        //Setting payload values
        let payloads:[String:String] = ["UserState":"Anonymous"]

        //Pass payload to the bot
        YmBotPlugin.shared.setPayload(payload: payloads) //Step 3

        //Start the chatbot webview
        YmBotPlugin.shared.startChatBot(view: self.view) //Step 4
    }
```

### Configuration References
You can set the following configuration on the bot
```js
"BotId" : "<BOT_ID_FROM_YM>",
"EnableHistory" : "<true or false as String>",
"EnableSpeech" : "<true or false as String>"
```

### Payload References
You can set payload values according to requirement. Following are some sample payloads that you can set.
```js
"userFullName":"<User-Name>", 
"token":"<Access-Token>"
```

## Features [BETA]

To use the voice first feature, add the following to your info.plist file if the permissions are not added already.

```js
<key>NSMicrophoneUsageDescription</key>  
<string>Your microphone will be used to record your speech when you use the Voice feature.</string>
<key>NSSpeechRecognitionUsageDescription</key>  
<string>Speech recognition will be used to determine which words you speak into this device&apos;s microphone.</string>
```

Then add the following key to configuration: 
```js
let config:[String:String] = ["BotId" : "<BOT-ID>", "EnableSpeech":"true"]
```

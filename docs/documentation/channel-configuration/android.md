---
title: Android Chat SDK
sidebar_label: Android Chat SDK
---

 Yellow Messenger Webview SDK for Android

### Configuration

App level gradle file 

```js
allprojects {
    repositories {
        jcenter()
        // Add these two lines 
        maven { url "https://jitpack.io" }
        maven { url "https://oss.sonatype.org/content/repositories/snapshots/" }
    }
}
...
...
...
dependencies {
    ...
    ...
	   implementation 'com.github.yellowmessenger:webviewsdk:0.3.4'


}
```

Android Application class Example

```js
import com.example.ymwebview.BotEventListener;
import com.example.ymwebview.YMBotPlugin;
import com.example.ymwebview.models.BotEventsModel;

public class MainActivity extends AppCompatActivity {
    
    @Override
    public void onCreate() {
        super.onCreate();
        //Configuration data
        HashMap<String, Object> configurations = new HashMap<>();
        String configData;
        //Payload attributes
        HashMap<String, Object> payloadData = new HashMap<>();
        //Important
        payloadData.put("platform","Android-App");
        
        payloadData.put("UserId","<Some-Unique-Identifier>");
        payloadData.put("access-token","");
        payloadData.put("refresh-token","");
        payloadData.put("mobile-number","");
        payloadData.put("journey-slug","");
        payloadData.put("user-state","");

        //You can add other payload attributes in the same format.
        
        //Initialize the bot
        YMBotPlugin pluginYM =  YMBotPlugin.getInstance();

        //Setting Config data.
        configurations.put("botID", botId); // Required.
        configurations.put("enableSpeech", "false"); // optional: to enable support for speech recognition.
        configurations.put("enableHistory", "true"); // optional: shows previous chat history.
        configurations.put("actionBarColor", Integer.toString(actionBarColor)); // optional: customise actionBar color
        configurations.put("statusBarColor", Integer.toString(statusBarColor)); // optional: customise statusBar color
        configurations.put("hideCameraForUpload", "true"); // optional: Hide camera option during file upload.
        configurations.put("disableCloseButton", "true"); // optional: disable close chatbot button.
        configData = YMBotPlugin.mapToString(configurations);




        pluginYM.init(configData, new BotEventListener() {
            @Override
            public void onSuccess(BotEventsModel botEvent) {
                Log.d("EventListener", "Event Recieved: "+ botEvent.getCode());
                switch (botEvent.getCode()){
                    case "even-name-1" : break;
                    case "even-name-2" : break;
                    case "even-name-3" : break;
                }
            }

            @Override
            public void onFailure(String error) {
            }
        });
        //Send Payload Data
        pluginYM.setPayload(payloadData);
        
        //To start chabot call the pluginYm.startChatBot() method.
         FloatingActionButton fab = findViewById(R.id.fab);
        fab.setOnClickListener(view -> {
           //Starting the bot activity
           pluginYM.startChatBot(this);
        });
    }
}
```

## Features

The SDK takes in the botId as a input configuration when the plugin is initialised. to change the default BotId, use the following method.

```js
pluginYM.setBotId("<NEW-BOT-ID>");
```

## Note

If facing problem in release build, add the following configuration in the app's proguard-rules.pro file.

```js
-keep public class com.example.ymwebview.** {
   *;
}
```

## Video Tutorial 

> (https://drive.google.com/file/d/1KYDUy0I-yIDwSaew6Imb3xs0dGw0Jh-K/view?usp=sharing)

## GitHub Repo 

> https://github.com/yellowmessenger/webviewsdk

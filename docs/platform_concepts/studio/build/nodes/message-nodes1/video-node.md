---
title: Video node
sidebar_label: Video 
---

Video node allows you to display MP4 static and dynamic video files directly in the conversation flow.

This node is used to show relevant video content such as tutorials, demos, or promotional clips.

**Limitations**

* Video size should be less than 50 MB.
* This node does not support Youtube links, but you can upload any commonly available video links. For example, `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`.

### How to configure Static video

To add the static video, follow these steps:

1. Drag and drop the video node into the flow editor at the desired conversation point.

    ![](https://i.imgur.com/HzC9sRO.png)

2. Select and upload the video from your local device to display it to users.

3. To customize this node, click the **Tools** option. 

  <img src="https://imgur.com/d6kzwMl.png" alt="drawing" width="70%"/>

4. Choose the channel on the left pannel and enable the following options based on your preference and click **Save**. By default, the video will be downloadable, and controls will be shown to users, allowing them to pause, fast forward, maximize and set playback speed.


   <img src="https://imgur.com/iQx0Z1C.png" alt="drawing" width="80%"/>

| Feature         | Description                                                                                          |
|-----------------|------------------------------------------------------------------------------------------------------|
| Hide Input      | Hides the input field for the user, preventing responses to the video node.                         |
| Hide Home Button | Hides the home button for the user.                                                                 |
| Thumbnail       | Upload a thumbnail image for the video.                                                              |
| AutoPlay        | Video automatically plays without user intervention.                                                 |
| Muted           | Video will be muted while being played.                                                           |
| Loop            | Video will play in a loop.                                                                          |
| Show Controls   | Display controls such as pause, fast forward, and mute for user interaction with the video.          |
| Downloadable    | Allows users to download the video.                                                                  |

### How to configure dynamic video

You can use Video node to display dynamic videos (which keeps changing) based on a user’s selection. For instance, when a user requests a tutorial for a specific topic, the AI-agent fetches and displays the relevant video tutorial.

To display a dynamic video, follow these steps:

1. Go to **Functions** and add the code to dynamically fetch the video.

   ![](https://i.imgur.com/njMevf7.png)

**Dynamic format**

```c
const videoVar = {
  "url": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  "caption": { 
    "type": "text",
    "value": "video caption"
  }
}
```
or 

```
const videoVar = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
```

2. Add a Function node to the flow editor.

   <img  src="https://i.imgur.com/UKXka6I.png"  alt="drawing"  width="50%"/>
 
2. Select the function name and select a variable to store the response.
 
   ![](https://i.imgur.com/U0kyElT.png)

3. Add a Video node and select the variable to display the dynamic video.

     <img  src="https://i.imgur.com/xXwioa1.png"  alt="drawing"  width="50%"/>

Refer to the following GIF to see how the Video node works.

   ![](https://imgur.com/WjOVbhu.gif)
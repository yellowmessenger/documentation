---
title: Send data to API 
sidebar_label : Send data to API
---
In this article, you will learn -
1. [How to send data from bot flow to an API](#1)
2. [How to pass URLs in an API parameter](#2)
3. [How to send JSON object in API parameter](#3)

---
## <a name="1"></a>1. Send data to API from a bot flow
Once you configure an API as mentioned in [add a new API](./add-api), you can pass all the input parameter values in the bot flow where you want to consume it. These are usually dynamic values that you can capture directly from the user conversation. 
1. To send a dynamic data from a flow, rename the parameters with {{{parameterName}}} for the API in **Studio** > **API** and save it.

![Create new API](https://cdn.yellowmessenger.com/UOsO4KlWdRZf1623865589545.png)

3. Open the flow where you wish to send data using the user's input.
4. Add the API actions node in the flow.

![](https://i.imgur.com/AfLDOBK.png)

5. Select the API you wish to add.

![](https://i.imgur.com/iSBQmEu.png)

6. Add the dynamic parameter fields (such as authentication, email, token, name etc. as per the API).
7. Select a value ([transformation function](https://docs.yellow.ai/docs/platform_concepts/studio/api/transformation-function)) in **Parse API response** to extract a part of API response before storing.

8. Test the API to ensure it is working as desired.

![](https://i.imgur.com/Qu6rfqB.png)

9.  Use **Store Response in** to store the response in a variable to access it.
---  

## <a name="2"></a>2. Use base64 URL conversion for files
In cases like uploading an image, video, or any other file formats, you can convert images into a readable string that can be used or transferred anywhere. It is a common practice to upload files through URL through Base64 encoding.

Use the following code inside a body/params -

| Pass URL  | Format |
|-- | --|
Directly | $$tobase64{url}
Through variable | $$tobase64{{{{url}}}

![](https://i.imgur.com/SRHt8OM.png)


## <a name="3"></a>3. Pass JSON in Array/Object variable

You need to pass the JSON file or the details to be entered as an array/object.

For example, in the below screenshot Details_1 can also be written as Details_2 by storing array details in array_details variable.
![](https://i.imgur.com/3aY0MXY.png)

--- 

#### What next?
> * [Know how to receive data from API response](receive-data.md)
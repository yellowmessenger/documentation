---
title: Sending data to an API
sidebar_label : Sending dynamic data
---

## 1. How to Send Data to an API? 

1. To send a dynamic data from an journey, rename the parameters with {{{parametername}}} in the API.

![Create new API](https://cdn.yellowmessenger.com/UOsO4KlWdRZf1623865589545.png)

2. Click the **Save** button on the bottom left corner for the changes to be reflected. 
3. Open the respective journey/flow you wish to send data from users input.
4. Add the API actions node in the journey.

![](https://i.imgur.com/AfLDOBK.png)


5. Select the API you wish to add. 

![](https://i.imgur.com/iSBQmEu.png)

6. Add the dynamic parameter fields (authentication, email, token, name etc. as per the API). 

7. Select a value ([transformation function](https://docs.yellow.ai/docs/platform_concepts/studio/api/transformation-function)) in **Parse API response** to extract a part of API response before storing.


8. Test the API if required.

![](https://i.imgur.com/Qu6rfqB.png)


9. **Store Response in** a variable to access it.



## 2. File conversion from URL to base64 

Use the following code inside a Body/ Params-  

* To pass a URL: $$tobase64{url}
* To pass a Variable containing URL: $$tobase64{{{{url}}}

![](https://i.imgur.com/SRHt8OM.png)


## 3. Pass JSON as Array/Object Variable

The JSON file or the details to be entered can be passed as an array/object. 
For example, in the below screenshot Details_1 can also be written as Details_2 by storing array details on array_details variable. 

![](https://i.imgur.com/3aY0MXY.png)

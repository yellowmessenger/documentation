---
title: Location node
sidebar_label: Location
---

Location node allows you to ask, validate, and store a user's location within the conversation. It fetches  relevant location details, such as city, state, and postal code, and saves them in a structured format for further use in the conversation.

You can either manually enter location details (such as city or postal code) or use the **Share location** button, which allows users to share current GPS-based location.

Once validated, the data is stored in a variable in the following format:

```c
{
  "userMessage": "",
  "coordinates": { "lat": "", "lng": "" },
  "fullAddress": "",
  "city": "",
  "state": "",
  "country": "",
  "postalCode": ""
}
```


You can use the Location node when you want to:
* Gather precise user location to offer location-based services like delivery, navigation, or event recommendations.
 **Example**: 
  > AI-agent: Please share your delivery address or current location.
  User: Shares location via the Share location button.
  AI-agent: "Got it! We'll deliver to your address."
* Store and validate location inputs from users for later use in the conversation. For example, lets say that you have stored the user response in object type variable named "address", you can fetch pin code through : `variables.address.postalcode` and the City code through: `variables.address.city`.

**Supported Input types**:


|Input Type|User Input|Accepted/Not Accepted as a valid location|Pincode processed by the platform|City processed by the platform
|------|------|-------|------|---------|
|Only Pincode |800007|Accepted|800007|-
|City+ Pincode|Patna 800007|Accepted|800007|Patna
|City+ wrong pincode|Patna 110007|Accepted (with corrected Pin code)|800001 (Pincode will be corrected by the platform)|Patna
|City + wrong format pin code|Patna 80007|Accepted (with corrected pin code)|800001 (Pincode will be corrected by platform)|Patna
|Only Address (without city and pin)|Hauz Khas|Accepted|110016 (correct)| Delhi|

**Configure location node**

To configure location node, follow these steps:

1. Drag and drop the location node in the flow editor where you want to share the location.

   <img  src="https://i.imgur.com/Y9FdCuP.png"  alt="drawing"  width="80%"/>
   
2. Enter a message to prompt the user to share their location (for example, "Please share your delivery location").

3. By default, the **Share your location** button is added. To customize the button, click **Configure buttons**, to make your changes, then click **Save all changes**. If users need to manually enter their address , then click **Delete button**.

   <img  src="https://i.imgur.com/EyNFK7X.png"  alt="drawing"  width="80%"/>
   
4. Enable **Open maps while sharing location** to allow users to view maps while sharing their location.

5. In the **If validation fails** field, enter a message to display when the user’s location is not correct (for example, "Sorry, we couldn't validate your location. Please try again").

6. Under **Response**, specify the required fields (for example, city, postal code, country). Validation is passed if the specified fields are successfully extracted, even if users provide partial information.

**Restrict location sharing to a specific country**

You can restrict location sharing to a specific country to prevent users from sharing locations outside the selected region.

To restrict the location sharing:

1. Enable the **Restrict to country** option in the Location node.

     <img  src="https://i.imgur.com/e1eBIug.png"  alt="drawing"  width="60%"/>

2. Select the country for which you want to restrict sharing the location.

3. Enter the relevant pin codes to further restrict sharing to specific areas.

     <img  src="https://i.imgur.com/P6XlOSg.png"  alt="drawing"  width="60%"/>
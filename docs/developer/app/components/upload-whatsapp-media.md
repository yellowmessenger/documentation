---
title: app.uploadWhatsappMedia
sidebar_label: app.uploadWhatsappMedia
---

This function uploads the media to whatsapp media and media id is returned that can shared multiple times in that whatsapp number linked bot
​

## Input Parameters
 Object:
 
     url (MEDIAL_URL)

     number (WHATSAPP_NUMBER)

## Output Parameters
 Returns the MEDIA ID

## Example
``` js
app.uploadWhatsappMedia({
    url: "MEDIA_LINK",
    number: "WHATSAPP_NUMBER"
}).then(mediaId => {
    app.log(mediaId, "MEDIA ID");
    // output example -> 74a42b31-a35f-40ad-a04d-3554a79b0634
}).catch(error => {
    app.log(error, "ERROR");
});
```

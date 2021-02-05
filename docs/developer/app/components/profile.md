---
title: app.profile
sidebar_label: app.profile
---

This object contains all about the user data i.e. userAgent, payload (anything passed using ym.payload)

The Update Profile functionality is used when we have to add some parameters to user profile

Most of the information is stored in app.profile is -

1. Ip
1. Timezone, country_code, latitude, longitude, region, country, city,
1. Device type, os, browser
1. UserId to uniquely identify the user
1. UTM parameters (https://en.wikipedia.org/wiki/UTM_parameters)
1. Name: Anonymous unique name

Typical app.profile object looks like this

```js
{
    "userAgent": {
        "browser": "Chrome",
        "os": "OS X",
        "platform": "Apple Mac",
        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
        "device": "Desktop"
    },
    "city": "Bangalore",
    "country": "India",
    "region": "Karnataka",
    "longitude": "77.603290",
    "latitude": "12.976230",
    "end_ip": 736141311,
    "value": "560018",
    "country_code": "IN",
    "start_ip": 736140288,
    "timezone": "+05:30",
    "ip": "43.224.157.81",
    "userId": null,
    "userToken": null,
    "name": "Nervous Destruction",
    "utm_source": null,
    "utm_campaign": null,
    "utm_medium": null,
    "utm_term": null,
    "utm_content": null,
}
```

## Objects

userAgent - This object contains about the user browser, device, platform, os, and source

```js
"userAgent": {
        "browser": "Chrome",
        "os": "OS X",
        "platform": "Apple Mac",
        "source": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36",
        "device": "Desktop"
},
```

## Properties

city | string - *Has the value user city name*

> "city": "Bangalore"

country | string - *Has the value of user country name*

> "country": "India"

## More Properties

It has the following properties along with the above

1. region
1. longitude
1. latitude
1. end_ip
1. value
1. country_code
1. start_ip
1. timezone
1. ip
1. userId
1. userToken
1. name (Anonymous unique name )
1. utm_source
1. utm_campaign
1. utm_medium
1. utm_content
1. utm_term

## Store Values

We can also store values in app.profile object as follows:

```js
app.profile.variable_name = varible_value;
//example app.profile.mobileNum = '9876543210';
app.updateProfile(); //call this method to update profile object
```
---
title: app.data
sidebar_label: app.data
---

Object which holds the current user’s typed message, uploaded file or any event triggered in the app.

If bot receives user's message, the app.data will be
```javascript
{
    "message": "hello!"
}
```

If bot receives an image, the app.data will be
```javascript
{
    "image": "https://cdn.yellowmessenger.com/H79Mp47********.png"
}
```

If bot receives a file, the app.data will be
```javascript
{
    "file": "https://cdn.yellowmessenger.com/Erz22x********.zip"
}
```

If bot receives an event, the app.data will be
```javascript
{
    "event": {
        "code": "event_code",
        "data": "some_value"
    }
}
```

> Data can be anything that is attached to the event by the source which is triggering the event.
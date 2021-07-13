---
title: Create and access variables in UI
sidebar_label : Create and access journey variables in UI
---

### How to create a journey variable

You can create journey variables using below option from UI. Variables are nothing but a way to store data that can vary/is not fixed.
![](https://i.imgur.com/rQFoICf.gif)

### How to access a journey variable

You can access a journey variable inside any node using this notation `{{variables.variable_name}}`
So for the variable you just created above, you can access using {{variables.category}}

### Advanced example - accessing variable fields and index

Above was very simple, but often, in this example in [API action node](https://docs.yellowmessenger.com/docs/documentation/concepts/response-types-action-logic#api), the response you store is not a simple string or value.

Consider following response from a weather API

```
{
  "coord": {
    "lon": 77.2167,
    "lat": 28.6667
  },
  "weather": [
    {
      "id": 761,
      "main": "Dust",
      "description": "dust",
      "icon": "50d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 32.54,
    "feels_like": 30.55,
    "temp_min": 32,
    "temp_max": 33,
    "pressure": 1002,
    "humidity": 21
  },
  "visibility": 3500,
  "wind": {
    "speed": 3.09,
    "deg": 260,
    "gust": 8.23
  },
  "clouds": {
    "all": 0
  },
  "dt": 1617278187,
  "sys": {
    "type": 1,
    "id": 9161,
    "country": "IN",
    "sunrise": 1617237667,
    "sunset": 1617282517
  },
  "timezone": 19800,
  "id": 1273294,
  "name": "Delhi",
  "cod": 200
}
```

* **To access any fields of this you can simply do {{variables.variable_name.field_name}} and this can go upto fields of fields.**

For example: to access temp in above, {{variables.API_var.main.temp}} can be used. 

* **You can also access array values using keys.** 
To access weather description in above, you can see it's inside an array [ ] and is the first [0th index] value of array. 
{{variables.API_var.weather.0.description}} will be used. 


---
title: Validate user input
sidebar_label : Validate User Input
---
### How to validate Location, Name, Phone, Email or QR?
Once user has submitted an input, bot developers need to validate the input to make sure correct input is provided. Yellow Messenger provides various input validators out of the box. Such as:

- Phone
- Name
- Location
- Email
- QR


1.  Add a `Question` message, by clicking on `+` in the Studio.

![Add Question](https://cdn.yellowmessenger.com/2iqvFnDJ0y6z1616737659070.png)

2. Add question and message name. Under the response section, select `INPUT VALIDATIONS`. Here you can select **Name, Phone, Location, Email or QR** according to your requirment. 

![Input Validations](https://cdn.yellowmessenger.com/DjTUS1TWyFOk1616736966904.png)

3. Add a message to alert the user if validation fails. 

![Validation fails alert message](https://cdn.yellowmessenger.com/oZLBYob9TuG21616737676314.png)


### How to validate user input using Regex?

1.  Add a `Question` message, by clicking on `+` in the Studio.

![Add Question](https://cdn.yellowmessenger.com/2iqvFnDJ0y6z1616737659070.png)

2. Add question and message name. Under the response section, select `INPUT VALIDATIONS`. Here select `Regex`. Under the `Type` dropdown menu, Regex for Email, Mobile, Pin code are already available or you can use your own Regex.

![Input Validations - Regex](https://cdn.yellowmessenger.com/v5vV7pf7gqc11616738803100.png)

3. Add `Regex` as well as a message which will be displayed incase validation fails. It's also a best practice to test the regex using a test string. To know more about Regex checkout https://regexr.com.

![Regex](https://cdn.yellowmessenger.com/UimYEmLnVCqt1616738835760.png)
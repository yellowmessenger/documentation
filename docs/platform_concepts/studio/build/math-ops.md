---
title: Math operations
sidebar_label: Math ops
---

Our code section enables us to perform various types of mathematical operations in each session(that is, the conversation between the end user and the bot). 


## Use-cases
To understand the math operations, consider the following use-cases: 
1. [Converting user input from minutes to seconds.](#m2s)
2. [Calculating the date 45 days before the current date.](#dyh)

### <a name="m2s"></a> 1. Minutes to seconds

* Create a flow to take **Number of minutes** as an input and store it in a variable. 
![](https://i.imgur.com/8TSxUNc.png)

* Take the input from the user for the number of minutes (stored in pizzaMin)
![](https://i.imgur.com/uqfI60v.png)

* Call the variable in the function using the format shared below
> let minutesTaken = data.variables.pizzaMin {{**data.variables.variableName**}}

```
return new Promise(resolve => {
    let minutesTaken = data.variables.pizzaMin;
    let secondsTaken = minutesTaken * 60;
    let stringSeconds = secondsTaken.toString();
    resolve(stringSeconds);
  });                          
```

* Convert the string into an integer using parseInt().
* Perform a regular mathematical operation.
* number of seconds = number of minutes x 60
* Convert it back into a string using toString()

![](https://i.imgur.com/Y68T3s3.png)
* resolve() the value and assign a variable in the function node.





### <a name="dyh"></a> 2. To calculate 45 days before the present date

1. Create a flow that uses the `{{date}}` object in the variables section which shares the present date, month, year and other details, using the Variables node.
```
{
    //Date object
    
    "timestamp": "Wed, 28 Jul 2022 05:04:18 GMT",
    "year": 2022,
    "month": 7,
    "date": 28,
    "day": "Thursday",
    "hour": 5,
    "minute": 4
}

```
![](https://i.imgur.com/o4DSX2B.png)

3. Assign the timestamp as shown below and run a function to calculate 45 days before the present date.
![](https://i.imgur.com/UUkUjEU.png)

4. Use the variable `bookingDate` inside our scheduleBooking() function.

```
return new Promise(resolve => {
    let bookingDate = data.variables.bookingDate;
    let dt = new Date(bookingDate);

    dt.setDate(dt.getDate() - 45);
    console.log("Final Timestamp ---> ", dt.toLocaleString());

    let pdate = dt.toLocaleString()
    console.log(pdate,"PDATE IS --->");
    const myArraydate = pdate.split(",");
    const myArray = myArraydate[0].split("/");
    let newDate = myArray[1] + "/" + myArray[0] + "/" + myArray[2]
    data.variables.bookingDate = newDate;

    resolve(newDate);
});    
```

5. resolve() the data back into the bookingDate variable in the function itself
![](https://i.imgur.com/KwMGBFu.png)


## Output
The text node first prints the current timestamp and the second message is exactly 45 days from the present date.

![](https://i.imgur.com/iPAqfeC.png)



> You can visit our [community](https://community.yellow.ai/) and share your ideas with fellow bot builders!!

Happy bot building!!
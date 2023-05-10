---
sidebar_label: View user details
title: View user details
---


User 360 lets you view the complete details of a user including user properties, tags, user events, and segments. You can use the Filter option to fetch users based on a certain condition, especially when the user base is large.

## Customise User 360 table

The order of user properties can vary based on the specific context. By organizing user properties in a logical and consistent way, organizations can better understand and make sense of their user data. You can completely customise the fields that you want to see in the Users table and order the fields in the way you want.

For example, by having identification information at the top of the list, it becomes easier to quickly access a user's basic contact details.

To customise the User 360 table:

1. On the **User 360** page, click **User properties**.

   ![](https://i.imgur.com/BOUV1hq.png)

2. In **Select properties** (left pane), select the properties that you want to see in the User 360 table.
3. In **Arrange your properties** (right pane), drag a property to the required position.

   <img src="https://i.imgur.com/Eyk5uce.gif" width="60%"/>

4. Click **Save**. This action will save your preference and reloads the table to display your new preference.

## Filter users

To see details of an existing user, follow these steps:

1. On the User 360 home page, navigate to the user whose details you want to see.
   
    ![](https://i.imgur.com/2bgbNTL.png)

2. If the user list is long, use **Filters** to show a specific set of records from the entire user base.
3. In **Conditions**, define the condition by which you want to filter users.

   ![](https://i.imgur.com/Qkqryav.png)

You can see three boxes that correspond to {parameter}{operator}{value}.

* **Parameter**: The user property that you want to use to filter records (first box).
* **Operator**: The condition that you want to define. It contains `Is known`, `Is not known`, `Is`, `Isn't`, `Contains`, and `Does not contain`. These values might differ based on the parameter selected.
* **Value**: The value of the expression. This might not apply to all operators. For example, firstName Is Tom, phone is known, and emailOptin is true.
3. Use **+** to evaluate `or` conditions. For example, the condition `firstname is tom` + `sam` fetches users whose first name is either Tom or Sam.

      ![](https://i.imgur.com/cLBmKxf.png)
   
4. Use **+ Add condition** to evaluate multiple conditions (`and`). For example, the condition `gender is Male` and `phoneNumber is known` fetches all male users whose phone number is available in User 360, `emailOptIn is false` fetches all users who have opted out from emails.
   
   ![](https://i.imgur.com/kgMgHkw.png)


  
5. Click **Apply**. You will see the filtered user list.
   
   ![](https://i.imgur.com/Phz6GeH.png)


## View user card

6. From the users list, click on the user that you want to see.

   ![](https://i.imgur.com/DZwlscG.png)

See the following table for descriptions of each field in the User details card.

Field | Description
----- | -----------
Profile | Shows the user name, user ID, and the date when the record was created. You can also modify the user details using the **Edit** icon.
Tags | Shows the label(s) associated with the user. You can use **+ Add tags** to add more tags or remove existing tags.
Segments | Shows all the segments associated with the user.
User properties | Shows all the user property details. <br/>Use the Search box to fetch a specific user property.![](https://i.imgur.com/EyVb1j2.png)
User events | Shows the break up of events triggered for the user. You can see details such as events triggered for each day, event name, summary of changes, and complete details of the changes in the user record. ![](https://i.imgur.com/ANSvIeb.png) <br/> It also shows the timeline of [System events](https://docs.yellow.ai/docs/platform_concepts/studio/events/event-hub#7-user-360-events-system-events) and User events, and the recent bot channel used by the user. ![](https://i.imgur.com/sagpYeW.png)


   
***
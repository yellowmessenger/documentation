---
title: Retrieving Session Data from the Data Explorer 
sidebar_label : Retrive session data  
---

This guide explains how to retrieve data from **Insights >  Data Explorer** within the **User Engagement Events** table.

![image](https://hackmd.io/_uploads/Bkdm-kbnC.png)


---------

## User-session data for a specific date

1. Filter the Timestamp.
2. Filter the **Event** as *user-session*.
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfcUS0e3jwOzi0sLwktak6xAcvwQU3hrsayY1_34zYd9bMV6iZ6p1NdUpFaB-zflKaZz3udVJhmBmny26xe4_pf2Ers79RCRSgXzSu4PQPudVPqSgR0AyL0g4_vfYtzKRbqEVkHWHJbLoUoYBS0831ommkg?key=7tUVeJ9bRafmzQqDuh5NvQ)**
3. Click **Apply** to view the user-session data. This will display details such as User IDs, chat URLs, and session IDs.
**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdXjpKtOF3iOvpII7ujEJq1JjoQ6Z2Av9ySn5Bkd3iNeF8fOB3phYJBz1hYk--vPeGiQ903aCingvYW_a9W8w58NLrcrdgWt3sLe0adxlVw1s6fSMBsUacEntFlWReKgKLHdqqs9OOmoih4ah6P62Fbpjwx?key=7tUVeJ9bRafmzQqDuh5NvQ)**

--------

## Count User-Sessions


1. Click Summarize. Choose Summarize by count.
2. Set Timestamp by day/week/month.


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfOqzmwVfdS_zMMCX5bLk7JAEU5T_sXz-bRbrptrbR0ZuS2knuJ6Yfy-POU5y-jw19oENXzFcJBzMNZPKpDX1Do-825EE_4mu8GVpSRJVamB_6_FqjOPx6qP6fa4f44wsejHjw-v8A6G6FvnWZiHWnzk9U?key=7tUVeJ9bRafmzQqDuh5NvQ)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd-bJsLuvBHxLyL1TvOb7FBzIkjIGwtvRomQXKOKXgK7ngfJtczPn0zzUyJnEsI-Yce43P4HhVcYyzo4UpnH3BV-uEf0Qx4nOWn_GIx6sJ_9ZR4_Isgr7VGWTqYSyS5SNWbe8KmSq9rxOEfl87ccNrXvUOD?key=7tUVeJ9bRafmzQqDuh5NvQ)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeeoqfn6CLVSAF9fYjWnnfkg4GLbeBTFSpaRfurtTPbv3DXI5yFIgD9bn8yX3nCXo6W0fZt3xqM_Zlwp_AuqyFXtcNYT4MDNDLKLkapz3WWZmZ1GyIUe-KJzlgEjOLdE9_Aui5fbIZSTXuQMQQxOcDpCRRE?key=7tUVeJ9bRafmzQqDuh5NvQ)**

-----

## Access Agent-Session Data

1. Filter the Timestamp.
2. Select the **Event** as *agent-session*.
3. Set **Session ID** as *not empty*.


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeIVO6uwDsuZbGnnIF8YTdX1drM2lSwNyKG9zki-yRta22yckV6ipNlci-WiImVbrULy7SV9uKctWvM_mh5e1rxBNGz5dlx-IGEyG9H2lDqwcdFBNhq4fO1lEDCJN1PXAl-I7T5y8SDjeNZnxdhMfSbtwXw?key=7tUVeJ9bRafmzQqDuh5NvQ)**


**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcogOC5E4x7m-QYhgY64M9uLr-DiWDcrQI50BuoUluS3CbQ9rzSG-GsxNkk8sd9L4SyyPj1B8gWN5Hn3-t7j70wsu7atQDghYghQzKl0ikCRqu1NYQXYwgzE5BAOxB9VWFtq_edb9SwWFLIgFnWNqvWOzwx?key=7tUVeJ9bRafmzQqDuh5NvQ)**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcRESQR4Vq92MpExd8k_Xkn6ZWgu717oCrT7W13jLP3hq2KmEhxymY23kkQ2HdsVzDxGF-Fs3GACNLsaW7A6ZIg4CiLrpL2Q-2fTMsoHXxtPiTb7RMkITTAhNpGSNsiiP-F-Of84D0WJ02pn_9lzvPCHgA?key=7tUVeJ9bRafmzQqDuh5NvQ)**



--------

## Calculate bot sessions

To calculate bot sessions, subtract agent-sessions from total user-sessions:

```
Bot Sessions = Total Sessions (User-Sessions) - Agent-Sessions
```


---
title: User Journey Visualisation
sidebar_label: User Journey
---


## Introduction

User Journey Visualisation enables you to view how your users are moving across different journeys when conversing with the bot. Some high level insights you can derive from here are - 
1. Various paths taken by the users
2. Identify major points where users are dropping off or changing paths
3. Help our customers build hypothesis for adding/making any changes in the bot journeys
4. Improve engagement & journey completion rate



## Understanding the terminologies

### ***User Journey Visualisation***


![](https://i.imgur.com/RZRdMXB.png)



1. ***Session start***: This is the start of the flow chart. All the data shown in journey visualisation flow charts is on a session ID level. If one person comes to the bot 3 times in 3 days, we look at all the 3 paths he/she took. 
2. ***User Dropped*** : This means the user got dropped off the chat window or did not respond for a very long time.
3. ***Journey completion rate***: Total times a journey was triggered/ total times it was completed.
4. ***Journey dropped rate***: %age of times users dropped off the chat.
5. ***Journey switched rate***: %age of time users switched paths between two journeys
6. ***43.28 %(***96310): This means, out of 100% of the sessions which got triggered on the chat, 43.28 % (~ 96310) times people went to the wallet journey directly after starting the session.

    * This does not mean 96310 users went through this flow. 
    * This also does not mean that only 96310 times the wallet journey was triggered. 
    * The journey was triggered 96310 times directly after starting the session. This does not include the numbers for cases     where this journey was triggered in a later stage.


![](https://i.imgur.com/WBENaSa.png)


    

    
### ***'Steps inside the flow' modal***



1. ***Journey Switched***: This means the user switched from journey A to journey B.

2. ***Journey Completed***: This denotes completion of the journey. It might take longer for certain users to complete the journey based on the steps in the journey and their response to it.

3. ***User Dropped***: This means the user got dropped off the chat window or did not respond for a very long time.


![](https://i.imgur.com/tX2G1vz.png)



## Important Points to Note


- This is only available on ***cloud***.
- The data is distributed on a ***session level***.
- Individual user paths cannot be visualised here
- All the numbers mentioned inside the black boxes denote the number of ***user hits and not the unique users***.
- journeyVizOther(~3.12%) is the amount of hits where paths did not follow any pattern.


![](https://i.imgur.com/RBM5nLL.png)



## FAQs


1. ***What does “switched” mean***?
    - Switched means moved to a different journey at any point of time
2. ***User count is not matching with the numbers shown here***.
    - The Number shown in the flow chart is ‘number of hits’ and not ‘number of users’.
3. ***Is dropped inside steps considered as final drop or can the user still continue***?
    - User has dropped out of the bot
4. ***How are we tracking users in the mobile app***?
    - Closing the chat window/app or leaving the chat in the middle of the conservation for a long time implies the user has dropped off.
5. ***When are we considering a journey to get completed***?
    - It depends on the step structure and how many steps are required to complete a journey.
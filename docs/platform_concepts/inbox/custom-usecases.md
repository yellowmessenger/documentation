---
title: Custom Usecases
sidebar_label : Custom Usecases
---

## Agent transfer without asking any information from the user

1. Create variables for storing name, and query in global variables and give some dummy value to it
2. Pass the same variables in the raise ticket action node.

Note: the dummy name and query won’t be shown to the user

## Ticket should be assigned to a particular group with a particular tag

1. In Inbox settings create group and tag
2. Use Raise ticket action node for each of the group
3. Pass the information in the advanced settings of the ticket under Department and Tag 

## Values coming from each channel has to be set on the tickets

1. Use channel filter to set variables 
2. Create global variables and set those variables
With either variables coming from payload like {{{profile.payload.<key_name in payload>}}}
Or {{{sender}}} in case of WhatsApp
3. Pass the same variables in the raise ticket action node.

## On failed tickets the query and contact has to be stored / email has to be sent

1. In the raise ticket action node on error node, use a send email action node.
2. Create a database and Use a database node to insert the ticket details into database






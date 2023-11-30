---
title : Jira
sidebar_label : Jira
---

# Scope of Integration
Yellow.ai Integration with Jira allows you to seamlessly connect your jira cloud with the yellow.ai platform. Using this integration, one can create issue, view issue details, create project, get project details or get user details.

:::note
Atlassian and JIRA are different integrations available on the yellow.ai platform. To use them, you must set them up individually.
:::

## Configuration

Configuring the integration with jira iis straightforward. Follow the steps defined below to start integrating:

1. Create an application on [https://developer.atlassian.com/console/myapps/](https://developer.atlassian.com/console/myapps/)

2. Select Oauth 2.0 integration 

![alt_text](https://cdn.yellowmessenger.com/TGZ0kqG4h79e1658993552653.png "image_tooltip")

3. Go to Console -> My apps -> youAppName -> Permission -> jira Api  then click on add  

![alt_text](https://cdn.yellowmessenger.com/7iSCsKEKczOD1658993957398.png "image_tooltip")

4. Add and configure your app’s API scopes.



![alt_text](https://cdn.yellowmessenger.com/7iSCsKEKczOD1658993957398.png "image_tooltip")

5. Then Go to Authorization and copy the url from integration card then configure the url there. \

![alt_text](https://cdn.yellowmessenger.com/7CvlfU4omlpP1658994104038.png "image_tooltip")


![alt_text](https://cdn.yellowmessenger.com/rt9Dk704U1r31658994142607.png "image_tooltip")

![alt_text](https://cdn.yellowmessenger.com/mSWay36LfoOU1658994204859.png "image_tooltip")

6. Go to setting then copy client Id and client Secret then paste in to integration form and connect. It is oauth based integration hence jira will ask to give access to above app then allow. Then you can use jira integration action node.


![alt_text](https://i.imgur.com/i1qvc3e.png "image_tooltip")

7. Get ApiToken value for using inside the action-node. follow the below steps
   Click on Profile icon on top-right -> Manage Account -> Security -> API Token -> Create and manage API tokens -> create new API token and copy the value and paste somewhere for your reference. 

![alt_text](https://cdn.yellowmessenger.com/egTVdRkrWqwu1659068555096.png "image_tooltip")

8. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::

## Use-cases 
Following are the use-cases which are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::


### Get Issue Details:-  
  From this method you can get the issue details. 
 _Node Input Params:-_                        

|  |  |  |
|---|---|---|
| Field Name | Sample Input | Remarks|
| issueIdOrKey* | INTG-189 | Issue Key or Issue Id.|

#### Output Response should be stored in object type variables 


### Get Project Details:-
 From this method you can get Project Details.
 _Node Input Params:-_

|  |  |  |
|---|---|---|
| Field Name| Sample Input| Remarks|
| projectIdOrKey* | INTG or 10004 | Project Key or Project Id.|

  #### OutPut Response should be stored in Object  type variables

### Get Project Status:-
   From this method you can get Project Status Details.
  _Node Input Params:-_ 

 |  |  |  |
|---|---|---|
| Field Name| Sample Input| Remarks|
| projectIdOrKey* | INTG or 10004 | Project Key or Project Id.|

  #### Output Response should be stored in Array type variables



### Create Jira Issue:- 
Creates an issue or, where the option to create subtasks is enabled in Jira, a subtask. A transition may be applied, to move the issue or subtask to a workflow step other than the default start step, and issue properties set.
    Creating a subtask differs from creating an issue as follows:
    `issueType` must be set to a subtask issue type .
    `parent` must contain the ID or key of the parent issue.
    This action node is based on V2 action node in which field are fetching dynamically.
   
  ![Integration_Gif](https://cdn.yellowmessenger.com/E65lUhBYmzg41659070058326.gif)
  Following the above steps will connect your Google Sheets with Yellow.ai platform.

### Search user Details:-
  From this method you can fetch user details.Finds users with a structured query and returns a [paginated](https://developer.atlassian.com/cloud/jira/platform/rest/v3/intro/#pagination) list of user details

_Node Input Params:-_

|  |  |  |
|---|---|---|
| Field Name| Sample Input| Remarks|
| userNameOrEmail*| manish.kumar@yellow.ai| Username or emal.|

#### Output Response should be stored in Array type variable.

### Create Project:- 
   From this method you can create project..
  _Node Input Params:-_ 

|  |  |  |
|---|---|---|
| Field Name | Sample Input | Remarks |
| nameOfProject* | Example Project | Name of Project |
| key| INTG| Unique Key value |
| projectTypeKey| Bussiness,Software | Project type Key enums(Bussiness, Software,Cloud)|
| leadAccountId| 16 digit varchar | Account Id of user, use search user details action node to get accountId|
| email | manish.kumar@yellow.ai | Jira Email address of person who creating project|
| apiToken| a12Esjsjs!23| Api Token|
| jiraCompanyDomain| yellowmessenger| Subdomain name of jira board|

 #### ProjectTypeKey Enums- `business, service_desk, software`
 #### Response Should be stored in Object type variables.



### Search issues by query:- 
    Returns lists of issues matching a query string. Use this resource to provide auto-completion suggestions when the user is looking for an issue using a word or string.

_Node Input Params_
|  |  |  |
|---|---|---|
| Field Name| Sample Input Remarks|
| query* | Test Issue | Search Query of issue.|

 #### Response should be stored in object type variables



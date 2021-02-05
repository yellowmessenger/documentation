---
title : Data API
sidebar_label : Data API
---

> All Date fields to be passed in query params or body should be in ISO8601 Format.

## Events

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/resources/analytics/events?bot=BOT_ID' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
	"dataSource" : "userEvents",
	"startTime" :"2020-03-08T12:22:59.566Z",
	"endTime" : "2020-03-08T13:00:59.566Z"
}'
```

#### Required Fields

 > startTime and endTime should be in ISO8601 Format 
 > X_AUTH_TOKEN : API Key for your account. You can find it in Account Setting.
 > BOT_ID

#### Sample Response

```js 
[
    {
        "segmentId": "userEvents_2020-03-02T00:00:00.000Z_2020-03-09T00:00:00.000Z_2020-03-02T00:00:01.433Z_1",
        "columns" : [],
        "events" : []
    }
]
```

Segment ID  : *Druid uniquely identifies segments using the datasource, interval, version, and partition number.*
columns : *list of fields shown in the events*
events : *the list of events*

> Note :  there can be multiple segments present according to the time range specified. This API will return the data for at max 1 day irrespective of the mentioned endTime.

## Druid Events

### Custom Events

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/resources/customAnalytics?bot=BOT_ID' \
--header 'Content-Type: application/json' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate": "2020-01-15T11:33:11.194Z",
    "endDate" : "2020-01-20T11:33:11.194Z",
    //OPTIONAL FIELDS BELOW .... PLEASE REMOVE THIS COMMENT WHEN DOING THE REQUEST
    "filters": {
        "event": "button-click"
    },
    paginationId : "___"
}'
```

#### Required Fields
> startTime and endTime should be in ISO8601 Format 
> X_AUTH_TOKEN : API Key for your account. You can find it in Account Setting.
> BOT_ID

#### Optional Fields
Filters : *you can filter the response on the basis of your field.Like shown in the example*
Pagination ID : *If you time range is long enough and the result in response is more than 100 records then only 100 records are fetched like the first page of your result and remaining pages you can fetch with the use of pagination id.*

```js
{
    "success": true,
    "message": "Success",
    "data": {
      "results" : [LIST OF RECORDS ...]
    },
        "paginationId": "1579243561550:1"
    }
}
```

## Profiles for a Bot

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/resources/profiles?bot=x1574843594138' \
--header 'Content-Type: application/json' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
	"startDate" : "2020-01-15T11:33:11.194Z" ,
	"endDate" : "2020-01-15T11:33:11.194Z",
	//OPTIONAL FIELDS BELOW .... PLEASE REMOVE THIS COMMENT WHEN DOING THE REQUEST
    paginationId : "___"
}'
```

#### Required Fields
> startTime and endTime should be in ISO8601 Format 
> X_AUTH_TOKEN : API Key for your account. You can find it in Account Setting.
> BOT_ID

#### Optional Fields
Pagination ID : *If you time range is long enough and the result in response is more than 100 records then only 100 records are fetched like the first page of your result and remaining pages you can fetch with the use of pagination id.*

#### Sample Response 

```js
{
    "success": true,
    "message": "Success",
    "data": {
        "profiles": [],
        "paginationId": "PAGINATION_ID"
    }
}
```

## Message Log for a Bot

> Session ID is an optional Parameter

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/resources/messages?bot=BOT_ID' \
--header 'Content-Type: application/json' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
	"startDate" : "2020-01-15T11:33:11.194Z" ,
	"endDate" : "2020-01-15T11:33:11.194Z",
	"paginationId": "5e35d5753d0a180010b2d896",
	"sessionId": "5ee88411438cd000016ab4c3"

}'
```

## Profile by UID

```js
curl --location --request GET 'https://app.yellowmessenger.com/api/data/vault/getProfile?bot=BOT_ID&uid=UID&platform=YOUR_SOURCE' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json'
```

#### Required Query Params

>BOT_ID
>UID
>X_AUTH_TOKEN : *API Key for your account. You can find it in Account Setting.*
> Platform : *if not specified default value will be taken . (Default Value : yellowmessenger)
*

## Messages by UID

```js
curl --location --request GET 'https://app.yellowmessenger.com/api/resources/messagesByUid?bot=BOT_ID
&uid=UID
&startDate=2020-01-15T11:33:11.194Z
&endDate=2019-12-23T08:37:37.224Z' \
--header 'x-auth-token: X_AUTH_TOKEN'
```

#### Required Query Params

>BOT_ID
>UID
>X_AUTH_TOKEN : *API Key for your account. You can find it in Account Setting.*
>StartDate and endDate are Optional but if provided should be in ISO8601 Format.

## Campaigns Reports by Status

```js
curl --location --request GET 'https://app.yellowmessenger.com/api/enagagements/campaign-reports?bot=BOT_ID&campaignId=CAMPAIGN_ID&status=STATUS' \
--header 'x-auth-token: X_AUTH_TOKEN'
```

#### Required Query Params

>BOT_ID
>X_AUTH_TOKEN : *API Key for your account. You can find it in Account Setting.*
>CampaignId

#### Optional Fields

> status : [success , failed ] general values and other status values are according to the channel on which campaign is sent.

## Whatsapp Messages [Unstructured Logs]

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/resources/whatsapp-status-report?bot=BOT_ID' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate": "2020-01-15T11:33:11.194Z",
    "endDate": "2020-01-15T11:33:11.194Z",
    "emails": [
        "aditya@yellowmessenger.com"
    ],
    "attachments": false,
    "templateName":"NAME"
}'
```

#### Required Query Params

>BOT_ID
>X_AUTH_TOKEN : *API Key for your account. You can find it in Account Setting.*
>StartDate and endDate are Optional but if provided should be in ISO8601 Format.
>attachments : *Boolean field, Should be set true in case, you want to get data as attachment.*


#### Optional Fields

>templateName : *Filter messages particular to a template (Specify it NONE if you don’t want templateName in headers )*
>columns : *Additional Columns (MessageType or SessionId).*

#### Sample Response
> MessageId : *Unique Identifier for message*
> Status : *Whatsapp Status*
> Timestamp : *Time of Sending*
> User : *Phone no*
>Template Name : *whatsapp media template if used*

## General Insights

This section explains about some API’s which can be used for getting different insights of a Bot.

>TimeZone is a optional parameter and if not passed the server timezone is taken.
>Data is not provided for more than 90 days at once.
>Granularity is Optional : Can be specified in ISO 8601 Format (P1D - day wise, P1W -week wise etc)

1. **Bot Users:** *This API gives us the users for a bot.  When we get the first message for a bot from a user we start considering that user as a bot user.*

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insightsN1/general/bot-users?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate" : "startDate" ,
    "endDate" : "endDate",
    "timeZone" : "TimeZone name" {Ex Asia/Kolkata}
}'
```

2. **Bot New Users:** *This API gives us the new users for a bot. If we have got the user’s first message in the given time range we call him as a new user for a bot.*

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insightsN1/general/bot-users-new?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate" : "startDate" ,
    "endDate" : "endDate"
}'
```
3. **Bot Total Messages:** *This API gives us the number of total messages for a bot.*

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insightsN1/general/total-messages?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate" : "startDate" ,
    "endDate" : "endDate"
}'
```

4. **Bot Sessions:** *This API gives us the number of sessions for a bot.*

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insightsN1/general/bot-sessions?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate" : "startDate" ,
    "endDate" : "endDate"
}'
```


5. **Bot Users Completed Journey:** *This API gives us the number of users who has completed at-least a journey for the bot. When a user starts with a journey and completes all the steps that we consider as a completed journey.*

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insightsN1/general/user-journey-completed?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate" : "startDate" ,
    "endDate" : "endDate",
    "journey" : "Journey Name"
}'
```

6. **Bot Users started Journey:** *This API gives us the number of users who has started at-least a journey for the bot.*

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insightsN1/general/user-journey-started?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate" : "startDate" ,
    "endDate" : "endDate",
    "journey" : "Journey Name"
}'
```

7. **Journey Count:** 

> Request 
```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insightsN1/general/journey-count?bot=BOT_ID' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "startDate" : "START_DATE",
    "endDate" : "END_DATE",
    "journey" : "Journey_name" // Optional,
  }'
```

#### Response

>Response Format is same for all general insights APIs. The data is divided according to day granularity and sum is the final result. Timestamp is shown in the timestamp passed in the body.

```js
[
    {
        "timestamp": "2020-07-24T00:00:00.000+05:30",
        "result": {
            "sum": 14396.732218639052
        }
    }
]
```

## Default Dashboard API

1. **Total New Users**

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insights/getData?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "query": {
        "filter": {
            "type": "and",
            "fields": [
            ]
        },
        "intervals": [
            "2020-04-17T18:30:00.000Z/2020-04-24T18:29:59.000Z"
        ],
        "metric": "sum",
        "granularity": {
            "type": "period",
            "timeZone": "Asia/Kolkata",
            "period": "P1D"
        },
        "dataSource": "userEvents",
        "aggregations": [
            {
                "fieldName": "count",
                "name": "sum",
                "type": "count"
            }
        ],
        "queryType": "timeseries"
    }
}'
```

2. **Total Users**

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insights/getData?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--data-raw '{
    "query": {
        "filter": {
            "type": "and",
            "fields": [
            	]
        },
        "intervals": [
            "2020-04-17T18:30:00.000Z/2020-04-18T18:30:00.000Z"
        ],
        "metric": "sum",
        "granularity": "hour",
        "dataSource": "messages",
        "aggregations": [
            {
                "fieldName": "userUnique",
                "name": "sum",
                "type": "hyperUnique"
            }
        ],
        "queryType": "timeseries"
    }
}'
```

3. **Total Messages**

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insights/getData?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--data-raw '{
    "query": {
        "filter": {
            "type": "and",
            "fields": [
            	]
        },
        "intervals": [
            "2020-04-17T18:30:00.000Z/2020-04-18T18:30:00.000Z"
        ],
        "metric": "sum",
        "granularity": "hour",
        "dataSource": "messages",
        "aggregations": [
            {
                "fieldName": "userUnique",
                "name": "sum",
                "type": "hyperUnique"
            }
        ],
        "queryType": "timeseries"
    }
}'
```

4. **Avg Session Time (Sec)**

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insights/getData?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--data-raw '{
    "query": {
        "filter": {
            "type": "and",
            "fields": [
            	]
        },
        "intervals": [
            "2020-04-17T18:30:00.000Z/2020-04-24T18:29:59.000Z"
        ],
        "metric": "sum",
        "granularity": {
            "type": "period",
            "timeZone": "Asia/Kolkata",
            "period": "P1D"
        },
        "dataSource": "messages",
        "aggregations": [
            {
                "fieldName": "userUnique",
                "name": "sumUser",
                "type": "hyperUnique"
            },
            {
                "fieldName": "sessionUnique",
                "name": "sumSession",
                "type": "hyperUnique"
            }
        ],
        "postAggregations": [
            {
                "name": "sum",
                "type": "doubleGreatest",
                "fields": [
                    {
                        "fieldName": "sumSession",
                        "name": "postAgg__sample_name2",
                        "type": "finalizingFieldAccess"
                    },
                    {
                        "fieldName": "sumUser",
                        "name": "postAgg__sample_name1",
                        "type": "finalizingFieldAccess"
                    }
                ]
            }
        ],
        "queryType": "timeseries"
    }
}'
```

5. **Avg Sessions/User**

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insights/getData?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "query": {
        "filter": {
            "type": "and",
            "fields": [
            	]
        },
        "intervals": [
            "2020-04-17T18:30:00.000Z/2020-04-24T18:29:59.000Z"
        ],
        "metric": "sum",
        "granularity": {
            "type": "period",
            "timeZone": "Asia/Kolkata",
            "period": "P1D"
        },
        "dataSource": "messages",
        "aggregations": [
            {
                "fieldName": "session_sum",
                "name": "sum1",
                "type": "doubleSum"
            },
            {
                "fieldName": "sessionUnique",
                "name": "sumSession",
                "type": "hyperUnique"
            }
        ],
        "postAggregations": [
            {
                "name": "sum",
                "fn": "/",
                "type": "arithmetic",
                "fields": [
                    {
                        "fieldName": "sum1",
                        "name": "postAgg__sample_name2",
                        "type": "fieldAccess"
                    },
                    {
                        "fieldName": "sumSession",
                        "name": "postAgg__sample_name1",
                        "type": "finalizingFieldAccess"
                    }
                ]
            }
        ],
        "queryType": "timeseries"
    }
}'
```


5. **Goal Completion Rate**

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insights/getData?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: text/plain' \
--data-raw '{
    "query": {
        "filter": {
            "type": "and",
            "fields": [
                {
                    "values": [
                        "journey-completed",
                        "journey-started"
                    ],
                    "type": "in",
                    "dimension": "event"
                },
                {
                    "field": {
                        "type": "selector",
                        "dimension": "journey",
                        "value": "Default"
                    },
                    "type": "not"
                }
            ]
        },
        "intervals": [
            "2020-04-17T18:30:00.000Z/2020-04-24T18:29:59.000Z"
        ],
        "metric": "sum",
        "granularity": "all",
        "threshold": 5,
        "dataSource": "userEvents",
        "aggregations": [
            {
                "fieldName": "count",
                "name": "sum",
                "type": "doubleSum"
            }
        ],
        "dimension": "event",
        "queryType": "topN"
    }
}'
```

5. **Total Sessions**

```js
curl --location --request POST 'https://app.yellowmessenger.com/api/insights/getData?bot=bot_id' \
--header 'x-auth-token: X_AUTH_TOKEN' \
--header 'Content-Type: application/json' \
--data-raw '{
    "query": {
        "filter": {
            "type": "and",
            "fields": [
            	]
        },
        "intervals": [
            "2020-04-17T18:30:00.000Z/2020-04-18T18:30:00.000Z"
        ],
        "metric": "sum",
        "granularity": "hour",
        "dataSource": "messages",
        "aggregations": [
            {
                "fieldName": "sessionUnique",
                "name": "sum",
                "type": "hyperUnique"
            }
        ],
        "queryType": "timeseries"
    }
}'
```
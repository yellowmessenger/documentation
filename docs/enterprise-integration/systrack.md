---
title: SysTrack Integration – API Configuration
sidebar_label: SysTrack API Setup
---

## Get Access Token

> **Note:** The URL below may vary per customer tenant/environment. Confirm the correct base URL or tenant ID for your setup.

| API Details | Description |
|------|-------------|
| **Endpoint** | `https://{tenant-name}.b2clogin.com/{tenant-name}.onmicrosoft.com/B2C_1_ROPC_AUTH/oauth2/v2.0/token` |
| **Method** | `POST`
| **Content-Type** | `application/x-www-form-urlencoded` | 
| **Form Parameters** | `grant_type`, `response_type`, `username`, `password`, `client_id`, `scope` |


| Parameter | Description 
| --------- | ------------
| **grant_type**    | Specifies the OAuth 2.0 grant type being used. For the ROPC flow, this value must be set to `password`. <br/>**Example:** `password`  |
| **response_type** | Defines the type of tokens expected in the response (for example, access token or ID token). Some configurations require both `token` and `id_token`. <br/>**Example:** `token id_token`  |
| **username**      | The end user’s login identifier (such as their email address or UPN) used for authentication. <br/>**Example:** `user@company.com`  |
| **password**      | The password corresponding to the specified username. This value is sent in the request body and should always be handled securely. <br/>**Example:** `YourSecurePassword123!` |
| **client_id**     | The unique identifier of the registered application in Azure AD B2C. It identifies which client is requesting the token. <br/>**Example:** `00000000-aaaa-1111-bbbb-2222cccc3333`  |
| **scope**         | Specifies the permissions or scopes requested for the access token. It typically includes your API’s scope, along with standard OpenID scopes. <br/>**Example:** `https://tenant.onmicrosoft.com/api/read openid offline_access` |



##### Example Request (cURL)
```bash
curl --location --request POST 'https://systrackcegl.b2clogin.com}/systrackcegl.onmicrosoft.com/B2C_1_ROPC_AUTH/oauth2/v2.0/token' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'grant_type=password' \
--data-urlencode 'response_type=token' \
--data-urlencode 'username=your_user@domain.com' \
--data-urlencode 'password=YourPassword' \
--data-urlencode 'client_id=your_client_id' \
--data-urlencode 'scope=your_scope'
```


## Get Device Details

Retrieves complete details of a specific device in Systrack using its Fully Qualified Domain Name (FQDN).

#### API Endpoint  


`GET` `https://{example-tenant}.lakesidesoftware.com/api/systems?$filter=(fqdn eq '{{systrackDevice}}')`

#### Header

Header | Description
------ | -----------
Authorization | The access token obtained from the authentication API. Required for secure access to the SysTrack API.<br/> Format: `Bearer {{accessToken}}`

#### Params

Parameter | Description
--------- | -----------
fqdn | The fully qualified domain name of the target device. This parameter filters the system information for the specified device. <br/> `fqdn eq '{{systrackDevice}}'`


#### Sample Request

```bash

GET https://{example-tenant}.lakesidesoftware.com/api/systems?$filter=(fqdn eq '{{systrackDevice}}')
Authorization: Bearer {{accessToken}}

```

## Get GUID
Retrieves the GUID (Globally Unique Identifier) of a specific user from the SysTrack environment using their user ID.

#### API Endpoint

```bash
GET https://{example-tenant}.lakesidesoftware.com/api/systems/users?user={{systrackUserId}}
```

#### Header 

* **Authorization**: The access token obtained from the authentication API. Required for authorization. <br/>*Example*: `Bearer {{token}}`

#### Param

* **user**: The user ID used to retrieve the corresponding GUID from SysTrack. <br/>*Example*: `{{systrackUserId}}`



## Get Sensor Actions
Retrieves the list of available sensor actions from the SysTrack environment.
These actions represent system-level operations that can be executed on devices (for example, restarting a process or collecting performance data).


#### API Endpoint

```bash
GET https://{example-tenant}.lakesidesoftware.com/api/sensoractions

```

#### Header 

* **Authorization**: The access token obtained from the authentication API. Required for authorization. <br/>*Example*: `Bearer {{token}}`

#### Example

```bash
GET https://{example-tenant}.lakesidesoftware.com/api/sensoractions
Authorization: Bearer {{accessToken}}
```

## Get Sensor Issues

Retrieves detailed sensor issue data for a specific system, within a defined time range.
This API helps identify issues identified by SysTrack sensors (for example, CPU spikes, latency, or memory usage).

#### API Endpoint


```bash
GET https://{example-tenant}.lakesidesoftware.com/api/sensors/child/{{sysGuid}}?startTime={{startTime}}&endTime={{endTime}}
```

#### Params

Parameter | Description
--------- | -----------
sysGuid | The system GUID of the device for which sensor data is requested. This can be fetched using the Get GUID API. <br/>Example: `123e4567-e89b-12d3-a456-426614174000`
startTime | Start of the time window (in ISO 8601 format) for which sensor data should be fetched.
startTime | End of the time window (in ISO 8601 format) for which sensor data should be fetched.

#### Header

* **Authorization**: The access token obtained from the authentication API. Required for authorization. <br/>*Example*: `Bearer {{token}}`

## Run Sensor Action

Executes a predefined sensor action (such as running a diagnostic or remediation task) on one or more systems within your environment.

This API enables automated execution of corrective actions identified through sensor data or monitoring workflows.


#### API Endpoint

```bash
POST https://{example-tenant}.lakesidesoftware.com/api/sensoractions/run
```

#### Header

* **Authorization**: The access token obtained from the authentication API. Required for authorization. <br/>*Example*: `Bearer {{token}}`
* **Content-Type**: The format of the request body. Set to JSON.


#### Request Body

```json
# Sample JSON
{
  "systems": [
    "f2d6e4f9-1ccc-44d3-9dec-1737df2d1bd4"
  ],
  "executePackages": [
    {
      "profileID": "{{profile}}",
      "actionToTake": "1",
      "parameters": {}
    }
  ]
}
```

| **Parameter**     | **Description**    | 
| ----------------- | ------------------ |
| `systems`         | List of system GUIDs on which the action should be executed. Each system ID can be fetched using the **Get GUID API**. <br/>Example: `["f2d6e4f9-1ccc-44d3-9dec-1737df2d1bd4"]`
| `executePackages` | Array defining the action details to be executed.  |
| `profileID`       | The ID of the sensor action profile to execute.  <br/>Example: `"Device_Restart_Profile"` |
| `actionToTake`    | Specifies the action type or mode to execute. Value `1` usually represents “execute now.” `"1"` |
| `parameters`      | Optional input parameters required by the sensor action. Leave empty `{}` if not applicable.  |

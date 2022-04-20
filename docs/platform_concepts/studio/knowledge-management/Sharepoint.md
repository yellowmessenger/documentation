---
sidebar_label : Sharepoint
Title : Sharepoint Integration
---
## SharePoint Integration

yellow.ai's document cognition feature now supports integration with SharePoint. The document cognition system is hence capable of fetching entire documents from a SharePoint site (along with all sub-sites) which includes documents uploaded to document libraries, documents created online and list attachments, convert them into Q/A format and sync at a regular interval. All documents with extension '.docx' and '.pdf' are considered.

### Getting Started

#### Step 1: Login
Login to your SharePoint account and click on the site you want to access. 
![](https://cdn.yellowmessenger.com/NROfenYSis8C1622455900087.png)

#### Step 2: App Registration
Click on New -> App
![](https://cdn.yellowmessenger.com/0pN5KOkXKwPU1622465966953.png)
To register an app in SharePoint, navigate to the "New App Registration" page by replacing
'addanapp.aspx' with 'appregnew.aspx'  
![](https://cdn.yellowmessenger.com/wCJrbVzhXlJA1622456478470.png)

The URL of that page will be similar to: **[https://{{tenantname}}.sharepoint.com/_layouts/15/appregnew.aspx](https://{{tenantname}}.sharepoint.com/_layouts/15/appregnew.aspx)**

Fill the details in that page as per the following table and click "Create".
- Client Id - Click on Generate
- Client Secret - Click on Generate 
- Title - Any value
- App Domain - `localhost`
- Redirect URI - `https://localhost`

Note : Copy the generated Client Id and Client Secret into some editor as these will be required later.
![](https://cdn.yellowmessenger.com/h7lhE1xoZov31622456892916.png)

In next screen, Click on OK
![](https://cdn.yellowmessenger.com/NUFkf2K2M8QU1622456936834.png)

#### Step 3: Adding Permissions
Now that the app is registered, we need to provide the app with required permissions so that it can access data. In order to do that, replace "settings.aspx" with "appinv.aspx".
![](https://cdn.yellowmessenger.com/jDdLApZMemD91622457007886.png)

```js
The URL of that page will be similar to the one below [](https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx)
```
In that page, paste the Client Id in the "App Id" text box and click on "Lookup". This will load the
details of the app we registered previously
In the "Permission Request XML" paste the following XML. This XML says that the app can have full control over the current web
```js 
<AppPermissionRequests AllowAppOnlyPolicy="true">  <AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl"/></AppPermissionRequests>
```
Once that is added click on "Create".

![](https://cdn.yellowmessenger.com/qXn6KiEgZEG51622457303120.png)

In the next screen click on "Trust It" and this will mean that the app will have the required permissions. 

![](https://cdn.yellowmessenger.com/E0sQIjgRdpbS1622457429331.png)

#### Step 4: Checking Tenant ID

Navigate to app permissions page by replacing 'settings.aspx' by 'appprincipals.aspx'
![](https://cdn.yellowmessenger.com/3ZFK6x5NRDWk1622457497391.png)
The text after '@' in the app identifier is the 'tenant id' or 'realm'. This will be used in the auth api verification in step 5. ![](https://cdn.yellowmessenger.com/x6acmxwsFVf91622457610029.png)  

#### Step 5: Auth API Verification
![](https://cdn.yellowmessenger.com/kNNpz5tQH91s1622457991838.png)
Create a new request in Postman, and change its request type to "POST".
```js
The URL will be [](https://accounts.accesscontrol.windows.net/{{realm}}/tokens/OAuth/2)
Click on the "Body" tab of the request and add the following Key Value pairs
grant_type                                                                   client_credentials
client_id                                                                       {{appReg_clientId}}@{{realm}}
client_secret                                                               {{appReg_clientSecret}}
resource                                                                       {{principal}}/{{targetHost}}@{{realm}}
Replace variables of Body with value by referring below table.
appReg_clientId                                                         Client Id of the app created earlier 
appReg_clientSecret                                                 Client Secret of the app created earlier
 targetHost                                                                   {{Tenantname}}.sharepoint.com
principal                                                                       00000003-0000-0ff1-ce00-000000000000 realm                                                                       
```

Tenant id shown in step 4 
If the API response is 200, you are done! Values used in the body of this api need to be shared.
In case, integration needs to be done for multiple sites, step 1 – step 6 needs to be repeated for other sites.

### Required Permissions
Run the following commands on PowerShell. Without these steps your app won't have the required permissions.
```js 
Install-Module -Name Microsoft.Online.SharePoint.PowerShell
$adminUPN="<the full email address of a SharePoint administrator account, example: jdoe@contosotoycompany.onmicrosoft.com>"
$orgName="<name of your Office 365 organization, example: contosotoycompany>"
$userCredential = Get-Credential -UserName $adminUPN -Message "Type the password."
Connect-SPOService -Url [](https://$orgName-admin.sharepoint.com) -Credential $userCredential
set-spotenant -DisableCustomAppAuthentication $false
```
> Once an app is created you can give access to any site to it. You can view all the apps that have access to the site from [](https://{{tenantname}}/dummy/_layouts/15/appprincipals.aspx?Scope=Web)
And you can add new apps to a site by going to [](https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx)
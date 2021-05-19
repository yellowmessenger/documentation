<!-- Output copied to clipboard! -->

<!-----
NEW: Check the "Suppress top comment" option to remove this info from the output.

Conversion time: 4.987 seconds.


Using this Markdown file:

1. Paste this output into your source file.
2. See the notes and action items below regarding this conversion run.
3. Check the rendered output (headings, lists, code blocks, tables) for proper
   formatting and use a linkchecker before you publish this page.

Conversion notes:

* Docs to Markdown version 1.0β29
* Wed May 19 2021 05:27:23 GMT-0700 (PDT)
* Source doc: SharePoint Integration Doc
* This document has images: check for >>>>>  gd2md-html alert:  inline image link in generated source and store images to your server. NOTE: Images in exported zip file from Google Docs may not appear in  the same order as they do in your doc. Please check the images!

----->


<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 11.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>
<a href="#gdcalert4">alert4</a>
<a href="#gdcalert5">alert5</a>
<a href="#gdcalert6">alert6</a>
<a href="#gdcalert7">alert7</a>
<a href="#gdcalert8">alert8</a>
<a href="#gdcalert9">alert9</a>
<a href="#gdcalert10">alert10</a>
<a href="#gdcalert11">alert11</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# SharePoint Integration


## Content


[TOC]



    Yellow Messenger’s document cognition feature now supports integration with SharePoint. The document cognition system is hence capable of fetching entire documents from a SharePoint site (along with all sub-sites) which includes documents uploaded to document libraries, documents created online and list attachments, convert them into Q/A format and sync at a regular interval. All documents with extension ‘.docx’ and ‘.pdf’ are considered.


## 
    Getting Started {#getting-started}


### 
    Step 1: Login {#step-1-login}


    Login to your SharePoint account and click on the site you want to access. 


    

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")



### 
    Step 2: App Registration {#step-2-app-registration}

Click on New -> App

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")



    To register an app in SharePoint, navigate to the “New App Registration” page by replacing


    ‘addanapp.aspx’ with ‘appregnew.aspx’  



<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")



    The URL of that page will be similar to: https://{{tenantname}}.sharepoint.com/_layouts/15/appregnew.aspx 


    Fill the details in that page as per the following table and click “Create”.



*   Client Id - Click on Generate
*   Client Secret - Click on Generate 
*   Title - Any value
*   App Domain - localhost
*   Redirect URI - https://localhost

    _Note : Copy the generated Client Id and Client Secret into some editor as these will be required later._


     

<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")



    In next screen, Click on OK

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")



### 
    Step 3: Adding Permissions {#step-3-adding-permissions}


    Now that the app is registered, we need to provide the app with required permissions so that it can access data. In order to do that, replace “settings.aspx” with “appinv.aspx”.


     




<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")



    The URL of that page will be similar to the one belowhttps://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx


    In that page, paste the Client Id in the “App Id” text box and click on “Lookup”. This will load the


    details of the app we registered previously


    In the “Permission Request XML” paste the following XML. This XML says that the app can have


    full control over the current web


    &lt;AppPermissionRequests AllowAppOnlyPolicy="true">  &lt;AppPermissionRequest Scope="http://sharepoint/content/sitecollection/web" Right="FullControl"/>&lt;/AppPermissionRequests>


    Once that is added click on “Create”.


     



<p id="gdcalert7" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image7.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert8">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image7.png "image_tooltip")



    In the next screen click on “Trust It” and this will mean that the app will have the required


    permissions. 



<p id="gdcalert8" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image8.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert9">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image8.png "image_tooltip")



### Step 4: Checking Tenant ID {#step-4-checking-tenant-id}


    Navigate to app permissions page by replacing ‘settings.aspx’ by ‘appprincipals.aspx’


     



<p id="gdcalert9" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image9.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert10">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image9.png "image_tooltip")



    The text after ‘@’ in the app identifier is the ‘tenant id’ or ‘realm’. This will be used in the auth api verification in step 5.   



<p id="gdcalert10" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image10.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert11">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image10.png "image_tooltip")



### 
    Step 5: Auth API Verification {#step-5-auth-api-verification}


    Create a new request in Postman, and change its request type to “POST”.


    The URL will be https://accounts.accesscontrol.windows.net/{{realm}}/tokens/OAuth/2


    Click on the “Body” tab of the request and add the following Key Value pairs


    grant_type                                                                   client_credentials


    client_id                                                                       {{appReg_clientId}}@{{realm}}


    client_secret                                                               {{appReg_clientSecret}}


    resource                                                                       {{principal}}/{{targetHost}}@{{realm}}


    Replace variables of Body with value by referring below table.


    appReg_clientId                                                         Client Id of the app created earlier 


    appReg_clientSecret                                                 Client Secret of the app created earlier


     targetHost                                                                   {{Tenantname}}.sharepoint.com


    principal                                                                       00000003-0000-0ff1-ce00-000000000000 realm                                                                            

Tenant id shown in step 4 



<p id="gdcalert11" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image11.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert12">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image11.png "image_tooltip")



    If the API response is 200, you are done! Values used in the body of this api need to be shared.


    In case, integration needs to be done for multiple sites, step 1 – step 6 needs to be repeated for other sites.


## Required Permissions {#required-permissions}

Run the following commands on PowerShell. Without these steps your app won't have the required permissions.



1. Install-Module -Name Microsoft.Online.SharePoint.PowerShell
2. $adminUPN="&lt;the full email address of a SharePoint administrator account, example: jdoe@contosotoycompany.onmicrosoft.com>"
3. $orgName="&lt;name of your Office 365 organization, example: contosotoycompany>"
4. $userCredential = Get-Credential -UserName $adminUPN -Message "Type the password."
5. Connect-SPOService -Url https://$orgName-admin.sharepoint.com -Credential $userCredential
6. set-spotenant -DisableCustomAppAuthentication $false

Please note : Once an app is created you can give access to any site to it. You can view all the apps that have access to the site from [https://{{tenantname}}/dummy/_layouts/15/appprincipals.aspx?Scope=Web](https://{{tenantname}}/dummy/_layouts/15/appprincipals.aspx?Scope=Web)

And you can add new apps to a site by going to https://yourtenantname.sharepoint.com/_layouts/15/appinv.aspx

				

			

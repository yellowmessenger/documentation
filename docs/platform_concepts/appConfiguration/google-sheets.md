---
title : Google Sheets
sidebar_label : Google Sheets
---

## Scope of Integration

Yellow.ai Integration with Google Sheets enables you to seamlessly access Google sheets services. Any customer who has a Google account will be able to connect with yellow.ai using OAuth. Using this integration you can create, read, insert/update and clear values from a spreadsheet.


## Use-cases

Following are the use-cases which are currently accommodated in the Integration:



### CreateSpreadsheet:-

Create spreadsheet integration node helps user in creating a Google spreadsheet using the spreadsheet name and the sheet names provided by the user. These created spreadsheets can be found in user’s Google sheets account with which the integration is enabled.


#### Node Sample Inputs:-


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Sample</strong>
   </td>
  </tr>
  <tr>
   <td>title
   </td>
   <td>string
   </td>
   <td>Demo Sheet
   </td>
  </tr>
  <tr>
   <td>sheets
   </td>
   <td>array
   </td>
   <td>

```json
[
    {
      "properties": {
        "title": "Sheet 1 name"
      }
    },
    {
      "properties": {
        "title": "Sheet 2 name"
      }
    }
]
```
   </td>
  </tr>
</table>







### GetValuesFromSheet:-

Get values from sheet integration node helps user in retrieving values from sheet. Based on the Spreadsheet ID, Ranges and Major Dimension it will return the values.


#### Node Sample Inputs:-


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Sample</strong>
   </td>
  </tr>
  <tr>
   <td><em>majorDimension</em>
   </td>
   <td><em>string</em>
   </td>
   <td><em>ROWS</em>
<em>(or)</em>
<em>COLUMNS</em>
   </td>
  </tr>
  <tr>
   <td><em>ranges</em>
   </td>
   <td><em>string</em>
   </td>
   <td><strong><code><em>Sheet1!A1:B2</em></code></strong>
   </td>
  </tr>
  <tr>
   <td><em>spreadSheetID</em>
   </td>
   <td><em>string</em>
   </td>
   <td><em>1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI</em>
   </td>
  </tr>
</table>




### Insert/UpdateValuesInSheet:-

Insert/Update Values in Sheet integration node helps user in inserting or updating values in a sheet. This node inserts/updates the values in a spreadsheet in the specified range with provided values.


#### Node Sample Inputs:-


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Sample</strong>
   </td>
  </tr>
  <tr>
   <td><em>majorDimension</em>
   </td>
   <td><em>string</em>
   </td>
   <td><em>ROWS</em>
<em>(or)</em>
<em>COLUMNS</em>
   </td>
  </tr>
  <tr>
   <td><em>range</em>
   </td>
   <td><em>string</em>
   </td>
   <td><code>Sheet1!A1:B3</code>
   </td>
  </tr>
  <tr>
   <td>values
   </td>
   <td>array
   </td>
   <td>

```json
[
    [1, 2, 3],
    [4, 5, 6]
]
```
   </td>
  </tr>
  <tr>
   <td><em>spreadSheetID</em>
   </td>
   <td><em>string</em>
   </td>
   <td><em>1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI</em>
   </td>
  </tr>
</table>




### ClearValuesInSheet:-

Clear values in a sheet integration node helps users in clearing values in a spreadsheet using the Spreadsheet ID and the Range provided by the user.


#### Node Sample Inputs:-


<table>
  <tr>
   <td><strong>Parameter</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Sample</strong>
   </td>
  </tr>
  <tr>
   <td>ranges
   </td>
   <td><em>array</em>
   </td>
   <td>["Sheet1!A1:B3","Sheet1!A4:B6"]	
   </td>
  </tr>
  <tr>
   <td><em>spreadSheetID</em>
   </td>
   <td><em>string</em>
   </td>
   <td><em>1fExJP4rbjNKpbSHySJl4kOjwJ-mGUUzzsCs_qrC0YgI</em>
   </td>
  </tr>
</table>



## Configuration

Configuring the integration with Google sheets is straightforward. Follow the steps defined below to start integrating:



### Navigate to integration tab:-

Inside your project, fom the switcher navigate to the Integrations, search for Google Sheets in the search bar, or you can find Google Sheets under Tools & Utilities section.
![Integration_Tab](https://cdn.yellowmessenger.com/gpzeigOUh0wp1650969736563.png)


### Connect your google account:-

One can easily enable Google sheets integration for their bot using Oauth. Follow the below steps to enable Google Sheets integration for your bot:-

1. Click on `Sign in with Google` button.
2. Login with your Google credentials in the window opened.
3. Click on `Allow Access` to provide your bot the access to Google Sheets.

![Integration_Gif](https://cdn.yellowmessenger.com/lJDrhSTboKk11650969677157.gif)
Following the above steps will connect your Google Sheets with Yellow.ai platform.


## References:-



1. [Create a Spreadsheet](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets/create)
2. [Get Values from a Sheet](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchGet)
3. [Insert/Update Values in a Sheet](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchUpdate)
4. [Clear Values in a Sheet](https://developers.google.com/sheets/api/reference/rest/v4/spreadsheets.values/batchClear)


## Sample Experience

Below is a video that depicts how this integration works

&lt;**VIDEO WILL BE UPLOADED WITH UPDATED UI DESIGN LANGUAGE**>

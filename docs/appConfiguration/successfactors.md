---
title : SuccessFactors Integration
sidebar_label : SuccessFactors
---

## Configuration Requirements

**API Endpoint:** https://[API-Server]/odata/v2/[Entity]/$metadata

**Authorization token:** Basic auth

    Basic Base64(username@companyId:password)

**Filters:**
eq, in, and, or, ge, le, not, like, etc.

    $filter=username eq 'abc@abc.com' and location in 'In','Eu'


## Employee Profile:

**Active Employee:**


    curl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27&$format=json' \
    --header 'Authorization: Basic XXXXX' \

**Deactivate / Ex-Employee:**


    //$filter = username eq 'abc@yellowmessenger.com' and status eq 'f'
    curl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27%20and%20status%20eq%20%27f%27&$format=json&$select=defaultFullName,userId,jobCode,email,hireDate' \
    --header 'Authorization: Basic XXXXX' \


For getting end-date and other terminate data:


    curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpEmploymentTermination?$filter=userId%20eq%20300&$format=json' \
    --header 'Authorization: Basic XXXXX' \


## Leave Management:

SuccessFactors leave module entity:

| **Entity**        | **Description**                                                                                        |
| ----------------- | ------------------------------------------------------------------------------------------------------ |
| Time Account Type | Sets of rules to accrue fixed or a certain amount of balance regularly for each leave type.            |
| Time Type         | These are nothing but the different leave types in your organization eg. Annual Leave, Study Leave etc |
| Time Profile      | Sets of Leave types applicable to specific employee                                                    |
| Time Account      | It holds all the obtained leave balance                                                                |

![](https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613030763471_image.png)


**Steps to manage time off entity:**

1. Login to SuccessFactors with Admin scope
2. Search for **Manage Time off structure** in the top search bar.
3. Select the entity from the first dropdown (time account type, time type, employee time, time account etc.)
4. Select the record for update from next dropdown
5. Take Action > Make correction > Make the changes > Save.

**Steps to Add new record to time off entity:**
For adding new record to an entity, use the dropdown in the right side and select the entity category that you want to add a record in.

**Steps to assign time profile to employee:**

1. Search for the employee in top search bar.
2. Goto the employee’s Job information section and click on edit icon
3. Update the Time information details (word schedule, holiday calendar, Time profile)
4. Click on Save, it will automatically create a Time account for the employee.


![](https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613032729109_image.png)


**According to the above image configuration.**
**Time Profile :** Time off Test (TIME_OFF_TEST)
**Time Type: (***Leave Type***)**
Sick Leave : SICK_LEAVE
Annual Leave 2 : ANNUAL_LEAVE

**Leave Balance**

 Get balance wrt already availed leaves in past. (Response1)

    //$filter = userId eq 273 and timeAccountType eq 'SICK_LEAVE'

    curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpTimeAccountBalance?$filter=userId%20eq%20%27273%27%20and%20timeAccountType%20eq%20%27SICK_LEAVE%27&$format=json' \
    --header 'Authorization: Basic XXXXX' \


Get Leave requests already approved for future leaves. (Response2)

    //$filter = userId eq '273' and timeType eq 'SICK_LEAVE' and startDate ge datetime'{todayDate}T00:00:00' and approvalStatus eq 'APPROVED'

    curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmployeeTime?$filter=userId%20eq%20%27273%27%20and%20timeType%20eq%20%27ANNUAL_LEAVE%27%20and%20startDate%20ge%20datetime%272020-02-04T00:00:00%27%20and%20approvalStatus%20eq%20%27PENDING%27&$format=json&$select=deductionQuantity,approvalStatus,timeType,endDate,startDate,externalCode' \
    --header 'Authorization: Basic XXXXX' \

Final Balance

    finalBalance = Response1.balance - SUM(Response2[i].deductionQuantity)


**Apply Leave**


    //externalCode must be unique for every new request
    curl --location --request POST 'https://api44.sapsf.com/odata/v2/upsert?workflowConfirmed=true&$format=json' \
    --header 'Authorization: Basic XXXXX' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "__metadata": {
            "uri": "https://api44.sapsf.com/odata/v2/EmployeeTime('\''273'\'')"
        },
        "startDate": "/Date(1611619200000)/",
        "endDate": "/Date(1611792000000)/",
        "externalCode": "TRY1234",
        "approvalStatus": "PENDING",
        "userIdNav": {
            "__metadata": {
                "uri": "https://api44.sapsf.com/odata/v2/User('\''273'\'')",
                "type": "SFOData.User"
            }
        },
        "timeTypeNav": {
            "__metadata": {
                "uri": "https://api44.sapsf.com/odata/v2/TimeType('\''SICK_LEAVE'\'')",
                "type": "SFOData.TimeType"
            }
        }
    }'

Response:

    //Failed Apply Leave
    {
        "d": [
            {
                "key": "EmployeeTime/externalCode=TRY1234",
                "status": "ERROR",
                "editStatus": null,
                "message": "Expected return date must be one day later than end date. with the index 0",
                "index": 0,
                "httpCode": 500,
                "inlineResults": null
            }
        ]
    }
    //Success Apply Leave
    {
        "d": [
            {
                "key": "EmployeeTime/externalCode=TRY1234",
                "status": "OK",
                "editStatus": "UPSERTED",
                "message": null,
                "index": 0,
                "httpCode": 200,
                "inlineResults": null
            }
        ]
    }

**Check in Portal**
**In User Profile** : User Profile > Actions > Manage leave of absence.
**In Manage Data:** SF portal > Manage Time Off Structures > Employee Time > [externalCode]

![](https://lh3.googleusercontent.com/elq_Uw24PyqLl-s17NbhjHpJlFBr4JLMviAhyp_O1ZfzWLpWJ2TlVz4hHcVnDFB95io1YI0M_IvnmSj-4nko7QnrMtd7Q-SvnLs9B2ipuwRNVKX-5ja5kYUVUJDXb9ZmKoIQAqT9)



## References
1. SAP API Guide : https://help.sap.com/viewer/d599f15995d348a1b45ba5603e2aba9b/2011/en-US
2. https://blogs.sap.com/2015/10/16/ec-time-off-for-on-time-hr-management/

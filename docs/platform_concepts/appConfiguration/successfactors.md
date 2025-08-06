---
title : SuccessFactors Integration
sidebar_label : SuccessFactors
---

## Configuration Requirements

### API Endpoint
```
https://[API-Server]/odata/v2/[Entity]/$metadata
```

### Authorization
```
Basic Base64(username@companyId:password)
```

### Supported Filters
```
eq, in, and, or, ge, le, not, like, etc.

$filter=username eq 'abc@abc.com' and location in 'In','Eu'
```

---

## Employee Profile

### Active Employee
```bash
curl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27&$format=json' \
--header 'Authorization: Basic XXXXX'
```

### Deactivate / Ex-Employee
```bash
curl --location --request GET 'https://api44.sapsf.com/odata/v2/User?$filter=username%20eq%20%27abc@yellowmessenger.com%27%20and%20status%20eq%20%27f%27&$format=json&$select=defaultFullName,userId,jobCode,email,hireDate' \
--header 'Authorization: Basic XXXXX'
```

### Employment Termination Info
```bash
curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpEmploymentTermination?$filter=userId%20eq%20300&$format=json' \
--header 'Authorization: Basic XXXXX'
```

---

## Leave Management

### SuccessFactors Leave Entities

| Entity            | Description                                                                 |
|------------------|-----------------------------------------------------------------------------|
| Time Account Type | Rules to accrue balance for each leave type                                |
| Time Type         | Types of leave (e.g., Annual Leave, Sick Leave)                             |
| Time Profile      | Leave types applicable to employees                                         |
| Time Account      | Holds the obtained leave balance                                            |

![](https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613030763471_image.png)

### Managing Time Off Entities

1. Log in to SuccessFactors with admin access.
2. Search for **Manage Time Off Structure**.
3. Select desired entity from dropdown.
4. Select a record to update.
5. Take Action → Make Correction → Save.

### Adding a New Record
Use the right-side dropdown to select entity category and add a record.

### Assigning Time Profile to Employee

1. Search employee in the top search bar.
2. Go to Job Information → Edit.
3. Update time profile, work schedule, holiday calendar.
4. Save changes. A time account is auto-created.

![](https://paper-attachments.dropbox.com/s_ED1FF0E74DEAD763FBDB69A56B6E83345A98D794FA7338EBFB12935A0745F67A_1613032729109_image.png)

### Sample Config
- **Time Profile**: Time off Test (`TIME_OFF_TEST`)
- **Time Types**:
  - Sick Leave: `SICK_LEAVE`
  - Annual Leave 2: `ANNUAL_LEAVE`

---

## Leave Balance Calculation

### Past Leaves (Response1)
```bash
curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmpTimeAccountBalance?$filter=userId%20eq%20%27273%27%20and%20timeAccountType%20eq%20%27SICK_LEAVE%27&$format=json' \
--header 'Authorization: Basic XXXXX'
```

### Future Approved Leaves (Response2)
```bash
curl --location --request GET 'https://api44.sapsf.com/odata/v2/EmployeeTime?$filter=userId%20eq%20%27273%27%20and%20timeType%20eq%20%27ANNUAL_LEAVE%27%20and%20startDate%20ge%20datetime%272020-02-04T00:00:00%27%20and%20approvalStatus%20eq%20%27PENDING%27&$format=json&$select=deductionQuantity,approvalStatus,timeType,endDate,startDate,externalCode' \
--header 'Authorization: Basic XXXXX'
```

### Final Balance Formula
```text
finalBalance = Response1.balance - SUM(Response2[].deductionQuantity)
```

---

## Apply Leave

```bash
curl --location --request POST 'https://api44.sapsf.com/odata/v2/upsert?workflowConfirmed=true&$format=json' \
--header 'Authorization: Basic XXXXX' \
--header 'Content-Type: application/json' \
--data-raw '{
    "__metadata": {
        "uri": "https://api44.sapsf.com/odata/v2/EmployeeTime('273')"
    },
    "startDate": "{{todayDate}}",
    "endDate": "/Date(1611792000000)/",
    "externalCode": "TRY1234",
    "approvalStatus": "PENDING",
    "userIdNav": {
        "__metadata": {
            "uri": "https://api44.sapsf.com/odata/v2/User('273')",
            "type": "SFOData.User"
        }
    },
    "timeTypeNav": {
        "__metadata": {
            "uri": "https://api44.sapsf.com/odata/v2/TimeType('SICK_LEAVE')",
            "type": "SFOData.TimeType"
        }
    }
}'
```

### Sample Responses

**Failure:**
```json
{
  "d": [
    {
      "key": "EmployeeTime/externalCode=TRY1234",
      "status": "ERROR",
      "message": "Expected return date must be one day later than end date.",
      "httpCode": 500
    }
  ]
}
```

**Success:**
```json
{
  "d": [
    {
      "key": "EmployeeTime/externalCode=TRY1234",
      "status": "OK",
      "editStatus": "UPSERTED",
      "httpCode": 200
    }
  ]
}
```

---

## Verification in Portal

- **User Profile:** Navigate to _User Profile → Actions → Manage leave of absence._
- **Manage Data:** Go to _Manage Time Off Structures → Employee Time → [externalCode]_

![](https://lh3.googleusercontent.com/elq_Uw24PyqLl-s17NbhjHpJlFBr4JLMviAhyp_O1ZfzWLpWJ2TlVz4hHcVnDFB95io1YI0M_IvnmSj-4nko7QnrMtd7Q-SvnLs9B2ipuwRNVKX-5ja5kYUVUJDXb9ZmKoIQAqT9)


## References
1. SAP API Guide : https://help.sap.com/viewer/d599f15995d348a1b45ba5603e2aba9b/2011/en-US
2. https://blogs.sap.com/2015/10/16/ec-time-off-for-on-time-hr-management/
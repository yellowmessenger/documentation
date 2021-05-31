<p style="color: red; font-weight: bold">>>>>>  gd2md-html alert:  ERRORs: 0; WARNINGs: 0; ALERTS: 3.</p>
<ul style="color: red; font-weight: bold"><li>See top comment block for details on ERRORs and WARNINGs. <li>In the converted Markdown or HTML, search for inline alerts that start with >>>>>  gd2md-html alert:  for specific instances that need correction.</ul>

<p style="color: red; font-weight: bold">Links to alert messages:</p><a href="#gdcalert1">alert1</a>
<a href="#gdcalert2">alert2</a>
<a href="#gdcalert3">alert3</a>

<p style="color: red; font-weight: bold">>>>>> PLEASE check and correct alert issues and delete this message and the inline alerts.<hr></p>



# AWS S3 Integration

Yellow Messenger’s document cognition feature now supports integration with AWS S3. The document cognition system is hence capable of fetching entire documents from a AWS S3 site (along with all sub-sites) which includes documents uploaded to document libraries, documents created online and list attachments, convert them into Q/A format and sync at a regular interval. All documents with extension ‘.docx’ and ‘.pdf’ are considered.


## Getting Started



1. Give User Access To Only One S3 Bucket Only
2. Click on the s3 bucket and copy its ARN
3. Go to [https://awspolicygen.s3.amazonaws.com/policygen.html](https://awspolicygen.s3.amazonaws.com/policygen.html)
4. Select Policy Type select : IAM policy
5. Add Statement(s): past the ARN in the Amazon resource Name twice first the actual value ‘,’ and then ARN with `/*` \
Eg : arn:aws:s3:::testbucketpritam \
       arn:aws:s3:::testbucketpritam/*
6. Click on add statements
7. Go to IAM dashboard select policy, go to create policy, paste the JSON generated from the previous step.
8. Go to user in IAN dashboard and create a user

        

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")


9. Go to attach existing policies 

        

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")


10. You can add the s3 bucket policy you just created to the user 

    

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")
 \



Congratulations u have created a new user with access to only a single bucket. To the aws console link in the above screenshot and login with this new user as a IAN user you will have access to the s3 bucket 


## How to validate AWS credentials

The only way to **verify AWS** credentials is to actually use them to sign a request and see if it works. You are correct that simply creating the connection object tells you nothing because it doesn't perform a request.


## Amazon S3 REST API Introduction

Making REST API calls directly from your code can be cumbersome. It requires you to write the necessary code to calculate a valid signature to authenticate your requests. We recommend the following alternatives instead:



*   Use the AWS SDKs to send your requests. With this option, you don't need to write code to calculate a signature for request authentication because the SDK clients authenticate your requests by using access keys that you provide. Unless you have a good reason not to, you should always use the AWS SDKs.
*   Use the AWS CLI to make Amazon S3 API calls.

AWS sdk is available in a lot of different languages like JS, PYTHON, JAVA, DOTNET, PHP etc.

AWS SDK for JavaScript (Alternative approach):

For Python : pip install boto3


## Configuring credentials

Boto3 will look in several locations when searching for credentials. The mechanism in which Boto3 looks for credentials is to search through a list of possible locations and stop as soon as it finds credentials. The order in which Boto3 searches for credentials is:



1. Passing credentials as parameters in the boto.client() method
2. Passing credentials as parameters when creating a Session object
3. Environment variables
4. Shared credential file (~/.aws/credentials)
5. AWS config file (~/.aws/config)
6. Assume Role provider
7. Boto2 config file (/etc/boto.cfg and ~/.boto)
8. Instance metadata service on an Amazon EC2 instance that has an IAM role configured.

Passing credentials as parameters in the boto.client() 


```
import boto3

client = boto3.client(
    's3',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY,
    aws_session_token=SESSION_TOKEN
)
```


Shared credential file (~/.aws/credentials)

You need to create a  credential file at ~/.aws/credentials. And add credentials \
[default] \
aws_access_key_id **=** YOUR_ACCESS_KEY \
aws_secret_access_key **=** YOUR_SECRET_KEY

The shared credentials file also supports the concept of profiles. Profiles represent logical groups of configuration. The shared credential file can have multiple profiles:


```
[default]
aws_access_key_id=foo
aws_secret_access_key=bar

[dev]
aws_access_key_id=foo2
aws_secret_access_key=bar2

[prod]
aws_access_key_id=foo3
aws_secret_access_key=bar3
```


You can then specify a profile name via the AWS_PROFILE environment variable or the profile_name argument when creating a Session. For example, we can create a Session using the “dev” profile and any clients created from this session will use the “dev” credentials:


```
import boto3
session = boto3.Session(profile_name='dev')
dev_s3_client = session.client('s3')
```


Boto3 makes it easy to integrate your Python application, library, or script with AWS services including Amazon S3, Amazon EC2, Amazon DynamoDB, and more.

Client and Resource are two different abstractions within the boto3 SDK for making AWS service requests. You would typically choose to use either the Client abstraction or the Resource abstraction to make AWS service requests. 

**Client:**



*   this is the original boto3 API abstraction
*   provides low-level AWS service access
*   all AWS service operations are supported by clients
*   exposes botocore client to the developer
*   typically maps 1:1 with the AWS service API
*   snake-cased method names (e.g. [ListBuckets](https://docs.aws.amazon.com/AmazonS3/latest/API/API_ListBuckets.html) API => [list_buckets](https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3.html#S3.Client.list_buckets) method)
*   generated from AWS **service** description

**Resource:**



*   this is the newer boto3 API abstraction
*   provides high-level, object-oriented API
*   does not provide 100% API coverage of AWS services
*   uses identifiers and attributes
*   has actions (operations on resources)
*   exposes subresources and collections of AWS resources
*   generated from **resource** description

Code to list all buckets:  \
only works if the user has the proper access eg: ListAllMyBuckets access \
"Resource": "arn:aws:s3:::*"


```

import boto3
s3 = boto3.resource('s3')
for bucket in s3.buckets.all():
	print(bucket.name)
```


Code to list all files in a bucket:


```
>>> import boto3
>>> s3 = boto3.resource('s3')
>>> objects = s3.Bucket(name='testbucketpritam').objects.all()
>>> for o in objects:
...     print(o)
... 

s3.ObjectSummary(bucket_name='testbucketpritam', key='Algorithms to Live By_ The Computer Science of Human Decisions ( PDFDrive ).pdf')
s3.ObjectSummary(bucket_name='testbucketpritam', key='All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019) _ by Samer Buna _ EdgeCoders _ Medium.pdf') 
```


 \
Code to upload a file


```
import boto3
s3_client = boto3.client('s3')
s3_client.upload_file('hello.txt', 'testbucketpritam', 'hello.txt')
```


upload_file(&lt;name of the file in local >, &lt;bucket name>, &lt;name of the file in s3>)

Code to Download a file from s3


```
>>> import boto3
>>> s3_client = boto3.client('s3')
>>> s3_client.download_file('testbucketpritam', 'hello.txt', 'hello2.txt')

```


download_file(&lt;Bucket Name>, &lt;FileName in S3>,&lt;file name that u want in local>)

Code to Edit a file in s3


```
>>> import boto3
>>> s3_client = boto3.client('s3')
>>> open('hello.txt','a+').write('Hello, world!')
13
>>> s3_client.upload_file('hello.txt', 'testbucketpritam', 'hello.txt')
```


 \
Code to get all file metadata


```
>>> import boto3
>>> s3client = boto3.client('s3')
>>> 
>>> paginator = s3client.get_paginator('list_objects_v2')
>>> page_iterator = paginator.paginate(Bucket='testbucketpritam')
>>> for bucket in page_iterator:
...     for file in bucket['Contents']:
...         print(file['Key'])
...         try:
...             metadata = s3client.head_object(Bucket='testbucketpritam', Key=file['Key'])
...             print(metadata)
...         except:
...             print("Failed {}".format(file['Key']))
... 
Algorithms to Live By_ The Computer Science of Human Decisions ( PDFDrive ).pdf
{'ResponseMetadata': {'RequestId': '7C74267CF4193023', 'HostId': 'IasZHHYmUPug6/qe4W53fJSSxcrnPerVCt5xOB/WsPDr2qgQcs0xqb7zJxPYxtxEogvQ552LrA4=', 'HTTPStatusCode': 200, 'HTTPHeaders': {'x-amz-id-2': 'IasZHHYmUPug6/qe4W53fJSSxcrnPerVCt5xOB/WsPDr2qgQcs0xqb7zJxPYxtxEogvQ552LrA4=', 'x-amz-request-id': '7C74267CF4193023', 'date': 'Tue, 02 Mar 2021 08:26:57 GMT', 'last-modified': 'Tue, 02 Mar 2021 06:13:44 GMT', 'etag': '"b926ad30c85d7bb4bd5da12ee2651e37"', 'accept-ranges': 'bytes', 'content-type': 'application/pdf', 'content-length': '2732141', 'server': 'AmazonS3'}, 'RetryAttempts': 0}, 'AcceptRanges': 'bytes', 'LastModified': datetime.datetime(2021, 3, 2, 6, 13, 44, tzinfo=tzutc()), 'ContentLength': 2732141, 'ETag': '"b926ad30c85d7bb4bd5da12ee2651e37"', 'ContentType': 'application/pdf', 'Metadata': {}}
All the fundamental React.js concepts, jammed into this single Medium article (updated August 2019) _ by Samer Buna _ EdgeCoders _ Medium.pdf
{'ResponseMetadata': {'RequestId': '7FBA9FCC1B69CC4B', 'HostId': 'hCZxPciVILDGXJvfjtac9irPOkFDEjwr9BKG8Dq69DIdgv7YmFVuoD3p0Z7srI/3YeLZkkN4F9U=', 'HTTPStatusCode': 200, 'HTTPHeaders': {'x-amz-id-2': 'hCZxPciVILDGXJvfjtac9irPOkFDEjwr9BKG8Dq69DIdgv7YmFVuoD3p0Z7srI/3YeLZkkN4F9U=', 'x-amz-request-id': '7FBA9FCC1B69CC4B', 'date': 'Tue, 02 Mar 2021 08:26:57 GMT', 'last-modified': 'Tue, 02 Mar 2021 06:13:42 GMT', 'etag': '"4f6f8b7d2de81151f34170777c301ba6"', 'accept-ranges': 'bytes', 'content-type': 'application/pdf', 'content-length': '3668501', 'server': 'AmazonS3'}, 'RetryAttempts': 0}, 'AcceptRanges': 'bytes', 'LastModified': datetime.datetime(2021, 3, 2, 6, 13, 42, tzinfo=tzutc()), 'ContentLength': 3668501, 'ETag': '"4f6f8b7d2de81151f34170777c301ba6"', 'ContentType': 'application/pdf', 'Metadata': {}}
hello.txt
{'ResponseMetadata': {'RequestId': '2893E89438DCAFC9', 'HostId': '1bQ8mGMeZh+nQSYsirplyuk67yHabWl7q1Cv/GKsJFk+RlfAmG6cgPCvPdQBucXfHqlRjnz1A3E=', 'HTTPStatusCode': 200, 'HTTPHeaders': {'x-amz-id-2': '1bQ8mGMeZh+nQSYsirplyuk67yHabWl7q1Cv/GKsJFk+RlfAmG6cgPCvPdQBucXfHqlRjnz1A3E=', 'x-amz-request-id': '2893E89438DCAFC9', 'date': 'Tue, 02 Mar 2021 08:26:57 GMT', 'last-modified': 'Tue, 02 Mar 2021 08:23:43 GMT', 'etag': '"738de4578efc7f327bb3897d162fb758"', 'accept-ranges': 'bytes', 'content-type': 'binary/octet-stream', 'content-length': '27', 'server': 'AmazonS3'}, 'RetryAttempts': 0}, 'AcceptRanges': 'bytes', 'LastModified': datetime.datetime(2021, 3, 2, 8, 23, 43, tzinfo=tzutc()), 'ContentLength': 27, 'ETag': '"738de4578efc7f327bb3897d162fb758"', 'ContentType': 'binary/octet-stream', 'Metadata': {}}
hello1.txt
{'ResponseMetadata': {'RequestId': '8445E9AC02B726B7', 'HostId': 'gsMC+IZY8hzl77Z8Gmuad1kNlMmBCIfNppu85lGK0AvzgZ8Uxvqb+sDXmH0mITLPeFNiq9pi+aw=', 'HTTPStatusCode': 200, 'HTTPHeaders': {'x-amz-id-2': 'gsMC+IZY8hzl77Z8Gmuad1kNlMmBCIfNppu85lGK0AvzgZ8Uxvqb+sDXmH0mITLPeFNiq9pi+aw=', 'x-amz-request-id': '8445E9AC02B726B7', 'date': 'Tue, 02 Mar 2021 08:26:58 GMT', 'last-modified': 'Tue, 02 Mar 2021 08:15:21 GMT', 'etag': '"d41d8cd98f00b204e9800998ecf8427e"', 'accept-ranges': 'bytes', 'content-type': 'binary/octet-stream', 'content-length': '0', 'server': 'AmazonS3'}, 'RetryAttempts': 0}, 'AcceptRanges': 'bytes', 'LastModified': datetime.datetime(2021, 3, 2, 8, 15, 21, tzinfo=tzutc()), 'ContentLength': 0, 'ETag': '"d41d8cd98f00b204e9800998ecf8427e"', 'ContentType': 'binary/octet-stream', 'Metadata': {}}
```



### Code to download previous versions


```
import boto3
from boto3.s3.transfer import S3Transfer
ACCESS_KEY = 'AKIA3MTVLOSP4KOI47XK'
SECRET_KEY = '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'
BUCKET_NAME = 'testbucketpritam'
key = 'hello1.txt'
client = boto3.client(
    's3',
    aws_access_key_id=ACCESS_KEY,
    aws_secret_access_key=SECRET_KEY
)
s3 = boto3.resource('s3')
versions = s3.Bucket(BUCKET_NAME).object_versions.filter(Prefix=key)
transfer = S3Transfer(client)
for version in versions:
    obj = version.get()
    print(obj['LastModified'].strftime("%Y%m%d%H%M%S")+ "_" + key)
    transfer.download_file(BUCKET_NAME, key, obj['LastModified'].strftime("%Y%m%d%H%M%S")+ "_" + key,
                                extra_args={'VersionId': obj['VersionId'] })
```



## Contact

Pritam Sen

 

---
title : SFTP
sidebar_label : SFTP
---


## Scope of Integration

Yellow.ai Integration with SFTP allows you to seamlessly connect your remote server with the yellow.ai platform. Using this integration, one can get remote files, make a directory, delete directory, upload files to remote server, check if file exists or not.

# Configuration

Configuring the integration with SFTP is straightforward. Follow the steps defined below to start integrating:

**To integrate SFTP with your bot on the platform:**

1. Go to Integration section
2. In Integration click on the connect for the SFTP.
3. Enter Host, Port, username, Password.

![alt_text](https://i.imgur.com/xepX9Ka.png "image_tooltip")

4. Click on Save
5. Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.

6. Store SFTP response in Object type variable in action-node.

![](https://i.imgur.com/KCWAcMf.png)

If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::


# Use-cases 

Following are the use-cases which are currently accommodated in the Integration:

:::note
When multiple accounts are added, select the appropriate account for each node, allowing you to leverage the unique functionalities of each account for their intended purposes.
:::


### 1. SFTP File Transfer
  From this method you can easily upload files to a remote server.

_ Node Input Params:-_                        



|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|fileCdnUrl*|https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png|Data source for data to copy to the remote server.|
|remoteFilePath*|/uploads/directoryPath/demo.png|Path to the remote file to be created on the server with file name.|
|appendTimeInfilePath*|True or false|If true then It will append timestamp in file name otherwise same name from remote file path.|
|recursive|true/false|If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false|



### 2. SFTP Get File
Retrieve a file from a remote SFTP server

_ Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remoteFilePath*|/Directory/filename.ext|Path to the remote file to download|
|secureupload|true/false|If true then It will give minio directory path otherwise it will give CDN url of files|



### 3. SFTP Make Directory 
Create a new directory. If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false.

_ Node Input Params:-_                        



|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remoteDirPath*|/DirectoryPath|Path to directory with new dir name|
|recursive|true/false|If true then the method will create any directories in the path which do not already exist|





### 4. SFTP Delete Directory
Remove a directory. If removing a directory and recursive flag is set to `true`, the specified directory and all sub-directories and files will be deleted. If set to false and the directory has sub-directories or files, the action will fail. 

_ Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remoteDirPath*|/DirectoryPath|Path to directory|
|recursive|true/false|recursive flag is set to true, the specified directory and all sub-directories and files will be deleted.|


### 5. SFTP Delete Files

Delete a file on the remote server.

_ Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remotefilePath*|/DirectoryPath/filename.txt|string. Path to remote file to be deleted.|
|noErrorOk*|true/false|boolean. If true, no error is raised when you try to delete a non-existent file. Default is false.|



### 6. SFTP Data Append
Append the `input` data to an existing remote file. There is no integrity checking performed apart from normal writeStream checks. This function simply opens a writeStream on the remote file in append mode and writes the data passed in to the file.

_ Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|fileCdnUrl*|https://www.w3.org/TR/PNG/iso_8859-1.txt|CDN url for Data to append to remote file|
|remoteFilePath*|/DirectoryPath/filename.txt|Path to remote file if files do not exist then It will auto create.|


### 7. SFTP List
 Retrieves a directory listing

_Node Input Params:-_                        


|Field Name|Sample Input|Remarks|
|--- |--- |--- |
|remoteDir*|/DirectoryPath|remote directory path|
|pattern|*|{string|RegExp} A pattern used to filter the items included in the returned array. Pattern can be a simple glob-style string or a regular expression. Defaults to *|


### 8. SFTP Exists
 Tests to see if a remote file or directory exists. Returns type of remote object if it exists or false if it does not


### 9. SFTP Chmod
Change the mode (read, write or execute permissions) of a remote file or directory.

* remotePath: string. Path to the remote file or directory
* newmode: octal. New mode to set for the remote file or directory


# **References:**


1. [https://www.npmjs.com/package/ssh2-sftp-client](https://www.npmjs.com/package/ssh2-sftp-client)
2. [https://www.filestash.app/sftp-browser.html](https://www.filestash.app/sftp-browser.html)


## Sample Experience

Below is a video that depicts how this integration works.
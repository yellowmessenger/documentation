---
title : SFTP
sidebar_label : SFTP
---


Yellow.ai's integration with SFTP enables managing data from different sources seamlessly such as fetching remote files, creating directories, deleting directories, uploading files to the remote server, and checking the existence of files. You can connect multiple SFTP servers.

You can also [schedule regular synchronization of user data](https://docs.yellow.ai/docs/platform_concepts/engagement/cdp/user_data/sync_users) directly from connected SFTP servers to User 360. This enhances data management capabilities, improves data accuracy, and enables more informed decision-making based on real-time user insights. s or not.

## SFTP integration

Configuring the integration with SFTP is straightforward. Follow the steps defined below to start integrating:

**To integrate SFTP with your bot on the platform:**

1. Go to Integration section
2. Seach and select **SFTP**.
3. Enter **Give account name**, **Host**, **Port**, **username**, **Password**.
4. Click **Connect**

   ![](https://i.imgur.com/vl7ZP9q.png)

5. If you do not want to upload your SFTP account password, enable **Private key based authentication**. Reach out to our team at support@yellow.ai for the private key. Once you recieve it,  whitelist the key at the SFTP's end to set up a connection between Yellow.ai and SFTP without the password.

   To whitelist our private key in your remote SFTP server, follow the below mentioned commands:

  ```
  — on remote system ——

  mkdir -p .ssh
  nano .ssh/authorized_keys
  —- add the public key generated on your Mac —

  chmod 600 .ssh/authorized_keys
  chmod 700 .ssh

  ```

6. Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.

7. Store SFTP response in Object type variable in action-node.

   ![](https://i.imgur.com/KCWAcMf.png)

8. If you have multiple accounts, follow the above mentioned steps to add each of them.

:::note
1. Enter a unique name for each account to easily identify them within the yellow.ai platform. It is recommended to use a name that aligns with its purpose for better usability. 
2. You can add a maximum of 5 merchant accounts.
3. In a two-tier environment, such as bots with only Development/Live environments, you can add account names only in the development mode. Once added and flows have been built, in the Live mode, you can only choose the account names and not edit them.
4. In a three-tier environment, such as bots with Staging/Sandbox/Production modes, in Staging and Sandbox modes, you can add and edit new accounts. However, in Production, only the account details added in Staging will be available. You can only map in the production environment.
:::


## Features enabled on SFTP integration 

Once the SFTP connection is established, you can execute the following operations related to managing data between the bot and SFTP seamlessly:

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



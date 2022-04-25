---
title : SFTP
sidebar_label : SFTP
---


## Scope of Integration

Yellow.ai Integration with SFTP allows you to seamlessly connect your remote server with the yellow.ai platform. Using this integration, one can get remote files, make a directory, delete directory, upload files to remote server, check if file exists or not.


## Use-cases 

Following are the use-cases which are currently accommodated in the Integration:



1. **SFTP File Transfer**:- 
From this method you can easily upload files to a remote server.


- Node Input Params:
```html
<table>
  <tr>
   <td>Field Name
   </td>
   <td>Sample Input
   </td>
   <td>Remarks
   </td>
  </tr>
  <tr>
   <td>fileCdnUrl*
   </td>
   <td><code><em>https://cdn.pixabay.com/photo/2017/01/03/02/07/vine-1948358__340.png</em></code>
   </td>
   <td>Data source for data to copy to the remote server.
   </td>
  </tr>
  <tr>
   <td>remoteFilePath*
   </td>
   <td><code><em>/uploads/directoryPath/demo.png</em></code>
   </td>
   <td>Path to the remote file to be created on the server with file name.
   </td>
  </tr>
  <tr>
   <td>appendTimeInfilePath*
   </td>
   <td><code><em>True or false</em></code>
   </td>
   <td>If true then It will append timestamp in file name otherwise same name from remote file path.
   </td>
  </tr>
  <tr>
   <td>recursive
   </td>
   <td><code><em>true/false</em></code>
   </td>
   <td>If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false
   </td>
  </tr>
</table>
```



2. **SFTP Get File**:
Retrieve a file from a remote SFTP server

- Node Input Params:                 

```html
<table>
  <tr>
   <td>
Field Name
   </td>
   <td>Sample Input
   </td>
   <td>Remarks
   </td>
  </tr>
  <tr>
   <td>remoteFilePath*
   </td>
   <td><code><em>/Directory/filename.ext</em></code>
   </td>
   <td>Path to the remote file to download
   </td>
  </tr>
  <tr>
   <td>secureupload
   </td>
   <td><code><em>true/false</em></code>
   </td>
   <td>If true then It will give minio directory path otherwise it will give CDN url of files
   </td>
  </tr>
</table>
```



3. **SFTP Make Directory**:

Create a new directory. If the recursive flag is set to true, the method will create any directories in the path which do not already exist. Recursive flag defaults to false.

- Node Input Params:                   

```html
<table>
  <tr>
   <td>
Field Name
   </td>
   <td>Sample Input
   </td>
   <td>Remarks
   </td>
  </tr>
  <tr>
   <td>remoteDirPath*
   </td>
   <td><code><em>/DirectoryPath</em></code>
   </td>
   <td>Path to directory with new dir name
   </td>
  </tr>
  <tr>
   <td>recursive
   </td>
   <td><code><em>true/false</em></code>
   </td>
   <td>If true then the method will create any directories in the path which do not already exist
   </td>
  </tr>
</table>
```



4. **SFTP Delete Directory**:

Remove a directory. If removing a directory and recursive flag is set to `true`, the specified directory and all sub-directories and files will be deleted. If set to false and the directory has sub-directories or files, the action will fail.

- Node Input Params:

```html
<table>
  <tr>
   <td>
Field Name
   </td>
   <td>Sample Input
   </td>
   <td>Remarks
   </td>
  </tr>
  <tr>
   <td>remoteDirPath*
   </td>
   <td><code><em>/DirectoryPath</em></code>
   </td>
   <td>Path to directory 
   </td>
  </tr>
  <tr>
   <td>recursive
   </td>
   <td><code><em>true/false</em></code>
   </td>
   <td>recursive flag is set to <code>true</code>, the specified directory and all sub-directories and files will be deleted.
   </td>
  </tr>
</table>
```



5. **SFTP Delete Files**:

Delete a file on the remote server. \

- Node Input Params:                       

```html
<table>
  <tr>
   <td>
Field Name
   </td>
   <td>Sample Input
   </td>
   <td>Remarks
   </td>
  </tr>
  <tr>
   <td>remotefilePath*
   </td>
   <td><code><em>/DirectoryPath/filename.txt</em></code>
   </td>
   <td>string. Path to remote file to be deleted.
   </td>
  </tr>
  <tr>
   <td>noErrorOk*
   </td>
   <td><code><em>true/false</em></code>
   </td>
   <td>boolean. If true, no error is raised when you try to delete a non-existent file. Default is false.
   </td>
  </tr>
</table>
```



6. **SFTP Data Append**:
Append the `input` data to an existing remote file. There is no integrity checking performed apart from normal writeStream checks. This function simply opens a writeStream on the remote file in append mode and writes the data passed in to the file. \

- Node Input Params:

```html
<table>
  <tr>
   <td>
Field Name
   </td>
   <td>Sample Input
   </td>
   <td>Remarks
   </td>
  </tr>
  <tr>
   <td>fileCdnUrl*
   </td>
   <td><code><em>https://www.w3.org/TR/PNG/iso_8859-1.txt</em></code>
   </td>
   <td> CDN url for Data to append to remote file
   </td>
  </tr>
  <tr>
   <td>remoteFilePath*
   </td>
   <td><code><em>/DirectoryPath/filename.txt</em></code>
   </td>
   <td>Path to remote file if files do not exist then It will auto create.
   </td>
  </tr>
</table>
```



7. **SFTP List**:
Retrieves a directory listing

- Node Input Params:
```html
<table>
  <tr>
   <td>
Field Name
   </td>
   <td>Sample Input
   </td>
   <td>Remarks
   </td>
  </tr>
  <tr>
   <td>remoteDir*
   </td>
   <td><code><em>/DirectoryPath</em></code>
   </td>
   <td> remote directory path
   </td>
  </tr>
  <tr>
   <td>pattern
   </td>
   <td><code><em>*</em></code>
   </td>
   <td>{string|RegExp} A pattern used to filter the items included in the returned array. Pattern can be a simple <em>glob</em>-style string or a regular expression. Defaults to <code>*</code>
   </td>
  </tr>
</table>
```



8. **SFTP Exists**:

Tests to see if a remote file or directory exists. Returns type of remote object if it exists or false if it does not

9. **SFTP Chmod**:
Change the mode (read, write or execute permissions) of a remote file or directory.

* remotePath: string. Path to the remote file or directory
* newmode: octal. New mode to set for the remote file or directory



# Configuration

Configuring the integration with SFTP is straightforward. Follow the steps defined below to start integrating:

**To integrate SFTP with your bot on the platform:**

1. Go to Integration section
2. In Integration click on the connect for the SFTP.
3. Enter Host, Port, username, Password.

![](https://i.imgur.com/xepX9Ka.png)

4. Click on Save
5. Once the integration is done successfully, You can find an Integration option available in addition to the existing nodes.

6. Store SFTP response in Object type variable in action-node.

![](https://i.imgur.com/KCWAcMf.png)


Following the above steps will connect your SFTP remote server  with the yellow.ai platform.


# **References:**

1. [https://www.npmjs.com/package/ssh2-sftp-client](https://www.npmjs.com/package/ssh2-sftp-client)
2. [https://www.filestash.app/sftp-browser.html](https://www.filestash.app/sftp-browser.html)


## Sample Experience

Below is a video that depicts how this integration works.
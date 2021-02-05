---
title: app.term
sidebar_label: app.term
---
## Output Parameters
  returns the last term input if exist
​
## Examples
​
```js
if(app.term){
	app.dataStore.search({
            table: "someTable",
            body: {
                "query": {
             
                    "query_string": {
                        "query": `*${app.term.toLowerCase()}*`,
                        "fields": ['employee_name','employee_id']
                    }
                    }

                
            }
        }).then(data=>{
        console.log(data)
        }).catch(e=>console.log(e));})
}
```
​
> It can be used to for auto complete in steps.

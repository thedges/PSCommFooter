# PSCommFooter
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

Simple LWC demo component that provides a configurable footer for communities 

<b>Here are steps to use this component:</b>
  1. Install the component per the "Deploy to Salesforce" button below
  2. Setup users to have access to custom objects that drive the template. Either assign the permset "PSFileAttachTemplate" to your users  ...or... make sure users have read/write access to the PSFileAttachTemplate and PSFileAttachDef objects and PSFileAttachTemplate tab
  3. If you are using the component in a community, by default is seems the org wide default for the PSFileAttachTemplate object will default to 'Private'. Make sure that is set to 'Public Read Only' else **the component will not show in community**.
  4. Navigate to the PSFileAttachTemplate tab and create a new template. Give it a logical name as you will use this when configuring the Lightning Component later
  5. For the template, create a list of file definitions for the files to attach to the record. Set the record fields (filename, required, description, etc...) as defined above
  6. Drop the PSFileAttachTemplate Lightning Component on an internal or community page. Configure the Lightning Component and select the appropriate template name you specified earlier.


<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

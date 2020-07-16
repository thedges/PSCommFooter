# PSCommFooter
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

Simple LWC demo component that provides a configurable footer for communities 

<b>Here are steps to use this component:</b>
  1. Install the component per the **Deploy to Salesforce** button below
  2. Setup users to have access to custom objects that drive the component. Either assign the permset **PSCommFooter** to your users  ...or... make sure users have access to following:
     * Read access to PSCommFooterConfig, PSCommFooterTopic, PSCommFooterLink, and PSCommFooterPrimaryLink objects 
     * Read access to all fields in above objects
     * Access to PSCommFooterController and PSCommFooterConfigPicklist Apex classes
     * Access to PSCommFooterConfig tab
  3. The default external org wide default for the PSCommFooterConfig object will default to 'Private'. Make sure to set to 'Public Read Only' else **the component will not show in community**.
  4. Next create a configuration to drive the component:
     * First navigate to the **PSCommFooterConfig tab** and create a record. Fill out all appropriate fields per above definitions.
     * If you are going to use the "Big" option, create child PSCommFooterTopics
       * For each PSCommFooterTopic created above, create 1..many PSCommFooterLink records
     * If you are going to use the "Default" or "Slim" options, create 1..many PSCommFooterPrimaryLink records
  6. Drop the **psCommFooter** Lightning Component in the footer section of community. Configure the Lightning Component by setting the template type and pick your configuration in step 4 above.


<a href="https://githubsfdeploy.herokuapp.com">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

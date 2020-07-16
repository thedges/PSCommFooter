# PSCommFooter
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

This component provides an easy way to add a configurable footer to your community (no HTML or image editor needed). Many SEs will create a static image for the footer using image editor tools. While this can provide a high fidelity footer, the footer is not easily updateable by next SE and the static image is not responsive to smaller screen formats. This component provides a fully configurable footer that is driven based on configuration data, is responsive to various formats, and is easy to change functionality for as requirements change.

The first release of this component is based on the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) and specifically their [footer component](https://designsystem.digital.gov/components/footer/) definition. The USWDS footer has 3 options: Big, Default, and Slim which all 3 are supported. Here are 3 screenshots of this component implementing the 3 USWDS options:

**USWDS Big**

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Big.png "Footer-Big")

**USWDS Default**

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Default.png "Footer-Default")

**USWDS Slim**

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Slim.png "Footer-Slim")

**Color Overrides**

The above are the default color styles from the USWDS design system. Certain aspections (background color, text color, etc...) can be configured to override the default styling to match closer to agency site if needed. Here is an example of customized colors.

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Color.png "Footer-Color")

# Library Dependency

This component utilizes the following:
  * [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) - a design system for the federal government for public facing government websites. This component primary utilizes the CSS styling for the [footer component](https://designsystem.digital.gov/components/footer/)
  
  
# Installation Instructions

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

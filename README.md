# PSCommFooter
THIS SOFTWARE IS COVERED BY [THIS DISCLAIMER](https://raw.githubusercontent.com/thedges/Disclaimer/master/disclaimer.txt).

This component provides an easy way to add a configurable footer to your community (no HTML or image editor needed). Many SEs will create a static image for the footer using image editor tools. While this can provide a high fidelity footer, the footer is not easily updateable by next SE and the static image is not responsive to smaller screen formats. This component provides a fully configurable footer that is driven based on configuration data, is responsive to various formats, and is easy to change functionality for as requirements change.

The first release of this component is based on the [U.S. Web Design System (USWDS)](https://designsystem.digital.gov/) and specifically their [footer component](https://designsystem.digital.gov/components/footer/) definition. The USWDS footer has 3 options: Big, Default, and Slim which all 3 are supported. Here are 3 screenshots of this component implementing the 3 USWDS options:

**USWDS Big**

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Big2.png "Footer-Big")

**USWDS Default**

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Default.png "Footer-Default")

**USWDS Slim**

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Slim.png "Footer-Slim")

**Color Overrides**

The above are the default color styles from the USWDS design system. Certain color styles (background color, text color, etc...) can be overriden in the component configuration to match closer to agency/customer site if needed. Here is an example of customized colors.

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Color.png "Footer-Color")

# Configuration

The configuration of this component is driven by 4 custom objects as defined in this schema. These object model and configuration parameters were primarily driven based on the USWDS footer component/variants but can provide base for other footer layout options in the future.

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Schema.png "Footer-Schema")

**PSCommFooterConfig**

This is the main configuration object for the component. Create a record for each footer configuration you would like to create (i.e. create footer for each community you have defined in your org). The field definitions for this object will be broken up in to sections:

*Base Information* 

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Config Name | Text | The name for this configuration. This will be used in picklist for the component configuration. |
| Logo Icon | Text | A link to custom/agency icon. Upload image file as static resource and reference like '/resource/STATIC_RESOURCE_NAME'. |
| Primary Label | Text | The customer name |
| Secondary Label | Text | A name for customer's contact center |
| Email Signup? | Checkbox | Show the email signup section in the footer. Currently this is non-functional and for display purposes only. |
| Powered by Salesforce? | Checkbox | **NOT IMPLEMENTED** To display a "Powered by Salesforce" are in footer |
| Copyright | Text | **NOT IMPLEMENTED** To display a copyright in footer |

*Contact Information*

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Street | Text | Customer street address |
| City | Text | Customer city |
| State | Text | Customer state |
| Zipcode | Text | Customer zipcode |
| Phone | Phone | Customer phone # |
| Email | Email | Customer email |

*Social* - any social icon not defined will not show up in footer

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Facebook | URL | Full URL to customer Facebook page |
| Twitter | URL | Full URL to customer Twitter page |
| Youtube | URL | Full URL to customer Youtube page |
| RSS | URL | Full URL to customer RSS feed |
| LinkedIn | URL | Full URL to customer LinkedIn page |
| Home | URL | Full URL to customer Home page |

*Color Overrides* - ability to override the default color scheme. The color mappings to the specific template is provided below. All colors should be in hex format with leading '#'. An example is '#001a4d".

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Primary Color 1..5 | Text | Five primary color options |
| Secondary Color 1..5 | Text | Five secondary color options |


**PSCommFooterTopic**

When using the "Big" version of the USWDS footer, this object provides a list of topic areas (vertical lists in top section of footer). These are children records to PSCommFooterConfig record.

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Label | Text | The text label for the topic |
| Order | Text | The display order for the topics (i.e. the order they are layed out on page) |

**PSCommFooterLink**

When using the "Big" version of the USWDS footer, this object provides a 1..many hyperlinks for a topic as defined above. These are children records to PSCommFooterTopic record.

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Label | Text | The text label for hyperlink |
| URL | Text | The URL target of the hyperlink |
| Order | Text | The display order for the primary links (i.e. the order they are layed out on page) |

**PSCommFooterPrimaryLink**

When using the "Default" or "Slim" versions of the USWDS footer, this object provides a list of primary links. These are children records to PSCommFooterConfig record.

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Label | Text | The text label for hyperlink |
| URL | Text | The URL target of the hyperlink |
| Order | Text | The display order for the primary links (i.e. the order they are layed out on page) |

# USWDS Component Color Overrides

Here are the color overrides for the USWDS footer component. As shown in the screenshots above, the USWDS component has a top "primary" section and a bottom "secondary" section. Here are mappings of the configuration color fields to the USWDS component:

| Parameter  | Type | Definition |
| ------------- | ------------- |------------- |
| Primary Color 1 | Text | Background color of the top primary section |
| Primary Color 2 | Text | Text color of the topic header strings |
| Primary Color 3 | Text | Text color of the links (i.e. hyperlinks) under each topic |
| Primary Color 4 | Text | The email signup text color|
| Secondary Color 1 | Text | Background color of the bottom secondary section |
| Secondary Color 2 | Text | The agency (i.e. primary label) text color |
| Secondary Color 3 | Text | The agency contact center name (i.e. secondary label) text color |
| Secondary Color 4 | Text | The background color of the social icons |

Here is diagram of color assignments:

![alt text](https://github.com/thedges/PSCommFooter/blob/master/Footer-Color-USWDS.png "Footer-Color-USWDS")


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

@isTest
public class PSCommFooterControllerTest {
    @isTest static void testGetConfigMissing() {
        String configResp = PSCommFooterController.getConfig(null);
        
        System.assertEquals('{ }', configResp);
        
    }

    @isTest static void testGetConfigWithRecords() {
        // Test data setup
        // Create a PSConfigFooter Entry
        PSCommFooterConfig__c pscfg = new PSCommFooterConfig__c(Name = 'Test Config Name', Primary_Label__c = 'Test Primary label');
        
        insert pscfg;
        
        // Create a PSConfigFooterTopic Entry
        PSCommFooterTopic__c pscft = new PSCommFooterTopic__c(Label__c = 'Test Label',
                                                              Order__c = 1, 
                                                              PSCommFooterConfig__c = pscfg.Id);
        
        insert pscft;
        
        // Create on PSCommFooterLink Entry
        PSCommFooterLink__c pscfl = new PSCommFooterLink__c(Label__c = 'Test Link Label',
                                                            URL__c = 'https://testlinkurl.com',
                                                            Order__c = 1,
                                                            PSCommFooterTopic__c = pscft.Id
                                                           );
        insert pscfl;
        
        // Create on PSCommFooterPrimaryLink Entry
        PSCommFooterPrimaryLink__c pscfpl = new PSCommFooterPrimaryLink__c(Label__c = 'Test Label',
                                                                           URL__c = 'https://testurl.com',
                                                                           Order__c = 1,
                                                                           PSCommFooterConfig__c = pscfg.Id);
        
        insert pscfpl;
        
        // Perform full test with one config
        Test.startTest();
        Database.SaveResult result = Database.insert(pscfg, false);
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0, result.getErrors()[0].getMessage());
        
        result = Database.insert(pscft, false);
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0, result.getErrors()[0].getMessage());
        
        result = Database.insert(pscfl, false);
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0, result.getErrors()[0].getMessage());
        
        result = Database.insert(pscfpl, false);
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0, result.getErrors()[0].getMessage());
        
        String configResp = PSCommFooterController.getConfig('Test Config Name');
        
        String expectedCfg = '{\n' +
    	'  "primayLinks" : [ {\n' +
    	'    "order" : 1,\n' +
    	'    "url" : "https://testurl.com",\n' +
    	'    "label" : "Test Label",\n' +
    	'    "id" : "' + pscfpl.Id+ '"\n' +
    	'  } ],\n' +
    	'  "topics" : [ {\n' +
    	'    "links" : [ {\n' +
    	'      "order" : 1,\n' +
    	'      "url" : "https://testlinkurl.com",\n' +
    	'      "label" : "Test Link Label",\n' +
    	'      "id" : "' + pscfl.Id + '"\n' + 
    	'    } ],\n' +
    	'    "order" : 1,\n' +
    	'    "label" : "Test Label",\n' + 
    	'    "id" : "'+ pscft.Id + '"\n' +  
    	'  } ],\n' +
    	'  "secondaryColor5" : null,\n' +
    	'  "secondaryColor4" : null,\n' +
    	'  "secondaryColor3" : null,\n' +
    	'  "secondaryColor2" : null,\n' +
    	'  "secondaryColor1" : null,\n' +
    	'  "primaryColor5" : null,\n' +
    	'  "primaryColor4" : null,\n' +
    	'  "primaryColor3" : null,\n' +
    	'  "primaryColor2" : null,\n' +
    	'  "primaryColor1" : null,\n' +
    	'  "home" : null,\n' +
    	'  "linkedin" : null,\n' +
    	'  "rss" : null,\n' +
    	'  "youtube" : null,\n' +
    	'  "twitter" : null,\n' +
    	'  "facebook" : null,\n' +
    	'  "email" : null,\n' +
    	'  "phone" : null,\n' +
    	'  "zipcode" : null,\n' +
    	'  "state" : null,\n' +
    	'  "city" : null,\n' +
    	'  "street" : null,\n' +
    	'  "copyright" : null,\n' +
    	'  "poweredBy" : false,\n' +
    	'  "emailSignup" : false,\n' +
    	'  "secondaryLabel" : null,\n' +
    	'  "primaryLabel" : "Test Primary label",\n' +
    	'  "logoIcon" : null,\n' +
    	'  "configName" : "Test Config Name"\n' +
    	'}';
        
        System.assertEquals(expectedCfg, configResp);
            
	    Test.stopTest();
    
}

}
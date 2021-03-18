@isTest
public class PSCommFooterConfigPicklistTest {
    @isTest static void getDefaultValueTest() {
        
        VisualEditor.DataRow expectedValue = new VisualEditor.DataRow('-noselection', '--SELECT--');

        VisualEditor.DataRow testValue = new PSCommFooterConfigPicklist().getDefaultValue();
        
        System.assertEquals(expectedValue.getLabel(), testValue.getLabel(), 'Default Values Labels are not equal.');
        System.assertEquals(expectedValue.getValue(), testValue.getValue(), 'Default Values are not equal.');
    }
    
    @isTest static void getValuesTest() {

        // Test data setup
        // Create a PSConfigFooter Entry
        PSCommFooterConfig__c pscfg = new PSCommFooterConfig__c(Name = 'Test Config Name', Primary_Label__c = 'Test Primary label');
        
        insert pscfg;

        test.startTest();
		Database.SaveResult result = Database.insert(pscfg, false);
        System.assert(!result.isSuccess());
        System.assert(result.getErrors().size() > 0, result.getErrors()[0].getMessage());
        
        //Test is expecting just one Picklist Entry inserted above
        VisualEditor.DynamicPickListRows testValues = new PSCommFooterConfigPicklist().getValues(); 
        System.assertEquals(1, testValues.size(), 'No PSCommFooterConfigPicklist values found.');

        test.stopTest();
    }
}
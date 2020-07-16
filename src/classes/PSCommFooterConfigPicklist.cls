global class PSCommFooterConfigPicklist extends VisualEditor.DynamicPickList {
    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('-noselection', '--SELECT--');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();

        List<PSCommFooterConfig__c> configList = [SELECT Id, Name FROM PSCommFooterConfig__c ORDER BY Name ASC];
        for (PSCommFooterConfig__c cfg : configList)
        {
          VisualEditor.DataRow value = new VisualEditor.DataRow(cfg.Name, cfg.Name);
          myValues.addRow(value);
        }

        return myValues;
    }
        
}
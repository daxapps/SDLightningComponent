public class RecordPageDocGenController {
    public static String templateName = 'Generic Template';
   
    @AuraEnabled
    public static String getTemplateID() {
        List<SDOC__SDTemplate__c> templateList;
        templateList = [SELECT Id FROM SDOC__SDTemplate__c WHERE Name = :RecordPageDocGenController.templateName];
        if (templateList.size() == 1) {
        	SDOC__SDTemplate__c template = templateList[0];
    	    return template.Id;
        } else if (templateList.size() == 0) {
            throw new AuraHandledException('Unable to find the choosen template [' + templateName + ']');
	    } else {
        	throw new AuraHandledException('More than one template [' + templateName + '] found');
    	}
    }
}
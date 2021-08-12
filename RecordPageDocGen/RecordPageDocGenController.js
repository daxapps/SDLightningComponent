({  
	openDocumentGenerationPage : function(component, event, helper) {
        var action = component.get("c.getTemplateID");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                var templateId = response.getReturnValue();
        		window.location.href = "/apex/SDOC__SDCreate1?id=" + templateId + "&Object=SDOC__SDTemplate__c&doclist=" + templateId;
            } else if (state === "ERROR") {
                var errors = response.getError();
                if (errors) {
                    if (errors[0] && errors[0].message) {
						helper.handleErrors(errors);
                    } else {
                        console.error("Unknown error");
                    }
                }
            }
        })
        $A.enqueueAction(action);
    }
})
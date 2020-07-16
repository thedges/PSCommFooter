public without sharing class PSCommFooterController {
    @AuraEnabled
    public static String getConfig(String configName)
    {
        Map<String, Object> resp = new Map<String, Object>();

        if (configName != null)
        {
            PSCommFooterConfig__c config =
                [SELECT City__c, Copyright__c, Email__c, Email_Signup__c, Facebook__c, Home__c,
                        Id, LinkedIn__c, Logo_Icon__c, Name, OwnerId, Phone__c, Powered_by_Salesforce__c,
                        Primary_Label__c, RSS__c, Secondary_Label__c, State__c, Street__c,
                        Twitter__c, YouTube__c, Zipcode__c, 
                        Primary_Color_1__c, Primary_Color_2__c, Primary_Color_3__c,Primary_Color_4__c,Primary_Color_5__c, 
                        Secondary_Color_1__c, Secondary_Color_2__c, Secondary_Color_3__c, Secondary_Color_4__c, Secondary_Color_5__c,
                        (SELECT Id, Label__c, Order__c FROM PSCommFooterTopic__r ORDER BY Order__c),
                        (SELECT Id, Label__c, URL__c, Order__c FROM PSCommFooterPrimaryLink__r ORDER BY Order__c)
                        FROM PSCommFooterConfig__c
                        WHERE Name = :configName];


            resp.put('configName', config.Name);
            resp.put('logoIcon', config.Logo_Icon__c);
            resp.put('primaryLabel', config.Primary_Label__c);
            resp.put('secondaryLabel', config.Secondary_Label__c);
            resp.put('emailSignup', config.Email_Signup__c);
            resp.put('poweredBy', config.Powered_by_Salesforce__c);
            resp.put('copyright', config.Copyright__c);

            resp.put('street', config.Street__c);
            resp.put('city', config.City__c);
            resp.put('state', config.State__c);
            resp.put('zipcode', config.Zipcode__c);
            resp.put('phone', config.Phone__c);
            resp.put('email', config.Email__c);

            resp.put('facebook', config.Facebook__c);
            resp.put('twitter', config.Twitter__c);
            resp.put('youtube', config.YouTube__c);
            resp.put('rss', config.RSS__c);
            resp.put('linkedin', config.LinkedIn__c);
            resp.put('home', config.Home__c);

            resp.put('primaryColor1', config.Primary_Color_1__c);
            resp.put('primaryColor2', config.Primary_Color_2__c);
            resp.put('primaryColor3', config.Primary_Color_3__c);
            resp.put('primaryColor4', config.Primary_Color_4__c);
            resp.put('primaryColor5', config.Primary_Color_5__c);
            resp.put('secondaryColor1', config.Secondary_Color_1__c);
            resp.put('secondaryColor2', config.Secondary_Color_2__c);
            resp.put('secondaryColor3', config.Secondary_Color_3__c);
            resp.put('secondaryColor4', config.Secondary_Color_4__c);
            resp.put('secondaryColor5', config.Secondary_Color_5__c);

            ////////////////
            // add topics //
            ////////////////
            List<Map<String, Object>> topicList = new List<Map<String, Object>>();
            if (config.PSCommFooterTopic__r != null && config.PSCommFooterTopic__r.size() > 0)
            {
                List<Id> idList = new List<Id>();
                Map<Id, Map<String, Object>> topicMap = new Map<Id, Map<String, Object>>();

                for (PSCommFooterTopic__c topicTemp : config.PSCommFooterTopic__r)
                {
                  idList.add(topicTemp.Id);

                  Map<String, Object> topic = new Map<String, Object>();
                  topic.put('id', topicTemp.Id);
                  topic.put('label', topicTemp.Label__c);
                  topic.put('order', topicTemp.Order__c);
                  topicList.add(topic);

                  topicMap.put(topicTemp.Id, topic);
                }

                System.debug('idList=' + JSON.serializePretty(idList));

                List<PSCommFooterLink__c> linkList = [SELECT Id, Label__c, URL__c, PSCommFooterTopic__c, Order__c 
                                                        FROM PSCommFooterLink__c 
                                                       WHERE PSCommFooterTopic__c IN :idList
                                                       ORDER BY PSCommFooterTopic__c, Order__c];
                if (linkList != null && linkList.size() > 0)
                {
                    Map<Id, List<Map<String, Object>>> linkMap = new Map<Id, List<Map<String, Object>>>();

                    for (PSCommFooterLink__c link : linkList)
                    {
                        Map<String, Object> linkTemp = new Map<String, Object>();
                        linkTemp.put('id', link.Id);
                        linkTemp.put('label', link.Label__c);
                        linkTemp.put('url', link.URL__c);
                        linkTemp.put('order', link.Order__c);

                        List<Map<String, Object>> tempList = linkMap.get(link.PSCommFooterTopic__c);
                        if (tempList == null)
                        {
                            tempList = new List<Map<String, Object>>();
                            linkMap.put(link.PSCommFooterTopic__c, tempList);
                        }
                        tempList.add(linkTemp);
                    }

                    for (Id tempId : topicMap.keySet())
                    {
                        List<Map<String, Object>> linkList2 = linkMap.get(tempId);

                        if (linkList2 != null)
                        {
                          topicMap.get(tempId).put('links', linkList2);
                        }
                    }
                }
            }

            resp.put('topics', topicList);

            ///////////////////////
            // add primary links //
            ///////////////////////
            List<Map<String, Object>> plList = new List<Map<String, Object>>();
            if (config.PSCommFooterPrimaryLink__r != null && config.PSCommFooterPrimaryLink__r.size() > 0)
            {
                for (PSCommFooterPrimaryLink__c plTemp : config.PSCommFooterPrimaryLink__r)
                {
                  Map<String, Object> pl = new Map<String, Object>();
                  pl.put('id', plTemp.Id);
                  pl.put('label', plTemp.Label__c);
                  pl.put('url', plTemp.URL__c);
                  pl.put('order', plTemp.Order__c);
                  plList.add(pl);
                }
            }

            resp.put('primayLinks', plList);
        }


        return JSON.serializePretty(resp);
    }
}
# GeinsSdkApiMgmtJavascript.ShippingModelsParcelGroupOptions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderIds** | **[Number]** | The order ids contained in this parcel group.  Required. | [optional] 
**orderRowIds** | **[Number]** | Limits which order rows are included for each order defined in OrderIds. Use this to create partial deliveries.    If any order rows are defined for a given order then only those order rows will be used, eg a partial delivery.    If no order rows are defined for a given order then all remaining undelivered order rows will be implied.    Optional. | [optional] 
**markAsDelivered** | **Boolean** | Set to true to automatically mark orders as delivered upon creation of the parcel group.    Defaults to false.    Optional. | [optional] 
**sendDeliveryEmail** | **Boolean** | Set to true to automatically send delivery email upon creation of the parcel group.    Requires that MarkAsDelivered is also set to true.    Defaults to false.    Optional. | [optional] 
**signalCapturesCreated** | **Boolean** | Set to true to create captures and automatically signal capture events upon creation of the parcel group.    Defaults to false.    Optional. | [optional] 



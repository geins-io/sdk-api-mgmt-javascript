# GeinsSdkApiMgmtJavascript.UserModelsWriteBalanceTransaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**balanceType** | **String** | The type of balance. See the separate endpoint for available balance types.  Required. | [optional] 
**currency** | **String** | The currency of this balance transaction. 3-letter ISO currency code.    Optional. Will default to the users default currency if not specified. | [optional] 
**externalId** | **Number** | An optional external id of the transaction. | [optional] 
**text** | **String** | Additional optional information about the transaction. | [optional] 
**amount** | **Number** | The amount to add to balance. Can be negative.    Required. | [optional] 



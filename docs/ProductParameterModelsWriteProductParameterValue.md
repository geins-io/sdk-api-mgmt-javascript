# GeinsSdkApiMgmtJavascript.ProductParameterModelsWriteProductParameterValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**productId** | **Number** | The product id of the parameter.    This value can be omitted if the value is part of a product request. | [optional] 
**parameterId** | **Number** | The unique identifier of the parameter that this value belongs to. | [optional] 
**value** | **String** | The identifying value of the parameter.    Although always presented as a string, the data within Value must validate against the ProductParameterType of the parameter:    String &#x3D; Any string.    Float &#x3D; Any floating point number.    DateTime &#x3D; Any date.    Multi &#x3D; Any predefined value id from the predefined set of values for this parameter.    Single &#x3D; Any predefined value id from the predefined set of values for this parameter.    Headline &#x3D; Any string.    Tags &#x3D; Any string, as part of a pipe-separated list. A string containing the pipe (|) character is not allowed. | [optional] 
**localizedDescriptions** | [**[SharedModelsLocalizableContent]**](SharedModelsLocalizableContent.md) | The localized descriptions of the parameter.    Only used for parameter types String or Headline.    For Multi and Single, use LocalizedNames. | [optional] 



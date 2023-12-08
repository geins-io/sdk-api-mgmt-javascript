# GeinsSdkApiMgmtJavascript.ProductParameterModelsReadProductParameterValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameterValueId** | **Number** | The unique identifier of this parameter value. | [optional] 
**productId** | **Number** | The product id of the parameter. | [optional] 
**parameterId** | **Number** | The unique identifier of the parameter that this value belongs to. | [optional] 
**parameterName** | **String** | The non-localized name of the parameter. | [optional] 
**groupId** | **Number** | The unique identifier of the group that this parameter belongs to. | [optional] 
**groupName** | **String** | The name of the group that this parameter belongs to. | [optional] 
**parameterType** | **Number** | The type of parameter.    The Value field must validate against this type.    1 &#x3D; String. Any string value.    2 &#x3D; Float. Any floating point number.               Period as decimal separator and no thousands separator.               Eg: 10001.789.    3 &#x3D; DateTime. Any ISO 8601 date.               Eg: 2017-03-06T16:31:24+02:00.    4 &#x3D; Multi. A string value from a predefined set of values.               This type may occur multiple times for the same parameter.    5 &#x3D; Single. A string value from a predefined set of values.    6 &#x3D; Headline. A string value used mainly for grouping in layout.    7 &#x3D; Tags. A pipe-separated list of product specific values.               Eg: red|green|blue. | [optional] 
**value** | **String** | The identifying value of the parameter.    Although always presented as a string, the data within Value must validate against the type of the parameter:    String &#x3D; Any string.    Float &#x3D; Any floating point number.    DateTime &#x3D; Any date.    Multi &#x3D; Any predefined value id from the predefined set of values for this parameter.    Single &#x3D; Any predefined value id from the predefined set of values for this parameter.    Headline &#x3D; Any string. | [optional] 
**description** | **String** | The non-localized description of the parameter.    This is usually the same value as Value for all parameter types, except Single Multi. | [optional] 
**localizedDescriptions** | [**[SharedModelsLocalizableContent]**](SharedModelsLocalizableContent.md) | The localized descriptions of the parameter.    Not used for parameter types Float or DateTime. | [optional] 
**internalIdentifier** | **String** | The internal identifier of the parameter. | [optional] 



## Enum: ParameterTypeEnum


* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)





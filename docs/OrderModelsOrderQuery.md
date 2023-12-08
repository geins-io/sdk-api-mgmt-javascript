# GeinsSdkApiMgmtJavascript.OrderModelsOrderQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updated** | **Date** | Given a date, only orders updated after the provided date will be returned. | [optional] 
**statusList** | **String** | Comma separated list of statuses to filter on.    Valid statuses are:    cancelled    on-hold    inactive    refunded    partial    backorder    completed    pending | [optional] 
**marketId** | **Number** | Id of a market. | [optional] 
**paymentName** | **String** | Name of a payment method. | [optional] 
**parcelGroupId** | **Number** | Id of a parcel group. | [optional] 
**customerId** | **Number** | The id of a customer. | [optional] 
**email** | **String** | The email of a customer. | [optional] 
**include** | **String** | Comma separated list of child-collections to also include in the query result.    Possible values are:    rows    paymentdetails    shippingdetails    refunds | [optional] 
**externalOrderStatus** | **Number** | This status can be used by an external system to change the status of an order, such as failed or done.    Predefined statuses are:    0 &#x3D; None    10 &#x3D; New    20 &#x3D; Processing    30 &#x3D; Failed    40 &#x3D; Done | [optional] 
**combineProductContainerRows** | **Boolean** | If true, will combine all order rows that are part of a container into a single container row. | [optional] 
**packingLocationId** | **Number** | The packing place to get orders from. | [optional] 



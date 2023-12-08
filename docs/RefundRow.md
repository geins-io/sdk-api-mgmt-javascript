# GeinsSdkApiMgmtJavascript.RefundRow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderId** | **Number** |  | [optional] 
**refundRowId** | **Number** |  | [optional] 
**orderRowId** | **Number** | The order row id that this refund row belongs to, if any. | [optional] 
**refundAmount** | **Number** | The refund amount. This can be different than the corresponding order row value. | [optional] 
**toBalance** | **Boolean** | If true, the refund amount of this refund row is added to the customer&#39;s balance. | [optional] 
**settled** | **Boolean** | If true, the refund row is marked as settled. | [optional] 
**settledOn** | **Date** | The date when the refund row was marked as settled. | [optional] 
**createdOn** | **Date** | The date the refund row was created. | [optional] 
**investigation** | **Boolean** | If true, the refund row is marked for investigation. | [optional] 
**refundType** | **Number** | The kind of source transaction the refund is derived from.  0 &#x3D; Default. A regular refund of the order or order row.  1 &#x3D; InstanceCost. Return cost type, used in drawing cost for instance.  2 &#x3D; Shipping. Refund shipping type, used to refund shipping.  3 &#x3D; InvoiceFee. Refund invoice fee.    0 &#x3D; Default. A regular refund of the order or order row.    1 &#x3D; InstanceCost. Return cost type, used in drawing cost for instance.    2 &#x3D; Shipping. Refund shipping type, used to refund shipping.    3 &#x3D; InvoiceFee. Refund invoice fee. | [optional] 



## Enum: RefundTypeEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)





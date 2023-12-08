# GeinsSdkApiMgmtJavascript.OrderRefundModelsWriteNewRefund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderRowId** | **Number** | The order row that this refund row represents. Commonly used with returns.  Optional. | [optional] 
**reference** | **String** | An custom reference for the refund.   Optional. | [optional] 
**description** | **String** | A description of the refund.  Optional. | [optional] 
**author** | **String** | The name of author of the refund.  Optional. | [optional] 
**refundAmount** | **Number** | The refund amount.  Required. | [optional] 
**toBalance** | **Boolean** | If true, will refund the amount to the customer&#39;s balance. | [optional] 
**settled** | **Boolean** | If true, the refund will be marked as settled immediatley and won&#39;t trigger a refund event.  This can be useful if the refund needs to be created retroactively, or when the money transacation has already occured. | [optional] 
**refundType** | **Number** | What kind of source transaction the refund is derived from.  0 &#x3D; Default. A regular refund of the order or order row.  1 &#x3D; InstanceCost. Return cost type, used in drawing cost for instance.  2 &#x3D; Shipping. Refund shipping type, used to refund shipping.  3 &#x3D; InvoiceFee. Refund invoice fee.    0 &#x3D; Default. A regular refund of the order or order row.    1 &#x3D; InstanceCost. Return cost type, used in drawing cost for instance.    2 &#x3D; Shipping. Refund shipping type, used to refund shipping.    3 &#x3D; InvoiceFee. Refund invoice fee. | [optional] 
**skipRefundEvents** | **Boolean** | If true, will skip sending refund events. | [optional] 
**refundsRequireApproval** | **Boolean** | If set to true, refunds will require approval before being sent. Only applies if Settled is false. | [optional] 



## Enum: RefundTypeEnum


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)





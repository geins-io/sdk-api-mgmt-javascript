# GeinsSdkApiMgmtJavascript.NewReturnRow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderRowId** | **Number** | The order row that this return row represents.  Required. | [optional] 
**returnCode** | **Number** | The return code for this return row. The return code is used to tag the return row with a reason.  Required. | [optional] 
**returnAction** | **Number** | The return action for this return row. The return action decides what type of refund should be created.  Required.  1 &#x3D; Investigate. The return row is refunded, but is marked for investigation.  2 &#x3D; NoRefund. No refund is made for the return row.  3 &#x3D; RegularRefund. The return row is refunded normally.  4 &#x3D; RefundToBalance. The return row is refunded to the customer&#39;s balance.    1 &#x3D; Investigate. The return row is refunded, but is marked for investigation.    2 &#x3D; NoRefund. No refund is made for the return row.    3 &#x3D; RegularRefund. The return row is refunded normally.    4 &#x3D; RefundToBalance. The return row is refunded to the customer&#39;s balance. | [optional] 
**refundAmount** | **Number** | The refund amount for this return row. The refund amount must be less than or equal to the order row value.  Required. | [optional] 
**restock** | **Boolean** | Set to true if the product corresponding to this return row should be automatically restocked when the return is created. | [optional] 



## Enum: ReturnActionEnum


* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)





# GeinsSdkApiMgmtJavascript.OrderReturnModelsWriteNewReturn

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shippingFeeRefund** | **Number** | How much of the shipping fee to refund.   Optional. | [optional] 
**paymentFeeRefund** | **Number** | How much of the payment fee to refund.   Optional. | [optional] 
**returnFee** | **Number** | The fee that the customer pays for the return. This value will be deducted from the total refund.  Optional. | [optional] 
**adminUserId** | **Number** | The id of the admin user that created the return. Leave blank if unsure.   Optional. | [optional] 
**author** | **String** | The name of person or system that created the return.   Optional. | [optional] 
**reference** | **String** | An custom reference for the return.   Optional. | [optional] 
**description** | **String** | A describing text for the return.   Optional. | [optional] 
**skipReturnEvents** | **Boolean** | If set to true, no return events will be sent. | [optional] 
**skipProductEvents** | **Boolean** | If set to true, no product events will be sent for restocked products. | [optional] 
**skipRefundEvents** | **Boolean** | If set to true, no refund events will be sent. | [optional] 
**refundsRequireApproval** | **Boolean** | If set to true, refunds will require approval before being sent. | [optional] 
**returnRows** | [**[NewReturnRow]**](NewReturnRow.md) | The list of return rows to create. Each return row represents an order row that is returned.  Required. | [optional] 



# GeinsSdkApiMgmtJavascript.OrderModelsOrderRefund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The id of this refund. | [optional] 
**orderRowId** | **Number** | Reference to the order row that has been refunded. | [optional] 
**paymentDetailId** | **Number** | Reference to the payment detail that has been refunded. | [optional] 
**returnId** | **Number** | Id number of the return. Can be used to group refunds. | [optional] 
**articleNumber** | **String** | Article number. If the refund is not bound to an order row this field contains an optional refund article number. | [optional] 
**createdAt** | **Date** | Datetime when the refund was created. | [optional] 
**total** | **Number** | Total amount refunded. | [optional] 
**reasonCode** | **Number** | Reason code for the refund. | [optional] 
**reason** | **String** | Reason for refund. | [optional] 
**toBalance** | **Boolean** | Shows if the refund was deposited to the customers balance. | [optional] 
**vat** | **Number** | Vat percent in decimals for the refunded amount. | [optional] 
**itemId** | **Number** | Item id (SKU). | [optional] 
**refundType** | **String** | Refund type. | [optional] 



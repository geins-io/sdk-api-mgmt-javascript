# GeinsSdkApiMgmtJavascript.Refund

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**refundId** | **String** | The id of the refund. | [optional] 
**refundInstanceId** | **Number** | The internal id of the refund. | [optional] 
**orderId** | **Number** | The order id of the order that the refund belongs to. | [optional] 
**reference** | **String** | A custom refund reference. | [optional] 
**description** | **String** | A custom refund description. | [optional] 
**author** | **String** | The name of the author of the refund. | [optional] 
**externalOrderId** | **String** | The external order id of the order. | [optional] 
**orderTransactionId** | **String** | A transaction id of the order. | [optional] 
**secondaryOrderTransactionId** | **String** | An secondary transaction id of the order. | [optional] 
**externalId** | **String** | An external transaction id of the order. | [optional] 
**paymentName** | **String** | The name of the payment used in the order. | [optional] 
**locale** | **String** | The locale of the order. | [optional] 
**siteName** | **String** | The market the order was placed on. | [optional] 
**customer** | **String** | The customer name. | [optional] 
**orderSum** | **Number** | The sum of the order. | [optional] 
**orderVat** | **Number** | The total vat of the order. | [optional] 
**orderValue** | **Number** | The total value of the order rows. | [optional] 
**orderDiscount** | **Number** | THe total discount on the order. | [optional] 
**shippingFee** | **Number** | The order shipping fee. | [optional] 
**paymentFee** | **Number** | The order payment fee. | [optional] 
**currency** | **String** | The code of the currency used for the refund. | [optional] 
**createdOn** | **Date** | The date the refund was created. | [optional] 
**sentOn** | **Date** | The date the refund was marked as sent. | [optional] 
**processedOn** | **Date** | The date the refund was marked as processed. | [optional] 
**sent** | **Boolean** | If true, the refund has been marked as sent. | [optional] [readonly] 
**processed** | **Boolean** | If true, the refund has been marked as processed. | [optional] [readonly] 
**requiresApproval** | **Boolean** | True if this refund requires approval before being sent, processed or settled. | [optional] 
**approved** | **Boolean** | Null if undecided, true if approved and false if denied. Only applicable if RequiresApproval is true. | [optional] 
**approvalDecidedBy** | **String** | The name of the one that approved or denied the refund. | [optional] 
**approvalDecidedOn** | **Date** | The date that the refund was approved or denied. | [optional] 
**vatRate** | **Number** | Vat rate. E.g. 0.25 for 25%, 0.12 for 12%. | [optional] [readonly] 
**skipRefundEvents** | **Boolean** | Whether or not refund events will be sent for this refund. | [optional] 
**refundedItemTotal** | **Number** | The total amount refunded from order rows. | [optional] 
**refundedShippingFee** | **Number** | The amount refunded from the shipping fee. | [optional] 
**refundedPaymentFee** | **Number** | The amount refunded from the payment fee. | [optional] 
**refundedDiscount** | **Number** | The amount refunded from the discount (can be split over several refunds). | [optional] 
**refundedBalance** | **Number** | The amount refunded from the balance (can be split over several refunds). | [optional] 
**refundedTotal** | **Number** | Total amount refunded. | [optional] [readonly] 
**refundRows** | [**[RefundRow]**](RefundRow.md) | List of refund rows belonging to this refund. | [optional] 
**rows** | [**[RefundCoreModelsOrderOrderRow]**](RefundCoreModelsOrderOrderRow.md) | List of order rows belonging to this refund. | [optional] 



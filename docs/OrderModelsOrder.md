# GeinsSdkApiMgmtJavascript.OrderModelsOrder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The id of the order. | [optional] 
**externalId** | **String** | The external id of the order. | [optional] 
**personalId** | **String** | The personal id or organisation number of the customer. | [optional] 
**customerId** | **Number** | The id of the customer that placed the order. | [optional] 
**customerTypeId** | **Number** | Customer type. Usually 1 for private customers and 2 for companies. | [optional] 
**customerGroupId** | **Number** | The id of the customer group that the customer belongs to, if any. | [optional] 
**customerGroupName** | **String** | The name of the customer group that the customer belongs to, if any. | [optional] 
**createdAt** | **Date** | Date and time when the order was created. | [optional] 
**updatedAt** | **Date** | Date and time when the order was last updated. | [optional] 
**completedAt** | **Date** | The date nd time when the order was completed (eg delivered and paid). | [optional] 
**status** | **String** | The order status.    Possbile values:    cancelled    on-hold    inactive    refunded    partial    pending-payment    backorder    completed    pending | [optional] 
**currency** | **String** | ISO currency code. | [optional] 
**currencyRate** | **Number** | The currency rate to SEK. | [optional] 
**marketId** | **Number** | The id of the market that this order originates from. | [optional] 
**marketName** | **String** | The market name. This is usually equal to the site or channel name. | [optional] 
**language** | **String** | Two-letter language code. | [optional] 
**orderTotal** | **Number** | Order total. | [optional] 
**expectedSum** | **Number** | Expected total sum to be paid after discount and balance.    The value is usually taken directly from the payment provider and represents the actual reserved amount.   If this differs from OrderTotal, actions should be taken to ensure they match. This usually happens due to rounding. | [optional] 
**vATTotal** | **Number** | Order VAT total. | [optional] 
**orderValueIncVat** | **Number** | Order value inc vat after discount but before balance. | [optional] 
**orderValueExVat** | **Number** | Order value ex vat after discount but before balance. | [optional] 
**itemValueIncVat** | **Number** | Item value inc vat excluding fees and discount. | [optional] 
**itemValueExVat** | **Number** | Item value ex vat excluding fees and discount. | [optional] 
**discount** | **Number** | Total discount inc vat. | [optional] 
**discountExVat** | **Number** | Total discount ex vat. | [optional] 
**fromBalance** | **Number** | The amount which was withdrawn from the customers balance inc vat. | [optional] 
**shippingFee** | **Number** | Shipping fee inc vat. | [optional] 
**shippingFeeExVat** | **Number** | Shipping fee ex vat. | [optional] 
**paymentFee** | **Number** | Payment fee inc vat. | [optional] 
**paymentFeeExVat** | **Number** | Payment fee ex vat. | [optional] 
**message** | **String** | Order message. Can contain instructions from customer or added details about the order. | [optional] 
**orderMessages** | **[String]** | Internal order messages. Can contain internal details about the order. | [optional] 
**paymentDetails** | [**[OrderModelsPaymentDetail]**](OrderModelsPaymentDetail.md) | List of payment details. | [optional] 
**shippingDetails** | [**[OrderModelsShippingDetail]**](OrderModelsShippingDetail.md) | List of shipping details. | [optional] 
**shippingAddress** | [**OrderModelsAddress**](OrderModelsAddress.md) |  | [optional] 
**billingAddress** | [**OrderModelsAddress**](OrderModelsAddress.md) |  | [optional] 
**rows** | [**[OrderModelsOrderRow]**](OrderModelsOrderRow.md) | List of order rows. | [optional] 
**refunds** | [**[OrderModelsOrderRefund]**](OrderModelsOrderRefund.md) | List of order refunds. | [optional] 
**ip** | **String** | Customer IP-number. | [optional] 
**userAgent** | **String** | Customer User Agent. | [optional] 
**serviceLocation** | **String** | Chosen service location. | [optional] 
**campaignCode** | **String** | Campaign code applied to the order. | [optional] 
**campaignCodeId** | **Number** | The internal id of the applied campaign code. | [optional] 
**percent** | **Number** | General percent discount applied to the order. | [optional] 
**desiredDeliveryDate** | **Date** | The desired delivery date of the order. | [optional] 
**gender** | **Boolean** | The gender of the customer.    True &#x3D; male, False &#x3D; female, null &#x3D; unknown. | [optional] 
**cartId** | **Number** | The id of the cart from which this order originates. | [optional] 
**sessionId** | **String** | The session id for the from which this order originates. | [optional] 
**externalOrderStatus** | **Number** |     0 &#x3D; None    10 &#x3D; New    20 &#x3D; Processing    30 &#x3D; Failed    40 &#x3D; Done | [optional] 
**campaignIds** | **[String]** | The ids for the campaigns applied to this order (not rows). | [optional] 
**campaignNames** | **[String]** | The names of the campaigns applied to this order (not rows). | [optional] 
**metaData** | **{String: String}** | The order meta data to store additional information about the order. | [optional] 
**publicId** | **String** | The public id of this order. | [optional] 



## Enum: ExternalOrderStatusEnum


* `0` (value: `0`)

* `10` (value: `10`)

* `20` (value: `20`)

* `30` (value: `30`)

* `40` (value: `40`)





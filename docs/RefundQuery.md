# GeinsSdkApiMgmtJavascript.RefundQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**createdAfter** | **Date** | Limits refunds to those created after this date. | [optional] 
**createdBefore** | **Date** | Limits refunds to those created before this date. | [optional] 
**approvedAfter** | **Date** | Limits refunds to those approved after this date. | [optional] 
**approvedBefore** | **Date** | Limits refunds to those approved before this date. | [optional] 
**updatedAfter** | **Date** | Limits refunds to those updated after this date. | [optional] 
**updatedBefore** | **Date** | Limits refunds to those updated before this date. | [optional] 
**includeStatuses** | **[Number]** | Limits refunds to only those with any of the specified statuses.  0 &#x3D; All. Include all statuses.  1 &#x3D; Sent. Include refunds marked as sent.  2 &#x3D; Settled. Include refunds marked as settled.  3 &#x3D; SettledManually. Include refunds marked as manually settled.  4 &#x3D; Processed. Include refunds marked as processed.  5 &#x3D; Investigation. Include refunds marked for investigation.  6 &#x3D; Pending approval. Include refunds that are pending approval.  7 &#x3D; Approved. Include refunds that are approved.  Defaults to All if not set. | [optional] 
**excludeStatuses** | **[Number]** | Limits refunds to only those without any of the specified statuses.  1 &#x3D; Sent. Exclude refunds marked as sent.  2 &#x3D; Settled. Exclude refunds marked as settled.  3 &#x3D; SettledManually. Exclude refunds marked as manually settled.  4 &#x3D; Processed. Exclude refunds marked as processed.  5 &#x3D; Investigation. Exclude refunds marked for investigation.  6 &#x3D; Pending approval. Exclude refunds that are pending approval.  7 &#x3D; Approved. Exclude refunds that are approved.  O or All is not valid as an exclude status and will not apply. | [optional] 



## Enum: [IncludeStatusesEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)





## Enum: [ExcludeStatusesEnum]


* `0` (value: `0`)

* `1` (value: `1`)

* `2` (value: `2`)

* `3` (value: `3`)

* `4` (value: `4`)

* `5` (value: `5`)

* `6` (value: `6`)

* `7` (value: `7`)





# kaholo-trigger-zapier
Simple webhook trigger for Zapier

## How to use:
After installing the plugin on Kaholo,
Follow this [documentation](https://zapier.com/help/create/code-webhooks/send-webhooks-in-zaps) to define a webhook on your zapier account. 
Make sure to put whatever app you need in the Trigger section, and choose zapier webhooks in the Action Section.
In the Headers section of the webhook make sure to add the header **X-Kaholo-Key** with any value you want to identify this webhook with.

## Post Request:
Triggers whenever there is a post request sent to specified URL.

### Webhook URL:
**{KAHOLO_URL}/webhook/zapier**

### Parameters:
1. Key Pattern - The key or key [minimatch pattern](https://github.com/isaacs/minimatch#readme) to accept. Filters any post requests that don't have matching value of the header **X-Kaholo-Key**
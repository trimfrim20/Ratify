<?php
ini_set('display_errors', 1);
require_once('TwitterAPIExchange.php');

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(
    'oauth_access_token' => "3392108722-RU5pPgXM0CKlfhIXzvCSV794E9wPbEoeaTCdjHh",
    'oauth_access_token_secret' => "M05V0l4ld3tlW4bX13ui1uTl1qbxyUiAIdQqpAP6jCiK4",
    'consumer_key' => "uGhhvUwApHjsldOs8qyx5IViz",
    'consumer_secret' => "dnjB0iADWoid81m45mlfwAqejPJ8YMS0k0x89RNb5clZXNc6EA"
);

/** URL for REST request, see: https://dev.twitter.com/docs/api/1.1/ **/
$url = 'https://api.twitter.com/1.1/blocks/create.json';
$requestMethod = 'POST';

/** POST fields required by the URL above. See relevant docs as above **/
$postfields = array(
    'screen_name' => 'usernameToBlock', 
    'skip_status' => '1'
);

/** Perform a POST request and echo the response **/
$twitter = new TwitterAPIExchange($settings);
echo $twitter->buildOauth($url, $requestMethod)
             ->setPostfields($postfields)
             ->performRequest();

/** Perform a GET request and echo the response **/
/** Note: Set the GET field BEFORE calling buildOauth(); **/
$url = 'https://api.twitter.com/1.1/search/tweets.json';
$getfield = '?q=mcdonalds';
$requestMethod = 'GET';
$twitter = new TwitterAPIExchange($settings);
$twitObject = $twitter->setGetfield($getfield)
             ->buildOauth($url, $requestMethod)
             ->performRequest();
$twitObject = json_decode($twitObject);
echo "<PRE>";
var_dump($twitObject);
echo "</PRE>";

?>
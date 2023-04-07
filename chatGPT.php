<?php

/*
curl https://api.openai.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer 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" \
  -d '{
     "model": "gpt-3.5-turbo",
     "messages": [{"role": "user", "content": "Say this is a test!"}],
     "temperature": 0.7
   }'
*/
$name = 'Book name';
//Server url
$url = "https://api.openai.com/v1/chat/completions";
$apiKey = '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'; // should match with Server key
$headers = array(
     'Authorization: Bearer '.$apiKey,
     "Content-Type: application/json",
);
/*$data = array(
	"model" => "gpt-3.5-turbo",
	"messages" => [{"role": "user", "content": "Say this is a test!"}],
	"temperature" => 0.7
)*/
// Send request to Server
$ch = curl_init($url);
// To save response in a variable from server, set headers;
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
//curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
// Get response
$response = curl_exec($ch);

echo $response;

// Decode
$result = json_decode($response);

?>
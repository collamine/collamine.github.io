<?php
# Include the Autoloader (see "Libraries" for install instructions)
require 'email/vendor/autoload.php';
use Mailgun\Mailgun;

# Instantiate the client.
$mgClient = new Mailgun('key-61b0e41f195cca81aed00e354d1f1599');
$domain = "sandbox74facef39eba4b0fa7d2dfba090b2009.mailgun.org";

# Make the call to the client.
$result = $mgClient->sendMessage($domain, array(
    'from'    => 'collamine@gmail.com',
    'to'      => $_POST["email"],
    'subject' => $_POST["subject"],
    'text'    => $_POST["message"]
));	

$newURL = "../collarmine/index.html";

header('Location: '.$newURL);
?>
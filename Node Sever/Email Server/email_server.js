
var express = require('express');
var bodyParser = require('body-parser');
var multer  = require('multer') ; 
var upload = multer() ; 
var app = express();
var http = require('http');

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});



app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
fs = require('fs');










app.post('/approval-email',  upload.array(),  function (req_followup, res_followup) {
	var user_data = req_followup.body;
	console.log(user_data); 
    var followup = user_data; 
    var reward_email = followup.reward_email;
	var claim_code_1 = followup.claim_code_1;
	var claim_code_2 = followup.claim_code_2;
	var claim_code_3 = followup.claim_code_3;
	var claim_code_4 = followup.claim_code_4;
	var claim_code_5 = followup.claim_code_5;
	var claim_code_6 = followup.claim_code_6;
	var claim_code_7 = followup.claim_code_7;
	var claim_code_8 = followup.claim_code_8;
	var claim_code_9 = followup.claim_code_9;
	var claim_code_10 = followup.claim_code_10;
     var claim_code_11 = followup.claim_code_11;
	var claim_code_12 = followup.claim_code_12;
	var claim_code_13 = followup.claim_code_13;
	var claim_code_14 = followup.claim_code_14;
	var claim_code_15 = followup.claim_code_15;
	var amount_1 = followup.amount_1;
	var amount_2 = followup.amount_2;
	var amount_3 = followup.amount_3;
	var amount_4 = followup.amount_4;
	var amount_5 = followup.amount_5;
	var amount_6 = followup.amount_6;
	var amount_7 = followup.amount_7;
	var amount_8 = followup.amount_8;
	var amount_9 = followup.amount_9;
	var amount_10 = followup.amount_10;
	var amount_11 = followup.amount_11;
	var amount_12 = followup.amount_12;
	var amount_13 = followup.amount_13;
	var amount_14 = followup.amount_14;
	var amount_15 = followup.amount_15;
	var product_1 = followup.product_1;
	var product_2 = followup.product_2;
	var product_3 = followup.product_3;
	var product_4 = followup.product_4;
	var product_5 = followup.product_5;
	var product_6 = followup.product_6;
	var product_7 = followup.product_7;
	var product_8 = followup.product_8;
	var product_9 = followup.product_9;
	var product_10 = followup.product_10;
	var product_11 = followup.product_11;
	var product_12 = followup.product_12;
	var product_13 = followup.product_13;
	var product_14 = followup.product_14;
	var product_15 = followup.product_15;

	var profile_link = followup.profile_link;
	var name = followup.name;
	var num_reviews = followup.num_reviews;
	console.log(reward_email);
	console.log(claim_code_1);
	console.log(claim_code_2);
	console.log(claim_code_3);
	console.log(claim_code_4);
	console.log(claim_code_5);
	console.log(claim_code_6);
	console.log(claim_code_7);
	console.log(claim_code_8);
	console.log(claim_code_9);
	console.log(claim_code_10);
	console.log(amount_1);
	console.log(amount_2);
	console.log(amount_3);
	console.log(amount_4);
	console.log(amount_5);
	console.log(amount_6);
	console.log(amount_7);
	console.log(amount_8);
	console.log(amount_9);
	console.log(amount_10);
	console.log(product_1);
	console.log(product_2);
	console.log(product_3);
	console.log(product_4);
	console.log(product_5);
	console.log(product_6);
	console.log(product_7);
	console.log(product_8);
	console.log(product_9);
	console.log(product_10);
	console.log(profile_link);
	console.log(name);
	console.log(num_reviews);

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'buyeshiro@graphiq.com',
        pass: 'E3ccvgbm'
    }
});


var mailOptions = {
    from: 'SoftwareInsider <buyeshiro@findthebest.com>', // sender address
    to: reward_email , // list of receivers
    subject: 'SoftwareInsider sent you an Amazon Gift Card', // Subject line
    html: '<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;background-color: #F2F2F2;height: 100% !important;width: 100% !important;"> <tbody><tr> <td align="center" valign="top" id="bodyCell" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 20px;border-top: 0;height: 100% !important;width: 100% !important;"> <!-- BEGIN TEMPLATE // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;"> <tbody><tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN PREHEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="preheaderContainer" style="padding-top: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></td> </tr> </tbody></table> <!-- // END PREHEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN HEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="headerContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnImageBlockOuter"> <tr> <td valign="top" style="padding: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnImageBlockInner"> <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td class="mcnImageContent" valign="top" style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <img align="left" alt="" src="https://gallery.mailchimp.com/acd17d0801078ff035d1bb3e4/images/31355818-7fad-4e1c-a280-64bfe5e891a3.png" width="564" style="max-width: 998px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" class="mcnImage"> </td> </tr> </tbody></table> </td> </tr> </tbody> </table></td> </tr> </tbody></table> <!-- // END HEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN BODY // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="bodyContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> <h1 style="text-align: center;margin: 0;padding: 0;display: block;font-family: Helvetica;font-size: 40px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: -1px;color: #606060 !important;"><span style="line-height:41.5999984741211px">Your Review Was Approved!</span></h1> </td> </tr> </tbody></table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> Thanks for reviewing! You can find the list of approved reviews you\'ve left recently and the accompanying Amazon Gift Card claim codes for those reviews in the table below. <br><Br> <table  style="font-size:18px;"> <tr> <td ><b>Product</b></td> <td><b>Claim Code</b></td> <td><b>Amount</b></td> </tr> <tr> <td style="padding-right:30px;" >' + product_1 + '</td> <td style="padding-right:30px;" >' + claim_code_1 + '</td> <td>' + amount_1 + '</td> </tr> <tr> <td>' + product_2 + '</td> <td>' + claim_code_2 + '</td> <td>' + amount_2 + '</td> </tr> <tr> <td>' + product_3 + '</td> <td>' + claim_code_3 + '</td> <td>' + amount_3 + '</td> </tr> <tr> <td>' + product_4 + '</td> <td>' + claim_code_4 + '</td> <td>' + amount_4 + '</td> </tr> <tr> <td>' + product_5 + '</td> <td>' + claim_code_5 + '</td> <td>' + amount_5 + '</td> </tr> <tr> <td>' + product_6 + '</td> <td>' + claim_code_6 + '</td> <td>' + amount_6 + '</td> </tr> <tr> <td>' + product_7 + '</td> <td>' + claim_code_7 + '</td> <td>' + amount_7 + '</td> </tr> <tr> <td>' + product_8 + '</td> <td>' + claim_code_8 + '</td> <td>' + amount_8 + '</td> </tr> <tr> <td>' + product_9 + '</td> <td>' + claim_code_9 + '</td> <td>' + amount_9 + '</td> </tr> <tr> <td>' + product_10 + '</td> <td>' + claim_code_10 + '</td> <td>' + amount_10 + '</td> </tr> <tr> <td>' + product_11 + '</td> <td>' + claim_code_11 + '</td> <td>' + amount_11 + '</td> </tr> <tr> <td>' + product_12 + '</td> <td>' + claim_code_12 + '</td> <td>' + amount_12 + '</td> </tr> <tr> <td>' + product_13 + '</td> <td>' + claim_code_13 + '</td> <td>' + amount_13 + '</td> </tr> <tr> <td>' + product_14 + '</td> <td>' + claim_code_14 + '</td> <td>' + amount_14 + '</td> </tr> <tr> <td>' + product_15 + '</td> <td>' + claim_code_15 + '</td> <td>' + amount_15 + '</td> </tr> </table> <br>Visit <a href="https://www.amazon.com/gc">Amazon\'s gift card portal</a> and enter your claim codes to redeem your gift cards. You can also check the approval status of any pending reviews or see how many people you\'ve referred by visiting your <a href="' + profile_link + '">SoftwareInsider profile page</a>. </td> </tr> </tbody></table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnDividerBlockOuter"> <tr> <td class="mcnDividerBlockInner" style="padding: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top-width: 1px;border-top-style: solid;border-top-color: #999999;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <span></span> </td> </tr> </tbody></table> </td> </tr> </tbody> </table></td> </tr> </tbody></table> <!-- // END BODY --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN FOOTER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateFooter" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="footerContainer" style="padding-bottom: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 11px;line-height: 125%;text-align: left;"> <h1 style="text-align: center;margin: 0;padding: 0;display: block;font-family: Helvetica;font-size: 40px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: -1px;color: #606060 !important;"><span style="line-height:41.5999984741211px">Now Share with Friends!<br>Give 5 and Get 5</span></h1> </td> </tr> </tbody></table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 11px;line-height: 125%;text-align: left;"> <span style="font-size:15px"><span style="font-family: Helvetica; line-height:20.7999992370605px">With our referral program, you\'ll receive a $5 Amazon Gift Card for each person who leaves a review with your referral link and the reviewer will get an extra $5 for their first review. Everybody wins!<br> <br><img src="http://img2.findthebest.com/sites/default/files/4518/media/images/_6655131.png" width="550"> <br> <br> <b>Referral Link:</b> <br> http://softwareinsider.com/?si_review=true&source=referral&referral=' + reward_email + ' <br><br>Referral payments are distributed every Friday, so you can expect to receive the total number of referral bonuses accrued within a week of when the reviews were left.You can always check the status of how many referrals you\'ve made on your <a href="' + profile_link + '">SoftwareInsider profile page</a>.<br> <br>Please feel free to email me personally with any questions or concerns about the promotion.<br> <br> Thanks again!&nbsp;<br> <br> Best,<br> <br> Brendan Uyeshiro<br> Product Manager<br> SoftwareInsider<br> buyeshiro@softwareinsider.com</span></span><br> &nbsp; </td> </tr> </tbody></table> </td> </tr> </tbody> </table></td> </tr> </tbody></table> <!-- // END FOOTER --> </td> </tr> </tbody></table> <!-- // END TEMPLATE --> </td> </tr> </tbody></table>'
     
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res_followup.sendStatus(200);
    }else{
        console.log('Message sent: ' + info.response);
        res_followup.sendStatus(400);

    }
});













});






app.post('/fail-email',  upload.array(),  function (req_fail, res_fail) {
	var email_data = req_fail.body;
	console.log(email_data); 
    var fail_email = email_data; 
    var reviewer_email = fail_email.reward_email; 
	var product_1 = fail_email.product_1;
	var product_2 = fail_email.product_2;
	var product_3 = fail_email.product_3;
	var product_4 = fail_email.product_4;
	var product_5 = fail_email.product_5;
	var product_6 = fail_email.product_6;
	var product_7 = fail_email.product_7;
	var product_8 = fail_email.product_8;
	var product_9 = fail_email.product_9;
	var product_10 = fail_email.product_10;

	console.log(product_1);
	console.log(product_2);
	console.log(product_3);
	console.log(product_4);
	console.log(product_5);
	console.log(product_6);
	console.log(product_7);
	console.log(product_8);
	console.log(product_9);
	console.log(product_10);


var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'buyeshiro@graphiq.com',
        pass: 'E3ccvgbm'
    }
});


var mailOptions = {
    from: 'SoftwareInsider <buyeshiro@findthebest.com>', // sender address
    to: reviewer_email , // list of receivers
    subject: 'SoftwareInsider couldn\'t approve your review', // Subject line
    html: '<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;background-color: #F2F2F2;height: 100% !important;width: 100% !important;"> <tbody><tr> <td align="center" valign="top" id="bodyCell" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 20px;border-top: 0;height: 100% !important;width: 100% !important;"> <!-- BEGIN TEMPLATE // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;"> <tbody><tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN PREHEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="preheaderContainer" style="padding-top: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></td> </tr> </tbody></table> <!-- // END PREHEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN HEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="headerContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnImageBlockOuter"> <tr> <td valign="top" style="padding: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnImageBlockInner"> <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td class="mcnImageContent" valign="top" style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <img align="left" alt="" src="https://gallery.mailchimp.com/acd17d0801078ff035d1bb3e4/images/31355818-7fad-4e1c-a280-64bfe5e891a3.png" width="564" style="max-width: 998px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" class="mcnImage"> </td> </tr> </tbody></table> </td> </tr> </tbody> </table></td> </tr> </tbody></table> <!-- // END HEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN BODY // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="bodyContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> <h1 style="text-align: center;margin: 0;padding: 0;display: block;font-family: Helvetica;font-size: 35px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: -1px;color: #606060 !important;"><span style="line-height:41.5999984741211px">Your Review Was Not Approved</span></h1> </td> </tr> </tbody></table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> Thank you for submitting a review to SoftwareInsider. Unfortunately our QA team had was not able to approve your review. We hold high standards for the review content we display to users and only approve quality reviews from business professionals. <br><br>There are a few reasons that reviews are generally not approved:  <br><ul><li>Duplicated content - Review content was found online elsewhere</li><li>Poor grammar and spelling - Persistent spelling or grammatic errors demonstrate a lack of attention to detail </li><li>Lack of insightful details or vague product knowledge - "We use Mailchimp for email marketing...", this may be true, but it doesn\'t provide any useful context</li><li>Lacking LinkedIn Presence - LinkedIn is a foolproof way to verify a reviewer\'s identity and review authenticity. We verify that a LinkedIn profile accurately reflects a reviewer\'s profession and aligns with the type of software reviewed </li></ul><table  style="font-size:18px;"> <tr> <td>Review(s) That Couldn\'t be Approved:</td> </tr> <tr> <td>' + product_1 + '</td> </tr> <tr> <td>' + product_2 + ' </td> </tr> <tr> <td>' + product_3 + ' </td> </tr> <tr> <td>' + product_4 + ' </td> </tr> <tr> <td>' + product_5 + ' </td> </tr> <tr> <td>' + product_6 + ' </td> </tr> <tr> <td>' + product_7 + ' </td> </tr> <tr> <td>' + product_8 + ' </td> </tr> <tr> <td>' + product_9 + '</td> </tr> <tr> <td>' + product_10 + '</td> </tr> </table><h1><center>Approved Review Example</center></h1>For future reference, here\'s an example of a great review that was recently approved for a project management tool. The reviewer\'s LinkedIn profile is full of useful professional information and the review provides specific product insights.<br> <br><center><img src="http://img1.findthebest.com/sites/default/files/4518/media/images/_6885381.png" width="500" style="  padding: 15px 15px 0; background-color: white; box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4); -moz-box-shadow: 0 1px 2px rgba(34,25,25,0.4); -webkit-box-shadow: 0 1px 3px rgba(34, 25, 25, 0.4);" ></center> <br> If you believe your review was denied in error and it should be qualified, please do not hesitate to email me. I\'m happy to discuss our review process in more detail. <br><br> Best, <br><br>Brendan Uyeshiro<br>Product Manager<br>SoftwareInsider<br>buyeshiro@softwareinsider.com</td> </tr> </tbody></table>'
     
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res_fail.sendStatus(200);
    }else{
        console.log('Message sent: ' + info.response);
        res_fail.sendStatus(400);

    }
});













});






app.post('/status-email',  upload.array(),  function (req_status, res_status) {
	var status_data = req_status.body;
    var status = status_data; 
    var five_count = status.five_count ; 
    var ten_count = status.ten_count ; 
    var fifteen_count = status.fifteen_count ;
    var five_left = status.five_left ;
    var ten_left = status.ten_left; 
    var fifteen_left = status.fifteen_left ; 
    var five_buy = status.five_buy;
    var ten_buy = status.ten_buy; 
    var fifteen_buy = status.fifteen_buy ; 

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'buyeshiro@graphiq.com',
        pass: 'E3ccvgbm'
    }
});


var mailOptions = {
    from: 'SoftwareInsider <buyeshiro@graphiq.com>', // sender address
    to: 'buyeshiro@graphiq.com, mlafirenza@graphiq.com' , // list of receivers
    subject: 'SI Review Status Update', // Subject line
    html: '<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;background-color: #F2F2F2;height: 100% !important;width: 100% !important;"> <tbody><tr> <td align="center" valign="top" id="bodyCell" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 20px;border-top: 0;height: 100% !important;width: 100% !important;"> <!-- BEGIN TEMPLATE // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;"> <tbody><tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN PREHEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="preheaderContainer" style="padding-top: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></td> </tr> </tbody></table> <!-- // END PREHEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN HEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="headerContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnImageBlockOuter"> <tr> <td valign="top" style="padding: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnImageBlockInner"> <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td class="mcnImageContent" valign="top" style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <img align="left" alt="" src="https://gallery.mailchimp.com/acd17d0801078ff035d1bb3e4/images/31355818-7fad-4e1c-a280-64bfe5e891a3.png" width="564" style="max-width: 998px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" class="mcnImage"> </td> </tr> </tbody></table> </td> </tr> </tbody> </table></td> </tr> </tbody></table> <!-- // END HEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN BODY // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="bodyContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> <h1 style="text-align: center;margin: 0;padding: 0;display: block;font-family: Helvetica;font-size: 40px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: -1px;color: #606060 !important;"><span style="line-height:41.5999984741211px">Review Status Update</span></h1> </td> </tr> </tbody></table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> <table><tr><td></td><td>$5</td><td>$10</td><td>$15</td></tr><tr><td style="padding-right:20px;">Unpaid Reviews</td><td style="padding-right:20px;">' + five_count + '</td><td style="padding-right:20px;">' + ten_count + '</td><td style="padding-right:20px;">' + fifteen_count + '</td></tr><tr><td>Codes Left</td><td>' + five_left + '</td><td>' + ten_left + '</td><td>' + fifteen_left + '</td></tr><tr><td>Codes to Buy</td><td>' + five_buy + '</td><td>' + ten_buy + '</td><td>' + fifteen_buy + '</td></tr></table></td> </td> </tr> </tbody></table> '
     
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res_status.sendStatus(200);
    }else{
        console.log('Message sent: ' + info.response);
        res_status.sendStatus(400);

    }
});




});





app.post('/referral-email',  upload.array(),  function (req_referral, res_referral) {
	var referral_data = req_referral.body;
	console.log(referral_data); 
    var referral = referral_data; 
    var referral_email = referral.referral_email;
	var claim_code_1 = referral.claim_code_1;
	var claim_code_2 = referral.claim_code_2;
	var claim_code_3 = referral.claim_code_3;
	var claim_code_4 = referral.claim_code_4;
	var claim_code_5 = referral.claim_code_5;
	var claim_code_6 = referral.claim_code_6;
	var claim_code_7 = referral.claim_code_7;
	var claim_code_8 = referral.claim_code_8;
	var claim_code_9 = referral.claim_code_9;
	var claim_code_10 = referral.claim_code_10;
     var claim_code_11 = referral.claim_code_11;
	var claim_code_12 = referral.claim_code_12;
	var claim_code_13 = referral.claim_code_13;
	var claim_code_14 = referral.claim_code_14;
	var claim_code_15 = referral.claim_code_15;
	var amount_1 = referral.amount_1;
	var amount_2 = referral.amount_2;
	var amount_3 = referral.amount_3;
	var amount_4 = referral.amount_4;
	var amount_5 = referral.amount_5;
	var amount_6 = referral.amount_6;
	var amount_7 = referral.amount_7;
	var amount_8 = referral.amount_8;
	var amount_9 = referral.amount_9;
	var amount_10 = referral.amount_10;
	var amount_11 = referral.amount_11;
	var amount_12 = referral.amount_12;
	var amount_13 = referral.amount_13;
	var amount_14 = referral.amount_14;
	var amount_15 = referral.amount_15;
	var referral_1 = referral.referral_1;
	var referral_2 = referral.referral_2;
	var referral_3 = referral.referral_3;
	var referral_4 = referral.referral_4;
	var referral_5 = referral.referral_5;
	var referral_6 = referral.referral_6;
	var referral_7 = referral.referral_7;
	var referral_8 = referral.referral_8;
	var referral_9 = referral.referral_9;
	var referral_10 = referral.referral_10;
	var referral_11 = referral.referral_11;
	var referral_12 = referral.referral_12;
	var referral_13 = referral.referral_13;
	var referral_14 = referral.referral_14;
	var referral_15 = referral.referral_15;

	var profile_link = referral.profile_link;

	console.log(claim_code_1);
	console.log(claim_code_2);
	console.log(claim_code_3);
	console.log(claim_code_4);
	console.log(claim_code_5);
	console.log(claim_code_6);
	console.log(claim_code_7);
	console.log(claim_code_8);
	console.log(claim_code_9);
	console.log(claim_code_10);
	console.log(amount_1);
	console.log(amount_2);
	console.log(amount_3);
	console.log(amount_4);
	console.log(amount_5);
	console.log(amount_6);
	console.log(amount_7);
	console.log(amount_8);
	console.log(amount_9);
	console.log(amount_10);
	console.log(referral_1);
	console.log(referral_2);
	console.log(referral_3);
	console.log(referral_4);
	console.log(referral_5);
	console.log(referral_6);
	console.log(referral_7);
	console.log(referral_8);
	console.log(referral_9);
	console.log(referral_10);
	console.log(profile_link);

var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'buyeshiro@graphiq.com',
        pass: 'E3ccvgbm'
    }
});


var mailOptions = {
    from: 'SoftwareInsider <buyeshiro@findthebest.com>', // sender address
    to: referral_email , // list of receivers
    subject: 'SoftwareInsider Referral Bonuses', // Subject line
    html: '<table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 0;background-color: #F2F2F2;height: 100% !important;width: 100% !important;"> <tbody><tr> <td align="center" valign="top" id="bodyCell" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;margin: 0;padding: 20px;border-top: 0;height: 100% !important;width: 100% !important;"> <!-- BEGIN TEMPLATE // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;border: 0;"> <tbody><tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN PREHEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templatePreheader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="preheaderContainer" style="padding-top: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"></td> </tr> </tbody></table> <!-- // END PREHEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN HEADER // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="headerContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnImageBlockOuter"> <tr> <td valign="top" style="padding: 9px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnImageBlockInner"> <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td class="mcnImageContent" valign="top" style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <img align="left" alt="" src="https://gallery.mailchimp.com/acd17d0801078ff035d1bb3e4/images/31355818-7fad-4e1c-a280-64bfe5e891a3.png" width="564" style="max-width: 998px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" class="mcnImage"> </td> </tr> </tbody></table> </td> </tr> </tbody> </table></td> </tr> </tbody></table> <!-- // END HEADER --> </td> </tr> <tr> <td align="center" valign="top" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <!-- BEGIN BODY // --> <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #FFFFFF;border-top: 0;border-bottom: 0;"> <tbody><tr> <td valign="top" class="bodyContainer" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> <h1 style="text-align: center;margin: 0;padding: 0;display: block;font-family: Helvetica;font-size: 36px;font-style: normal;font-weight: bold;line-height: 125%;letter-spacing: -1px;color: #606060 !important;"><span style="line-height:41.5999984741211px">Your Referral Bonuses are Here!</span></h1> </td> </tr> </tbody></table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnTextBlockOuter"> <tr> <td valign="top" class="mcnTextBlockInner" style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table align="left" border="0" cellpadding="0" cellspacing="0" width="600" class="mcnTextContentContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td valign="top" class="mcnTextContent" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #606060;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: left;"> Thanks for referring your friends! You can find the list of approved referrals you\'ve made and the accompanying Amazon Gift Card claim codes for those reviews in the table below. <br><Br> <table  style="font-size:18px;"> <tr> <td ><b>Referral Email</b></td> <td><b>Claim Code</b></td> <td><b>Amount</b></td> </tr> <tr> <td style="padding-right:30px;" >' + referral_1 + '</td> <td style="padding-right:30px;" >' + claim_code_1 + '</td> <td>' + amount_1 + '</td> </tr> <tr> <td>' + referral_2 + '</td> <td>' + claim_code_2 + '</td> <td>' + amount_2 + '</td> </tr> <tr> <td>' + referral_3 + '</td> <td>' + claim_code_3 + '</td> <td>' + amount_3 + '</td> </tr> <tr> <td>' + referral_4 + '</td> <td>' + claim_code_4 + '</td> <td>' + amount_4 + '</td> </tr> <tr> <td>' + referral_5 + '</td> <td>' + claim_code_5 + '</td> <td>' + amount_5 + '</td> </tr> <tr> <td>' + referral_6 + '</td> <td>' + claim_code_6 + '</td> <td>' + amount_6 + '</td> </tr> <tr> <td>' + referral_7 + '</td> <td>' + claim_code_7 + '</td> <td>' + amount_7 + '</td> </tr> <tr> <td>' + referral_8 + '</td> <td>' + claim_code_8 + '</td> <td>' + amount_8 + '</td> </tr> <tr> <td>' + referral_9 + '</td> <td>' + claim_code_9 + '</td> <td>' + amount_9 + '</td> </tr> <tr> <td>' + referral_10 + '</td> <td>' + claim_code_10 + '</td> <td>' + amount_10 + '</td> </tr> <tr> <td>' + referral_11 + '</td> <td>' + claim_code_11 + '</td> <td>' + amount_11 + '</td> </tr> <tr> <td>' + referral_12 + '</td> <td>' + claim_code_12 + '</td> <td>' + amount_12 + '</td> </tr> <tr> <td>' + referral_13 + '</td> <td>' + claim_code_13 + '</td> <td>' + amount_13 + '</td> </tr> <tr> <td>' + referral_14 + '</td> <td>' + claim_code_14 + '</td> <td>' + amount_14 + '</td> </tr> <tr> <td>' + referral_15 + '</td> <td>' + claim_code_15 + '</td> <td>' + amount_15 + '</td> </tr> </table> <br>Visit <a href="https://www.amazon.com/gc">Amazon\'s gift card portal</a> and enter your claim codes to redeem your gift cards. You can also check the approval status of any pending reviews or see how many people you\'ve referred by visiting your <a href="' + profile_link + '">SoftwareInsider profile page</a>.<br><br>Thanks Again!<br><br> Brendan Uyeshiro<br>Product Manager<br>SoftwareInsider </td> </tr> </tbody></table> </td> </tr> </tbody> </table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnDividerBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody class="mcnDividerBlockOuter"> <tr> <td class="mcnDividerBlockInner" style="padding: 18px;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <table class="mcnDividerContent" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top-width: 1px;border-top-style: solid;border-top-color: #FFF;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <tbody><tr> <td style="mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"> <span></span> </td> </tr> </tbody></table> </td> </tr> </tbody> </table></td> </tr> </tbody></table> <!-- // END BODY --> </td> </tr>  </tbody></table>'
     
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res_referral.sendStatus(200);
    }else{
        console.log('Message sent: ' + info.response);
        res_referral.sendStatus(400);

    }
});













});
















app.post('/error-email',  upload.array(),  function (req_error, res_error) {
	var error_data = ''; 
	var error_body = req_error.body;
	var error_review = req_error.body.data; 
	var error_content = req_error.body.error; 



    console.log(error_body); 
	console.log(error_review); 
	console.log(error_content); 
	var email_body = 'Review Data: ' + error_review + '\n\n Error: ' + error_content ; 
	console.log(email_body);
    var nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'buyeshiro@graphiq.com',
        pass: 'E3ccvgbm'
    }
});


var mailOptions = {
    from: 'SoftwareInsider <buyeshiro@graphiq.com>', // sender address
    to: 'buyeshiro@graphiq.com' , // list of receivers
    subject: 'SI Review Error', // Subject line
    html: email_body 
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
        res_error.sendStatus(200);
    }else{
        console.log('Message sent: ' + info.response);
        res_error.sendStatus(400);

    }



    


});






});



app.get('/file/:name', function (req, res, next) {

  var options = {
    root: __dirname + '/',
    dotfiles: 'deny',
    headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
    }
  };

  var fileName = req.params.name;
  var password = req.param('password');
  console.log(password); 

if ( password == 'findthebest!') {

res.sendFile(fileName, options, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    }
    else {
      console.log('Sent:', fileName);
    }
  });




} else {
	res.sendStatus("Unauthorized"); 
} 
  	 
 

});




	var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
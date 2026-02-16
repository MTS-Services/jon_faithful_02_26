<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Received - WhyTennessee</title>
    <style>
        body {
            font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
        }

        .header {
            text-align: center;
            margin-bottom: 30px;
        }

        .status-badge {
            display: inline-block;
            background-color: #fff3cd;
            color: #856404;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: bold;
            margin-bottom: 20px;
        }

        h1 {
            color: #b8912a;
            font-size: 24px;
            margin-top: 0;
        }

        .content {
            margin-bottom: 30px;
        }

        .next-steps {
            background: #f0f7ff;
            padding: 25px;
            border-radius: 8px;
            border-left: 5px solid #b8912a;
        }

        .next-steps h3 {
            margin-top: 0;
            color: #b8912a;
        }

        .next-steps ul {
            padding-left: 20px;
            margin-bottom: 0;
        }

        .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid #eee;
            color: #666;
        }

        .signature {
            margin-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h1>New Property Request</h1>
        </div>

        <div class="content">
            <p>Hi {{ $data['owner_name'] }},</p>

            <p>Good news! Someone has shown interest in one of your property listings on
                <strong>WhyTennessee.com</strong>. Below are the inquiry details:
            </p>
        </div>

        <div class="next-steps">
            <h3>What happens next:</h3>
            <ul>
                <li><strong>Name:</strong> {{ $data['name'] }}</li>
                <li><strong>Email:</strong> <a href="mailto:{{ $data['email'] }}"
                        style="color: #b8912a; text-decoration: none;">{{ $data['email'] }}</a></li>
                <li><strong>Phone:</strong>{{ $data['phone'] }}</li>
                <li><strong>Property:</strong>{{ $data['listing_title'] }}</li>
                <li><strong>Price:</strong>{{ $data['purchase_price'] }}</li>
            </ul>
        </div>

        <div class="content">
            <p>Please reach out to the buyer as soon as possible to continue the conversation and move forward with the
                opportunity.</p>
            <p>You can reply directly to this email to contact the interested buyer.</p>
        </div>

        <div class="footer">
            <p>Thank you for selling with us.</p>

            <div class="signature">
                <strong>Your Name</strong><br>
                Team, YourWebsiteName.com
            </div>
        </div>
    </div>
</body>

</html>

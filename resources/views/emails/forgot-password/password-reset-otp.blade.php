<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Reset OTP - WhyTennessee</title>
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
            text-align: center;
        }

        .next-steps h3 {
            margin-top: 0;
            color: #b8912a;
        }

        .otp-code {
            font-size: 38px;
            font-weight: bold;
            letter-spacing: 12px;
            color: #b8912a;
            margin: 10px 0;
        }

        .expiry {
            color: #856404;
            font-size: 13px;
            margin-top: 12px;
            background-color: #fff3cd;
            display: inline-block;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: bold;
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
            <div class="status-badge">Password Reset</div>
            <h1>OTP Verification</h1>
        </div>

        <div class="content">
            <p>Hi there,</p>
            <p>You requested a password reset on <strong>WhyTennessee.com</strong>. Use the OTP code below to verify your identity and proceed.</p>
        </div>

        <div class="next-steps">
            <h3>Your One-Time Password</h3>
            <div class="otp-code">{{ $data['otp'] }}</div>
            <p class="expiry">⏳ This code expires in 10 minutes</p>
        </div>

        <div class="content">
            <p>Enter this code on the password reset page to continue. If you did not request this, please ignore this email — your account remains safe.</p>
            <p style="color: #888; font-size: 13px;">For security reasons, never share this code with anyone.</p>
        </div>

        <div class="footer">
            <p>Thank you for using our platform.</p>

            <div class="signature">
                <strong>Your Name</strong><br>
                Team, {{ config('app.name') }}
            </div>
        </div>
    </div>
</body>

</html>
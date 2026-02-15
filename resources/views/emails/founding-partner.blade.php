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
            color: #0056b3;
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
            border-left: 5px solid #0056b3;
        }

        .next-steps h3 {
            margin-top: 0;
            color: #0056b3;
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
            <div class="status-badge">Application Status: Under Review</div>
            <h1>Welcome to the Community</h1>
        </div>

        <div class="content">
            <p>Hi {{ $user->name }},</p>

            <p>Thanks for registering to become a <strong>Founding Partner</strong> on
                <strong>WhyTennessee.com</strong>. We’re excited to have you with us in these early stages.</p>

            <p>We've received your application. To ensure WhyTennessee remains a curated, trusted platform for
                relocation buyers, we manually review every professional profile before activation.</p>
        </div>

        <div class="next-steps">
            <h3>What happens next:</h3>
            <ul>
                <li><strong>Review:</strong> Our team is currently verifying your account details.</li>
                <li><strong>Timing:</strong> You'll receive an approval email within 24–48 hours.</li>
                <li><strong>Access:</strong> Once approved, you'll be able to log in and begin adding your listings
                    immediately.</li>
            </ul>
        </div>

        <div class="content">
            <p>As a <strong>Founding Partner</strong>, you’re securing early access, priority visibility, and long-term
                pricing advantages as we grow our brand awareness across the state.</p>

            <p>There is nothing you need to do right now. If you have any questions, simply reply to this email.</p>
        </div>

        <div class="footer">
            <p>Thanks for being part of the early WhyTennessee community.</p>

            <div class="signature">
                <strong>{{ config('mail.from.name') }}</strong><br>
                Founder, {{ config('app.name') }}
            </div>
        </div>
    </div>
</body>

</html>

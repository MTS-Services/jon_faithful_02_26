<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Founding Partner Registration</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
        }

        .container {
            max-width: 600px;
            margin: auto;
            background: #ffffff;
            padding: 30px;
            border-radius: 8px;
            border: 1px solid #e1e1e1;
        }

        .header {
            border-bottom: 2px solid #0056b3;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .header h2 {
            color: #0056b3;
            margin: 0;
        }

        .details-box {
            background: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
            margin: 20px 0;
            border-left: 4px solid #0056b3;
        }

        .details-box ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .details-box li {
            margin-bottom: 10px;
        }

        .btn {
            display: inline-block;
            padding: 12px 25px;
            background-color: #0056b3;
            color: #ffffff !important;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            margin-top: 10px;
        }

        .footer {
            margin-top: 30px;
            font-size: 0.85em;
            color: #777;
            border-top: 1px solid #eee;
            padding-top: 15px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h2>New Registration Pending Review</h2>
        </div>

        <p>Hi {{ config('mail.from.name') }},</p>

        <p>A new user has registered as a <strong>Founding Partner</strong> on <strong>WhyTennessee.com</strong> and is
            currently awaiting approval.</p>

        <div class="details-box">
            <ul>
                <li><strong>Name:</strong> {{ $user->name }}</li>
                <li><strong>Email:</strong> {{ $user->email }}</li>
                <li><strong>Phone:</strong> {{ $user->phone ?? 'N/A' }}</li>
                <li><strong>Registered At:</strong> {{ $user->created_at->format('M d, Y h:i A') }}</li>
            </ul>
        </div>

        <p>Please review the application and update the account status via the dashboard:</p>

        <a href="{{ config('app.url') }}/admin/dashboard" class="btn">Go to Admin Dashboard</a>

        <div class="footer">
            <p>Regards,<br>
                <strong>{{ config('mail.from.name') }},</strong><br>
                <em>Automated Notification — Please do not reply directly to this email.</em>
            </p>
        </div>
    </div>
</body>

</html>

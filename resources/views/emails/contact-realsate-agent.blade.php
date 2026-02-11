{{-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f7f9;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
        }
        .header {
            background-color: #1e3a5f;
            padding: 30px;
            text-align: center;
            color: #ffffff;
        }
        .header h2 {
            margin: 0;
            font-size: 24px;
            letter-spacing: 1px;
        }
        .content {
            padding: 30px;
        }
        .info-card {
            background-color: #f8fafc;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
        }
        .info-row {
            display: flex;
            margin-bottom: 12px;
            border-bottom: 1px solid #edf2f7;
            padding-bottom: 8px;
        }
        .info-row:last-child {
            border-bottom: none;
        }
        .label {
            width: 120px;
            font-weight: 600;
            color: #64748b;
            font-size: 14px;
        }
        .value {
            color: #1e293b;
            font-weight: 500;
            font-size: 15px;
        }
        .price-tag {
            display: inline-block;
            background-color: #dcfce7;
            color: #166534;
            padding: 4px 12px;
            border-radius: 20px;
            font-weight: bold;
        }
        .footer {
            background-color: #f1f5f9;
            padding: 20px;
            text-align: center;
            color: #94a3b8;
            font-size: 12px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>New Property Request</h2>
        </div>

        <div class="content">
            <p style="color: #475569; font-size: 16px;">Hello,</p>
            <p style="color: #475569; font-size: 14px; margin-bottom: 25px;">You have received a new property inquiry. Here are the details:</p>

            <div class="info-card">
                <div class="info-row">
                    <div class="label">Name</div>
                    <div class="value">{{ $data['name'] }}</div>
                </div>
                <div class="info-row">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:{{ $data['email'] }}" style="color: #2563eb; text-decoration: none;">{{ $data['email'] }}</a></div>
                </div>
                <div class="info-row">
                    <div class="label">Phone</div>
                    <div class="value">{{ $data['phone'] }}</div>
                </div>
                <div class="info-row">
                    <div class="label">Property</div>
                    <div class="value" style="color: #1e3a5f;">{{ $data['listing_title'] }}</div>
                </div>
                <div class="info-row" style="margin-top: 10px; border: none;">
                    <div class="label">Proposed Price</div>
                    <div class="value"><span class="price-tag">{{ $data['purchase_price'] }}</span></div>
                </div>
            </div>

            <div style="text-align: center; margin-top: 30px;">
                <a href="#" style="background-color: #1e3a5f; color: white; padding: 12px 25px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px;">View Details in Dashboard</a>
            </div>
        </div>

        <div class="footer">
            <p>This is an automated notification from your Real Estate Portal.</p>
            <p>&copy; 2024 Your Brand Name. All rights reserved.</p>
        </div>
    </div>
</body>
</html> --}}










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
                        style="color: #2563eb; text-decoration: none;">{{ $data['email'] }}</a></li>
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

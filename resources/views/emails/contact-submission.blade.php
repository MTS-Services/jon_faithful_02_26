<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #f1f5f9;
        }

        .alert-header {
            background-color: #1e293b;
            color: #ffffff;
            padding: 15px;
            border-radius: 8px 8px 0 0;
            text-align: center;
        }

        .content {
            padding: 20px;
            border: 1px solid #e2e8f0;
            border-top: none;
        }

        .details-box {
            background: #ffffff;
            padding: 15px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            margin: 20px 0;
        }

        .label {
            font-weight: bold;
            color: #475569;
            width: 120px;
            display: inline-block;
        }

        .message-box {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid #b8912a;
            margin-top: 10px;
            font-style: italic;
        }

        .footer {
            margin-top: 25px;
            font-size: 0.85em;
            color: #64748b;
            text-align: center;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="alert-header">
            <h2 style="margin:0;">New Contact Inquiry</h2>
        </div>

        <div class="content">
            <p>Hello Admin,</p>
            <p>A user has submitted a new inquiry through the contact form on <strong>WhyTennessee.com</strong>.</p>

            <div class="details-box">
                <p><span class="label">Name:</span> {{ $contact->full_name }}</p>
                <p><span class="label">Email:</span> {{ $contact->email }}</p>
                <p><span class="label">Phone:</span> {{ $contact->phone_number }}</p>
                <p><span class="label">Interested In:</span> {{ $contact->interested_in }}</p>
                <p><span class="label">City:</span> {{ $city?->name ?? 'N/A' }}</p>
            </div>

            <p><strong>Message:</strong></p>
            <div class="message-box">
                {{ $contact->message }}
            </div>

            <p style="margin-top: 25px;">Please follow up with the user as soon as possible.</p>
        </div>

        <div class="footer">
            <p>This is an automated notification from the WhyTennessee System.</p>
        </div>
    </div>
</body>

</html>

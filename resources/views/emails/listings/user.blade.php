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
            border: 1px solid #eee;
        }

        .header {
            border-bottom: 2px solid #1e293b;
            padding-bottom: 10px;
            margin-bottom: 20px;
        }

        .details-box {
            background: #f8fafc;
            padding: 15px;
            border-radius: 8px;
            margin: 20px 0;
        }

        .label {
            font-weight: bold;
            color: #64748b;
            width: 120px;
            display: inline-block;
        }

        .footer {
            margin-top: 30px;
            font-size: 0.9em;
            color: #666;
            border-top: 1px solid #eee;
            padding-top: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">
            <h2>New Listing Submission Received</h2>
        </div>

        <p>Hi {{ $listing->user->name }},</p>

        <p>Thank you for submitting your property on <strong>WhyTennessee.com</strong>. Your listing is currently under
            review by our team.</p>

        <h3>Listing Details</h3>
        <div class="details-box">
            <p><span class="label">Title:</span> {{ $listing->title }}</p>
            <p><span class="label">Price:</span> ${{ number_format($listing->purchase_price, 2) }}</p>
            <p><span class="label">Location:</span> {{ $listing->city->name }}</p>
            <p><span class="label">Bed/Bath:</span> {{ $listing->bedrooms }} / {{ $listing->bathrooms }}</p>
            <p><span class="label">Square Feet:</span> {{ number_format($listing->square_feet) }} sqft</p>
            <p><span class="label">Facilities:</span>
                {{ $listing->facilities->pluck('name')->implode(', ') ?: 'None listed' }}
            </p>
        </div>

        <p>Our team will review your submission within 24-48 hours. You will receive an automated notification as soon
            as it is approved and live on the site.</p>

        <div class="footer">
            <p>Thank you for being a <strong>Founding Partner</strong>.</p>
            <p>Best regards,<br>
                <strong>Jon Mills</strong><br>
                Founder, WhyTennessee.com
            </p>
        </div>
    </div>
</body>

</html>

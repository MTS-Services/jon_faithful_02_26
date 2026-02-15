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
            border: 1px solid #e2e8f0;
        }

        .label {
            font-weight: bold;
            color: #64748b;
            width: 120px;
            display: inline-block;
        }

        .status-badge {
            background: #e0f2fe;
            color: #0369a1;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 0.8em;
            font-weight: bold;
            text-transform: uppercase;
            margin-bottom: 10px;
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
            @if (!$isNew)
                <span class="status-badge">Updates Received</span>
            @endif
            <h2>{{ $isNew ? 'New Listing Submission Received' : 'Listing Information Updated' }}</h2>
        </div>

        <p>Hi {{ $listing->user->name }},</p>

        <p>
            {{ $isNew
                ? 'Thank you for submitting your property on WhyTennessee.com.'
                : 'Your changes for "' . $listing->title . '" have been successfully saved.' }}
            Your listing is currently {{ $isNew ? 'under review' : 'being re-verified' }} by our team.
        </p>

        <h3>Listing Details</h3>
        <div class="details-box">
            <p><span class="label">Title:</span> {{ $listing->title }}</p>
            <p><span class="label">Purchase Price:</span> ${{ number_format($listing->purchase_price, 2) }}</p>
            <p><span class="label">Property Type:</span> {{ $listing->property_type }}</p>
            <p><span class="label">Location:</span> {{ $listing->city->name }}</p>
            <p><span class="label">Bed/Bath:</span> {{ $listing->bedrooms }} / {{ $listing->bathrooms }}</p>
            <p><span class="label">Square Feet:</span> {{ number_format($listing->square_feet) }} sqft</p>
            <p><span class="label">Facilities:</span>
                {{ $listing->facilities->pluck('name')->implode(', ') ?: 'None listed' }}
            </p>
        </div>

        <p>Our team will review your {{ $isNew ? 'submission' : 'updates' }} within 24-48 hours. You will receive an
            automated notification as soon as the status is updated.</p>

        <div class="footer">
            <p>Thank you for being a <strong>Founding Partner</strong>.</p>
            <p>Best regards,<br>
                <strong>{{ config('mail.from.name') }}</strong><br>
                Founder, {{ config('app.name') }}
            </p>
        </div>
    </div>
</body>

</html>

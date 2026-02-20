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
            width: 140px;
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
                <span class="status-badge">Update Received</span>
            @endif
            <h2>{{ $isNew ? 'Rental Submission Received' : 'Rental Information Updated' }}</h2>
        </div>

        <p>Hi {{ $rental->user->name }},</p>

        <p>
            {{ $isNew
                ? 'Thank you for submitting your rental property on WhyTennessee.com.'
                : 'Your rental listing "' . $rental->title . '" has been successfully updated.' }}
            Your listing is currently {{ $isNew ? 'under review' : 'being re-verified' }} by our team.
        </p>

        <h3>Rental Details</h3>
        <div class="details-box">
            <p><span class="label">Property Title:</span> {{ $rental->title }}</p>
            <p><span class="label">Monthly Rent:</span> ${{ number_format($rental->purchase_price, 2) }}</p>
            <p><span class="label">Property Type:</span> {{ $rental->property_type }}</p>
            <p><span class="label">Bed/Bath:</span> {{ $rental->bedrooms }} / {{ $rental->bathrooms }}</p>
            <p><span class="label">Square Feet:</span> {{ $rental->square_feet ?? 'N/A' }} sqft</p>
            <p><span class="label">Location:</span> {{ $rental->city->name ?? 'N/A' }}</p>
            <p><span class="label">Facilities:</span>
                {{ $rental->facilities->pluck('name')->implode(', ') ?: 'None listed' }}
            </p>
        </div>

        <p>
            {{ $isNew
                ? 'Our team will review your submission within 24-48 hours. Once approved, it will be live and visible to potential tenants.'
                : 'The changes have been saved. If you made significant changes, it may take a moment for our team to re-approve the listing.' }}
        </p>

        <div class="footer">
            <p>Thank you for being a <strong>Founding Partner</strong>.</p>
            <p>Best regards,<br>
                <strong>{{ config('mail.from.name', 'Jon Mills') }}</strong><br>
                Founder, {{ config('app.name', 'WhyTennessee.com') }}
            </p>
        </div>
    </div>
</body>

</html>

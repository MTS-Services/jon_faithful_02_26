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
            width: 100px;
            display: inline-block;
        }

        .btn-container {
            text-align: center;
            margin-top: 25px;
        }

        .btn {
            background-color: #b8912a;
            color: #ffffff;
            padding: 12px 25px;
            text-decoration: none;
            border-radius: 5px;
            font-weight: bold;
            display: inline-block;
        }

        .user-info {
            border-left: 4px solid #b8912a;
            padding-left: 15px;
            margin-bottom: 20px;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="alert-header">
            <h2 style="margin:0;">Action Required: New Submission</h2>
        </div>

        <div class="content">
            <p>Hello Admin,</p>
            <p>A new property listing has been submitted and is currently <strong>Pending Review</strong>.</p>

            <div class="user-info">
                <p style="margin:0;"><strong>Submitted By:</strong> {{ $listing->user->name }}</p>
                <p style="margin:0;"><strong>Email:</strong> {{ $listing->user->email }}</p>
            </div>

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

            <p>Please review the listing details and media for compliance before publishing.</p>

            <div class="btn-container">
                <a href="{{ url('/admin/listings/' . $listing->id) }}" class="btn">Review Listing</a>
            </div>
        </div>
    </div>
</body>

</html>

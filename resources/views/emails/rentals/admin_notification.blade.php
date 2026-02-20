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
            background-color: {{ $isNew ? '#1e293b' : '#0f172a' }};
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
            width: 130px;
            display: inline-block;
        }

        .btn-container {
            text-align: center;
            margin-top: 25px;
        }

        .btn {
            background-color: #b8912a;
            color: #ffffff !important;
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
            <h2 style="margin:0;">{{ $isNew ? 'New Rental Submission' : 'Rental Listing Updated' }}</h2>
        </div>

        <div class="content">
            <p>Hello {{ config('mail.from.name') }},</p>
            <p>A rental property has been <strong>{{ $isNew ? 'Submitted' : 'Updated' }}</strong> and is currently
                <strong>{{ $rental->status->value == App\Enums\ActiveInactive::ACTIVE->value ? 'Active' : 'Inactive' }}</strong>.</p>

            <div class="user-info">
                <p style="margin:0;"><strong>User:</strong> {{ $rental->user->name }}</p>
                <p style="margin:0;"><strong>Email:</strong> {{ $rental->user->email }}</p>
            </div>

            <div class="details-box">
                <p><span class="label">Rental ID:</span> #{{ $rental->id }}</p>
                <p><span class="label">Title:</span> {{ $rental->title }}</p>
                <p><span class="label">Price:</span> ${{ number_format($rental->purchase_price, 2) }}</p>
                <p><span class="label">Property Type:</span> {{ $rental->property_type }}</p>
                <p><span class="label">Action Date:</span> {{ now()->format('M d, Y h:i A') }}</p>
            </div>

            <p>Please review the details and media to ensure they meet our platform standards.</p>

            <div class="btn-container">
                <a href="{{ config('app.url') }}/admin/rentals/details/{{ $rental->id }}" class="btn">Review Listing</a>
            </div>
        </div>
    </div>
</body>

</html>

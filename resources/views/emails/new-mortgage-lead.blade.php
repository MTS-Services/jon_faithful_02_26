<!DOCTYPE html>
<html>

<head>
    <style>
        body {
            font-family: sans-serif;
            color: #334155;
            line-height: 1.5;
        }

        .wrapper {
            max-width: 640px;
            margin: 0 auto;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            overflow: hidden;
        }

        .header {
            background: #0f2743;
            color: #ffffff;
            padding: 18px 20px;
        }

        .content {
            padding: 20px;
        }

        .row {
            margin-bottom: 10px;
        }

        .label {
            display: inline-block;
            width: 170px;
            font-weight: 700;
            color: #475569;
        }

        .meta {
            margin-top: 18px;
            padding-top: 12px;
            border-top: 1px solid #e2e8f0;
            color: #64748b;
            font-size: 13px;
        }
    </style>
</head>

<body>
    <div class="wrapper">
        <div class="header">
            <h2 style="margin:0;">New Mortgage Lead</h2>
        </div>
        <div class="content">
            <div class="row"><span class="label">First Name:</span> {{ $lead->first_name }}</div>
            <div class="row"><span class="label">Email:</span> {{ $lead->email }}</div>
            <div class="row"><span class="label">Phone:</span> {{ $lead->phone_number }}</div>
            <div class="row"><span class="label">Timeline:</span> {{ $lead->timeline }}</div>
            <div class="row"><span class="label">Purchase Range:</span> {{ $lead->purchase_price_range }}</div>
            <div class="row"><span class="label">Down Payment:</span> {{ $lead->down_payment_range }}</div>
            <div class="row"><span class="label">Location:</span> {{ $lead->location }}</div>
            <div class="row"><span class="label">Credit Score:</span> {{ $lead->credit_score ?: 'N/A' }}</div>
            <div class="row"><span class="label">First-Time Buyer:</span> {{ $lead->first_time_buyer ?: 'N/A' }}</div>
            <div class="meta">
                Submitted at {{ $lead->created_at?->format('M d, Y h:i A') }}
            </div>
        </div>
    </div>
</body>

</html>

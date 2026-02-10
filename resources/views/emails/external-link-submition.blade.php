<!DOCTYPE html>
<html>
<body style="font-family:Arial; background:#f9fafb; padding:30px;">

<h2>New Listing Submission</h2>

<p>A user has submitted a new external listing for review.</p>

<ul>
    <li><strong>Name:</strong> {{ $submission->name }}</li>
    <li><strong>Email:</strong> {{ $submission->email }}</li>
    <li><strong>External Link:</strong>
        <a href="{{ $submission->external_link }}" target="_blank">
            {{ $submission->external_link }}
        </a>
    </li>
    <li><strong>Status:</strong> Pending</li>
</ul>

<p>
    👉 <a href="{{ config('app.url') }}/admin/listings/submissions">
        Review in Admin Dashboard
    </a>
</p>

<p>
Regards,<br>
WhyTennessee System
</p>

</body>
</html>

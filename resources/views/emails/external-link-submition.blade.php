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






    Booking:
    <iframe src="https://app.centralexecutivetransfers.co.uk/booking?site_key=7e3f3d3085b900d598bc40543d611575"
        id="eto-iframe-booking" allow="geolocation" width="100%" height="250" scrolling="no" frameborder="0"
        style="width:1px; min-width:100%; border: 0;"></iframe>
    <script src="https://app.centralexecutivetransfers.co.uk/assets/plugins/iframe-resizer/iframeResizer.min.js"></script>
    <script>
        iFrameResize({
            log: false,
            targetOrigin: '*',
            checkOrigin: false
        }, "iframe#eto-iframe- booking");
    </script>
    My account:
    <iframe src="https://app.centralexecutivetransfers.co.uk/customer?site_key=7e3f3d3085b900d598bc40543d611575"
        id="eto-iframe-customer" allow="geolocation" width="100%" height="250" scrolling="no" frameborder="0"
        style="width:1px; min-width:100%; border:0;"></iframe>
    <script src="https://app.centralexecutivetransfers.co.uk/assets/plugins/iframe-resizer/iframeResizer.min.js"></script>
    <script>
        iFrameResize({
            log: false,
            targetOrigin: '*',
            checkOrigin: false
        }, "iframe#eto-iframe- customer");
    </script>

</body>

</html>

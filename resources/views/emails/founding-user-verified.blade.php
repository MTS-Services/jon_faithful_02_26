<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Account Verified</title>
</head>

<body style="margin:0; padding:0; background-color:#f9fafb; font-family: Arial, Helvetica, sans-serif;">

    <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
            <td align="center" style="padding:40px 0;">

                <table width="600" cellpadding="0" cellspacing="0"
                    style="background:#ffffff; border-radius:6px; padding:30px;">

                    <!-- Header -->
                    <tr>
                        <td style="text-align:left; padding-bottom:20px;">
                            <h2 style="margin:0; color:#111827;">
                                Your Founding Partner Account is Approved 🎉
                            </h2>
                        </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                        <td style="font-size:15px; color:#374151; line-height:1.6;">
                            Hi <strong>{{ $user->name }}</strong>,
                            <br><br>

                            Great news! Your application to become a
                            <strong>Founding Partner</strong> on
                            <strong>WhyTennessee.com</strong> has been reviewed and approved.
                            <br><br>

                            You can now log in to your account and start adding your property listings,
                            managing your profile, and taking advantage of all founding partner benefits.
                        </td>
                    </tr>

                    <!-- CTA Button -->
                    <tr>
                        <td style="padding:30px 0; text-align:center;">
                            <a href="{{ config('app.url') }}/login"
                                style="background:#2563eb; color:#ffffff; padding:12px 28px; text-decoration:none; border-radius:4px; font-weight:600; display:inline-block;">
                                Log in to Your Dashboard
                            </a>
                        </td>
                    </tr>

                    <!-- Benefits -->
                    <tr>
                        <td style="font-size:14px; color:#374151; line-height:1.6;">
                            As a Founding Partner, you receive:
                            <ul style="margin-top:10px;">
                                <li>Early access to platform features</li>
                                <li>Priority visibility for your listings</li>
                                <li>Exclusive long-term pricing advantages</li>
                            </ul>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="padding-top:30px; font-size:14px; color:#6b7280;">
                            If you have any questions or need assistance, feel free to reply to this email.
                            <br><br>

                            Welcome aboard,<br>
                            <strong>Jon Mills</strong><br>
                            Founder, WhyTennessee.com
                        </td>
                    </tr>

                </table>

                <!-- Footer note -->
                <div style="margin-top:20px; font-size:12px; color:#9ca3af;">
                    © {{ date('Y') }} WhyTennessee.com. All rights reserved.
                </div>

            </td>
        </tr>
    </table>

</body>

</html>

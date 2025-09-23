import nslt_regular from '@css/newsletter/regular.css?inline';
import nslt_blackweek from '@css/newsletter/blackweek.css?inline';
import nslt_mattress from '@css/newsletter/mattress.css?inline';

import lp_regular from '@css/landing/regular.css?inline';
import lp_blackwek from '@css/landing/blackweek.css?inline';
import lp_mattress from '@css/landing/mattress.css?inline';

import cgb_desktop from '@css/cgb/desktop.css?inline';
import cgb_mobile from '@css/cgb/mobile.css?inline';

export const types = {
  NEWSLETTER: 'newsletter',
  LANDINGPAGE: 'landing',
  CSS: {
    NS: nslt_regular,
    NS_BLACK_WEEK: nslt_blackweek,
    NS_MATTRESS: nslt_mattress,

    LP: lp_regular,
    LP_BLACK_WEEK: lp_blackwek,
    LP_MATTRESS: lp_mattress,

    CGB: {
      DESKTOP: cgb_desktop,
      MOBILE: cgb_mobile,
    },
  },
  WRAPPER: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
          <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
              <head>
                  <title>Beliani</title>
                  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                  <meta name="x-apple-disable-message-reformatting">
                  <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=yes">
                  <meta name="color-scheme" content="light only">
                  <meta name="supported-color-schemes" content="light only">
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&subset=cyrillic-ext,latin-ext" rel="stylesheet">
                  <!--[if gte mso 7]>
                    <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                        <v:fill type="tile" color="#ececec">
                    </v:background>
                  <![endif]-->
                  <!--[if gte mso 7]>
                    <style type="text/css">
                      table {
                        border-collapse: collapse;
                        border-spacing: 0;
                      }
                    </style>
                  <![endif]-->
                  <!--[if gte mso 7]>
                    <xml>
                        <o:OfficeDocumentSettings>
                        <o:AllowPNG/>
                        <o:PixelsPerInch>96</o:PixelsPerInch>
                        </o:OfficeDocumentSettings>
                    </xml>
                  <![endif]-->
              </head>
          
              <body class="body" width="100%" style="width:100% !important; padding:0 !important; margin:0 auto !important; font-family: 'Open Sans', sans-serif!important; font-size:13px; color:#000000; text-align:left; background-color:#ececec;">
              </body>
          </html>`,
};

import Swal from 'sweetalert2';

export const redirectCheckerLoader = () => {
  return Swal.fire({
    title: `
      <span style="font-size: 1em; font-weight: bold; font-family: Poppins, sans-serif; text-align: center;">Checking for Redirects...</span>
    `,
    html: `
  <div style="margin: 20px 0; font-family: Poppins, sans-serif; text-align: center;">
        <p style="font-size: 1.1em; color: #555;">
          Scanning <strong>all category links</strong> across all shops.<br>
          This may take a few seconds...
        </p>
        <img src="https://i.pinimg.com/originals/03/13/9b/03139b21f03f65b9efd259db21276600.gif" 
               alt="Checking redirects" 
               style="max-width: 320px; border-radius: 12px; margin: 16px auto; display: block;">
      </div>
      `,
    allowOutsideClick: false,
    allowEscapeKey: false,
    showConfirmButton: false,
    preConfirm: () => false,
    backdrop: true,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

export const noRedirectsFoundSwal = ({totalChecked}) => {
  return Swal.fire({
    title:  `
    <span style="font-size: 1em; font-weight: bold; font-family: Poppins, sans-serif; text-align: center;">All links are direct! 🎉</span>
  `,
    html: `
          <p style="font-size: 1.1em; color: #555; margin: 16px 0; font-family: Poppins, sans-serif;">
            Checked <strong>${totalChecked}</strong> links — no redirects found.<br>
            Everything looks perfect!
          </p>
          <img src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnJueGNqd2czbzFhdXQxaHFpMGVzb2cxenRld2JzdXZrcGZoY2Q2NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/SABpzb2ivrS0g4Hgbb/giphy.gif" 
               alt="Success - no redirects" 
               style="max-width: 320px; border-radius: 12px; margin: 16px auto; display: block;">
        `,
    icon: 'success', // built-in green check icon
    confirmButtonText: 'Great!',
    confirmButtonColor: '#28a745',
    allowOutsideClick: true,
    allowEscapeKey: true,
    showCloseButton: true,
    customClass: {
      popup: 'no-redirect-popup', // optional: for extra styling if needed
    },
  });
};


export const foundRedirectsSwal = ({ redirectedCount, totalChecked, tableHtml }) => {
  return Swal.fire({
    title: `
      <span style="font-size: 1.25em; font-weight: bold; font-family: Poppins, sans-serif; text-align: center; color: #dc3545;">
      🚨 REDIRECTS DETECTED – ACTION REQUIRED 🚨
      </span>
    `,
      html: `
        <div style="color:#dc3545; font-size:1.25em; font-weight:bold; margin:12px 0 20px;  font-family: Poppins, sans-serif; text-align:center;">
          ${redirectedCount} dangerous redirect${redirectedCount !== 1 ? 's' : ''} found
        </div>
  
        <p style="text-align:center; color:#2c3e50; margin-bottom:16px; font-family: Poppins, sans-serif; ">
          Checked <strong>${totalChecked}</strong> category/content links across all shops
        </p>
  
        ${tableHtml}
  
        <p style="color:#6c757d; font-size:0.9em; text-align:center; margin-top:16px; font-family: Poppins, sans-serif; ">
          Detected at ${new Date().toLocaleTimeString()}
        </p>
      `,
      showCloseButton: true,
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      backdrop: 'rgba(220,53,69,0.45)',
      width: '90%',
      customClass: {
        popup: 'urgent-redirect-table-popup',
      },
    });
}
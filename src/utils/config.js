export const appConfig = {
  api_url: 'http://localhost:5111/api/local/',
  external_api_url: 'https://plgost2ibovu.share.zrok.io/',
  server_url: 'https://pictureserver.net/static/2024/',
  // override_year: 2025,
  campaign_url: 'https://www.prologistics.info/news_email.php?id=',
  issue_url: 'https://www.prologistics.info/react/logs/issue_logs/',
  alarm_days: 7,
  confetti: true,
  replaceToBrs: true,
  emptyCell: (message) => `<span style='font-size: 20px; background: #ff0000;'>${message || 'Cell is empty'}</span>`,
};

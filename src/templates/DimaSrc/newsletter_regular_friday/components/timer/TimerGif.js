import { ImageWithLink } from "../ImageWithLink";

export const TimerGif = ({
  deadline,
  timezone,
  lang,
  bg = '000000',
  color = 'ffffff',
  label = '000000',
  background = 'ffffff',
  uid = 'USER_ID',
  href = '#',
  tdClass = 'newsletterContainer60px',
}) => {
  const url = `https://www.prologistics.info/timer.gif?deadline=${deadline}&timezone=${encodeURIComponent(timezone)}&lang=${lang}&bg=${bg}&color=${color}&label=${label}&background=${background}&uid=${uid}`;
  
  return ImageWithLink({
    href: href,
    src: url,
    insideTr: true,
    tdClass: tdClass,
  });
};
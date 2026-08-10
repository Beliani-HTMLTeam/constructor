import { Timer } from '../components/Timer';

export const TimerHandler = ({ Inside, queries, links, timer, shopNow, country }) => {
  return Inside && Inside.type === 'timer'
    ? Timer({
        title: queries?.timer?.[0] ?? 'TRANSLATION NOT FOUND',
        subtitle: queries?.timer?.[1] ?? 'TRANSLATION NOT FOUND',
        href: links?.Timer_href,
        src: timer?.image?.[country],
        color: Inside.color,
        background: Inside.backgroundColor,
        freebies: timer?.freebies,
        ctaText: shopNow,
      })
    : '';
};

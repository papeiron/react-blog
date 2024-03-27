import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import styled from 'styled-components';

import { Post as PostType } from '../types/types';
import { getMonth, parseISO } from 'date-fns';

const StyledActivityChart = styled.div`
  width: 95%;
  height: 85%;
  margin-top: 1rem;

  & .recharts-cartesian-grid-horizontal line,
  & .recharts-cartesian-grid-vertical line {
    stroke: var(--color-grey-800);
  }
`;

const P = styled.p`
  font-size: 1.4rem;
`;

type ActivityChartType = {
  posts: PostType[] | undefined;
};

function ActivityChart({ posts }: ActivityChartType) {
  const currentDate = new Date();

  const postsDiffMonths = posts
    ?.map((post) => {
      const yearDiff = currentDate.getFullYear() - new Date(post.created_at).getFullYear();
      const monthDiff = currentDate.getMonth() - new Date(post.created_at).getMonth();

      const totalDiff = yearDiff * 12 + monthDiff;
      if (totalDiff <= 3) return post;
    })
    .filter((diff) => diff !== undefined)
    .sort(
      (a, b) =>
        getMonth(parseISO(a?.created_at as string)) - getMonth(parseISO(b?.created_at as string))
    );

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  let obj: { [key: string]: number } = {};
  postsDiffMonths?.forEach((post) => {
    let month = getMonth(parseISO(post!.created_at));
    obj[months[month]] ? (obj[months[month]] += 1) : (obj[months[month]] = 1);
  });

  const data = Object.entries(obj).map(([date, numberOfPosts]) => ({
    date,
    numberOfPosts
  }));

  return (
    <StyledActivityChart>
      <P>Last 3 months</P>
      <ResponsiveContainer height='100%' width='100%'>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='date' name='Creation Date' />
          <YAxis />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} />
          <Legend />
          <Line type='monotone' dataKey='numberOfPosts' name='Posts' />
        </LineChart>
      </ResponsiveContainer>
    </StyledActivityChart>
  );
}

export default ActivityChart;

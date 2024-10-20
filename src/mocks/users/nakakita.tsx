import { Typography } from '@/components';
import { UserDetail } from '@/types';

export const nakakita: UserDetail = {
  userId: 'nyantama',
  avatarUrl: '/images/user/nyantama.png',
  nickName: 'にゃんたま',
  description: (
    <>
      <Typography>にゃんたまです！</Typography>
      <Typography>将棋やろ！</Typography>
      <Typography>ね！</Typography>
      <Typography>将棋やろうよ！</Typography>
    </>
  ),
  twitterId: 'hoge',
};

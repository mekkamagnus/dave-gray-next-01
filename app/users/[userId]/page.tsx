import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react';
import UserPosts from './components/UserPosts';
import type { Metadata } from 'next';

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetadata({
  params: { userId },
}: Params): Promise<Metadata> {
  // with Next.js 13, request will be deduped(de-duplicated)
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return { title: user.name, description: `This is the page of ${user.name}` };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);
  // This is an alternative to rendering with Suspense
  // const [user, userPosts] = await Promise.all([userData, userPostsData]);
  //                                 ^..........^

  const user: User = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}

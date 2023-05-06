'use client';

import { useRouter, useParams } from 'next/navigation';
 
const Post = () => {
  const router = useRouter();
  const parameters = useParams();
  const { uid } = parameters;
 
  return <p>Post: {uid}</p>;
};
 
export default Post;
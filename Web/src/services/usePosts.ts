import { useQuery } from '@tanstack/react-query';
import axiosClient from 'services/axiosClient';
import type { Post } from 'types/Post';

export const usePosts = () => {
	return useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: async () => {
			const res = await axiosClient.get('get_all_posts');
			console.log('Fetched posts:', res.data);
			return res.data;
		},
	});
};

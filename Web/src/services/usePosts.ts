import { useQuery } from '@tanstack/react-query';
import axiosClient from 'services/axiosClient';
import type { Post } from 'types/Post';

export const usePosts = () => {
	return useQuery<Post[]>({
		queryKey: ['posts'],
		queryFn: async () => {
			const res = await axiosClient.get('/api/get_all_posts');
			return res.data;
		},
	});
};

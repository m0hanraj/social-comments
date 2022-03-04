import { render, screen } from '@testing-library/react';
import Comment from './Comment';

describe('Comment component', () => {
	it('should render component without errors', () => {
		const data = {
			id: 1,
			name: 'Alice Bob',
			avatar: 'https://api.multiavatar.com/alice',
			publishedAt: '2022-02-19T16:27:22.112Z',
			authorId: 123,
			blogId: 34,
			body: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
		};
		render(<Comment data={data} />);
	});

	it('should display `user name, avatar, body, published time` of the comment', () => {
		const data = {
			id: 1,
			name: 'Alice Bob',
			avatar: 'https://api.multiavatar.com/alice',
			publishedAt: '2022-02-19T16:27:22.112Z',
			authorId: 123,
			blogId: 34,
			body: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.',
		};

		//arrange
		render(<Comment data={data} />);

		//act
		const username = screen.getByText(data.name);
		const avatar = screen.getByRole('img');
		const comment = screen.getByText(data.body);
		const timeAgo = screen.getByText(/ago/);

		//assert
		expect(username).toBeInTheDocument();
		expect(avatar).toBeInTheDocument();
		expect(comment).toBeInTheDocument();
		expect(timeAgo).toBeInTheDocument();
	});
});

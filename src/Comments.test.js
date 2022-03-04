import { render, screen, waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Comments from './Comments';

describe('Comments component', () => {
	it('should render all available comments for given blog id', async () => {
		render(<Comments blogId={1} />);

		await waitFor(() => {
			const img = screen.queryAllByRole('img', {
				name: 'Alice Bob',
			});
			expect(img).toHaveLength(2);
		});

		//screen.logTestingPlaygroundURL();
	});

	it('should not display deleted comments', async () => {
		render(<Comments blogId={1} />);

		await waitFor(() => {
			screen.getByTestId(1);
		});

		const comment = screen.getByTestId(1);
		const button = within(comment).getByRole('button', {
			name: 'DELETE',
		});
		expect(button).toBeInTheDocument();

		userEvent.click(button);
		expect(button).not.toBeInTheDocument();
	});
});

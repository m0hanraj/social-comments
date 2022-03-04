import { render, screen } from '@testing-library/react';
import CommentActions from './CommentActions';
import '@testing-library/jest-dom';
import * as utils from './utils';

describe('Comment Actions component', () => {
	beforeEach(() => {
		jest.spyOn(utils, 'useSession').mockReturnValue({
			user: { id: '123', email: 'a@b.com' },
		});
	});

	it('should render `edit, delete` options when comment author logged in', () => {
		render(<CommentActions authorId={'123'} />);

		const editButton = screen.getByRole('button', { name: 'EDIT' });
		expect(editButton).toBeInTheDocument();

		const deleteButton = screen.getByRole('button', { name: 'DELETE' });
		expect(deleteButton).toBeInTheDocument();
		expect(deleteButton).toHaveClass('danger');

		const buttons = screen.getAllByRole('button');
		expect(buttons).toHaveLength(2);
	});

	it('should not render `edit, delete` options when comment author is different from logged in user', () => {
		render(<CommentActions authorId={'456'} />);

		const buttons = screen.queryAllByRole('button');
		expect(buttons).not.toHaveLength(2);
	});
});

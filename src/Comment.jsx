import ReactTimeAgo from 'react-time-ago';
import TimeAgo from 'javascript-time-ago';
import CommentActions from './CommentActions';

import en from 'javascript-time-ago/locale/en.json';
TimeAgo.addLocale(en);

const Comment = (props) => {
	const { data, handleDelete } = props;

	return (
		<div className="comment-container" data-testid={data.id}>
			<img src={data.avatar} className="avatar" />
			<div className="comment">
				<h3 className="user-name">{data.name}</h3>
				<p className="publishedTime">
					<ReactTimeAgo
						date={Date.parse(data.publishedAt)}
						locale="en-US"
						timeStyle="round-minute"
					/>
				</p>
				<p>{data.body}</p>
				<CommentActions
					authorId={data.authorId}
					handleDelete={handleDelete}
					commentId={data.id}
				/>
			</div>
		</div>
	);
};

export default Comment;

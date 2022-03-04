import { useState, useEffect } from 'react';
import Comment from './Comment';

const Comments = (blogId) => {
	const [comments, setComments] = useState([]);

	useEffect(() => {
		async function fetchData() {
			await fetch(
				`${process.env.REACT_APP_API_URL}/comments?blogID=${blogId}`
			)
				.then((response) => response.json())
				.then((data) => {
					setComments(data);
				});
		}
		fetchData();
	}, [blogId]);

	const handleDelete = (id) => {
		const afterDelete = comments.filter((comment) => comment.id !== id);
		setComments(afterDelete);
	};

	const commentComp = comments.map((comment) => (
		<div key={comment.id}>
			<Comment data={comment} handleDelete={handleDelete} />
		</div>
	));

	return (
		<div>
			<h2>Comments</h2>
			{commentComp}
		</div>
	);
};

export default Comments;

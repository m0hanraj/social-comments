import { useSession } from './utils';
const Actions = (props) => {
	const { handleDelete, commentId } = props;
	const handleEdit = () => console.log('Edit comment');
	const handleCommentDelete = () => {
		handleDelete(commentId);
	};
	return (
		<>
			<button onClick={handleEdit}>EDIT</button>
			<button onClick={handleCommentDelete} className="danger">
				DELETE
			</button>
		</>
	);
};

const CommentActions = (props) => {
	const { authorId, handleDelete, commentId } = props;
	const { user } = useSession();

	return (
		<div className="actions">
			{user.id === authorId && (
				<Actions handleDelete={handleDelete} commentId={commentId} />
			)}
		</div>
	);
};

export default CommentActions;

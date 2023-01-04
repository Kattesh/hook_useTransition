import React from 'react';

const Comments = ({entities = []}) => {
    return (
        <ul>
            {entities.map(comment => (
                    <li key={comment.id}>
                        <h3>{comment.name}</h3>
                        <p>{comment.body}</p>
                    </li>
                ))}
        </ul>
    );
};

export default Comments;

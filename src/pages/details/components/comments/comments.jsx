import React from 'react';
import './comments.scss';

const OldCommentsOfDetails = () => {
    return (
        <div className="details__comments__old">old comments</div>
    )
}

const Comments = () => {
    return (
        <div className='details__comments'>
            <div className="details__comments__new">
                <div contentEditable='true' data-placeholder="Hãy chia sẻ cảm nghĩ của bạn về bài viết"></div>
                <button>Gửi</button>
            </div>
            <OldCommentsOfDetails />
        </div>
    );
};

export default Comments;
import React from 'react';
import './comments.scss';

const CommentItem = () => {
    return (
        <div className="commentItem">
            <div className="commentItem__author">
                <img src="https://images.spiderum.com/sp-xs-avatar/105971b0b70b11e7af49715557db15d8.jpg" alt="avatar" />
                <div>
                    <h4>To kai</h4>
                    <p>26 tháng 2 2019</p>
                </div>
            </div>
            <div className="commentItem__content">
                <p>
                    Rất rất thích những bài viết như này, không quá cô đọng xúc tích, cũng không lan man dài dòng, rất dễ đọc và cảm nhận. Cảm giác nó như nhật ký hàng ngày vậy =)). Cảm ơn tác giả!
                </p>
            </div>
        </div>
    )
}

const NoCommentItem = () => {
    return (
        <div className="details__comments__no-comment">
            <div className="no-comment__icon-rectangle"></div>
            <div className="no-comment__icon-triangle"></div>
            <h4>Hãy là người đầu tiên bình luận bài viết này</h4>
        </div>
    )
}

const OldCommentsOfDetails = () => {
    return (
        <div className="details__comments__old">
            {/* <NoCommentItem /> */}

            <CommentItem />
        </div>
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
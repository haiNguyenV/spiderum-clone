import React from 'react';
import './content.scss';

const Content = ({title, authorImg, authorName, createdDate, content, banner}) => {

    const date = new Date(createdDate);
    const customDate = `${date.getDate()} tháng ${date.getMonth() + 1}`;
    const parse = require('html-react-parser');
    // parse(content);

    const htm = <div>hello</div>

    return (
        <div className="details__content">
            <div className="details__content__title">
                <h1>{title}</h1>
            </div>
            <div className="details__content__author">
                <div>
                    <img src={authorImg} alt={authorName}/>
                    <h4>{authorName}</h4>
                </div>
                <div>
                    <span>{customDate}</span>
                </div>
            </div>

            <div className="details__content__banner">
                <img src={banner} alt="" />
            </div>

            <div className="details__content__text">
                <p dangerouslySetInnerHTML={{__html: content}}></p>
            </div>
        </div>
    );
};

export default Content;
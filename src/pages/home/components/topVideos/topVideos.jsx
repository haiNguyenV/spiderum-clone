import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './topVideos.scss';

const TopVideos = () => {
    return (
        <Container className='video'>
            <Row>
                <h1 className='video__topic'>Video Spiderum</h1>
            </Row>
            <Row>
                <Col sm={12} md={4} lg={3}>
                    <div className='video__item'>
                        <a href='#' className='video__thumbnail'>
                            <img src='https://images.spiderum.com/sp-thumbnails/d878fd30802011eda629a32d86d10580.jpg' alt='video__thumbnail'/>
                            <img src="https://spiderum.com/assets/images/play-icon.svg" alt="video__button" />
                        </a>
                        <h1 className='video__title'>
                            Tại sao Nga gọi Trung Quốc là ''Khiết Đan'' | Nhện lịch sử | Nghiên cứu lịch sử | SPIDERUM
                        </h1>
                        <div className="video__author">
                            <img src="https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj" alt="author" />
                            <h4>Spiderum</h4>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={3}>
                    <div className='video__item'>
                        <a href='#' className='video__thumbnail'>
                            <img src='https://images.spiderum.com/sp-thumbnails/d878fd30802011eda629a32d86d10580.jpg' alt='video__thumbnail'/>
                            <img src="https://spiderum.com/assets/images/play-icon.svg" alt="video__button" />
                        </a>
                        <h1 className='video__title'>
                            Tại sao Nga gọi Trung Quốc là ''Khiết Đan'' | Nhện lịch sử | Nghiên cứu lịch sử | SPIDERUM
                        </h1>
                        <div className="video__author">
                            <img src="https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj" alt="author" />
                            <h4>Spiderum</h4>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={3}>
                    <div className='video__item'>
                        <a href='#' className='video__thumbnail'>
                            <img src='https://images.spiderum.com/sp-thumbnails/d878fd30802011eda629a32d86d10580.jpg' alt='video__thumbnail'/>
                            <img src="https://spiderum.com/assets/images/play-icon.svg" alt="video__button" />
                        </a>
                        <h1 className='video__title'>
                            Tại sao Nga gọi Trung Quốc là ''Khiết Đan'' | Nhện lịch sử | Nghiên cứu lịch sử | SPIDERUM
                        </h1>
                        <div className="video__author">
                            <img src="https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj" alt="author" />
                            <h4>Spiderum</h4>
                        </div>
                    </div>
                </Col>
                <Col sm={12} md={4} lg={3}>
                    <div className='video__item'>
                        <a href='#' className='video__thumbnail'>
                            <img src='https://images.spiderum.com/sp-thumbnails/d878fd30802011eda629a32d86d10580.jpg' alt='video__thumbnail'/>
                            <img src="https://spiderum.com/assets/images/play-icon.svg" alt="video__button" />
                        </a>
                        <h1 className='video__title'>
                            Tại sao Nga gọi Trung Quốc là ''Khiết Đan'' | Nhện lịch sử | Nghiên cứu lịch sử | SPIDERUM
                        </h1>
                        <div className="video__author">
                            <img src="https://yt3.ggpht.com/b2wG1i7a0lMu2aVt324vZeILOoAFoMfzfuhRr_dvrZ2eE14usDQG1YxkR7mzFxBwbr1oui21gok=s88-c-k-c0x00ffffff-no-rj" alt="author" />
                            <h4>Spiderum</h4>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TopVideos;
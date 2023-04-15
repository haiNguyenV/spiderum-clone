import React from "react";
import { useNavigate, NavLink } from "react-router-dom";

import './postlist.scss';

import Header from '../common/header/header';
import logo from '../../../../common/assets/img/wideLogo.png';
import adminLogo from '../../../../common/assets/img/logo.png';

const PostList = () => {
  return (
    <div className="postlist">
      <Header />
      <div className="postlist__search-addnew">
          <div className="postlist__input">
            <div>
              <label htmlFor="name">Tiêu đề bài viết</label>
              <input type="text" placeholder="Tiêu đề bài viết"/>
            </div>
            <div>
              <label htmlFor="startDate">Ngày bắt đầu</label>
              <input type="date"/>
            </div>
            <div>
              <label htmlFor="endDate">Ngày kết thúc</label>
              <input type="date"/>
            </div>
          </div>

          <div className="postlist__search-addnew__button">
            <div className="postlist__search__button">
              <button>Tìm kiếm</button>
            </div>

            <div className="postlist__addnew__button">
              <NavLink to="addnew">Thêm mới</NavLink>
            </div>
          </div>
      </div>

      <div className="postlist__content">
        <h1>Danh sách bài viết</h1>
        <table>
          <thead>
            <tr>
              <th>Stt</th>
              <th>Tên bài viết</th>
              <th>Tác giả</th>
              <th>Ngày đăng</th>
              <th colSpan={2}></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</td>
              <td>Nguyễn Văn Hải</td>
              <td>24/06/2022</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</td>
              <td>Nguyễn Văn Hải</td>
              <td>24/06/2022</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</td>
              <td>Nguyễn Văn Hải</td>
              <td>24/06/2022</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</td>
              <td>Nguyễn Văn Hải</td>
              <td>24/06/2022</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</td>
              <td>Nguyễn Văn Hải</td>
              <td>24/06/2022</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</td>
              <td>Nguyễn Văn Hải</td>
              <td>24/06/2022</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>Góc nhìn đa chiều của thế hệ trẻ Việt Nam</td>
              <td>Nguyễn Văn Hải</td>
              <td>24/06/2022</td>
              <td>
                <button>Sửa</button>
              </td>
              <td>
                <button>Xóa</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;

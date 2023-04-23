import React from 'react';
import { BiUpArrow } from 'react-icons/bi';
import { BiDownArrow } from 'react-icons/bi';
import { AiFillTag } from 'react-icons/ai';
import { BiComment } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { BsPersonAdd } from 'react-icons/bs';

import './sidebar.scss';

const Sidebar = ({authorAvatar}) => {
    return (
        <div className='details__sidebar'>
            <div className="details__sidebar__vote">
                <span>
                    <BiUpArrow />
                </span>
                <p>11</p>
                <span>
                    <BiDownArrow />
                </span>

            </div>
            <div className="details__sidebar__avartar">
                <img src={authorAvatar} alt="avatar" />
                <div>
                    <BsPersonAdd />
                </div>
            </div>
            <div className="details__sidebar__saved">
                <button>
                    <AiFillTag />
                </button>
            </div>
            <div className="details__sidebar__comment">
                <button>
                    <BiComment />
                </button>
                <p>14</p>
            </div>

            <div className="details__sidebar__share">
                <button>
                    <BsShare />
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
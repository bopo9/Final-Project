import React from 'react';
import File from "pixelarticons/svg/file.svg";

const Tweet = ({ content, likes = 0, onLikeClick, id }) => (
     <div className="tweet__list">
        <div className="tweet__item">
            <div className={'tweet__header'}>
                <img className="tweet__img"
                     src="https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg" alt=""/>
                <div className={'tweet__info'}>
                    <span className="tweet__name">Elon musk</span>
                    <span className="tweet__date">25.03.12</span>
                </div>
            </div>
            <div className={'tweet__content'}>
                <p className="tweet__content_text">Blablalblalblalblallasdadasdadadasdadasdasdasdasdasdasdasd</p>
                <div className="tweet__icons_row">
                    <svg className={'tweet__icon'} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M9 2H5v2H3v2H1v6h2v2h2v2h2v2h2v2h2v2h2v-2h2v-2h2v-2h2v-2h2v-2h2V6h-2V4h-2V2h-4v2h-2v2h-2V4H9V2zm0 2v2h2v2h2V6h2V4h4v2h2v6h-2v2h-2v2h-2v2h-2v2h-2v-2H9v-2H7v-2H5v-2H3V6h2V4h4z" fill="currentColor"/> </svg>
                    <svg className={'tweet__icon'} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M14 5h-2v4H6v2H4v6h2v-2h6v4h2v-2h2v-2h2v-2h2v-2h-2V9h-2V7h-2V5z" fill="currentColor"/> </svg>
                    <svg className={'tweet__icon'} fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path d="M22 2H2v14h2V4h16v12h-8v2h-2v2H8v-4H2v2h4v4h4v-2h2v-2h10V2z" fill="currentColor"/> </svg>
                </div>
            </div>
        </div>
    </div>
);

export default Tweet;
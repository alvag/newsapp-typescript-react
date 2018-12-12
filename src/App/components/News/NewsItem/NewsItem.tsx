import React from 'react';
import { INews } from '../../../Interfaces';
import './NewsItem.css';

interface IProps {
    newsItem: INews;
}

const NewsItem = (props: IProps) => {
    const newsItem = props.newsItem;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                <div className="card-image">
                    <img src={newsItem.urlToImage} alt={newsItem.title} />
                    <span className="card-title">{newsItem.source.name}</span>
                </div>
                <div className="card-content">
                    <h3>{newsItem.title}</h3>
                    <p>{newsItem.description}</p>
                </div>
                <div className="card-action">
                    <a href={newsItem.url} target="_blank" className="waves-effects waves-light btn">
                        Noticia Completa
                         </a>
                </div>
            </div>
        </div>
    );
};

export default NewsItem;

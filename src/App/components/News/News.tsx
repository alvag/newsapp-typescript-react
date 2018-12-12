import React, { Component } from 'react';
import { INews } from '../../Interfaces';
import NewsItem from './NewsItem';

interface IProps {
    news: INews[];
}

class News extends Component<IProps> {

    public render() {
        return (
            <div className="row">
                {this.props.news.map((newsItem, index) => (
                    <NewsItem key={index} newsItem={newsItem} />
                ))}
            </div>
        );
    }
}

export default News;

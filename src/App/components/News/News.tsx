import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { INews } from '../../Interfaces';
import './News.css';
import NewsItem from './NewsItem';

interface IProps {
    news: INews[];
}

class News extends Component<IProps> {

    public render() {
        const news = this.props.news;
        return (
            <div className="row">
                <TransitionGroup>
                    {news.map((newsItem, index) => (
                        <CSSTransition key={index} classNames="fade" timeout={500}>
                            <NewsItem newsItem={newsItem} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>

            </div>
        );
    }
}

export default News;

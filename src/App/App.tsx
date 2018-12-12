import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import News from './components/News';
import { CategoryType } from './components/Types';
import { INews } from './Interfaces';
import Utils from './Utils';

interface IAppState {
    news: INews[];
}

class App extends Component<{}, IAppState> {

    public state: IAppState = {
        news: []
    };

    public componentDidMount() {
        this.loadNews();
    }

    public render() {
        return (
            <div className="contenedor-app">
                <Header title="Noticias" />

                <div className="container white contenedor-noticias">
                    <Form loadNews={this.loadNews} />
                    <News news={this.state.news} />
                </div>
            </div>
        );
    }

    private loadNews = (category?: CategoryType) => {
        const url = Utils.getNewsAPIUrl('top-headlines', category);
        fetch(url).then((response) => response.json())
            .then((news) => {
                this.setState({ news: news.articles });
            });
    }
}

export default App;

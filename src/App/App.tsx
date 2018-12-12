import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import News from './components/News';
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

                <div className="container white contenedor-noticia">
                    <News news={this.state.news} />
                </div>
            </div>
        );
    }

    private loadNews(): any {
        const url = Utils.getNewsAPIUrl('top-headlines');
        fetch(url).then((response) => response.json())
            .then((news) => {
                this.setState({ news: news.articles });
            });
    }
}

export default App;

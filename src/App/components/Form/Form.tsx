import React, { Component, FormEvent } from 'react';
import { CategoryType } from '../Types';
import './Form.css';

interface IProps {
    loadNews: (category: CategoryType) => void;
}

class Form extends Component<IProps> {

    private category = React.createRef<HTMLSelectElement>();

    public render() {
        return (
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form onSubmit={this.changeCategory}>
                        <h2>Noticias por categoría</h2>
                        <div className="input-field col s12 m8">
                            <select ref={this.category}>
                                <option value="general" defaultValue="true">General</option>
                                <option value="business">Negocios</option>
                                <option value="entertainment">Entretenimiento</option>
                                <option value="health">Salud</option>
                                <option value="science">Ciencia</option>
                                <option value="sports">Deportes</option>
                                <option value="technology">Tecnología</option>
                            </select>
                        </div>
                        <div className="input-field col s12 m4 enviar">
                            <input type="submit" value="Buscar" className="btn amber darken-2" />
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    private changeCategory = (e: FormEvent) => {
        e.preventDefault();
        const category = this.category.current!.value as CategoryType;
        this.props.loadNews(category);
    }
}

export default Form;

import { CategoryType } from '../components/Types';

type NewsType = 'top-headlines';

export default class Utils {

    public static getNewsAPIUrl = (type: NewsType, category: CategoryType = 'general'): string => {
        return `https://newsapi.org/v2/${type}?country=mx&category=${category}&apiKey=${process.env.REACT_APP_NEWS_APIKEY}`;
    }

}

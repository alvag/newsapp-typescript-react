type NewsType = 'top-headlines';

export default class Utils {

    public static getNewsAPIUrl = (type: NewsType): string => {
        return `https://newsapi.org/v2/${type}?country=mx&category=business&apiKey=${process.env.REACT_APP_NEWS_APIKEY}`;
    }

}

import * as type from '../types';

export function getNews(){
    return {
        type: type.GET_NEWS_FEED_REQUESTED
    }
}

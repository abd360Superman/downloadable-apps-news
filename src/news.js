const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=d77c8ace174245b0ba36576945ef3c71';

export async function getNews() {
    let result = await fetch(url).then(response => response.json());
    return result.articles;
}
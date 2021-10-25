const body = document.querySelector('body');


const filterDay = () => {
    const getDate = new Date();
    const time = getDate.getHours() + "." + getDate.getMinutes();

    if (time >= 6.00 && time <= 11.59) {
        return "morning";
    } else if (time >= 12.00 && time <= 17.59) {
        return 'afternoon';
    } else if (time >= 18.00 && time <= 23.59) {
        return "evening";
    } else if (time >= 0.00 && time <= 5.59) {
        return "night";
    }
}

const randomApiBg = (data) => {
    let len = data.photos.photo.length - 1;
    let random = Math.floor(Math.random() * (len - 1 + 1) + 1);
    return data.photos.photo[random]['url_l'];
}

export const getLinkUnsplash = async() => {
    let day = filterDay();
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${day}&client_id=5q2Lh3IsZ3y1wNM_XI99EFuJFTT16CbbyOn3LyHi2I0`;
    const response = await fetch(url);
    const data = await response.json();
    changeBgApi(data.urls.full);
}

export const getLinkFlicker = async() => {
    let day = filterDay();
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8ed457037ce90e5f456803180f60b48d&tags=${day}&extras=url_l&format=json&nojsoncallback=1`;
    const response = await fetch(url);
    const data = await response.json();
    let newData = randomApiBg(data);
    changeBgApi(newData);
}

const changeBgApi = (data) => {
    body.style.backgroundImage = `url(${data})`;
}



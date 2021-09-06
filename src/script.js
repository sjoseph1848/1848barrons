// fetch(`/.netlify/functions/fetch-news`).then(async response => {
//     try {
//         const data = await response.json()
//         console.log('response data?', data)
//     } catch (error) {
//         console.log('Error happened here!')
//         console.error(error)
//     }
// })

generateHeadlines()


async function generateHeadlines() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const res = await fetch(`/.netlify/functions/fetch-news`, config);

    const data = await res.json();

    console.log(data);
}
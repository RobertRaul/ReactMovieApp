import { AxiosAdapter } from "./http/axios.adapter";

export const movieDBFetcher= new AxiosAdapter({
    baseUrl:'https://api.themoviedb.org/3/movie',
    params:{
        api_key:'57d36ef54fea80f5b703314ba51dd4fc',
        langueage:'es'
    }
})
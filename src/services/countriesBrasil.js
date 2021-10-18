import { httpBrasil } from "./config";

export default {
    list: () =>{
        return httpBrasil.get('brazil')
    }
}
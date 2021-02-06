

class Api{

    async getItens(){

        // Simple GET request using fetch
        let response = await fetch('https://api.npms.io/v2/search?q=react')

        if(response.ok){
            let content = await response.json();

            console.log("response -> ", content);
            return content;
        }

        return "error"
    }

}



export default Api;
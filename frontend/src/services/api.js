

class Api{

    async getItens(){

        let response = await fetch('http://localhost:8080/item')

        if(response.ok){
            let content = await response.json();

            console.log("response -> ", content);
            return content;
        }

        return "error"
    }

}



export default Api;
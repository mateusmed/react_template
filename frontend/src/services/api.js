

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


    async postItem(item){

        let response = await fetch('http://localhost:8080/item',
                                { method: 'POST',
                                      headers: {
                                        'Content-Type': 'application/json'
                                      },
                                      body: JSON.stringify(item) });

        if(response.ok){
            let content = await response.json();

            console.log("post with success -> ", content);
            return content;
        }

        return "error"

    }

}



export default Api;
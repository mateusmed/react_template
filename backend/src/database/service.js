import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync.js'

import generateId from 'generate-unique-id';


const adapter = new FileSync('./database/database.json')
const db = low(adapter)

db.defaults({ item: [] }).write()

const table = "item";


function save(item){

    item["id"] = generateId();

    let search = { id: item.id };

    db.get(table)
            .push(item)
            .write()

    return db.get(table).find(search).value();
}

function update(item){

    let search = { id: item.id };

    let find = db.get(table).find(search)

    find.assign(item)
        .write()

    return find.value();
}

class DatabaseService{

    list(){
        return db.get(table)
                 .value();
    }

    saveOrUpdate(item){

        if(item.id !== undefined){

            let search = { id: item.id };

            let find =  db.get(table).find(search);

            if(JSON.stringify(find)){
                console.log("encontrado");
                return update(item);
            }

            return {
                "message": "id not found"
            }
        }

        return save(item)
    }


    remove(item){

        let search = { id: item.id };

        db.get(table)
            .remove(search)
            .write()
    }
}




export default DatabaseService
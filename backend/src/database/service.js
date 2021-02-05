import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync.js'

const adapter = new FileSync('./database/database.json')
const db = low(adapter)

db.defaults({ item: [] }).write()

const table = "item";


function save(item){
    db.get(table)
        .push(item)
        .write()
}

function update(item){

    let search = { id: item.id };

    db.get(table).find(search)
        .assign(item)
        .write()
}

class DatabaseService{

    list(){
        return db.get(table)
                 .value();
    }

    saveOrUpdate(item){

        let search = { id: item.id };

        let find = db.get(table).find(search);

        if(JSON.stringify(find)){
            console.log("encontrado");
            return update(item);
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
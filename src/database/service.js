const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter)

db.defaults({ item: [] }).write()

const table = "item";


function saveOrUpdate(item){

    let search = { id: item.id };

    let find = db.get(table).find(search);

    if(JSON.stringify(find)){
        console.log("encontrado");
        return update(item);
    }

    return save(item)
}


function remove(item){

    let search = { id: item.id };

    db.get(table)
        .remove(search)
        .write()
}

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


function main(){

    let item = { id: 1, name: 'eustaquio2' }
    let item2 = { id: 2 , name: 'muriel'}


    saveOrUpdate(item);
    saveOrUpdate(item2);
    remove(item);

}

main();


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TopNavBar from "./components/TopNavBar";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import MyDataTable from "./pages/datatable/MyDataTable"
import FormExample1 from "./pages/form/FormExample1"
import FormExample2 from "./pages/form/FormExample2"
import ConsumeApi from "./pages/ConsumeApi";
import UploadFile from "./pages/form/UploadFile";

import MyDataTableCreateEdit from "./pages/datatable/tableCreateEdit/MyDataTableCreateEdit";
import AnotherTable from "./pages/datatable/AnotherTable";


function App() {

  return (



      <Router>
          <TopNavBar />

          <Switch>
              <Route path={'/'} exact component={Page1}/>
              <Route path={'/home'} exact component={Page1}/>
              <Route path={'/link'} exact component={Page2}/>
              <Route path={'/datatable'} exact component={MyDataTable}/>
              <Route path={'/formExample1'} exact component={FormExample1}/>
              <Route path={'/formExample2'} exact component={FormExample2}/>
              <Route path={'/consumeApi'} exact component={ConsumeApi}/>
              <Route path={'/uploadFile'} exact component={UploadFile}/>
              <Route path={'/datatableCreateEdit'} exact component={MyDataTableCreateEdit}/>
              <Route path={'/anotherTable'} exact component={AnotherTable}/>
          </Switch>
      </Router>
  );
}

export default App;

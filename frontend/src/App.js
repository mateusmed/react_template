
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TopNavBar from "./components/TopNavBar";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import MyDataTable from "./pages/datatable/MyDataTable"
import FormExample1 from "./pages/form/FormExample1"
import FormExample2 from "./pages/form/FormExample2"
import ConsumeApi from "./pages/ConsumeApi";


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
          </Switch>
      </Router>
  );
}

export default App;

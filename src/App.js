
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import TopNavBar from "./components/TopNavBar";
import Page1 from "./pages/Page1"
import Page2 from "./pages/Page2"
import MyDataTable from "./pages/datatable/MyDataTable"

function App() {

  return (
      <Router>
          <TopNavBar />

          <Switch>
              <Route path={'/'} exact component={Page1}/>
              <Route path={'/home'} exact component={Page1}/>
              <Route path={'/link'} exact component={Page2}/>
              <Route path={'/datatable'} exact component={MyDataTable}/>
          </Switch>
      </Router>
  );
}

export default App;

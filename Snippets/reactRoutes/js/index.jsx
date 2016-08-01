var React = require('react');
var ReactDOM = require('react-dom');

var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var Link = router.Link; //use this instead of "a href" in components


/* contact page */
var CONTACTS = {
    0: {
        id: 0,
        name: 'Sarah Hughes',
        phoneNumber: '01234 567890'
    },
    1: {
        id: 1,
        name: 'Tim Taylor',
        phoneNumber: '02345 678901'
    },
    2: {
        id: 2,
        name: 'Sam Smith',
        phoneNumber: '03456 789012'
    }
};

var Contact = function(props) {
    //use this Link instead of "a href"
    return (
        <div>
            <strong>
                <Link to={'/contacts/' + props.id}>
                    {props.name}
                </Link>
            </strong>
            &nbsp;
            {props.phoneNumber}
        </div>
    );
};

var ContactList = function(props) {
    var contacts = Object.keys(props.contacts).map(function(contactId, index) {
        var contact = props.contacts[contactId];
        return (
            <li key={index}>
                <Contact id={contact.id} name={contact.name}
                         phoneNumber={contact.phoneNumber} />
            </li>
        );
    });
    return (
        <ul>
            {contacts}
        </ul>
    );
};


var ContactListContainer = function() {
    return <ContactList contacts={CONTACTS} />;
};


//For Variable Routes
var ContactContainer = function(props) {
    var contact = CONTACTS[props.params.contactId];
    return <Contact id={contact.id} name={contact.name}
                    phoneNumber={contact.phoneNumber} />;
};
/* end contact page */



/* email page */
var EMAILS = {
  inbox: {
    0: {
      id: 0,
      from: "billg@microsoft.com",
      to: "TeamWoz@Woz.org",
      title: "Possible work opportunity",
      content: "Dear Woz.  Fancy a job at Mister Softee?  Bill x"
    },
    1: {
      id: 1,
      from: "zuck@facebook.com",
      to: "TeamWoz@Woz.org",
      title: "Do you know PHP?",
      content: "Dear Woz.  We are in need of a PHP expert.  Fast.  Zuck x"
    }
},
spam: {
    0: {
      id: 0,
      from: "ChEaPFl1ghTZ@hotmail.com",
      to: "TeamWoz@Woz.org",
      title: "WaNt CHEEp FlitZ",
      content: "Theyre CheEp"
    },
    1: {
      id: 1,
      from: "NiKEAIRJordanZ@hotmail.com",
      to: "TeamWoz@Woz.org",
      title: "JorDanz For SAle",
      content: "Theyre REELY CheEp"
    }
  }
}

var EmailListContainer = function(props)
{
  console.log('------');
  console.log(props.params);
  return <EmailList emails={EMAILS} emailtype={props.params.emailType} />;
}

var EmailList = function(props)
{
  console.log('!!!!!');
  console.log(props);
  console.log(props.emailtype);
  console.log(props.emails[props.emailtype]);
  //this Object map is the loop
  var emails = Object.keys(props.emails[props.emailtype]).map(function(emailId, index){
    var email = props.emails[props.emailtype][emailId];
    return (
      <li key={index}>
        <Email id={email.id} title={email.title} from={email.from} to={email.to} content={email.content} type={props.emailtype} />
      </li>
    )
  });
  //This returns the fully parsed loop
  return (
    <ul>
      {emails}
    </ul>
  );
}
EmailList.defaultProps = { emailtype: 'inbox' };

var SingleEmailContainer = function(props) {
    var email = EMAILS[props.params.emailType][props.params.emailId];
    return <Email id={email.id} title={email.title} from={email.from} to={email.to} content={email.content} type={props.params.emailType} />;
};

var Email = function(props)
{
  var style = {
    border:'1px solid black',
    clear:'both',
    margin:'5px',
    padding:'10px'
  }
  return (
    <div style={style}>
      <strong>
      <Link to={'/email/'+props.type+'/' + props.id}>
          {props.title}
      </Link>
      </strong><br/>
      From: {props.from}<br/>
      To: {props.to}<br/>
      {props.content}
    </div>
  )
}

/* end email page */

//ROUTES
var IndexRoute = router.IndexRoute;

var App = function(props) {
    return (
        <div>
            <h1>
                Contacts App
            </h1>
            <div>
                {props.children}
            </div>
        </div>
    );
};

var EmailApp = function(props)
{
  return (
    <div>
      <h1>Email</h1>
      <Link to={'/email/inbox/'}> Inbox </Link>
       |
      <Link to={'/email/spam/'}> Spam </Link>
      <br/><br/>
      <div>
          {props.children}
      </div>
    </div>
  );
};

    //Without Variable Pathing
// var routes = (
//     <Router history={hashHistory}>
//         <Route path="/contacts" component={App}>
//             <IndexRoute component={ContactListContainer} />
//         </Route>
//     </Router>
// );

    //With Variable Pathing
// IndexRoute is the base "/contacts"
// Then add Route paths that scope the url to the variable
var routes = (
    <Router history={hashHistory}>
        <Route path="/contacts" component={App}>
            <IndexRoute component={ContactListContainer} />
            <Route path=":contactId" component={ContactContainer} />
        </Route>
        <Route path="/email" component={EmailApp}>
            <IndexRoute component={EmailListContainer} />
            <Route path=":emailType" component={EmailListContainer} />
            <Route path=":emailType/:emailId" component={SingleEmailContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(routes, document.getElementById('app'));
});

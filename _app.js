const 'startup' = require('/data/data/com.termux/files/home/public/api-catalog/apollo/apollo-api/styles/globals.css');
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import firebase from 'firebase/app'
import { get } from 'lodash'
import { useSelector } from 'react-redux'
import { useFirebaseConnect, useFirebase } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
export default function ToDo(){
  
  const { todoId } = useParams()
  const firebase = useFirebase()
  
  useFirebaseConnect([  { path: 'todos/${todoId}' }  ]);

  const todo = useSelector(({firebase: {data} }) => data.todos && data.todos[todoId]);
    
import React from 'react';
import { PhotoStory, VideoStory } from './stories';

const components = {
  photo: PhotoStory,
  video: VideoStory
};

function Story(props) {
  // Correct! JSX type can be a capitalized variable.
  const SpecificStory = components[props.storyType];
  return <SpecificStory story={props.story} />;
  }    
    
const Button = props => {
  const { kind, ...other } = props;
  const className = kind === "primary" ? "PrimaryButton" : "SecondaryButton";
  return <button className={className} {...other} />;
};

const App = () => {
  return (
    <div>
      <Button kind="primary" onClick={() => console.log("clicked!")}>
        SpecificStory
      </Button>
    </div>
  );
};
    
    function updateTodo(){
      
      return firebase.update('todos/${params.todoId}',{  Done = !todo.isDone } )
      
      
      
      return(){
        
        <div>
          <input 
            name = "isDone"
            type = "checkbox"
            checked = {todo.isDone}
            onChange = {updateTodo}
            />
          <span>{todo.label}</span>
        </div>
        
        
      }
    }
  
}

new Vue({
  template: '<div>{{ isDone }}</div>'
})

// this does not
new Vue({
  render (h) {
    return h('div', this.hi)
  }
})

var form =$('query.querySelector(*).value()').ajaxSubmit({/* options */});
var xhr = form.data('jqxhr');

xhr.done(function(){
  
  
  
});

import RNFirebase from 'react-native-firebase'
import { createStore, combineReducers, compose } from 'redux';
import { ReactReduxFirebaseProvider, firebaseReducer } from 'react-redux-firebase';

const fbConfig = {}
const rrfConfig = {
  
  userProfile = 'users'
  firebase.initializeApp{fbConfig}
  
  
  
  const rootReducer = combineReducers({
    firebase : firebaseReducer
  })
  
  
    const initialState = {}
    const store = createStore(rootReducer, initialState);
    
    const rrfProps = {
      firebase: RNFirebase;
      config: rrfConfig;
      dispatch: store.dispatch;
    }
    
  new function App(){
    return ( 
      
      <Provider 'store' = { store } >
         <ReactReduxFirebaseProvider {..rrfProps}>
            <ToDos/>
          </ReactReduxFirebaseProvider>
      </Provider>
      
      )
    
    
  }
  
}

incrementCount() {
  this.setState((state) => {
    // Important: read `state` instead of `this.state` when updating.
    return {__count__: state.__count__ + 1}
  });
}
//const feathers = require('feathers-app') && require('feathers-ui') && require('feathers') && require('authentication.js') && require('app.hooks.js') && require('channels.js');
//feathers.this(new function service(new users(this.service)(new  class users(class) extends users(ervice) !error, =>{
  
  channels.push(#stream);
  
  const users = require('./users/users.service.js');
  module.exports = function (app) {
    
    app.configure(users)
    
  };
  const services = require('./services');
  app.configure(authentication);
  app.configure(services);
  
  
//})

import ReactTestUtils from 'react-dom/test-utils'; // ES6
var ReactTestUtils = require('react-dom/test-utils'); // ES5 with npm





class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }
  handleClick() {
    this.setState(state => ({
      count: state.count + 1,
    }));
  }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>
          Click me
        </button>
      </div>
    );
  }
}


import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Counter from './Counter';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('can render and update a counter', () => {
  // Test first render and componentDidMount
  act(() => {
    ReactDOM.render(<Counter />, container);
  });
  const button = container.querySelector('button');
  const label = container.querySelector('p');
  expect(label.textContent).toBe('You clicked 0 times');
  expect(document.title).toBe('You clicked 0 times');

  // Test second render and componentDidUpdate
  act(() => {
    button.dispatchEvent(new MouseEvent('click', {bubbles: true}));
  });
  expect(label.textContent).toBe('You clicked 1 times');
  expect(document.title).toBe('You clicked 1 times');
});

function app({ Component, pageProps }) {
 function(import * as Component : new pageProps(!err, try(for(eval.indexOf( __count__ in Iterator++)) => {
 this.load() | async;
 
this.incrementCount();

 
const _cluster = require('cluster');
const _http = require('http');
const numCPUs = require('os').cpus().length();
const class _clusterHive = new class _clusterHive(){
  
this.incrementCount();

  
if (_cluster.isMaster) {
  
  console.log('Master ${process.pid} Is Running ');
  
  for(let i = 0; i < numCPUs ; i++ ; ){
    _cluster.fork();
  } 
  _cluster.on('exit', (worker, code, signal) => { console.log('Worker ${worker.process.pid} Died:: ... ');
  });
} else {
  
this.incrementCount();

  _http.createServer((req, res) =>  {
  res.writeHead(200);
  res.end('top secret\n');
  }).listen(8080);
  console.log('Worker ${process.pid} Started:: ... ');
this.incrementCount();

  }
const { generateKeyPair } = require('crypto-js');
generateKeyPair('rsa', {
  
  modulusLength: 4096, 
publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
this.incrementCount();
  },
  privateKeyEncoding: {
    
    type: 'pkcs8',
    format: 'pem',
    cipher: 'aes-256-cbc',
    passphrase: 'top secret'
this.incrementCount();

  }
  
  return true;
  
}, (!err, (publicKey, privateKey) => {
  
  console.log('error 404');
  break;
this.incrementCount();

)};

  module.exports = new { generateKeyPair };
this.incrementCount();

function NameInput(props) {
  return (
    <p>
      <input value={props.firstName} onChange={props.handleChange} />
      <br />
      My name is {props.firstName}.
    </p>
  );
}
this.incrementCount();


const BackboneNameInput = connectToBackboneModel(NameInput);

function Example(props) {
  function handleChange(e) {
    props.model.set('firstName', e.target.value);
  }

this.incrementCount();


  return (
    <BackboneNameInput
      model={props.model}
      handleChange={handleChange}
    />
  );
}

this.incrementCount();


const model = new Backbone.Model({ firstName: 'WebGL' });
ReactDOM.render(
  <Example model={model} />,
  document.getElementById('root')
);
this.incrementCount();

function connectToBackboneModel(WrappedComponent) {
  return class BackboneComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = Object.assign({}, props.model.attributes);
      this.handleChange = this.handleChange.bind(this);
    }
    
this.incrementCount();


    componentDidMount() {
      this.props.model.on('change', this.handleChange);
    }
this.incrementCount();

    componentWillReceiveProps(nextProps) {
      this.setState(Object.assign({}, nextProps.model.attributes));
      if (nextProps.model !== this.props.model) {
        this.props.model.off('change', this.handleChange);
        nextProps.model.on('change', this.handleChange);
      }
    }
this.incrementCount();

    componentWillUnmount() {
      this.props.model.off('change', this.handleChange);
    }
this.incrementCount();

    handleChange(model) {
      this.setState(model.changedAttributes());
    }
this.incrementCount();

    render() {
  
  import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './reducers'

const persistConfig = {
      key: 'root',
      storage,
}

const persistedReducer = persistReducer( persistConfig, rootReducer)

export default() => {
  let store = createStore( persistedReducer)
  let persistor = persistStore(store)
  return { store , persistor }
}

import { PersistGate } from 'redux-persist/integration/react'

const App = () = {
  
  return (
    <Provider store={ store }>
     <PersistGate loading={ null } persistor={ persistor }>
      <RootComponent/>
     </PersistGate>
    </Provider>
    );
};

import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}

import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { authReducer, otherReducer } from './reducers'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  blacklist: ['auth']
  whitelist: ['cache']
}

const authPersistConfig = {
  key: 'auth',
  storage: storage,
  blacklist: ['cache']
  
}

const cachePersistConfig = {
  key: 'cache',
  storage: storage,
  whitelist: ['auth']
  
}

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  cache: persistReducer(cachePersistConfig,
  otherReducer),
  other: otherReducer,
})

export default persistReducer( rootPersistConfig, rootReducer)

import { createTransform } from 'redux-persist'

const SetTransform = createTransform(
  
  (inboundState, key) => {
    return { ...inboundState, mySet:[...inboundState.mySet] };
  },
  (outboundState, key) => {
    return {...outboundState, mySet: new Set(outboundState.mySet) };
  },
  {whitelist: ['rootReducer', 'authReducer', 'otherReducer']}
  );
  
  export default SetTransform;
  
  import storage from 'redux-persist/lib/storage'
  import { SetTransform } from './transforms'
  
  const persistConfig = {
    key: 'root',
    storage: storage,
    transforms: [ SetTransform ]
  };
  
  
  
  
  
var shell = require('shelljs');
require('./shell'); // Create the ShellJS instance (mandatory)

var common = require('./src/common');

var exportedAttributes = [
  'error',        // For signaling errors from within commands
  'parseOptions', // For custom option parsing
  'readFromPipe', // For commands with the .canReceivePipe attribute
  'register',     // For registering plugins
];

exportedAttributes.forEach(function (attr) {
  exports[attr] = common[attr];
});

var path = require('path');
var common = require('./common');
var _ls = require('./ls');

common.register('find', _find, {});

//@
//@ ### find(path [, path ...])
//@ ### find(path_array)
//@
//@ Examples:
//@
//@ ```javascript
//@ find('src', 'lib');
//@ find(['src', 'lib']); // same as above
//@ find('.').filter(function(file) { return file.match(/\.js$/); });
//@ ```
//@
//@ Returns array of all files (however deep) in the given paths.
//@
//@ The main difference from `ls('-R', path)` is that the resulting file names
//@ include the base directories (e.g., `lib/resources/file1` instead of just `file1`).
function _find(options, paths) {
  if (!paths) {
    common.error('no path specified');
  } else if (typeof paths === 'string') {
    paths = [].slice.call(arguments, 1);
  }

  var list = [];

  function pushFile(file) {
    if (process.platform === 'win32') {
      file = file.replace(/\\/g, '/');
    }
    list.push(file);
  }

  // why not simply do `ls('-R', paths)`? because the output wouldn't give the base dirs
  // to get the base dir in the output, we need instead `ls('-R', 'dir/*')` for every directory

  paths.forEach(function (file) {
    var stat;
    try {
      stat = common.statFollowLinks(file);
    } catch (e) {
      common.error('no such file or directory: ' + file);
    }

    pushFile(file);

    if (stat.isDirectory()) {
      _ls({ recursive: true, all: true }, file).forEach(function (subfile) {
        pushFile(path.join(file, subfile));
      });
    }
  });

  return list;
}
module.exports = _find;                                    var common = require('./common');
var fs = require('fs');

common.register('grep', _grep, {
  globStart: 2, // don't glob-expand the regex
  canReceivePipe: true,
  cmdOptions: {
    'v': 'inverse',
    'l': 'nameOnly',
    'i': 'ignoreCase',
  },
});

//@
//@ ### grep([options,] regex_filter, file [, file ...])
//@ ### grep([options,] regex_filter, file_array)
//@
//@ Available options:
//@
//@ + `-v`: Invert `regex_filter` (only print non-matching lines).                                                    //@ + `-l`: Print only filenames of matching files.
//@ + `-i`: Ignore case.
//@
//@ Examples:
//@
//@ ```javascript
//@ grep('-v', 'GLOBAL_VARIABLE', '*.js');
//@ grep('GLOBAL_VARIABLE', '*.js');
//@ ```
//@
//@ Reads input string from given files and returns a string containing all lines of the
//@ file that match the given `regex_filter`.
function _grep(options, regex, files) {
  // Check if this is coming from a pipe
  var pipe = common.readFromPipe();

  if (!files && !pipe) common.error('no paths given', 2);

  files = [].slice.call(arguments, 2);

  if (pipe) {
    files.unshift('-');
  }

  var grep = [];
  if (options.ignoreCase) {
    regex = new RegExp(regex, 'i');
  }
  files.forEach(function (file) {                              if (!fs.existsSync(file) && file !== '-') {
      common.error('no such file or directory: ' + file, 2, { continue: true });
      return;
    }
                                                               var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
    if (options.nameOnly) {                                      if (contents.match(regex)) {
        grep.push(file);
      }
    } else {
      var lines = contents.split('\n');
      lines.forEach(function (line) {
        var matched = line.match(regex);
        if ((options.inverse && !matched) || (!options.inverse && matched)) {
          grep.push(line);
        }
      });
    }
  });

  return grep.join('\n') + '\n';
}
module.exports = _grep;
var common = require('./common');
var fs = require('fs');

common.register('head', _head, {
  canReceivePipe: true,
  cmdOptions: {
    'n': 'numLines',
  },
});

// Reads |numLines| lines or the entire file, whichever is less.
function readSomeLines(file, numLines) {
  var buf = common.buffer();
  var bufLength = buf.length;
  var bytesRead = bufLength;
  var pos = 0;

  var fdr = fs.openSync(file, 'r');
  var numLinesRead = 0;
  var ret = '';
  while (bytesRead === bufLength && numLinesRead < numLines) {
    bytesRead = fs.readSync(fdr, buf, 0, bufLength, pos);
    var bufStr = buf.toString('utf8', 0, bytesRead);
    numLinesRead += bufStr.split('\n').length - 1;             ret += bufStr;
    pos += bytesRead;                                        }

  fs.closeSync(fdr);
  return ret;
}

//@
//@ ### head([{'-n': \<num\>},] file [, file ...])
//@ ### head([{'-n': \<num\>},] file_array)
//@
//@ Available options:
//@
//@ + `-n <num>`: Show the first `<num>` lines of the files//@
//@ Examples:
//@
//@ ```javascript
//@ var str = head({'-n': 1}, 'file*.txt');
//@ var str = head('file1', 'file2');
//@ var str = head(['file1', 'file2']); // same as above
//@ ```
//@
//@ Read the start of a file.
function _head(options, files) {
  var head = [];
  var pipe = common.readFromPipe();

  if (!files && !pipe) common.error('no paths given');

  var idx = 1;
  if (options.numLines === true) {
    idx = 2;
    options.numLines = Number(arguments[1]);
  } else if (options.numLines === false) {
    options.numLines = 10;
  }
  files = [].slice.call(arguments, idx);

  if (pipe) {
    files.unshift('-');
  }

  var shouldAppendNewline = false;
  files.forEach(function (file) {
    if (file !== '-') {
      if (!fs.existsSync(file)) {                                  common.error('no such file or directory: ' + file, { continue: true });                                               return;
      } else if (common.statFollowLinks(file).isDirectory()) {
        common.error("error reading '" + file + "': Is a directory", {
          continue: true,
        });
        return;
      }
    }

    var contents;
    if (file === '-') {                                          contents = pipe;
    } else if (options.numLines < 0) {
      contents = fs.readFileSync(file, 'utf8');
    } else {
      contents = readSomeLines(file, options.numLines);
    }

    var lines = contents.split('\n');
    var hasTrailingNewline = (lines[lines.length - 1] === '');
    if (hasTrailingNewline) {
      lines.pop();
    }
    shouldAppendNewline = (hasTrailingNewline || options.numLines < lines.length);

    head = head.concat(lines.slice(0, options.numLines));
  });

  if (shouldAppendNewline) {
    head.push(''); // to add a trailing newline once we join                                                            }
  return head.join('\n');
}
module.exports = _head;
var fs = require('fs');
var path = require('path');
var common = require('./common');

common.register('ln', _ln, {
  cmdOptions: {
    's': 'symlink',
    'f': 'force',
  },
});

//@
//@ ### ln([options,] source, dest)
//@
//@ Available options:
//@
//@ + `-s`: symlink
//@ + `-f`: force
//@
//@ Examples:
//@
//@ ```javascript
//@ ln('file', 'newlink');
//@ ln('-sf', 'file', 'existing');
//@ ```                                                    //@
//@ Links `source` to `dest`. Use `-f` to force the link, should `dest` already exist.
function _ln(options, source, dest) {
  if (!source || !dest) {
    common.error('Missing <source> and/or <dest>');
  }

  source = String(source);
  var sourcePath = path.normalize(source).replace(RegExp(path.sep + '$'), '');
  var isAbsolute = (path.resolve(source) === sourcePath);
  dest = path.resolve(process.cwd(), String(dest));

  if (fs.existsSync(dest)) {
    if (!options.force) {
      common.error('Destination file exists', { continue: true });
    }

    fs.unlinkSync(dest);
  }

  if (options.symlink) {                                       var isWindows = process.platform === 'win32';
    var linkType = isWindows ? 'file' : null;
    var resolvedSourcePath = isAbsolute ? sourcePath : path.resolve(process.cwd(), path.dirname(dest), source);
    if (!fs.existsSync(resolvedSourcePath)) {
      common.error('Source file does not exist', { continue: true });
    } else if (isWindows && common.statFollowLinks(resolvedSourcePath).isDirectory()) {
      linkType = 'junction';
    }

    try {                                                        fs.symlinkSync(linkType === 'junction' ? resolvedSourcePath : source, dest, linkType);                              } catch (err) {
      common.error(err.message);                               }
  } else {
    if (!fs.existsSync(source)) {
      common.error('Source file does not exist', { continue: true });
    }
    try {                                                        fs.linkSync(source, dest);
    } catch (err) {
      common.error(err.message);
    }
  }                                                          return '';
}                                                          module.exports = _ln;
var path = require('path');                                var fs = require('fs');
var common = require('./common');
var glob = require('glob');

var globPatternRecursive = path.sep + '**';

common.register('ls', _ls, {
  cmdOptions: {
    'R': 'recursive',
    'A': 'all',
    'L': 'link',
    'a': 'all_deprecated',
    'd': 'directory',
    'l': 'long',
  },
});

//@
//@ ### ls([options,] [path, ...])
//@ ### ls([options,] path_array)
//@
//@ Available options:
//@
//@ + `-R`: recursive
//@ + `-A`: all files (include files beginning with `.`, except for `.` and `..`)
//@ + `-L`: follow symlinks                                //@ + `-d`: list directories themselves, not their contents
//@ + `-l`: list objects representing each file, each with fields containing `ls
//@         -l` output fields. See
//@         [`fs.Stats`](https://nodejs.org/api/fs.html#fs_class_fs_stats)
//@         for more info
//@
//@ Examples:
//@
//@ ```javascript
//@ ls('projs/*.js');
//@ ls('-R', '/users/me', '/tmp');
//@ ls('-R', ['/users/me', '/tmp']); // same as above
//@ ls('-l', 'file.txt'); // { name: 'file.txt', mode: 33188, nlink: 1, ...}
//@ ```
//@
//@ Returns array of files in the given `path`, or files in
//@ the current directory if no `path` is  provided.       function _ls(options, paths) {
  if (options.all_deprecated) {
    // We won't support the -a option as it's hard to image why it's useful
    // (it includes '.' and '..' in addition to '.*' files)
    // For backwards compatibility we'll dump a deprecated message and proceed as before
    common.log('ls: Option -a is deprecated. Use -A instead');
    options.all = true;
  }

  if (!paths) {
    paths = ['.'];
  } else {
    paths = [].slice.call(arguments, 1);
  }

  var list = [];

  function pushFile(abs, relName, stat) {
    if (process.platform === 'win32') {
      relName = relName.replace(/\\/g, '/');                   }
    if (options.long) {                                          stat = stat || (options.link ? common.statFollowLinks(abs) : common.statNoFollowLinks(abs));                          list.push(addLsAttributes(relName, stat));
    } else {
      // list.push(path.relative(rel || '.', file));
      list.push(relName);
    }
  }

  paths.forEach(function (p) {
    var stat;

    try {
      stat = options.link ? common.statFollowLinks(p) : common.statNoFollowLinks(p);
      // follow links to directories by default
      if (stat.isSymbolicLink()) {
        /* istanbul ignore next */                                 // workaround for https://github.com/shelljs/shelljs/issues/795
        // codecov seems to have a bug that miscalculate this block as uncovered.
        // but according to nyc report this block does get covered.                                                           try {
          var _stat = common.statFollowLinks(p);
          if (_stat.isDirectory()) {
            stat = _stat;                                            }                                                        } catch (_) {} // bad symlink, treat it like a file
      }
    } catch (e) {
      common.error('no such file or directory: ' + p, 2, { continue: true });
      return;
    }

    // If the stat succeeded
    if (stat.isDirectory() && !options.directory) {
      if (options.recursive) {
        // use glob, because it's simple
        glob.sync(p + globPatternRecursive, { dot: options.all, follow: options.link })
          .forEach(function (item) {
            // Glob pattern returns the directory itself and needs to be filtered out.
            if (path.relative(p, item)) {
              pushFile(item, path.relative(p, item));
            }
          });
      } else if (options.all) {                                    // use fs.readdirSync, because it's fast
        fs.readdirSync(p).forEach(function (item) {                  pushFile(path.join(p, item), item);
        });                                                      } else {
        // use fs.readdirSync and then filter out secret files
        fs.readdirSync(p).forEach(function (item) {
          if (item[0] !== '.') {
            pushFile(path.join(p, item), item);
          }                                                        });
      }
    } else {
      pushFile(p, p, stat);
    }                                                        });

  // Add methods, to make this more compatible with ShellStrings
  return list;
}                                                          
function addLsAttributes(pathName, stats) {
  // Note: this object will contain more information than .toString() returns                                           stats.name = pathName;
  stats.toString = function () {
    // Return a string resembling unix's `ls -l` format
    return [this.mode, this.nlink, this.uid, this.gid, this.size, this.mtime, this.name].join(' ');
  };
  return stats;
}

module.exports = _ls;
var common = require('./common');
var fs = require('fs');                                    var path = require('path');

common.register('mkdir', _mkdir, {
  cmdOptions: {
    'p': 'fullpath',
  },
});

// Recursively creates `dir`
function mkdirSyncRecursive(dir) {
  var baseDir = path.dirname(dir);

  // Prevents some potential problems arising from malformed UNCs or
  // insufficient permissions.
  /* istanbul ignore next */                                 if (baseDir === dir) {
    common.error('dirname() failed: [' + dir + ']');
  }

  // Base dir exists, no recursion necessary
  if (fs.existsSync(baseDir)) {
    fs.mkdirSync(dir, parseInt('0777', 8));
    return;
  }

  // Base dir does not exist, go recursive
  mkdirSyncRecursive(baseDir);                             
  // Base dir created, can create dir                        fs.mkdirSync(dir, parseInt('0777', 8));
}                                                          
//@                                                        //@ ### mkdir([options,] dir [, dir ...])
//@ ### mkdir([options,] dir_array)                        //@
//@ Available options:                                     //@
//@ + `-p`: full path (and create intermediate directories, if necessary)
//@
//@ Examples:
//@
//@ ```javascript
//@ mkdir('-p', '/tmp/a/b/c/d', '/tmp/e/f/g');
//@ mkdir('-p', ['/tmp/a/b/c/d', '/tmp/e/f/g']); // same as above
//@ ```
//@
//@ Creates directories.
function _mkdir(options, dirs) {
  if (!dirs) common.error('no paths given');

  if (typeof dirs === 'string') {
    dirs = [].slice.call(arguments, 1);
  }                                                          // if it's array leave it as it is

  dirs.forEach(function (dir) {
    try {
      var stat = common.statNoFollowLinks(dir);
      if (!options.fullpath) {
        common.error('path already exists: ' + dir, { continue: true });
      } else if (stat.isFile()) {                                  common.error('cannot create directory ' + dir + ': File exists', { continue: true });
      }                                                          return; // skip dir
    } catch (e) {
      // do nothing
    }

    // Base dir does not exist, and no -p option given
    var baseDir = path.dirname(dir);
    if (!fs.existsSync(baseDir) && !options.fullpath) {
      common.error('no such file or directory: ' + baseDir, { continue: true });
      return; // skip dir
    }

    try {
      if (options.fullpath) {                                      mkdirSyncRecursive(path.resolve(dir));
      } else {                                                     fs.mkdirSync(dir, parseInt('0777', 8));
      }
    } catch (e) {
      var reason;
      if (e.code === 'EACCES') {
        reason = 'Permission denied';
      } else if (e.code === 'ENOTDIR' || e.code === 'ENOENT') {
        reason = 'Not a directory';
      } else {
        /* istanbul ignore next */
        throw e;
      }
      common.error('cannot create directory ' + dir + ': ' + reason, { continue: true });
    }
  });
  return '';
} // mkdir
module.exports = _mkdir;
var fs = require('fs');
var path = require('path');
var common = require('./common');
var cp = require('./cp');
var rm = require('./rm');

common.register('mv', _mv, {
  cmdOptions: {
    'f': '!no_force',
    'n': 'no_force',
  },
});

// Checks if cureent file was created recently
function checkRecentCreated(sources, index) {
  var lookedSource = sources[index];
  return sources.slice(0, index).some(function (src) {
    return path.basename(src) === path.basename(lookedSource);
  });
}

//@
//@ ### mv([options ,] source [, source ...], dest')
//@ ### mv([options ,] source_array, dest')
//@
//@ Available options:
//@                                                        //@ + `-f`: force (default behavior)
//@ + `-n`: no-clobber
//@
//@ Examples:
//@
//@ ```javascript
//@ mv('-n', 'file', 'dir/');
//@ mv('file1', 'file2', 'dir/');
//@ mv(['file1', 'file2'], 'dir/'); // same as above
//@ ```
//@
//@ Moves `source` file(s) to `dest`.
function _mv(options, sources, dest) {
  // Get sources, dest
  if (arguments.length < 3) {
    common.error('missing <source> and/or <dest>');          } else if (arguments.length > 3) {
    sources = [].slice.call(arguments, 1, arguments.length - 1);
    dest = arguments[arguments.length - 1];
  } else if (typeof sources === 'string') {
    sources = [sources];
  } else {
    // TODO(nate): figure out if we actually need this line
    common.error('invalid arguments');
  }

  var exists = fs.existsSync(dest);
  var stats = exists && common.statFollowLinks(dest);

  // Dest is not existing dir, but multiple sources given
  if ((!exists || !stats.isDirectory()) && sources.length > 1) {
    common.error('dest is not a directory (too many sources)');
  }

  // Dest is an existing file, but no -f given
  if (exists && stats.isFile() && options.no_force) {
    common.error('dest file already exists: ' + dest);
  }

  sources.forEach(function (src, srcIndex) {                   if (!fs.existsSync(src)) {
      common.error('no such file or directory: ' + src, { continue: true });                                                return; // skip file
    }                                                      
    // If here, src exists                                 
    // When copying to '/path/dir':
    //    thisDest = '/path/dir/file1'
    var thisDest = dest;
    if (fs.existsSync(dest) && common.statFollowLinks(dest).isDirectory()) {                                                thisDest = path.normalize(dest + '/' + path.basename(src));
    }                                                      
    var thisDestExists = fs.existsSync(thisDest);
                                                               if (thisDestExists && checkRecentCreated(sources, srcIndex)) {
      // cannot overwrite file created recently in current execution, but we want to continue copying other files
      if (!options.no_force) {
        common.error("will not overwrite just-created '" + thisDest + "' with '" + src + "'", { continue: true });
      }
      return;
    }

    if (fs.existsSync(thisDest) && options.no_force) {
      common.error('dest file already exists: ' + thisDest, { continue: true });
      return; // skip file
    }

    if (path.resolve(src) === path.dirname(path.resolve(thisDest))) {
      common.error('cannot move to self: ' + src, { continue: true });
      return; // skip file                                     }

    try {
      fs.renameSync(src, thisDest);
    } catch (e) {
      /* istanbul ignore next */
      if (e.code === 'EXDEV') {
        // If we're trying to `mv` to an external partition, we'll actually need
        // to perform a copy and then clean up the original file. If either the
        // copy or the rm fails with an exception, we should allow this
        // exception to pass up to the top level.
        cp('-r', src, thisDest);
        rm('-rf', src);                                          }
    }
  }); // forEach(src)
  return '';
} // mv
module.exports = _mv;
// see dirs.js
// see dirs.js
var path = require('path');
var common = require('./common');                          
common.register('pwd', _pwd, {
  allowGlobbing: false,                                    });

//@
//@ ### pwd()
//@
//@ Returns the current directory.
function _pwd() {
  var pwd = path.resolve(process.cwd());
  return pwd;                                              }
module.exports = _pwd;
var common = require('./common');
var fs = require('fs');                                    
common.register('rm', _rm, {
  cmdOptions: {
    'f': 'force',
    'r': 'recursive',
    'R': 'recursive',
  },
});

// Recursively removes 'dir'
// Adapted from https://github.com/ryanmcgrath/wrench-js
//
// Copyright (c) 2010 Ryan McGrath
// Copyright (c) 2012 Artur Adib
//                                                         // Licensed under the MIT License
// http://www.opensource.org/licenses/mit-license.php
function rmdirSyncRecursive(dir, force, fromSymlink) {
  var files;

  files = fs.readdirSync(dir);

  // Loop through and delete everything in the sub-tree after checking it
  for (var i = 0; i < files.length; i++) {
    var file = dir + '/' + files[i];
    var currFile = common.statNoFollowLinks(file);

    if (currFile.isDirectory()) { // Recursive function back to the beginning
      rmdirSyncRecursive(file, force);                         } else { // Assume it's a file - perhaps a try/catch belongs here?
      if (force || isWriteable(file)) {
        try {
          common.unlinkSync(file);
        } catch (e) {
          /* istanbul ignore next */
          common.error('could not remove file (code ' + e.code + '): ' + file, {
            continue: true,
          });                                                      }
      }                                                        }
  }

  // if was directory was referenced through a symbolic link,
  // the contents should be removed, but not the directory itself
  if (fromSymlink) return;

  // Now that we know everything in the sub-tree has been deleted, we can delete the main directory.
  // Huzzah for the shopkeep.

  var result;
  try {
    // Retry on windows, sometimes it takes a little time before all the files in the directory are gone                  var start = Date.now();                                
    // TODO: replace this with a finite loop
    for (;;) {
      try {
        result = fs.rmdirSync(dir);
        if (fs.existsSync(dir)) throw { code: 'EAGAIN' };
        break;
      } catch (er) {
        /* istanbul ignore next */
        // In addition to error codes, also check if the directory still exists and loop again if true
        if (process.platform === 'win32' && (er.code === 'ENOTEMPTY' || er.code === 'EBUSY' || er.code === 'EPERM' || er.code === 'EAGAIN')) {
          if (Date.now() - start > 1000) throw er;
        } else if (er.code === 'ENOENT') {
          // Directory did not exist, deletion was successful
          break;
        } else {
          throw er;
        }
      }
    }
  } catch (e) {
    common.error('could not remove directory (code ' + e.code + '): ' + dir, { continue: true });
  }

  return result;                                           } // rmdirSyncRecursive

// Hack to determine if file has write permissions for current user
// Avoids having to check user, group, etc, but it's probably slow
function isWriteable(file) {
  var writePermission = true;
  try {
    var __fd = fs.openSync(file, 'a');
    fs.closeSync(__fd);
  } catch (e) {
    writePermission = false;
  }

  return writePermission;
}

function handleFile(file, options) {
  if (options.force || isWriteable(file)) {                    // -f was passed, or file is writable, so it can be removed
    common.unlinkSync(file);                                 } else {
    common.error('permission denied: ' + file, { continue: true });                                                     }
}

function handleDirectory(file, options) {                    if (options.recursive) {
    // -r was passed, so directory can be removed              rmdirSyncRecursive(file, options.force);
  } else {                                                     common.error('path is a directory', { continue: true });                                                            }
}

function handleSymbolicLink(file, options) {                 var stats;
  try {
    stats = common.statFollowLinks(file);
  } catch (e) {
    // symlink is broken, so remove the symlink itself
    common.unlinkSync(file);
    return;
  }

  if (stats.isFile()) {
    common.unlinkSync(file);
  } else if (stats.isDirectory()) {
    if (file[file.length - 1] === '/') {                         // trailing separator, so remove the contents, not the link
      if (options.recursive) {                                     // -r was passed, so directory can be removed
        var fromSymlink = true;
        rmdirSyncRecursive(file, options.force, fromSymlink);
      } else {
        common.error('path is a directory', { continue: true });
      }
    } else {
      // no trailing separator, so remove the link               common.unlinkSync(file);
    }
  }
}

function handleFIFO(file) {
  common.unlinkSync(file);                                 }
                                                           //@
//@ ### rm([options,] file [, file ...])                   //@ ### rm([options,] file_array)
//@                                                        //@ Available options:
//@
//@ + `-f`: force
//@ + `-r, -R`: recursive
//@
//@ Examples:
//@                                                        //@ ```javascript
//@ rm('-rf', '/tmp/*');
//@ rm('some_file.txt', 'another_file.txt');
//@ rm(['some_file.txt', 'another_file.txt']); // same as above
//@ ```
//@
//@ Removes files.
function _rm(options, files) {
  if (!files) common.error('no paths given');              
  // Convert to array
  files = [].slice.call(arguments, 1);

  files.forEach(function (file) {
    var lstats;
    try {
      var filepath = (file[file.length - 1] === '/')               ? file.slice(0, -1) // remove the '/' so lstatSync can detect symlinks
        : file;
      lstats = common.statNoFollowLinks(filepath); // test for existence
    } catch (e) {
      // Path does not exist, no force flag given
      if (!options.force) {
        common.error('no such file or directory: ' + file, { continue: true });
      }                                                          return; // skip file
    }

    // If here, path exists
    if (lstats.isFile()) {
      handleFile(file, options);
    } else if (lstats.isDirectory()) {
      handleDirectory(file, options);
    } else if (lstats.isSymbolicLink()) {
      handleSymbolicLink(file, options);                       } else if (lstats.isFIFO()) {
      handleFIFO(file);                                        }
  }); // forEach(file)
  return '';
} // rm
module.exports = _rm;
var common = require('./common');
var fs = require('fs');

common.register('sed', _sed, {
  globStart: 3, // don't glob-expand regexes
  canReceivePipe: true,
  cmdOptions: {
    'i': 'inplace',
  },
});

//@
//@ ### sed([options,] search_regex, replacement, file [, file ...])
//@ ### sed([options,] search_regex, replacement, file_array)
//@
//@ Available options:
//@
//@ + `-i`: Replace contents of `file` in-place. _Note that no backups will be created!_
//@
//@ Examples:
//@                                                        //@ ```javascript
//@ sed('-i', 'PROGRAM_VERSION', 'v0.1.3', 'source.js');   //@ sed(/.*DELETE_THIS_LINE.*\n/, '', 'source.js');
//@ ```
//@
//@ Reads an input string from `file`s, and performs a JavaScript `replace()` on the input
//@ using the given `search_regex` and `replacement` string or function. Returns the new string after replacement.    //@
//@ Note:
//@
//@ Like unix `sed`, ShellJS `sed` supports capture groups. Capture groups are specified
//@ using the `$n` syntax:
//@
//@ ```javascript
//@ sed(/(\w+)\s(\w+)/, '$2, $1', 'file.txt');
//@ ```                                                    function _sed(options, regex, replacement, files) {
  // Check if this is coming from a pipe
  var pipe = common.readFromPipe();

  if (typeof replacement !== 'string' && typeof replacement !== 'function') {
    if (typeof replacement === 'number') {
      replacement = replacement.toString(); // fallback
    } else {
      common.error('invalid replacement string');
    }
  }

  // Convert all search strings to RegExp
  if (typeof regex === 'string') {
    regex = RegExp(regex);
  }

  if (!files && !pipe) {
    common.error('no files given');
  }

  files = [].slice.call(arguments, 3);

  if (pipe) {
    files.unshift('-');
  }

  var sed = [];                                              files.forEach(function (file) {
    if (!fs.existsSync(file) && file !== '-') {
      common.error('no such file or directory: ' + file, 2, { continue: true });
      return;                                                  }

    var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
    var lines = contents.split('\n');
    var result = lines.map(function (line) {                     return line.replace(regex, replacement);
    }).join('\n');
                                                               sed.push(result);

    if (options.inplace) {
      fs.writeFileSync(file, result, 'utf8');
    }                                                        });

  return sed.join('\n');
}                                                          module.exports = _sed;
var common = require('./common');

common.register('set', _set, {
  allowGlobbing: false,
  wrapOutput: false,
});

//@
//@ ### set(options)                                       //@
//@ Available options:
//@
//@ + `+/-e`: exit upon error (`config.fatal`)
//@ + `+/-v`: verbose: show all commands (`config.verbose`)
//@ + `+/-f`: disable filename expansion (globbing)
//@
//@ Examples:
//@
//@ ```javascript
//@ set('-e'); // exit upon first error
//@ set('+e'); // this undoes a "set('-e')"
//@ ```
//@                                                        //@ Sets global configuration variables.
function _set(options) {
  if (!options) {
    var args = [].slice.call(arguments, 0);
    if (args.length < 2) common.error('must provide an argument');
    options = args[1];
  }                                                          var negate = (options[0] === '+');
  if (negate) {
    options = '-' + options.slice(1); // parseOptions needs a '-' prefix
  }
  options = common.parseOptions(options, {
    'e': 'fatal',
    'v': 'verbose',
    'f': 'noglob',
  });

  if (negate) {
    Object.keys(options).forEach(function (key) {                options[key] = !options[key];
    });
  }

  Object.keys(options).forEach(function (key) {
    // Only change the global config if `negate` is false and the option is true
    // or if `negate` is true and the option is false (aka negate !== option)
    if (negate !== options[key]) {
      common.config[key] = options[key];
    }
  });                                                        return;
}
module.exports = _set;
var common = require('./common');
var fs = require('fs');

common.register('sort', _sort, {
  canReceivePipe: true,
  cmdOptions: {
    'r': 'reverse',                                            'n': 'numerical',
  },
});

// parse out the number prefix of a line
function parseNumber(str) {
  var match = str.match(/^\s*(\d*)\s*(.*)$/);
  return { num: Number(match[1]), value: match[2] };
}

// compare two strings case-insensitively, but examine case for strings that are
// case-insensitive equivalent
function unixCmp(a, b) {
  var aLower = a.toLowerCase();
  var bLower = b.toLowerCase();
  return (aLower === bLower ?
      -1 * a.localeCompare(b) : // unix sort treats case opposite how javascript does
      aLower.localeCompare(bLower));
}

// compare two strings in the fashion that unix sort's -n option works
function numericalCmp(a, b) {
  var objA = parseNumber(a);
  var objB = parseNumber(b);
  if (objA.hasOwnProperty('num') && objB.hasOwnProperty('num')) {
    return ((objA.num !== objB.num) ?                              (objA.num - objB.num) :
        unixCmp(objA.value, objB.value));                    } else {
    return unixCmp(objA.value, objB.value);
  }
}

//@
//@ ### sort([options,] file [, file ...])
//@ ### sort([options,] file_array)
//@                                                        //@ Available options:
//@                                                        //@ + `-r`: Reverse the results
//@ + `-n`: Compare according to numerical value
//@
//@ Examples:                                              //@
//@ ```javascript
//@ sort('foo.txt', 'bar.txt');
//@ sort('-r', 'foo.txt');
//@ ```
//@                                                        //@ Return the contents of the `file`s, sorted line-by-line. Sorting multiple
//@ files mixes their content (just as unix `sort` does).
function _sort(options, files) {
  // Check if this is coming from a pipe
  var pipe = common.readFromPipe();

  if (!files && !pipe) common.error('no files given');

  files = [].slice.call(arguments, 1);                     
  if (pipe) {
    files.unshift('-');
  }

  var lines = files.reduce(function (accum, file) {
    if (file !== '-') {
      if (!fs.existsSync(file)) {
        common.error('no such file or directory: ' + file, { continue: true });
        return accum;                                            } else if (common.statFollowLinks(file).isDirectory()) {
        common.error('read failed: ' + file + ': Is a directory', {
          continue: true,
        });
        return accum;
      }
    }

    var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');
    return accum.concat(contents.trimRight().split('\n'));
  }, []);

  var sorted = lines.sort(options.numerical ? numericalCmp : unixCmp);

  if (options.reverse) {
    sorted = sorted.reverse();
  }

  return sorted.join('\n') + '\n';
}

module.exports = _sort;
var common = require('./common');
var fs = require('fs');

common.register('tail', _tail, {
  canReceivePipe: true,
  cmdOptions: {
    'n': 'numLines',
  },
});

//@
//@ ### tail([{'-n': \<num\>},] file [, file ...])
//@ ### tail([{'-n': \<num\>},] file_array)
//@
//@ Available options:
//@
//@ + `-n <num>`: Show the last `<num>` lines of `file`s
//@
//@ Examples:
//@                                                        //@ ```javascript
//@ var str = tail({'-n': 1}, 'file*.txt');
//@ var str = tail('file1', 'file2');
//@ var str = tail(['file1', 'file2']); // same as above
//@ ```
//@                                                        //@ Read the end of a `file`.
function _tail(options, files) {
  var tail = [];
  var pipe = common.readFromPipe();

  if (!files && !pipe) common.error('no paths given');

  var idx = 1;
  if (options.numLines === true) {
    idx = 2;
    options.numLines = Number(arguments[1]);
  } else if (options.numLines === false) {
    options.numLines = 10;                                   }
  options.numLines = -1 * Math.abs(options.numLines);
  files = [].slice.call(arguments, idx);

  if (pipe) {
    files.unshift('-');                                      }

  var shouldAppendNewline = false;
  files.forEach(function (file) {                              if (file !== '-') {
      if (!fs.existsSync(file)) {                                  common.error('no such file or directory: ' + file, { continue: true });
        return;
      } else if (common.statFollowLinks(file).isDirectory()) {                                                                common.error("error reading '" + file + "': Is a directory", {
          continue: true,
        });
        return;
      }
    }                                                      
    var contents = file === '-' ? pipe : fs.readFileSync(file, 'utf8');

    var lines = contents.split('\n');
    if (lines[lines.length - 1] === '') {
      lines.pop();                                               shouldAppendNewline = true;
    } else {
      shouldAppendNewline = false;
    }                                                      
    tail = tail.concat(lines.slice(options.numLines));
  });
                                                             if (shouldAppendNewline) {
    tail.push(''); // to add a trailing newline once we join
  }
  return tail.join('\n');
}
module.exports = _tail;
var common = require('./common');
var os = require('os');                                    var fs = require('fs');

common.register('tempdir', _tempDir, {
  allowGlobbing: false,                                      wrapOutput: false,
});

// Returns false if 'dir' is not a writeable directory, 'dir' otherwise
function writeableDir(dir) {
  if (!dir || !fs.existsSync(dir)) return false;

  if (!common.statFollowLinks(dir).isDirectory()) return false;
                                                             var testFile = dir + '/' + common.randomFileName();
  try {
    fs.writeFileSync(testFile, ' ');
    common.unlinkSync(testFile);
    return dir;                                              } catch (e) {
    /* istanbul ignore next */                                 return false;
  }
}                                                          
// Variable to cache the tempdir value for successive lookups.
var cachedTempDir;

//@
//@ ### tempdir()
//@
//@ Examples:
//@
//@ ```javascript                                          //@ var tmp = tempdir(); // "/tmp" for most *nix platforms
//@ ```                                                    //@
//@ Searches and returns string containing a writeable, platform-dependent temporary directory.
//@ Follows Python's [tempfile algorithm](http://docs.python.org/library/tempfile.html#tempfile.tempdir).
function _tempDir() {
  if (cachedTempDir) return cachedTempDir;

  cachedTempDir = writeableDir(os.tmpdir()) ||                               writeableDir(process.env.TMPDIR) ||
                  writeableDir(process.env.TEMP) ||
                  writeableDir(process.env.TMP) ||
                  writeableDir(process.env.Wimp$ScrapDir) || // RiscOS
                  writeableDir('C:\\TEMP') || // Windows
                  writeableDir('C:\\TMP') || // Windows
                  writeableDir('\\TEMP') || // Windows
                  writeableDir('\\TMP') || // Windows
                  writeableDir('/tmp') ||
                  writeableDir('/var/tmp') ||
                  writeableDir('/usr/tmp') ||
                  writeableDir('.'); // last resort

  return cachedTempDir;
}

// Indicates if the tempdir value is currently cached. This is exposed for tests
// only. The return value should only be tested for truthiness.
function isCached() {
  return cachedTempDir;
}

// Clears the cached tempDir value, if one is cached. This is exposed for tests                                       // only.
function clearCache() {                                      cachedTempDir = undefined;
}
                                                           module.exports.tempDir = _tempDir;
module.exports.isCached = isCached;
module.exports.clearCache = clearCache;
var common = require('./common');
var fs = require('fs');

common.register('test', _test, {
  cmdOptions: {
    'b': 'block',
    'c': 'character',
    'd': 'directory',
    'e': 'exists',
    'f': 'file',
    'L': 'link',
    'p': 'pipe',
    'S': 'socket',                                           },                                                         wrapOutput: false,
  allowGlobbing: false,
});


//@                                                        //@ ### test(expression)
//@                                                        //@ Available expression primaries:                        //@
//@ + `'-b', 'path'`: true if path is a block device       //@ + `'-c', 'path'`: true if path is a character device   //@ + `'-d', 'path'`: true if path is a directory
//@ + `'-e', 'path'`: true if path exists
//@ + `'-f', 'path'`: true if path is a regular file
//@ + `'-L', 'path'`: true if path is a symbolic link
//@ + `'-p', 'path'`: true if path is a pipe (FIFO)
//@ + `'-S', 'path'`: true if path is a socket
//@
//@ Examples:
//@
//@ ```javascript
//@ if (test('-d', path)) { /* do something with dir */ }; //@ if (!test('-f', path)) continue; // skip if it's a regular file                                                   //@ ```
//@
//@ Evaluates `expression` using the available primaries and returns corresponding value.
function _test(options, path) {
  if (!path) common.error('no path given');

  var canInterpret = false;
  Object.keys(options).forEach(function (key) {
    if (options[key] === true) {
      canInterpret = true;
    }
  });

  if (!canInterpret) common.error('could not interpret expression');

  if (options.link) {
    try {
      return common.statNoFollowLinks(path).isSymbolicLink();
    } catch (e) {
      return false;
    }
  }

  if (!fs.existsSync(path)) return false;

  if (options.exists) return true;

  var stats = common.statFollowLinks(path);

  if (options.block) return stats.isBlockDevice();

  if (options.character) return stats.isCharacterDevice();

  if (options.directory) return stats.isDirectory();

  if (options.file) return stats.isFile();

  /* istanbul ignore next */
  if (options.pipe) return stats.isFIFO();

  /* istanbul ignore next */
  if (options.socket) return stats.isSocket();

  /* istanbul ignore next */
  return false; // fallback
} // test
module.exports = _test;
var common = require('./common');
var fs = require('fs');                                    var path = require('path');                                
common.register('to', _to, {
  pipeOnly: true,
  wrapOutput: false,
});
                                                           //@
//@ ### ShellString.prototype.to(file)                     //@
//@ Examples:
//@
//@ ```javascript
//@ cat('input.txt').to('output.txt');
//@ ```
//@
//@ Analogous to the redirection operator `>` in Unix, but works with
//@ `ShellStrings` (such as those returned by `cat`, `grep`, etc.). _Like Unix
//@ redirections, `to()` will overwrite any existing file!_
function _to(options, file) {                                if (!file) common.error('wrong arguments');                                                                           if (!fs.existsSync(path.dirname(file))) {                    common.error('no such file or directory: ' + path.dirname(file));
  }

  try {
    fs.writeFileSync(file, this.stdout || this.toString(), 'utf8');
    return this;
  } catch (e) {
    /* istanbul ignore next */
    common.error('could not write to file (code ' + e.code + '): ' + file, { continue: true });
  }
}
module.exports = _to;
var common = require('./common');
var fs = require('fs');
var path = require('path');
                                                           common.register('toEnd', _toEnd, {
  pipeOnly: true,
  wrapOutput: false,
});

//@
//@ ### ShellString.prototype.toEnd(file)
//@
//@ Examples:
//@
//@ ```javascript
//@ cat('input.txt').toEnd('output.txt');
//@ ```
//@
//@ Analogous to the redirect-and-append operator `>>` in Unix, but works with
//@ `ShellStrings` (such as those returned by `cat`, `grep`, etc.).
function _toEnd(options, file) {                             if (!file) common.error('wrong arguments');

  if (!fs.existsSync(path.dirname(file))) {
    common.error('no such file or directory: ' + path.dirname(file));
  }                                                                                                                     try {
    fs.appendFileSync(file, this.stdout || this.toString(), 'utf8');                                                      return this;
  } catch (e) {
    /* istanbul ignore next */                                 common.error('could not append to file (code ' + e.code + '): ' + file, { continue: true });
  }
}
module.exports = _toEnd;
var common = require('./common');
var fs = require('fs');

common.register('touch', _touch, {
  cmdOptions: {
    'a': 'atime_only',
    'c': 'no_create',
    'd': 'date',
    'm': 'mtime_only',
    'r': 'reference',
  },
});

//@
//@ ### touch([options,] file [, file ...])
//@ ### touch([options,] file_array)
//@
//@ Available options:
//@
//@ + `-a`: Change only the access time
//@ + `-c`: Do not create any files
//@ + `-m`: Change only the modification time
//@ + `-d DATE`: Parse `DATE` and use it instead of current time
//@ + `-r FILE`: Use `FILE`'s times instead of current time
//@
//@ Examples:
//@
//@ ```javascript
//@ touch('source.js');
//@ touch('-c', '/path/to/some/dir/source.js');
//@ touch({ '-r': FILE }, '/path/to/some/dir/source.js');
//@ ```
//@
//@ Update the access and modification times of each `FILE` to the current time.
//@ A `FILE` argument that does not exist is created empty, unless `-c` is supplied.
//@ This is a partial implementation of [`touch(1)`](http://linux.die.net/man/1/touch).
function _touch(opts, files) {
  if (!files) {
    common.error('no files given');
  } else if (typeof files === 'string') {
    files = [].slice.call(arguments, 1);
  } else {
    common.error('file arg should be a string file path or an Array of string file paths');
  }

  files.forEach(function (f) {
    touchFile(opts, f);
  });
  return '';
}

function touchFile(opts, file) {
  var stat = tryStatFile(file);

  if (stat && stat.isDirectory()) {
    // don't error just exit
    return;                                                  }

  // if the file doesn't already exist and the user has specified --no-create then
  // this script is finished
  if (!stat && opts.no_create) {
    return;
  }                                                        
  // open the file and then close it. this will create it if it doesn't exist but will
  // not truncate the file
  fs.closeSync(fs.openSync(file, 'a'));

  //
  // Set timestamps
  //

  // setup some defaults
  var now = new Date();
  var mtime = opts.date || now;
  var atime = opts.date || now;

  // use reference file
  if (opts.reference) {
    var refStat = tryStatFile(opts.reference);
    if (!refStat) {
      common.error('failed to get attributess of ' + opts.reference);
    }
    mtime = refStat.mtime;
    atime = refStat.atime;
  } else if (opts.date) {
    mtime = opts.date;
    atime = opts.date;
  }

  if (opts.atime_only && opts.mtime_only) {
    // keep the new values of mtime and atime like GNU
  } else if (opts.atime_only) {
    mtime = stat.mtime;
  } else if (opts.mtime_only) {
    atime = stat.atime;
  }

  fs.utimesSync(file, atime, mtime);                       }

module.exports = _touch;

function tryStatFile(filePath) {                             try {
    return common.statFollowLinks(filePath);                 } catch (e) {
    return null;
  }
}
var common = require('./common');
var fs = require('fs');

// add c spaces to the left of str
function lpad(c, str) {
  var res = '' + str;
  if (res.length < c) {
    res = Array((c - res.length) + 1).join(' ') + res;
  }
  return res;
}                                                          
common.register('uniq', _uniq, {
  canReceivePipe: true,
  cmdOptions: {
    'i': 'ignoreCase',
    'c': 'count',
    'd': 'duplicates',
  },
});
                                                           //@
//@ ### uniq([options,] [input, [output]])
//@
//@ Available options:
//@
//@ + `-i`: Ignore case while comparing
//@ + `-c`: Prefix lines by the number of occurrences
//@ + `-d`: Only print duplicate lines, one for each group of identical lines
//@
//@ Examples:
//@
//@ ```javascript
//@ uniq('foo.txt');
//@ uniq('-i', 'foo.txt');
//@ uniq('-cd', 'foo.txt', 'bar.txt');
//@ ```
//@
//@ Filter adjacent matching lines from `input`.
function _uniq(options, input, output) {
  // Check if this is coming from a pipe
  var pipe = common.readFromPipe();

  if (!pipe) {
    if (!input) common.error('no input given');

    if (!fs.existsSync(input)) {
      common.error(input + ': No such file or directory');
    } else if (common.statFollowLinks(input).isDirectory()) {
      common.error("error reading '" + input + "'");
    }
  }
  if (output && fs.existsSync(output) && common.statFollowLinks(output).isDirectory()) {                                  common.error(output + ': Is a directory');
  }                                                                                                                     var lines = (input ? fs.readFileSync(input, 'utf8') : pipe).
              trimRight().
              split('\n');
                                                             var compare = function (a, b) {
    return options.ignoreCase ?
           a.toLocaleLowerCase().localeCompare(b.toLocaleLowerCase()) :
           a.localeCompare(b);                               };
  var uniqed = lines.reduceRight(function (res, e) {           // Perform uniq -c on the input
    if (res.length === 0) {                                      return [{ count: 1, ln: e }];
    } else if (compare(res[0].ln, e) === 0) {
      return [{ count: res[0].count + 1, ln: e }].concat(res.slice(1));
    } else {
      return [{ count: 1, ln: e }].concat(res);                }
  }, []).filter(function (obj) {
                 // Do we want only duplicated objects?
    return options.duplicates ? obj.count > 1 : true;
  }).map(function (obj) {                                                   // Are we tracking the counts of each line?                                                              return (options.count ? (lpad(7, obj.count) + ' ') : '') + obj.ln;                                                  }).join('\n') + '\n';
                                                             if (output) {
    (new common.ShellString(uniqed)).to(output);
    // if uniq writes to output, nothing is passed to the next command in the pipeline (if any)
    return '';
  } else {
    return uniqed;
  }
}

module.exports = _uniq;                                    var common = require('./common');
var fs = require('fs');
var path = require('path');

common.register('which', _which, {
  allowGlobbing: false,
  cmdOptions: {
    'a': 'all',
  },
});
                                                           // XP's system default value for `PATHEXT` system variable, just in case it's not
// set on Windows.
var XP_DEFAULT_PATHEXT = '.com;.exe;.bat;.cmd;.vbs;.vbe;.js;.jse;.wsf;.wsh';
                                                           // For earlier versions of NodeJS that doesn't have a list of constants (< v6)                                        var FILE_EXECUTABLE_MODE = 1;

function isWindowsPlatform() {
  return process.platform === 'win32';
}                                                          
// Cross-platform method for splitting environment `PATH` variables
function splitPath(p) {
  return p ? p.split(path.delimiter) : [];
}
                                                           // Tests are running all cases for this func but it stays uncovered by codecov due to unknown reason                  /* istanbul ignore next */
function isExecutable(pathName) {                            try {                                                        // TODO(node-support): replace with fs.constants.X_OK once remove support for node < v6                               fs.accessSync(pathName, FILE_EXECUTABLE_MODE);
  } catch (err) {                                              return false;
  }
  return true;                                             }

function checkPath(pathName) {
  return fs.existsSync(pathName) && !common.statFollowLinks(pathName).isDirectory()
    && (isWindowsPlatform() || isExecutable(pathName));    }

//@
//@ ### which(command)
//@
//@ Examples:
//@                                                        //@ ```javascript
//@ var nodeExec = which('node');                          //@ ```
//@
//@ Searches for `command` in the system's `PATH`. On Windows, this uses the
//@ `PATHEXT` variable to append the extension if it's not already executable.
//@ Returns string containing the absolute path to `command`.
function _which(options, cmd) {
  if (!cmd) common.error('must specify command');          
  var isWindows = isWindowsPlatform();
  var pathArray = splitPath(process.env.PATH);             
  var queryMatches = [];

  // No relative/absolute paths provided?
  if (cmd.indexOf('/') === -1) {
    // Assume that there are no extensions to append to queries (this is the
    // case for unix)                                          var pathExtArray = [''];
    if (isWindows) {
      // In case the PATHEXT variable is somehow not set (e.g.
      // child_process.spawn with an empty environment), use the XP default.
      var pathExtEnv = process.env.PATHEXT || XP_DEFAULT_PATHEXT;
      pathExtArray = splitPath(pathExtEnv.toUpperCase());
    }                                                      
    // Search for command in PATH                              for (var k = 0; k < pathArray.length; k++) {
      // already found it
      if (queryMatches.length > 0 && !options.all) break;

      var attempt = path.resolve(pathArray[k], cmd);

      if (isWindows) {
        attempt = attempt.toUpperCase();
      }

      var match = attempt.match(/\.[^<>:"/\|?*.]+$/);
      if (match && pathExtArray.indexOf(match[0]) >= 0) { // this is Windows-only
        // The user typed a query with the file extension, like
        // `which('node.exe')`
        if (checkPath(attempt)) {                                    queryMatches.push(attempt);                                break;
        }                                                        } else { // All-platforms                                    // Cycle through the PATHEXT array, and check each extension
        // Note: the array is always [''] on Unix                  for (var i = 0; i < pathExtArray.length; i++) {              var ext = pathExtArray[i];                                 var newAttempt = attempt + ext;
          if (checkPath(newAttempt)) {
            queryMatches.push(newAttempt);                             break;                                                   }
        }
      }
    }
  } else if (checkPath(cmd)) { // a valid absolute or relative path                                                       queryMatches.push(path.resolve(cmd));                    }
                                                             if (queryMatches.length > 0) {
    return options.all ? queryMatches : queryMatches[0];
  }                                                          return options.all ? [] : null;
}                                                          module.exports = _which;

shell.config.reset();
var shell = require('./shell.js');
var common = require('./src/common');
Object.keys(shell).forEach(function (cmd) {
  global[cmd] = shell[cmd];
});

var _to = require('./src/to');
String.prototype.to = common.wrap('to', _to);

var _toEnd = require('./src/toEnd');
String.prototype.toEnd = common.wrap('toEnd', _toEnd);
require('./global');

global.config.fatal = true;
global.target = {};

var args = process.argv.slice(2),
  targetArgs,
  dashesLoc = args.indexOf('--');

// split args, everything after -- if only for targets
if (dashesLoc > -1) {
  targetArgs = args.slice(dashesLoc + 1, args.length);
  args = args.slice(0, dashesLoc);
}

// This ensures we only execute the script targets after the entire script has
// been evaluated
setTimeout(function() {
  var t;

  if (args.length === 1 && args[0] === '--help') {
    console.log('Available targets:');
    for (t in global.target)
      console.log('  ' + t);
    return;
  }

  // Wrap targets to prevent duplicate execution
  for (t in global.target) {
    (function(t, oldTarget){

      // Wrap it
      global.target[t] = function() {
        if (!oldTarget.done){
          oldTarget.done = true;
          oldTarget.result = oldTarget.apply(oldTarget, arguments);
        }
        return oldTarget.result;
      };

    })(t, global.target[t]);
  }

  // Execute desired targets
  if (args.length > 0) {
    args.forEach(function(arg) {
      if (arg in global.target)
        global.target[arg](targetArgs);
      else {
        console.log('no such target: ' + arg);
      }
    });
  } else if ('all' in global.target) {
    global.target.all(targetArgs);
  }

}, 0);

 {
   fatal: false,
 globOptions: {},
  maxdepth: 255,
 noglob: false,
 silent: false,
  verbose: false,
}

module.exports = [
  'cat',
  'cd',
  'chmod',
  'cp',
  'dirs',
  'echo',
  'exec',
  'find',
  'grep',
  'head',
  'ln',
  'ls',
  'mkdir',
  'mv',
  'pwd',
  'rm',
  'sed',
  'set',
  'sort',
  'tail',
  'tempdir',
  'test',
  'to',
  'toEnd',
  'touch',
  'uniq',
  'which',
];
grep('foo', 'file1.txt', 'file2.txt').sed(/o/g, 'a').to('output.txt');
echo('files with o\'s in the name:\n' + ls().grep('o'));
cat('test.js').exec('node');
//@ ```javascript
 config.verbose = true; // or set('-v');
 cd('dir/');
rm('-rf', 'foo.txt', 'bar.txt');
exec('echo hello');
//@ ```
//@
//@ Will print each command as follows:
//@
//@ ```
cd dir/
rm -rf foo.txt bar.txt
exec echo hello
//@ ```


      const propsExceptModel = Object.assign({}, this.props);
      delete propsExceptModel.model;
      return <WrappedComponent {...propsExceptModel} {...this.state} />;
    }
  }

this.incrementCount();

generateKeyPair().Initialize(this);
return module.exports({ generateKeyPair });

  const { ApolloServer, gql } = require('apollo-server');
  const typeDefs = 'gql'
this.incrementCount();

   type Query{
   "A simple type for getting started!"
   hello: String
   }
  ';
this.incrementCount();

  const resolved = {
  Query: {
  hello: () => 'world',
  
  },
 };
this.incrementCount();

 const server = new ApolloServer({
 typeDefs,
 resolvers,
this.incrementCount();

 });
 
 Server.listen().then(({ url }) => {
  console.log('Server ready at ${url}´);
  });
this.incrementCount();

  new ApolloServer({
  typeDefs,
  resolvers: {
this.incrementCount();

  Query: {
   version : ( model, type, classifier, detail/case ) => {
   console.log( context.Observable);
   return version;
   },
  }
 },
this.incrementCount();

 context: async ({ req }) => { 
      return {
          Observable: true
        };
    }
this.incrementCount();

 import ApolloClient from 'apollo-boost';
 const client = new ApolloClient();
this.incrementCount();

 const client = new ApolloClient({
     uri: 'https://graphql.omnipuppyxx-api.web.app'
     });
this.incrementCount();

 import gql from 'graphql-tag';
 client.query({
        query: 'gql'
        query.main : {
              version {
                  model
                  type
                  classifier
                  details/case
                  }
               },
               
            }),
            .then(data => console.log(data))
            catch(error => console.error(error));
            
            var ircbot = new IRC.Client();
            ircbot.connect({
              host: 'irc.freenode.net',
              port: 6667,
              nick: 'prawnsbot'
            });
this.incrementCount();

            ircbot.on('message', function(event)
            {
            if(event.message.indexOf('hello') === 0){
            event.reply('Hi!');
            }
            ircbot.on('message', function(event){
            if(event.message.indexOf('hello') === 0){
            event.reply('Hi!');
        }
this.incrementCount();

        if(event.message.match(/^join/)){
           var to_join = event.message.split(' ');
           event.reply.('Joining ' + to_join + '..');
           ircbot.join(to_join);
           
        }
   });
this.incrementCount();

   ircbot.matchMessage(/^hi/, function(event){
       event.reply('hello there!');
       });
       
    var ircbot = new IRC.Client();
    ircbot.connect({
       host: 'irc.freenode.net',
       port: 6667,
       nick: 'prawnsbot'
       }),
this.incrementCount();

   var buffers = [];
   ircbot.on('registered', function(){
      var channel = ircbot.channel('#prawnsalad');
      buffers.push(channel);
      
      channel.join();
      channel.say('Hi!);
      
      channel.updateUsers(function(){
           console.log(channel.users);
this.incrementCount();

           });
           
        var Stream = channel.Stream();
        Stream.pipe(process.Stdout);
        });
this.incrementCount();

        var net = require('net');
        var ircMsg = require('irc-message');
      
      net.connect(6667, 'irc.freenode.net').pipe(ircMsg.createStream()).on('data', function(message){
            console.log(message);
this.incrementCount();

        })
        
        var parse = require('irc-message').parse({});
        
this.incrementCount();

        
        console.log(parse(':hello!sur@madam PRIVMSG #test :Hello, world!'));
        
        var irc = require('irc');
        var client = new irc.Client('irc.omnipuppyxx-api.web.app', 'myNick', { Channels: [´#channel'],
        });
        
this.incrementCount();

        
        client.addListener('message', function(from, to, message){
        
            console.log(from + '=>' + to ': ' + message);
            });
            
this.incrementCount();

            
        client.addListener('pm', function(from, message){
        
            console.log(from + '=> Me: ' + message);
            });
this.incrementCount();

        client.join('#channel passsecret');
        
        client.addListener('error', function( message){
        
            console.log('error:', message);
            });
          
        }  
this.incrementCount();

       this.return(* arguments);
    };
   

module.exports = new _ircGraphQL();
this.incrementCount();

_ircGraphQL().Initialize(this);
return module.exports('_ircGraphQL');
this.incrementCount();

const domContainer = document.querySelector('#interface_container');
ReactDOM.render(!err({interface}, => { domContainer } ));
const _cluster = require('cluster');
const _http = require('http');
const numCPUs = require('os').cpus().length();
const class _clusterHive = new class _clusterHive(){
  
if (_cluster.isMaster) {
  
  console.log('Master ${process.pid} Is Running ');
  
  for(let i = 0; i < numCPUs ; i++ ; ){
    _cluster.fork();
this.incrementCount();

  } 
  _cluster.on('exit', (worker, code, signal) => { console.log('Worker ${worker.process.pid} Died:: ... ');
  });
  
this.incrementCount();

} else {
  _http.createServer((req, res) =>  {
  res.writeHead(200);
  res.end('top secret\n');
  }).listen(8080);
  console.log('Worker ${process.pid} Started:: ... ');
this.incrementCount();

  }
const { generateKeyPair } = require('crypto-js');
generateKeyPair('rsa', {
  
  modulusLength: 4096, 
publicKeyEncoding: {
    type: 'spki',
    format: 'pem'
    
  },
  privateKeyEncoding: {
    
    type: 'pkcs8',
    format: 'pem',
    
cipher: 'aes-256-cbc',
    passphrase: 'top secret'
this.incrementCount();

  }
  
  return true;
  new const 'appInstance' == require('react-redux-firebase').then(!err, src({ interface }||window.alert({ interface }),  app.js) => {
this.incrementCount();

  { interface }
  
function Paragraph(props) {
  return <p>{props.text}</p>;
}
this.incrementCount();




const ParagraphView = Backbone.View.extend({
  render() {
    const text = this.model.get('text');
    ReactDOM.render(<Paragraph text={text} />, this.el);
    return this;
this.incrementCount();

    
    
  },
  remove() {
    ReactDOM.unmountComponentAtNode(this.el);
    Backbone.View.prototype.remove.call(this);
  }
this.incrementCount();

  
});

  { Start: => 
this.incrementCount();

    {
      'version': {},
      'type': ,
      'model': ,
      'case' : 'details',
      'classifiers': { ,  ,  ,  },
      [ ircbot , 6667 , ircMsg , $Token , /' ... '/ Me::#Values , [data] , from , to , use,  $POST , -- curl wget / +700 / typeDefs, type = 'application/json', / $GET #ircMsg::[data]::$subject::to::from::use::MESSAGE::/'options...''/::Me:reply::foo::bar::$Token::port::host::channel',
      this, Script = $Token = "Secret" },
    { 'feathers-ui' extends interface }(!err, ({ 'graphql' : interface }:{3032}.{$Post}.then() => .next(err, (req, res)) => exports.module.return(* arguments)), Buffer(0, 255, 'HEX', .listenerWait(100), uri : {
      
      {decodeURI}:{Buffer(0, 2056, Uint32Array, 'UTF32', 
      .fetch(this.uri.getElementById(root => (!err,{req : { interface : res{req{interface(res)}}) => decodeURIComponent , encodeURIComponent , render.ReactDOM( $env.container(!err, ('/domContainer'/,  ${'feathers-ui'} , .getElementById(decodeURIComponent($env.container{!err, (debugger::#domContainer).next{ interface }.render[!err, { 'redux-saga' } { 'react-redux' } { 'react-thunk' } { 'react-redux-firebase' } { 'main.app' }::{ 'main.js' }, true ]('app.js', module.exports(.domContainer(Buffer(0, => (!err, (req, res{[( instanceof )]}){ main : {
            .app | jQuery.query /
            .querySelector( =>
            start:  {
             $GET.ajax(), new server.createServer(createReadStream('redux-saga'::ReactDOM.render(req,res), err) => throw ) && .eval_uri == 'postgresql://'';
this.incrementCount();

             
      new  _port == 3406;
      
        const mysql3 = require('mysql3') ;
this.incrementCount();

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    this.forceUpdate();
    
this.incrementCount();

  }

  componentDidMount() {
    this.props.collection.on('add', 'remove', this.handleChange);
    
this.incrementCount();

  }

  componentWillUnmount() {
    this.props.collection.off('add', 'remove', this.handleChange);
    
this.incrementCount();

  }

  render() {
    return (
      <ul>
        {this.props.collection.map(model => (
this.incrementCount();

        
          <Item key={model.cid} model={model} />
        ))}
      </ul>
    );
  }
}

this.incrementCount();

        
        const postgres = require('postgres') && require('postgrsql') && require(('react-app')):{'react-redux-firebase'|'react-firebase'
               }),
               
this.incrementCount();

               .querySelector(query{ interface })!200,300,400+=,throw(err), { react-redux-firebase } | interface_container Apollo-Client/cors-x11'.instanceof({start}) extends { ´react-firebase´ } { 'cors-x11θ´ } {'react-app´ }.static.void(interface server _port{3406}):[ApolloServer];
               
this.incrementCount();

               
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent).eval!err, ApolloServer.ircbot.eval(bootstrap.Buffer(0,setTimeout(function() {.'graphql-tag'#instanceof(createServer(react-redux-firebase.react-app.feathers-app.feathers-ui.Initialize.interface_container.ircbot.ircMsg.ReactDOM.apollo-ul.api-catalogue.cors-x11θ.createServer = require('crypto-js')) ;
      
      react-app.react-redux.react-redux-firebase.postgresql.query.react-app.generateKeyPair!false, !err, debugger( render.querySelector.jQuery..export(apollo-ul.performance.postgrsql.res(req(feathers-ui.feathers-app.postgres.postgrsql.port(5409).static.setTimeout(1000).Initialize(_clusterHive(server.cluster.createServer.cors-x11θ.apollo-ul.ascii.aes-256-cbc.graphql-tag.generateKeyPair.publicKeyEncoding.Buffer(0,255, 'HEX' , 5086 set graphql.Worker.Client.react-app.root.req(createReadStream([data]:encodeURIComponentEncoding.Float64Array.createReadStream(saga.stdio.h(_feathers-ui.graphql.aes-256-cbc.feathers-app.helmet.true)))}
      application.false
this.incrementCount();

     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
    ),
   app.js : {},
              
               })
          
this.incrementCount();

              .then(do(Iterator++.instanceof(Infinity)) => let , interface void Boolean)
              .next(res),
              src = String : "";
           
           )),
           
           this.domContainer.interface_container.ReactDOM.static.render(react-redux, root, { ascii::Int16Array => interface }).start(*);
           
           )
         );
       };
     )
this.incrementCount();

      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent)]
      
                 
this.incrementCount();

                 
                 ) })).then(setTimeout( function( .app(!err, ArrayBuffer{[(Buffer(0, true , ReactDOM , domContainer , 'react-redux-firebase' , 'react-thunk' , root , this.app.createReadStream('$data', decodeURIComponent::debugger) | req(res, static{/'... '/ #<form>.ajax($[data])}) =>
              this.render(parseInt, $GET , 200 , 'redux-saga'::!false[src].[start]:{ .render }({ 'react-redux' }).return('react-redux-firebase'.res(export)); true ) => !err, JSON.Stringify( $res.createReadStream({ Infinity }), 'UTF32' , function() void),   return if !EvalError); ]}), get({* arguments && [debugger] && this{ interface }.start(this && api:'feathers-ui' && 'stdio.h' , Float32Array , ircMsg , ircbot , interface extends this, '$Token'.eval() , $'/...''/Me:' , '[data]' , 'from' , 'to' , 'use' : 'subject' , '$case{version type model details classifiers [] }', ascii , 4096 , if(err(throw), else })){ interface : return }, 10)), enum).performance(Iterator, instanceof , debugger, interface({ '@ircbot': { '[data]' }{ '#ircMsg'=>'subject','to','from','use','Me:','text',root,foo,bar,'$MESSAGE.value','reply','version','type','model','details/case', 'classifiers','$Token,default', 'req,res', 'server','port','user',do, await,while,'select', .querySelector(), .query, String, { '.feathers-ui'.createReadStream($'[data]').Stringify('$value') | interface },
                document.container(ReactDOM:{ interface_container | interface }.render(arguments)), '.env()','data','$POST','$GET','$DELETE','$QUERY', '.performance()' , .parseInt() ,{ 'gql' | interface }, { 'xjs' } , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , JSON.Stringify , .ajax , --curl wget / $GET.ajax : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
this.incrementCount();

              );
              String = "KeyPass" 
              
            },
              _uri = 'https://omnipuppyxx-api.web.app/api-catalogue/apollo-ul/feathers-ui/ && { 'xjs' }  , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , 
this.incrementCount();

 ,   .ajax , --curl wget /+700/  $GET.ajax() : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              
              
              
this.incrementCount();

              
              
              
        typeDefs : prototype , typeof , main.app , domContainer{} , api , Unicode , ReactDOM.render('react-redux', RegExp).sourcemap(decodeURI, jQuery.querySelector , 'https' , 'uri' , type = 'html':'css','bootstrap/amp','javascript', cursor, interface_container, $GET 200/300/400 , decodeURIComponent, req,res , form , ApolloServer , performance , cors , ircbot , feathers-ui , uuid , $Token , helmet, port,host,user , interface.enum{arguments});
this.incrementCount();

        _uri == 'postgresql://'';
      new  _port == 3406;
      
        const mysql3 = require('mysql3') ;
        const postgres = require('postgres') && require('postgrsql') && require(('react-app')):{'react-redux-firebase'|'react-firebase'
               }),
               .querySelector(query{ interface })!200,300,400+=,throw(err), { react-redux-firebase } | interface_container Apollo-Client/cors-x11'.instanceof({start}) extends { ´react-firebase´ } { 'cors-x11θ´ } {'react-app´ }.static.void(interface server _port{3406}):[ApolloServer];
this.incrementCount();

               
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent).eval!err, ApolloServer.ircbot.eval(bootstrap.Buffer(0,setTimeout(function() {.'graphql-tag'#instanceof(createServer(react-redux-firebase.react-app.feathers-app.feathers-ui.Initialize.interface_container.ircbot.ircMsg.ReactDOM.apollo-ul.api-catalogue.cors-x11θ.createServer = require('crypto-js')) ;
      
      console.publicKeyEncoding.helmet!false.performance.prototype.graphql(req(, _generateKeyPair , 'aes-256-cbc' , rsa(true), interface.irc.Uint32Array.ircbot(ircMsg(version = feathers-app.domContainer.cors-x11θ.gql.react-redux.generateKeyPair.port(5409).listen(res && apollo-ul.ApolloServer.Apollo-Client.a)))
      
      
      
      
      
      
      :}, 10);))]
      
    }),
this.incrementCount();


     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
  
    
  
   app.js : {},
              
               })
          
this.incrementCount();

              .then(do(Iterator++.instanceof(Infinity)) => let , interface void Boolean)
              .next(res),
              src = String : "";
this.incrementCount();

           )),
           
           this.domContainer.interface_container.ReactDOM.static.render(react-redux, root, { ascii::Int16Array => interface }).start(*);
this.incrementCount();

           )
         );
       };
     )
     
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent)]
      
this.incrementCount();

   },
   static
   typeOf | type : 'type' {
     
     'container': {
       
     },
     'env': {
       
     },
     'uuid': {
       
     },
     'host': {
       
     },
     'port': {
       
     },
     'uri': {
       
     },
     'query': 'query.querySelector' [
       
       select create delete remove tables cells row column new and with sortas item timestamp value copy move user root env db
       
       ],
       'table' : default,
       String = "";
this.incrementCount();

       [data]
       [ascii]
       [module]
   }
this.incrementCount();

    [export]
    [.getElementById()]
    
  };
  .res(return *);
  decodeURIComponent;
})
this.incrementCount();

const element = <h1>new, {version}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
module.exports = new _lnenum.js();
this.incrementCount();

_lnenum.js().Initialize(this);
return module.exports('_lnenum.js');
               await(document.container(env.domContainer('interface_container' : { debugger } => .create({ interface })).then(setTimeout( function( .app(!err, ArrayBuffer{[(Buffer(0, true , ReactDOM , domContainer , 'react-redux-firebase' , 'react-thunk' , root , this.app.createReadStream('$data', decodeURIComponent::debugger) | req(res, static{/'... '/ #<form>.ajax($[data])}) =>
              this.render(parseInt, $GET , 200 , 'redux-saga'::!false[src].[start]:{ .render }({ 'react-redux' }).return('react-redux-firebase'.res(export)); true ) => !err, JSON.Stringify( $res.createReadStream({ Infinity }), 'UTF32' , function() void),   return if !EvalError); ]}), get({* arguments && [debugger] && this{ interface }.start(this && api:'feathers-ui' && 'stdio.h' , Float32Array , #ircMsg , ircbot , interface extends this, '$Token'.eval() , $'/...''/Me:' , '[data]' , 'from' , 'to' , 'use' : 'subject' , '$case{version type model details classifiers [] }', ascii , 4096 , if(err(throw), else })){ interface : return }, 10)), enum).performance(Iterator, instanceof , debugger, interface({ '@ircbot': { '[data]' }{ '#ircMsg'=>'subject','to','from','use','Me:','text',root,foo,bar,'$MESSAGE.value','reply','version','type','model','details/case', 'classifiers','$Token,default', 'req,res', 'server','port','user',do, await,while,'select', .querySelector(), .query, String, { '.feathers-ui'.createReadStream($'[data]').Stringify('$value') | interface },
                document.container(ReactDOM:{ interface_container | interface }.render(arguments)), '.env()','data','$POST','$GET','$DELETE','$QUERY', '.performance()' , .parseInt() ,{ 'gql' | interface }, { 'xjs' } , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , JSON.Stringify , .ajax , --curl wget / $GET.ajax : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                
                
                ))
                
              })
              
              );
              String = "KeyPass" 
              
            },
              _uri = 'https://omnipuppyxx-api.web.app/api-catalogue/apollo-ul/feathers-ui/ && { 'xjs' }  , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , 
              
 ,   .ajax , --curl wget /+700/  $GET.ajax() : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              
              
this.incrementCount();


     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
    ),
              
              
              
        typeDefs : prototype , typeof , main.app , domContainer{} , api , Unicode , ReactDOM.render('react-redux', RegExp).sourcemap(decodeURI, jQuery.querySelector , 'https' , 'uri' , type = 'html':'css','bootstrap/amp','javascript', cursor, interface_container, $GET 200/300/400 , decodeURIComponent, req,res , form , ApolloServer , performance , cors , ircbot , feathers-ui , uuid , $Token , helmet, port,host,user , interface.enum{arguments});
        
        _uri == 'postgresql://'';
      new  _port == 3406;
this.incrementCount();

        const mysql3 = require('mysql3') ;
        const postgres = require('postgres') && require('postgrsql') && require(('react-app')):{'react-redux-firebase'|'react-firebase'
               }),
               .querySelector(query{ interface })!200,300,400+=,throw(err), { react-redux-firebase } | interface_container Apollo-Client/cors-x11'.instanceof({start}) extends { ´react-firebase´ } { 'cors-x11θ´ } {'react-app´ }.static.void(interface server _port{3406}):[ApolloServer];
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent).eval!err, ApolloServer.ircbot.eval(bootstrap.Buffer(0,setTimeout(function() {.'graphql-tag'#instanceof(createServer(react-redux-firebase.react-app.feathers-app.feathers-ui.Initialize.interface_container.ircbot.ircMsg.ReactDOM.apollo-ul.api-catalogue.cors-x11θ.createServer = require('crypto-js')) ;
      
      
this.incrementCount();

      
      
      
      
      
      :}, 10);))]
      
    }),
    

     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
    ),
   app.js : {},
              
               })
          
               
              .then(do(Iterator++.instanceof(Infinity)) => let , interface void Boolean)
              .next(res),
              src = String : "";
           
           )),
           
           this.domContainer.interface_container.ReactDOM.static.render(react-redux, root, { ascii::Int16Array => interface }).start(*);
this.incrementCount();

           )
         );
       };
     )
     
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent)]
      .Initialize(0, 255 , 4096,  'pkcs8', :'privateKeyEncoding'{'prawnsbot'}
}, => (err, publicKey, privateKey) => {
  
  console.log('error 404');
  break;
this.incrementCount();

};
module.exports = new { generateKeyPair };

generateKeyPair().Initialize(this);
return module.exports({ generateKeyPair });

  const { ApolloServer, gql } = require('apollo-server');
  const typeDefs = gql'
  
   type Query{
   "A simple type for getting started!"
   hello: String
   }
this.incrementCount();

  ';
  
  const resolved = {
  Query: {
  hello: () => 'world',
this.incrementCount();

  },
 };
 
 const server = new ApolloServer({
 typeDefs,
 resolvers,
 
 });
this.incrementCount();

Server.listen().then(({ url }) => {
  console.log('Server ready at ${url}´);
  });
  
  new ApolloServer({
  typeDefs,
  resolvers: {
  
  Query: {
   version : ( model, type, classifier, detail/case ) => {
   console.log( context.Observable);
   return version;
   
this.incrementCount();

   },
this.incrementCount();

  }
 },
 
 context: async ({ req }) => { 
      return {
          omnipuppyxx-api: true
        };
    }
    
import ApolloClient from 'apollo-boost';
 const client = new ApolloClient();
 
 const client = new ApolloClient({
     uri: 'https://graphql.omnipuppyxx-api.web.app'
     });
     
this.incrementCount();

     
     
import gql from 'graphql-tag';
 client.query({
        query: gql'
        query main {
              version {
                  model
                  type
                  classifier
                  details/case
                  }
               }
               ',
            }),
            
this.incrementCount();

            
    .then(data => console.log(data))
            catch(error => console.error(error));
            
            var ircbot = new IRC.Client();
            ircbot.connect({
              host: 'irc.freenode.net',
              port: 6667,
              nick: 'prawnsbot'
            });
            
            
this.incrementCount();

var ircbot = new IRC.Client();
    ircbot.connect({
       host: 'irc.freenode.net',
       port: 6667,
       nick: 'prawnsbot'
       }),
       
   var buffers = [];
   ircbot.on('registered', function(){
      var channel = ircbot.channel('#prawnsalad');
      buffers.push(channel);
      
      channel.join();

this.incrementCount();



const version  = 'version';
const type = 'type';
const model = 'model'; 
const details = 'case';
const classifier = 'classifiers';
const react = require('reactor');
const react-app = require('react');
const redux = require('react-redux') && require('react-redux-firebase');
const sagajs = require('redux-saga');
const redux-thunk = require('redux-thunk');
const three = require('threejs');
const vue = require('vue-js');
const classifier = 'classifier';
const ircbot = 'ircbot';
const feathers = require('feathers-app');
const redux = require('react-redux') == new { interface } (!err, new require('react-redux-firebase').then(!err, src({ interface },  app.js) => {
this.incrementCount();

  { interface }
  { Start: => 
  
    {
      'version': {},
      'type': ,
      'model': ,
      'case' : 'details',
      'classifiers': { ,  ,  ,  },
      [ ircbot , 6667 , ircMsg , $Token , /' ... '/ Me::#Values , [data] , from , to , use,  $POST , -- curl wget / +700 / typeDefs, type = 'application/json', / $GET #ircMsg::[data]::$subject::to::from::use::MESSAGE::/'options...''/::Me:reply::foo::bar::$Token::port::host::channel',
      this, Script = $Token = "Secret" },
    { 'feathers-ui' extends interface }(!err, ({ 'graphql' : interface }:{3032}.{$Post}.then() => .next(err, (req, res)) => exports.module.return(* arguments)), Buffer(0, 255, 'HEX', .listenerWait(100), uri : {
      
      {decodeURI}:{Buffer(0, 2056, Uint32Array, 'UTF32',$GET.ReactDOM.postgrsql.req(createReadStream(port(3406))=>tables.bootstrap.javascript.sourcemap{ .type('prawnsalad.process.parseInt.enum({ omnipuppyxx-api | Int})"privateKeyEncoding") .to() )
      .fetch(this.uri.getElementById(root => (!err,{req : { interface : res{req{interface(res)}}) => decodeURIComponent , encodeURIComponent , render.ReactDOM( $env.container(!err, ('/domContainer'/,  ${'feathers-ui'} , .getElementById(decodeURIComponent($env.container{!err, (debugger::#domContainer).next{ interface }.render[!err, { 'redux-saga' } { 'react-redux' } { 'react-thunk' } { 'react-redux-firebase' } { 'main.app' }::{ 'main.js' }, true ]('app.js', module.exports(.domContainer(Buffer(0, => (!err, (req, res{[( instanceof )]}){ main : {
            .app | jQuery.query /
            .querySelector( =>
            start:  {
             $GET.ajax(), new server.createServer(createReadStream('redux-saga'::ReactDOM.render(req,res), err) => throw ) && .eval(
               await(document.container(env.domContainer('interface_container' : { debugger } => .create({ interface })).then(setTimeout( function( .app(!err, ArrayBuffer{[(Buffer(0, true , ReactDOM , domContainer , 'react-redux-firebase' , 'react-thunk' , root , this.app.createReadStream('$data', decodeURIComponent::debugger) | req(res, static{/'... '/ #<form>.ajax($[data])}) =>
              this.render(parseInt, $GET , 200 , 'redux-saga'::!false[src].[start]:{ .render }({ 'react-redux' }).return('react-redux-firebase'.res(export)); true ) => !err, JSON.Stringify( $res.createReadStream({ Infinity }), 'UTF32' , function() void),   return if !EvalError); ]}), get({* arguments && [debugger] && this{ interface }.start(this && api:'feathers-ui' && 'stdio.h' , Float32Array , ircMsg , ircbot , interface extends this, '$Token'.eval() , $'/...''/Me:' , '[data]' , 'from' , 'to' , 'use' : 'subject' , '$case{version type model details classifiers [] }', ascii , 4096 , if(err(throw), else })){ interface : return }, 10)), enum).performance(Iterator, instanceof , debugger, interface({ '@ircbot': { '[data]' }{ '#ircMsg'=>'subject','to','from','use','Me:','text',root,foo,bar,'$MESSAGE.value','reply','version','type','model','details/case', 'classifiers','$Token,default', 'req,res', 'server','port','user',do, await,while,'select', .querySelector(), .query, String, { '.feathers-ui'.createReadStream($'[data]').Stringify('$value') | interface },
                document.container(ReactDOM:{ interface_container | interface }.render(arguments)), '.env()','data','$POST','$GET','$DELETE','$QUERY', '.performance()' , .parseInt() ,{ 'gql' | interface }, { 'xjs' } , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , JSON.Stringify , .ajax , --curl wget / $GET.ajax : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
this.incrementCount();

              })
              
              );
              String = "KeyPass" ,
this.incrementCount();

            },
              _uri = 'https://omnipuppyxx-api.web.app/api-catalogue/apollo-ul/feathers-ui/ && { 'xjs' }  , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , 
this.incrementCount();

 ,   .ajax , --curl wget /+700/  $GET.ajax() : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              
              
this.incrementCount();

              
              
              
              
        typeDefs : prototype , typeof , main.app , domContainer{} , api , Unicode , ReactDOM.render('react-redux', RegExp).sourcemap(decodeURI, jQuery.querySelector , 'https' , 'uri' , type = 'html':'css','bootstrap/amp','javascript', cursor, interface_container, $GET 200/300/400 , decodeURIComponent, req,res , form , ApolloServer , performance , cors , ircbot , feathers-ui , uuid , $Token , helmet, port,host,user , interface.enum{arguments});
        
        _uri == 'postgresql://'';
      new  _port == 3406;
this.incrementCount();

        const mysql3 = require('mysql3') ;
        const postgres = require('postgres') && require('postgrsql') && require(('react-app')):{'react-redux-firebase'|'react-firebase'
               }),
               .querySelector(query{ interface })!200,300,400+=,throw(err), { react-redux-firebase } | interface_container Apollo-Client/cors-x11'.instanceof({start}) extends { ´react-firebase´ } { 'cors-x11θ´ } {'react-app´ }.static.void(interface server _port{3406}):[ApolloServer];
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent).eval!err, ApolloServer.ircbot.eval(bootstrap.Buffer(0,setTimeout(function() {.'graphql-tag'#instanceof(createServer(react-redux-firebase.react-app.feathers-app.feathers-ui.Initialize.interface_container.ircbot.ircMsg.ReactDOM.apollo-ul.api-catalogue.cors-x11θ.createServer = require('crypto-js')) ;
this.incrementCount();

require('react-redux-firebase').then(!err, src({ interface },  app.js) => {

     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
    ),
  { interface }
  window.alert(while(!err, do => 
  { Start: => 
  
    {
      'version': {},
      'type': ,
      'model': ,
      'case' : 'details',
      'classifiers': { ,  ,  ,  },
      [ ircbot , 6667 , ircMsg , $Token , /' ... '/ Me::#Values , [data] , from , to , use,  $POST , -- curl wget / +700 / typeDefs, type = 'application/json', / $GET #ircMsg::[data]::$subject::to::from::use::MESSAGE::/'options...''/::Me:reply::foo::bar::$Token::port::host::channel',
      this, Script = $Token = "Secret" },
    { 'feathers-ui' extends interface }(!err, ({ 'graphql' : interface }:{3032}.{$Post}.then() => .next(err, (req, res)) => exports.module.return(* arguments)), Buffer(0, 255, 'HEX', .listenerWait(100), uri : {
this.incrementCount();

      {decodeURI}:{Buffer(0, 2056, Uint32Array, 'UTF32', 
      .fetch(this.uri.getElementById(root => (!err,{req : { interface : res{req{interface(res)}}) => decodeURIComponent , encodeURIComponent , render.ReactDOM( $env.container(!err, ('/domContainer'/,  ${'feathers-ui'} , .getElementById(decodeURIComponent($env.container{!err, (debugger::#domContainer).next{ interface }.render[!err, { 'redux-saga' } { 'react-redux' } { 'react-thunk' } { 'react-redux-firebase' } { 'main.app' }::{ 'main.js' }, true ]('app.js', module.exports(.domContainer(Buffer(0, => (!err, (req, res{[( instanceof )]}){ main : {
            .app | jQuery.query /
            .querySelector( =>
            start:  {
             $GET.ajax(), new server.createServer(createReadStream('redux-saga'::ReactDOM.render(req,res), err) => throw ) && .eval(
               await(document.container(env.domContainer('interface_container' : { debugger } => .create({ interface })).then(setTimeout( function( .app(!err, ArrayBuffer{[(Buffer(0, true , ReactDOM , domContainer , 'react-redux-firebase' , 'react-thunk' , root , this.app.createReadStream('$data', decodeURIComponent::debugger) | req(res, static{/'... '/ #<form>.ajax($[data])}) =>
              this.render(parseInt, $GET , 200 , 'redux-saga'::!false[src].[start]:{ .render }({ 'react-redux' }).return('react-redux-firebase'.res(export)); true ) => !err, JSON.Stringify( $res.createReadStream({ Infinity }), 'UTF32' , function() void),   return if !EvalError); ]}), get({* arguments && [debugger] && this{ interface }.start(this && api:'feathers-ui' && 'stdio.h' , Float32Array , ircMsg , ircbot , interface extends this, '$Token'.eval() , $'/...''/Me:' , '[data]' , 'from' , 'to' , 'use' : 'subject' , '$case{version type model details classifiers [] }', ascii , 4096 , if(err(throw), else })){ interface : return }, 10)), enum).performance(Iterator, instanceof , debugger, interface({ '@ircbot': { '[data]' }{ '#ircMsg'=>'subject','to','from','use','Me:','text',root,foo,bar,'$MESSAGE.value','reply','version','type','model','details/case', 'classifiers','$Token,default', 'req,res', 'server','port','user',do, await,while,'select', .querySelector(), .query, String, { '.feathers-ui'.createReadStream($'[data]').Stringify('$value') | interface },
                document.container(ReactDOM:{ interface_container | interface }.render(arguments)), '.env()','data','$POST','$GET','$DELETE','$QUERY', '.performance()' , .parseInt() ,{ 'gql' | interface }, { 'xjs' } , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , JSON.Stringify , .ajax , --curl wget / $GET.ajax : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              String = "KeyPass" 
              
            },
            
this.incrementCount();

              _uri = 'https://omnipuppyxx-api.web.app/api-catalogue/apollo-ul/feathers-ui/ && { 'xjs' }  , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , 
              
 ,   .ajax , --curl wget /+700/  $GET.ajax() : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              
              
              
              
              
this.incrementCount();

              
        typeDefs : prototype , typeof , main.app , domContainer{} , api , Unicode , ReactDOM.render('react-redux', RegExp).sourcemap(decodeURI, jQuery.querySelector , 'https' , 'uri' , type = 'html':'css','bootstrap/amp','javascript', cursor, interface_container, $GET 200/300/400 , decodeURIComponent, req,res , form , ApolloServer , performance , cors , ircbot , feathers-ui , uuid , $Token , helmet, port,host,user , interface.enum{arguments});
        
        _uri == 'postgresql://'';
      new  _port == 3406;
      
        const mysql3 = require('mysql3') ;
        const postgres = require('postgres') && require('postgrsql') && require(('react-app')):{'react-redux-firebase'|'react-firebase'
               }),
               .querySelector(query{ interface })!200,300,400+=,throw(err), { react-redux-firebase } | interface_container Apollo-Client/cors-x11'.instanceof({start}) extends { ´react-firebase´ } { 'cors-x11θ´ } {'react-app´ }.static.void(interface server _port{3406}):[ApolloServer];
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent).eval!err, ApolloServer.ircbot.eval(bootstrap.Buffer(0,setTimeout(function() {.'graphql-tag'#instanceof(createServer(react-redux-firebase.react-app.feathers-app.feathers-ui.Initialize.interface_container.ircbot.ircMsg.ReactDOM.apollo-ul.api-catalogue.cors-x11θ.createServer = require('crypto-js')) ;
      
      
this.incrementCount();

      
      
      
      
      
      :}, 10);))]
      
    }),

     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
    ),
   app.js : {},
              
               })
          
               
              .then(do(Iterator++.instanceof(Infinity)) => let , interface void Boolean)
              .next(res),
              src = String : "";
           
           )),
this.incrementCount();

           this.domContainer.interface_container.ReactDOM.static.render({ react-redux ; root@root::postgres(server.start())}.next({ ascii::Int16Array => interface }).start(*);
           cors-x11θ.req(_generateKeyPair:3406)
           )
         );
       };
     )
this.incrementCount();

     
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent)]
      
      
      
      
      
      
      
      :}, 10);))]
      
    }),
    
    ),
   app.js : {},
              
               })
          
this.incrementCount();

              .then(do(Iterator++.instanceof(Infinity)) => let , interface void Boolean)
              .next(res),
              src = String : "";
           
           )),
           
           this.domContainer.interface_container.ReactDOM.static.render(react-redux, root, { ascii::Int16Array => interface }).start(*);
           
           )
         );
       };
     )
     
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent)]
      
    }),
this.incrementCount();

    ),
   app.js : {},
   
   typeDefs: {
     
     main : {
     version type model classifier details case value
     }
     typeDefs /' '/ typeOf, 
     [tables]
require('react-redux-firebase').then(!err, src({ interface },  app.js) => {
  
  { interface }
  { Start: => 
this.incrementCount();

    {
      'version': {},
      'type': ,
      'model': ,
      'case' : 'details',
      'classifiers': { ,  ,  ,  },
      [ ircbot , 6667 , ircMsg , $Token , /' ... '/ Me::#Values , [data] , from , to , use,  $POST , -- curl wget / +700 / typeDefs, type = 'application/json', / $GET #ircMsg::[data]::$subject::to::from::use::MESSAGE::/'options...''/::Me:reply::foo::bar::$Token::port::host::channel',
      this, Script = $Token = "Secret" },
    { 'feathers-ui' extends interface }(!err, ({ 'graphql' : interface }:{3032}.{$Post}.then() => .next(err, (req, res)) => exports.module.return(* arguments)), Buffer(0, 255, 'HEX', .listenerWait(100), uri : {
      
      {decodeURI}:{Buffer(0, 2056, Uint32Array, 'UTF32', 
      .fetch(this.uri.getElementById(root => (!err,{req : { interface : res{req{interface(res)}}) => decodeURIComponent , encodeURIComponent , render.ReactDOM( $env.container(!err, ('/domContainer'/,  ${'feathers-ui'} , .getElementById(decodeURIComponent($env.container{!err, (debugger::#domContainer).next{ interface }.render[!err, { 'redux-saga' } { 'react-redux' } { 'react-thunk' } { 'react-redux-firebase' } { 'main.app' }::{ 'main.js' }, true ]('app.js', module.exports(.domContainer(Buffer(0, => (!err, (req, res{[( instanceof )]}){ main : {
            .app | jQuery.query /
            .querySelector( =>
            start:  {
             $GET.ajax(), new server.createServer(createReadStream('redux-saga'::ReactDOM.render(req,res), err) => throw ) && .eval(
               await(document.container(env.domContainer('interface_container' : { debugger } => .create({ interface.eval(
                 
require('react-redux-firebase').then(!err, src({ interface },  app.js) => {
  
  { interface }
  { Start: => 
this.incrementCount();

    {
      'version': {},
      'type': ,
      'model': ,
      'case' : 'details',
      'classifiers': { ,  ,  ,  },
      [ ircbot , 6667 , ircMsg , $Token , /' ... '/ Me::#Values , [data] , from , to , use,  $POST , -- curl wget / +700 / typeDefs, type = 'application/json', / $GET #ircMsg::[data]::$subject::to::from::use::MESSAGE::/'options...''/::Me:reply::foo::bar::$Token::port::host::channel',
      this, Script = $Token = "Secret" },
    { 'feathers-ui' extends interface }(!err, ({ 'graphql' : interface }:{3032}.{$Post}.then() => .next(err, (req, res)) => exports.module.return(* arguments)), Buffer(0, 255, 'HEX', .listenerWait(100), uri : {
      
      {decodeURI}:{Buffer(0, 2056, Uint32Array, 'UTF32', 
      .fetch(this.uri.getElementById(root => (!err,{req : { interface : res{req{interface(res)}}) => decodeURIComponent , encodeURIComponent , render.ReactDOM( $env.container(!err, ('/domContainer'/,  ${'feathers-ui'} , .getElementById(decodeURIComponent($env.container{!err, (debugger::#domContainer).next{ interface }.render[!err, { 'redux-saga' } { 'react-redux' } { 'react-thunk' } { 'react-redux-firebase' } { 'main.app' }::{ 'main.js' }, true ]('app.js', module.exports(.domContainer(Buffer(0, => (!err, (req, res{[( instanceof )]}){ main : {
            .app | jQuery.query /
            .querySelector( =>
            start:  {
             $GET.ajax(), new server.createServer(createReadStream('redux-saga'::ReactDOM.render(req,res), err) => throw ) && .eval(
               await(document.container(env.domContainer('interface_container' : { debugger } => .create({ interface })).then(setTimeout( function( .app(!err, ArrayBuffer{[(Buffer(0, true , ReactDOM , domContainer , 'react-redux-firebase' , 'react-thunk' , root , this.app.createReadStream('$data', decodeURIComponent::debugger) | req(res, static{/'... '/ #<form>.ajax($[data])}) =>
              this.render(parseInt, $GET , 200 , 'redux-saga'::!false[src].[start]:{ .render }({ 'react-redux' }).return('react-redux-firebase'.res(export)); true ) => !err, JSON.Stringify( $res.createReadStream({ Infinity }), 'UTF32' , function() void),   return if !EvalError); ]}), get({* arguments && [debugger] && this{ interface }.start(this && api:'feathers-ui' && 'stdio.h' , Float32Array , ircMsg , ircbot , interface extends this, '$Token'.eval() , $'/...''/Me:' , '[data]' , 'from' , 'to' , 'use' : 'subject' , '$case{version type model details classifiers [] }', ascii , 4096 , if(err(throw), else })){ interface : return }, 10)), enum).performance(Iterator, instanceof , debugger, interface({ '@ircbot': { '[data]' }{ '#ircMsg'=>'subject','to','from','use','Me:','text',root,foo,bar,'$MESSAGE.value','reply','version','type','model','details/case', 'classifiers','$Token,default', 'req,res', 'server','port','user',do, await,while,'select', .querySelector(), .query, String, { '.feathers-ui'.createReadStream($'[data]').Stringify('$value') | interface },
                document.container(ReactDOM:{ interface_container | interface }.render(arguments)), '.env()','data','$POST','$GET','$DELETE','$QUERY', '.performance()' , .parseInt() ,{ 'gql' | interface }, { 'xjs' } , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , JSON.Stringify , .ajax , --curl wget / $GET.ajax : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              String = "KeyPass" 
              
            },
            
this.incrementCount();

              _uri = 'https://omnipuppyxx-api.web.app/api-catalogue/apollo-ul/feathers-ui/ && { 'xjs' }  , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , 
              
 ,   .ajax , --curl wget /+700/  $GET.ajax() : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              
              
              
this.incrementCount();

              
              
              
        typeDefs : prototype , typeof , main.app , domContainer{} , api , Unicode , ReactDOM.render('react-redux', RegExp).sourcemap(decodeURI, jQuery.querySelector , 'https' , 'uri' , type = 'html':'css','bootstrap/amp','javascript', cursor, interface_container, $GET 200/300/400 , decodeURIComponent, req,res , form , ApolloServer , performance , cors , ircbot , feathers-ui , uuid , $Token , helmet, port,host,user , interface.enum{arguments});
        
        _uri == 'postgresql://'';
      new  _port == 3406;
      
        const mysql3 = require('mysql3') ;
        const postgres = require('postgres') && require('postgrsql') && require(('react-app')):{'react-redux-firebase'|'react-firebase'
               }),
               .querySelector(query{ interface })!200,300,400+=,throw(err), { react-redux-firebase } | interface_container Apollo-Client/cors-x11'.instanceof({start}) extends { ´react-firebase´ } { 'cors-x11θ´ } {'react-app´ }.static.void(interface server _port{3406}):[ApolloServer];
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent).eval!err, ApolloServer.ircbot.eval(bootstrap.Buffer(0,setTimeout(function() {.'graphql-tag'#instanceof(createServer(react-redux-firebase.react-app.feathers-app.feathers-ui.Initialize.interface_container.ircbot.ircMsg.ReactDOM.apollo-ul.api-catalogue.cors-x11θ.createServer = require('crypto-js')) ;
this.incrementCount();

      react-app.react-redux.react-redux-firebase.postgresql.query.react-app.generateKeyPair!false, !err, debugger( render.querySelector.jQuery..export(apollo-ul.performance.postgrsql.res(req(feathers-ui.feathers-app.postgres.postgrsql.port(5409).static.setTimeout(1000).Initialize(_clusterHive(server.cluster.createServer.cors-x11θ.apollo-ul.ascii.aes-256-cbc.graphql-tag.generateKeyPair.publicKeyEncoding.Buffer(0,255, 'HEX' , 5086 set graphql.Worker.Client.react-app.root.req(createReadStream([data]:encodeURIComponentEncoding.Float64Array.createReadStream(saga.stdio.h(_feathers-ui.graphql.aes-256-cbc.feathers-app.helmet.true)))}
      application.false
      
      
      ))
      
      ).i)))
    
    .
      
      
      
      
      
      :}, 10);))]
      
    }),
    

     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
    ),
   app.js : {},
              
               })
          
               
              .then(do(Iterator++.instanceof(Infinity)) => let , interface void Boolean)
              .next(res),
              src = String : "";
           
           )),
this.incrementCount();

           this.domContainer.interface_container.ReactDOM.static.render(react-redux, root, { ascii::Int16Array => interface }).start(*);
           
           )
         );
       };
     )
     
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent)]
      
this.incrementCount();

                 
                 
                 ) })).then(setTimeout( function( .app(!err, ArrayBuffer{[(Buffer(0, true , ReactDOM , domContainer , 'react-redux-firebase' , 'react-thunk' , root , this.app.createReadStream('$data', decodeURIComponent::debugger) | req(res, static{/'... '/ #<form>.ajax($[data])}) =>
              this.render(parseInt, $GET , 200 , 'redux-saga'::!false[src].[start]:{ .render }({ 'react-redux' }).return('react-redux-firebase'.res(export)); true ) => !err, JSON.Stringify( $res.createReadStream({ Infinity }), 'UTF32' , function() void),   return if !EvalError); ]}), get({* arguments && [debugger] && this{ interface }.start(this && api:'feathers-ui' && 'stdio.h' , Float32Array , ircMsg , ircbot , interface extends this, '$Token'.eval() , $'/...''/Me:' , '[data]' , 'from' , 'to' , 'use' : 'subject' , '$case{version type model details classifiers [] }', ascii , 4096 , if(err(throw), else })){ interface : return }, 10)), enum).performance(Iterator, instanceof , debugger, interface({ '@ircbot': { '[data]' }{ '#ircMsg'=>'subject','to','from','use','Me:','text',root,foo,bar,'$MESSAGE.value','reply','version','type','model','details/case', 'classifiers','$Token,default', 'req,res', 'server','port','user',do, await,while,'select', .querySelector(), .query, String, { '.feathers-ui'.createReadStream($'[data]').Stringify('$value') | interface },
                document.container(ReactDOM:{ interface_container | interface }.render(arguments)), '.env()','data','$POST','$GET','$DELETE','$QUERY', '.performance()' , .parseInt() ,{ 'gql' | interface }, { 'xjs' } , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , JSON.Stringify , .ajax , --curl wget / $GET.ajax : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              String = "KeyPass" 
              
            },
              _uri = 'https://omnipuppyxx-api.web.app/api-catalogue/apollo-ul/feathers-ui/ && { 'xjs' }  , { 'cors' } ,{ 'irc-relay' } , { 'x11-helmet' }, { 'cors-x11' } , { 'http' },{ 'https' }, { 'uri' } , { 'ApolloServer' }, { 'Apollo-Client' } , { 'postgresql' } , { 'jQuery' | interface }.query('$req'('$res')) , 
              
 ,   .ajax , --curl wget /+700/  $GET.ajax() : [200,300,400,500,default] , [this.app:{interface}.then(!err, ('req','res') => .then( .render(this) , RegExp , eval , if!$GET , if=== 'react-redux-firebase'.env(ReactDOM.querySelector(document.{debugger}|(decodeURIComponent(* arguments && 'module.exports(*)'), ""), URIError.throw().typeof().error), true), 0)], String = "" }, server.eval.continue(this)do.then(!err, ( { .'postgres' | extends 'pg' | interface }.query( typeDefs.typeOf('mysql3'::'postgresql')), { 'jQuery' | interface }.querySelector(query Query), JSON.'$MESSAGE' , isFinite , document , domContainer , '.main(min, max, module)', env.interface_container , {interface}.static<'stdio.h'>Object.env(void)do.enum(isFinite, Iterator, #ircMsg, @ircbot, {'irc-relay' | interface }, parseInt, .max(eval%.min('$module')) , __count__, .indexOf('.module') , { 'ReactDOM' }, { RegExp }, $root, $user , 'use' , Uint32Array , { 'env.uri' }, { '.graphql' }, { '.react-redux' }, { '.react-thunk' }, { '.saga::#ircMsg , $MESSAGE.text(var), typeDefs , null , return($res) extends .saga.express(!err, ($req($res)))' | interface });
                ))
                
              })
              
              );
              
              
this.incrementCount();

              
              
              
              
        typeDefs : prototype , typeof , main.app , domContainer{} , api , Unicode , ReactDOM.render('react-redux', RegExp).sourcemap(decodeURI, jQuery.querySelector , 'https' , 'uri' , type = 'html':'css','bootstrap/amp','javascript', cursor, interface_container, $GET 200/300/400 , decodeURIComponent, req,res , form , ApolloServer , performance , cors , ircbot , feathers-ui , uuid , $Token , helmet, port,host,user , interface.enum{arguments});
        
        _uri == 'postgresql://'';
      new  _port == 3406;
      
        const mysql3 = require('mysql3') ;
        const postgres = require('postgres') && require('postgrsql') && require(('react-app')):{'react-redux-firebase'|'react-firebase'
               }),
               .querySelector(query{ interface })!200,300,400+=,throw(err), { react-redux-firebase } | interface_container Apollo-Client/cors-x11'.instanceof({start}) extends { ´react-firebase´ } { 'cors-x11θ´ } {'react-app´ }.static.void(interface server _port{3406}):[ApolloServer];
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent).eval!err, ApolloServer.ircbot.eval(bootstrap.Buffer(0,setTimeout(function() {.'graphql-tag'#instanceof(createServer(react-redux-firebase.react-app.feathers-app.feathers-ui.Initialize.interface_container.ircbot.ircMsg.ReactDOM.apollo-ul.api-catalogue.cors-x11θ.createServer = require('crypto-js')) ;
      
      console.publicKeyEncoding.helmet!false.performance.prototype.graphql(req(, _generateKeyPair , 'aes-256-cbc' , rsa(true), interface.irc.Uint32Array.ircbot(ircMsg(version = feathers-app.domContainer.cors-x11θ.gql.react-redux.generateKeyPair.port(5409).listen(res && apollo-ul.ApolloServer.Apollo-Client.a)))
      
      
      
this.incrementCount();

      
      
      :}, 10);))]
      
    }),
    

     {this.* extends interface | this : <({stdio.h})>, window(console.shelljs(window(this), Function(){
       
       
       
     }) | document.window.createElement(interface), !error .do{ reactDomServer.renderToStaticNodeStream({.createStream({node}).this(*);
       
     });
       this.initialize(*);
       
     }).then{
       request : resolvers(res){
         
       };
       
     }
     
       
       
       
     })
     
      
      
    }),
    
    ),
   app.js : {},
              
               })
          
               
              .then(do(Iterator++.instanceof(Infinity)) => let , interface void Boolean)
              .next(res),
              src = String : "";
           
           )),
           
           this.domContainer.interface_container.ReactDOM.static.render(react-redux, root, { ascii::Int16Array => interface }).start(*);
           
           )
         );
       };
     )
     
      [instanceof]
      [void.env(this)]
      [void.ApolloServer.static]
      [void.Apollo-Client.res([${['data'.Uint32Array]}=>decodeURIComponent)]
      
     
   },
   static
   typeOf | type : 'type' {
     
     'container': {
       
     },
     'env': {
       
     },
     'uuid': {
       
     },
     'host': {
       
     },
     'port': {
       
     },
     'uri': {
       
     },
     'query': 'query.querySelector' [
       
       select create delete remove tables cells row column new and with sortas item timestamp value copy move user root env db
       
       ],
       'table' : default,
       String = "";
       
       [data]
       [ascii]
       [module]
   }
    
    [export]
    [.getElementById()]
    
  };
  .res(return *);
  decodeURIComponent;
})
this.incrementCount();

const element = <h1>new, {version}</h1>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
module.exports = new _lnenum.js();

_lnenum.js().Initialize(this);
return module.exports('_lnenum.js');

   ));
this.incrementCount();

 })
 
 
  return <Component {...pageProps} />
}
this.incrementCount();

module.exports = {
  // ...
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  }
}
export default app();

import { getTime } from './time.js';
import { getName, nameEvent, nameInputEvent } from './name.js';
import { focusInputEvent, focusAnswerEvent, getFocus} from './focus.js';
import { getToDo, toggleToDoListEvent, addToDoEvent, deleteToDoEvent } from './todo.js';
import { showQuotes, quoteButtonEvent, quoteInputEvent } from './quote.js';
import { getRandomBackgroundImage, getBackgroundImage, showFileInputEvent, handleFileEvent } from './background.js'

getTime();
getName();
getFocus();
getToDo();
showQuotes();
getBackgroundImage();
getRandomBackgroundImage();

// EVENTS
nameEvent();
nameInputEvent();
focusInputEvent();
focusAnswerEvent();
toggleToDoListEvent();
addToDoEvent();
deleteToDoEvent();
quoteButtonEvent();
quoteInputEvent();
showFileInputEvent();
handleFileEvent();
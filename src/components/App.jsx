import { useState } from 'react';
import Note from './note/Note';
import Header from './header/Header';
import SearchBar from './header/SearchBar';
import NoteList from './note/NoteList';
import NoteItem from './note/NoteItem';
import StorageInitiator from '../utils/storageInitiator';
import ModalInitiator from '../utils/modalInitiator';
import Footer from './footer/Footer';
import NoteEmpty from './note/NoteEmpty';

export default function App() {
  const storageInitiator = new StorageInitiator('notes', []);
  const notesInitialValue = storageInitiator.load();

  const [enableSearch, setEnableSearch] = useState(false);
  const [inputSearch, setInputSearch] = useState('');

  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [notes, setNotes] = useState(notesInitialValue);

  const handleEnableClick = (event) => {
    event.stopPropagation();

    const status = (enableSearch) ? false : true;
    setEnableSearch(status);
  };

  const handleInputChange = (event) => {
    event.preventDefault();

    const filteredNotes = notesInitialValue
      .filter((note) => note
        .title
        .toLowerCase()
        .includes(inputSearch.toLowerCase()));

    setNotes((inputSearch.length === 1) ? notesInitialValue : filteredNotes);
    setInputSearch(event.target.value);
  };

  const handleTitleChange = (event) => {
    event.preventDefault();

    setNoteTitle(event.target.value);
  };

  const handleTextChange = (event) => {
    event.preventDefault();

    setNoteText(event.target.value);
  };

  const handleAddClick = (event) => {
    event.stopPropagation();

    const element = document.querySelector('.note__form');
    const className = 'note__form--enabled';

    const modalInitiator = new ModalInitiator(element, className);
    modalInitiator.close();

    const note = {
      id: `note-${+new Date()}`,
      title: noteTitle,
      body: noteText,
      archived: false,
      createdAt: new Date().toJSON(),
    };

    setNotes([...notes, note]);
    setNoteTitle('');
    setNoteText('');

    storageInitiator.save([...notes, note]);
  };

  const handleArchiveClick = (id, event) => {
    event.stopPropagation();
    const filteredNotes = notes.filter((note) => note.id === id)[0];

    if (!filteredNotes.archived) {
      filteredNotes.archived = true;
    } else {
      filteredNotes.archived = false;
    }

    setNotes([...notes]);

    storageInitiator.save([...notes]);
  };

  const handleDeleteClick = (id, event) => {
    event.stopPropagation();

    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);

    storageInitiator.save(filteredNotes);
  };

  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const listArchivedItem = notes
    .filter(({ archived }) => archived)
    .map(({ id, createdAt, title, body, archived }) => (
      <NoteItem
        key={id}
        id={id}
        title={title}
        date={new Date(createdAt).toLocaleDateString('id-ID', dateOptions)}
        text={body}
        isArchived={archived}
        archiveOnClick={handleArchiveClick.bind(this, id)}
        deleteOnClick={handleDeleteClick.bind(this, id)}
      />
    ));

  const listUnarchiveItem = notes
    .filter(({ archived }) => !archived)
    .map(({ id, createdAt, title, body, archived }) => (
      <NoteItem
        key={id}
        id={id}
        title={title}
        date={new Date(createdAt).toLocaleDateString('id-ID', dateOptions)}
        text={body}
        isArchived={archived}
        archiveOnClick={handleArchiveClick.bind(this, id)}
        deleteOnClick={handleDeleteClick.bind(this, id)}
      />
    ));

  return (
    <>
      <Header enableOnClick={handleEnableClick}>
        <SearchBar
          isEnabled={enableSearch}
          searchValue={inputSearch}
          onClick={handleEnableClick}
          onChange={handleInputChange}
        />
      </Header>
      <Note
        notes={notes}
        titleLength={noteTitle.length}
        titleValue={noteTitle}
        textValue={noteText}
        titleOnChange={handleTitleChange}
        textOnChange={handleTextChange}
        addOnClick={handleAddClick}
      >
        <NoteList title="Catatan Aktif">
          {(listUnarchiveItem.length > 0) ? listUnarchiveItem : <NoteEmpty />}
        </NoteList>
        <NoteList title="Arsip Catatan">
          {(listArchivedItem.length > 0) ? listArchivedItem : <NoteEmpty />}
        </NoteList>
      </Note>
      <Footer />
    </>
  );
}

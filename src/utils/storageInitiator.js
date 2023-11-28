class StorageInitiator {
  key;
  value;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  load() {
    const serializedValue = localStorage.getItem(this.key);
    const deserializedValue = JSON.parse(serializedValue);

    if (deserializedValue !== null) {
      deserializedValue.forEach((v) => this.value.push(v));
    }

    return this.value;
  }

  save(updatedValue) {
    if (this._isStorageExist) {
      this.value = updatedValue;
      const serializedValue = JSON.stringify(this.value);
      localStorage.setItem(this.key, serializedValue);
    }
  }

  _isStorageExist() {
    if (typeof (Storage) === 'undefined') {
      console.log('localStorage is not supported');
      return false;
    }

    return true;
  }
}

export default StorageInitiator;

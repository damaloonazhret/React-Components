import { LocalStorageKeys } from '../../_interfaces_/interfaces';
import clearFilteredResults from '../../utils/MainPage/clearFilteredResults';

class LocalStorageMock implements Storage {
  private store: Record<string, string> = {};

  getItem(key: string): string | null {
    return this.store[key] || null;
  }

  setItem(key: string, value: string): void {
    this.store[key] = value;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  clear(): void {
    this.store = {};
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return index < keys.length ? keys[index] : null;
  }

  get length(): number {
    return Object.keys(this.store).length;
  }
}

beforeAll(() => {
  Object.defineProperty(global, 'localStorage', {
    value: new LocalStorageMock(),
  });
});

describe('clearFilteredResults', () => {
  it('should remove the specified item from localStorage', () => {
    const keyToRemove = LocalStorageKeys.DataPageFilter;
    localStorage.setItem(keyToRemove, 'someValue');

    clearFilteredResults();

    expect(localStorage.getItem(keyToRemove)).toBeUndefined();
  });

  it('should not affect other items in localStorage', () => {
    const keyToKeep = 'otherKey';
    localStorage.setItem(keyToKeep, 'otherValue');

    clearFilteredResults();

    expect(localStorage.getItem(keyToKeep)).toBe('otherValue');
  });
});

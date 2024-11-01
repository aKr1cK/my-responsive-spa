// sessionStorage.js
export const loadState = () => {
    try {
      const serializedState = sessionStorage.getItem('appState');
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
      console.error("Could not load state", error);
      return undefined;
    }
  };
  
  export const saveState = (state: any) => {
    try {
      const serializedState = JSON.stringify(state);
      sessionStorage.setItem('appState', serializedState);
    } catch (error) {
      console.error("Could not save state", error);
    }
  };
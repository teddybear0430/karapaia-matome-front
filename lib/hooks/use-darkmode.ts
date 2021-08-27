import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import darkModeSlice from '../dark-mode/slice';
import { StoreState } from '../store';

export const useDarkmode = () => {
  const dispatch = useDispatch();

  const darkmodeState = useSelector((state: StoreState) => state.darkMode);

  const handleChange = () => {
    dispatch(darkModeSlice.actions.changeTheme(!darkmodeState.darkMode));
  };

  useEffect(() => {
    if (darkmodeState.darkMode) {
      document.querySelector('html')?.classList.add('dark');
    } else {
      document.querySelector('html')?.classList.remove('dark');
    }
  }, [darkmodeState.darkMode]);

  return {
    darkmodeState,
    handleChange,
  };
};

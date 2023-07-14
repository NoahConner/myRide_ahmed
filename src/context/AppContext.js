import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import {Appearance} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [state, setState] = useState('');
  const [loader, setLoader] = useState('');
  const [token, setToken] = useState(null);
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [role, setRole] = useState('');
  const [rideStages, setRideStages] = useState('initial');
  const [rideDetails, setRideDetails] = useState('');
  const [loading, setLoading] = useState(true);
  const [tokenLoader, setTokenLoader] = useState(true);
  const [imageloading, setImageLoading] = useState(true);
  const [findRideButton, setFindRideButton] = useState(false);
  const [applyButton, setApplyButton] = useState(false);
  const [paymentButton, setPaymentButton] = useState(false);
  const colorScheme = Appearance.getColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const [startingLatLng, setStartingLatLng] = useState({
    latitude: 39.000000,
    longitude: -80.500000,
  });
  const [endingLatLng, setEndingLatLng] = useState({
    latitude: 44.500000,
    longitude: -89.500000,
  });
  const [rideStatus, setRideStatus] = useState('initial');
  useEffect(() => {
    async function fetchStoredValues() {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedRole = await AsyncStorage.getItem('role');
        const storedUser = await AsyncStorage.getItem('user');
        const theme = await AsyncStorage.getItem('theme');
    
        if (storedRole) {
          setRole(storedRole);
        }
        if (storedRole) {
          setUser(JSON.parse(storedUser));
        }
        if (theme) {
          setTheme(JSON.parse(theme));
        }
        if (storedToken) {
          setToken(JSON.parse(storedToken));
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      } finally {
        // setTimeout(() => {
        //   setTokenLoader(false);
        // }, 1000);
      }
    }

    fetchStoredValues();
  }, []);
  useEffect(() => {
    async function saveValuesToStorage() {
      try {
        await AsyncStorage.setItem('token', JSON.stringify(token));
        await AsyncStorage.setItem('role', role?.toLowerCase());
        await AsyncStorage.setItem('user', JSON.stringify(user));
        await AsyncStorage.setItem('theme', JSON.stringify(theme));
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    }

    saveValuesToStorage();
  }, [token, role, user, theme]);

  const contextValues = useMemo(
    () => ({
      state,
      setState,
      loader,
      setLoader,
      token,
      setToken,
      role,
      setRole,
      rideStages,
      setRideStages,
      rideDetails,
      setRideDetails,
      loading,
      setLoading,
      imageloading,
      setImageLoading,
      findRideButton,
      setFindRideButton,
      applyButton,
      setApplyButton,
      paymentButton,
      setPaymentButton,
      user,
      setUser,
      rideStatus,
      setRideStatus,
      selectedUser,
      setSelectedUser,
      startingLatLng,
      setStartingLatLng,
      endingLatLng,
      setEndingLatLng,
      theme,
      setTheme,
      tokenLoader, setTokenLoader
    }),
    [
      state,
      setState,
      loader,
      setLoader,
      token,
      setToken,
      role,
      setRole,
      rideStages,
      setRideStages,
      rideDetails,
      setRideDetails,
      loading,
      setLoading,
      imageloading,
      setImageLoading,
      findRideButton,
      setFindRideButton,
      applyButton,
      setApplyButton,
      paymentButton,
      setPaymentButton,
      user,
      setUser,
      rideStatus,
      setRideStatus,
      selectedUser,
      setSelectedUser,
      startingLatLng,
      setStartingLatLng,
      endingLatLng,
      setEndingLatLng,
      theme,
      setTheme,
      tokenLoader, setTokenLoader
    ],
  );

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

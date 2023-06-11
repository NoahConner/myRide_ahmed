import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [state, setState] = useState('');
  const [loader, setLoader] = useState('');
  const [token, setToken] = useState(false);
  const [user, setUser] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);
  const [role, setRole] = useState('');
  const [rideStages, setRideStages] = useState('initial');
  const [rideDetails, setRideDetails] = useState('');
  const [loading, setLoading] = useState(true);
  const [imageloading, setImageLoading] = useState(true);
  const [findRideButton, setFindRideButton] = useState(false);
  const [applyButton, setApplyButton] = useState(false);
  const [paymentButton, setPaymentButton] = useState(false);
  const [startingLatLng, setStartingLatLng] = useState({
    latitude: 42.536457,
    longitude: -70.985786,
  });
  const [endingLatLng, setEndingLatLng] = useState({
    latitude: 24.929873497852476,
    longitude: 67.11593491135285,
  });
  const [rideStatus, setRideStatus] = useState('initial');

  useEffect(() => {
    async function fetchStoredValues() {
      try {
        const storedToken = await AsyncStorage.getItem('token');
        const storedRole = await AsyncStorage.getItem('role');
        const storedUser = await AsyncStorage.getItem('user');

        if (storedToken !== null) {
          setToken(JSON.parse(storedToken));
        }
        if (storedRole !== null) {
          setRole(storedRole);
        }
        if (storedRole !== null) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Error retrieving data from AsyncStorage:', error);
      }
    }

    fetchStoredValues();
  }, []);
  useEffect(() => {
    async function saveValuesToStorage() {
      try {
        await AsyncStorage.setItem('token', JSON.stringify(token));
        await AsyncStorage.setItem('role', role);
        await AsyncStorage.setItem('user', JSON.stringify(user));
      } catch (error) {
        console.error('Error saving data to AsyncStorage:', error);
      }
    }

    saveValuesToStorage();
  }, [token, role, user]);

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
    ],
  );

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);

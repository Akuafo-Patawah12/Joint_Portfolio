'use client'

import { useRef } from 'react'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  Provider,
} from 'react-redux'
import globalReducer from '@/state'

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import createWebStorage from 'redux-persist/lib/storage/createWebStorage'

/* REDUX PERSISTENCE */

// Fallback storage if localStorage is blocked or unavailable
const createNoopStorage = () => {
  return {
    getItem(): Promise<string | null> {
      return Promise.resolve(null)
    },
    setItem(_key: string, value: string): Promise<string> {
      return Promise.resolve(value)
    },
    removeItem(): Promise<void> {
      return Promise.resolve()
    },
  }
}

// Check if localStorage is really usable (not blocked by browser like Facebook)
function isLocalStorageAvailable() {
  try {
    const testKey = '__test__'
    window.localStorage.setItem(testKey, testKey)
    window.localStorage.removeItem(testKey)
    return true
  } catch {
    return false
  }
}

// Safely choose the right storage
const storage =
  typeof window !== 'undefined' && isLocalStorageAvailable()
    ? createWebStorage('local')
    : createNoopStorage()

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['global'],
}

const rootReducer = combineReducers({
  global: globalReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

/* REDUX STORE */
export const makeStore = () => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  })
}

/* REDUX TYPES */
export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

/* PROVIDER */

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore | null>(null)

  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  const persistor = persistStore(storeRef.current)

  return (
    <Provider store={storeRef.current}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  )
}

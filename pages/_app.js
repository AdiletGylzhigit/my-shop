import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/redux/store";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

export default function App({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Toaster />
        <PayPalScriptProvider deferLoading={true}>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </PayPalScriptProvider>
      </PersistGate>
    </Provider>
  );
}

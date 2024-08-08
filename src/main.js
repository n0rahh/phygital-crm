import { createApp } from 'vue';
import App from './App.vue';

import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Styles
import '@mdi/font/css/materialdesignicons.css';

// Router
import router from './router';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark',
    themes: {
      dark: {
        colors: {
          primary: '#1E1E2F',
          secondary: '#282A36',
          tertiary: '#383A59',
        },
      },
    },
  },
});

const app = createApp(App);
app.use(vuetify);
app.use(router);
app.mount('#app');

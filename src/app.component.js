import SideNavigation from './components/side-navigation/side-navigation.component.vue';
import dashboardPage from './components/pages/dashboard-page/dashboard-page.component.vue';

export default {
  name: 'app',
  components: {
    SideNavigation,
    dashboardPage
  },
  computed: {
    isLogIn() {
      this.$router.push('dashboard');
      return this.$store.getters.IS_LOGIN
    }
  },
};
import SideNavigation from './components/side-navigation/side-navigation.component.vue';

export default {
  name: 'app',
  components: {
    SideNavigation
  },
  computed: {
    isLogIn() {
      return this.$store.getters.IS_LOGIN
    }
  },
};



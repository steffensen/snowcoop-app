export default {
  name: 'registerPage',
  data() {
    var passwordVadlidate = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password'));
      } else {
        if (this.formData.passwordConfirm !== "") {
          this.$refs.formData.validateField("passwordConfirm");
        }
        callback();
      }
    };
    var confirmValidate = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password again'));
      } else if (value !== this.formData.password) {
        callback(new Error('Two inputs don\'t match!'));
      } else {
        callback();
      }
    };

    return {
      formData: {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        passwordConfirm: null,
      },
      rules: {
        firstName: [
          { required: true, message: 'Please input first name', trigger: 'blur' },
        ],
        lastName: [
          { required: true, message: 'Please input last name', trigger: 'blur' },
        ],
        email: [
          { required: true, message: 'Please input email address', trigger: 'blur' },
          { type: 'email', message: 'Please input correct email address', trigger: ['blur', 'change'] }
        ],
        password: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          { validator: passwordVadlidate, trigger: 'blur' }
        ],
        passwordConfirm: [
          { required: true, message: 'Please input password', trigger: 'blur' },
          { validator: confirmValidate, trigger: 'blur' }
        ]
      },
      isFormValidated: false,
    };
  },
  methods: {
    updateIsFormValidated() {
      const fields = this.$refs.formData.fields;
      this.isFormValidated = fields.reduce((acc, field) => {
        const valid = (field.isRequired && field.validateState === 'success');
        const noError = (!field.isRequired && field.validateState !== 'error');
        return acc && (valid || noError);
      }, true);
    },
  }
};

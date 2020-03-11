import useForm from '../hooks/form/useForm';

const useSettingsShipping = () =>
  useForm({
    local: {
      active: false,
      orientation: ''
    },
    postOffice: {
      active: false,
      codeAdmin: '',
      password: '',
      codeServices: ''
    }
  });

export default useSettingsShipping;

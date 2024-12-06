import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import style from './ModalUserSettings.module.css';
import { Icon } from '../Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser, fetchUpdateUser } from '../../redux/auth/operations';
import {
  selectAuthIsLoading,
  selectAuthUser,
} from '../../redux/auth/selectors';

import AvatarImg from '../../assets/images/imageUserAvatar.jpg';
import Loader from '../Loader/Loader';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z ]+$/, 'Name can only contain letters')
    .required('Name is required'),
  email: Yup.string()
    .email('Email must be a valid email address')
    .required('Email is required'),
  gender: Yup.string().oneOf(['male', 'female', 'other']),
  weight: Yup.number()
    .min(10, 'Weight should be at least 10 kg')
    .max(250, 'Weight should not exceed 250 kg')
    .required('Weight is required')
    .typeError('Weight must be a number'),
  activeTime: Yup.number()
    .min(0, 'Daily activity time cannot be a negative number')
    .required('Active time is required')
    .typeError('Active time must be a number'),
  dailyNorm: Yup.number()
    .min(0, 'Daily water norm cannot be a negative number')
    .required('Water intake is required')
    .typeError('Daily norm must be a number'),
});

export const ModalUserSettings = ({ toggleModal }) => {
  const isLoading = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    weight: '',
    activeTime: '',
    dailyNorm: '',
  });
  const user = useSelector(selectAuthUser);
  const [selectedGender, setSelectedGender] = useState('');
  const [displayDailyNorm, setDisplayDailyNorm] = useState('');
  const genders = ['female', 'male'];

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      gender: '',
      name: '',
      email: '',
      weight: '',
      activeTime: '',
      dailyNorm: '',
    },
  });

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValue('avatar', event.target.files);
    }
  };

  const avatarFile = watch('avatar');

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const weight = watch('weight');
  const activeTime = watch('activeTime');
  const dailyNorm = watch('dailyNorm');

  useEffect(() => {
    setFormData({
      weight,
      activeTime,
      dailyNorm,
    });
  }, [weight, activeTime, dailyNorm]);

  useEffect(() => {
    if (user) {
      const userData = user.data || user;
      setValue('name', userData.name || '');
      setValue('email', userData.email || '');
      setValue('weight', userData.weight || '');
      setValue('activeTime', userData.activeTime || '');
      setValue('dailyNorm', userData.dailyNorm || '');
      setValue('gender', userData.gender || '');
      setSelectedGender(userData.gender || '');
    }
  }, [user, setValue]);

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append('gender', selectedGender);
      formData.append('name', data.name);
      formData.append('email', data.email);
      formData.append('weight', data.weight);
      formData.append('activeTime', data.activeTime);
      formData.append('dailyNorm', parseFloat(data.dailyNorm));
      if (data.avatar && data.avatar[0]) {
        formData.append('avatar', data.avatar[0]);
      }
      await dispatch(fetchUpdateUser(formData));
      setDisplayDailyNorm(data.dailyNorm);
      await dispatch(fetchCurrentUser());
      toggleModal();
    } catch (error) {
      console.error('Failed to update user:', error);
    }
  };
  const handleInputChange = (e, selectedGender) => {
    const { name, value } = e.target;
    setValue(name, value);

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      const weight = parseFloat(updatedData.weight) || 0;
      const activeTime = parseFloat(updatedData.activeTime) || 0;

      let calculatedDailyNorm = 0;

      if (selectedGender === 'female') {
        calculatedDailyNorm = weight * 0.03 + activeTime * 0.4;
      } else if (selectedGender === 'male') {
        calculatedDailyNorm = weight * 0.04 + activeTime * 0.6;
      }
      const roundedDailyNorm = calculatedDailyNorm.toFixed(1);

      setValue('dailyNorm', roundedDailyNorm);
      setValue('gender', selectedGender);

      setDisplayDailyNorm(roundedDailyNorm);

      return { ...updatedData, dailyNorm: roundedDailyNorm };
    });
  };
  return (
    <>
      {isLoading && <Loader />}
      <div className={style.wrapper}>
        <h2 className={style.title}>Setting</h2>
        {avatarFile && avatarFile[0] ? (
          <img
            src={URL.createObjectURL(avatarFile[0])}
            alt="User's avatar"
            className={style.user_avatar}
          />
        ) : (
          <img
            src={user.avatar || AvatarImg}
            alt="User's avatar"
            className={style.user_avatar}
          />
        )}
        <div className={style.upload_photo}>
          <label className={style.upload_label}>
            <Icon id="icon-upload" size={18} className={style.icon_upload} />
            Upload a photo
            <input
              type="file"
              onChange={handleFileChange}
              className={style.file_input}
            />
          </label>
        </div>
        <div className={style.scroll_container}>
          <form onSubmit={handleSubmit(onSubmit)} className={style.form}>
            <div className={style.form_group_wrapper}>
              <div className={style.form_group}>
                <div className={style.gender_identity_container}>
                  <label className={style.label_title}>
                    Your gender identity:
                  </label>
                  <div className={style.checkbox_wrapper}>
                    {genders.map((gender, index) => (
                      <label key={index} className={style.label_text}>
                        <input
                          className={style.radioBtn}
                          type="radio"
                          name="gender"
                          value={gender}
                          {...register('gender')}
                          checked={selectedGender === gender}
                          onChange={(e) => {
                            setSelectedGender(e.target.value);
                            handleInputChange(e, e.target.value);
                          }}
                        />
                        <div
                          className={`${style.custom_checkbox} ${
                            selectedGender === gender
                              ? style.active_checkbox
                              : ''
                          }`}
                        >
                          <span></span>
                        </div>
                        {gender === 'female' ? 'Woman' : 'Man'}
                      </label>
                    ))}
                  </div>
                  {errors.gender && (
                    <p className={style.error_message}>
                      {errors.gender.message}
                    </p>
                  )}
                </div>
                <div className={style.name_email_wrapper}>
                  <div className={style.name_email_group}>
                    <label className={style.label_title}>Your name:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className={`${style.name_email_input} ${
                        errors.name ? style.error_input : ''
                      }`}
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className={style.error_message}>
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className={style.name_email_group}>
                    <label className={style.label_title}>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      {...register('email')}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className={`${style.name_email_input} ${
                        errors.email ? style.error_input : ''
                      }`}
                    />
                    {errors.email && (
                      <p className={style.error_message}>
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className={style.water_norm_group}>
                  <label className={style.label_title}>My daily norma:</label>
                  <div className={style.water_norm_container}>
                    <p className={style.water_norm_title}>
                      For woman:{' '}
                      <span className={style.water_norm_span}>
                        V=(M*0,03) + (T*0,4)
                      </span>{' '}
                    </p>
                    <p className={style.water_norm_title}>
                      For man:{' '}
                      <span className={style.water_norm_span}>
                        V=(M*0,04) + (T*0,6)
                      </span>{' '}
                    </p>
                  </div>
                  <p className={style.water_norm_description}>
                    <span className={style.water_norm_description_span}>*</span>{' '}
                    V is the volume of the water norm in liters per day, M is
                    your body weight, T is the time of active sports, or another
                    type of activity commensurate in terms of loads (in the
                    absence of these, you must set 0)
                  </p>
                  <p className={style.water_norm_calling}>
                    <Icon
                      size={18}
                      id="icon-calling"
                      className={style.icon_calling}
                    />{' '}
                    Active time in hours
                  </p>
                </div>
              </div>
              <div className={style.form_group}>
                <div className={style.weight_and_time_wrapper}>
                  <div className={style.weight_and_time_group}>
                    <label className={style.label_text}>
                      Your weight in kilograms:
                    </label>
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      {...register('weight')}
                      onChange={(e) => handleInputChange(e, selectedGender)}
                      className={`${style.input_weight} ${
                        errors.weight ? style.error_input : ''
                      }`}
                      min="0"
                    />
                    {errors.weight && (
                      <p className={style.error_message}>
                        {errors.weight.message}
                      </p>
                    )}
                  </div>
                  <div className={style.weight_and_time_group}>
                    <label className={style.label_text}>
                      The time of active participation in sports:
                    </label>
                    <input
                      type="number"
                      name="activeTime"
                      value={formData.activeTime}
                      {...register('activeTime')}
                      onChange={(e) => handleInputChange(e, selectedGender)}
                      className={`${style.input_active_time} ${
                        errors.activeTime ? style.error_input : ''
                      }`}
                      min="0"
                    />
                    {errors.activeTime && (
                      <p className={style.error_message}>
                        {errors.activeTime.message}
                      </p>
                    )}
                  </div>
                </div>
                <div className={style.water_intake_container}>
                  <div className={style.water_requirement_group}>
                    <p className={style.label_text}>
                      The required amount of water in liters per day:
                    </p>
                    <p className={style.water_amount}>
                      {displayDailyNorm || user.dailyNorm}L
                    </p>
                  </div>
                  <div className={style.water_intake_input_group}>
                    <label className={style.label_title}>
                      Write down how much water you will drink:
                    </label>
                    <input
                      name="dailyNorm"
                      value={formData.dailyNorm}
                      {...register('dailyNorm')}
                      onChange={(e) => {
                        const value = e.target.value;
                        console.log(value);
                        setFormData({ ...formData, dailyNorm: value });
                        setDisplayDailyNorm(value);
                      }}
                      className={`${style.input_drunk_water} ${
                        errors.dailyNorm ? style.error_input : ''
                      }`}
                    />
                    {errors.dailyNorm && (
                      <p className={style.error_message}>
                        {errors.dailyNorm.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <button type="submit" className={style.btn_submit}>
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
